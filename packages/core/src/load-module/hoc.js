import React, { Component, Fragment } from "react";
import { bool, string, node } from 'prop-types';
import { get, set, isNumber } from 'lodash';

import { STATIC_SERVER } from "./constants.js";
import { withRender } from '../with-render'

const head = document.getElementsByTagName('head')[0];

export const loadModule = (config = {}) => (componentName, params = {}) => {
    const server = config.server || STATIC_SERVER;
    const destroyOnUnMount = config.destroyOnUnMount || false;
    const loadingComponent = config.loadingComponent || null;

    const destroyOnUnmount = destroyOnUnMount || params.destroyOnUnMount || true;
    const scriptURL = `${server}/js/${componentName}.js`;
    const styleURL = `${server}/css/${componentName}.css`;
    const META_INF = "$LOADED_COMPONENTS";

    class LoadModule extends Component {
        state = {
            styleLoaded: false,
            scriptLoaded: false
        };

        componentDidMount() {
            this.loadModule();
        };

        shouldComponentUpdate(nextProps, nextState) {
            if (nextState.LoadedComponent) {
                return true;
            }

            const isModuleLoaded = nextState.styleLoaded && nextState.scriptLoaded;
            const isLoadedStatusChanged = this.state.styleLoaded !== nextState.styleLoaded
                || this.state.scriptLoaded !== nextState.scriptLoaded;

            if (isLoadedStatusChanged && isModuleLoaded) {
                this.mountedLoadedComponent();
                return true;
            }

            return false;
        }

        loadFile({ url, type, onLoad }) {
            const el = document.createElement(type);

            if (type === 'script') {
                el.async = true;
                el.src = url;
            }

            el.onload = onLoad;
            el.id = `@${componentName}-${type}`;

            if (type === 'link') {
                el.rel = 'stylesheet';
                el.type = 'text/css';
                el.href = url;
            }

            head.insertBefore(el, head.lastChild)
        }

        increasedLoadedComponents() {
            const loadedComponents = get(window, [META_INF, componentName], 0);

            set(window, [META_INF, componentName], loadedComponents + 1);
        }

        decreasedLoadedComponents() {
            const loadedComponents = get(window, [META_INF, componentName]);

            set(window, [META_INF, componentName], loadedComponents - 1);
        }

        mountedLoadedComponent = (state) => {
            const isComponentLoaded = window[componentName].default;

            if (isComponentLoaded) {
                this.increasedLoadedComponents();
                this.notify(state || 'Loaded');
                this.setState({ LoadedComponent: window[componentName].default });
            } else {
                setTimeout(() => this.mountedLoadedComponent('FromCache'))
            }
        };

        notify(state) {
            console.info(`[Module][${componentName}][${state}][Total count: ${window[META_INF][componentName]}]`);
        }

        loadModule() {
            const isComponentLoaded = window[componentName];

            if (!isComponentLoaded) {
                if (loadingComponent) {
                    this.setState({ LoadedComponent: loadingComponent });
                }

                window[componentName] = 'Loading';

                this.loadFile({ url: styleURL, type: 'link', onLoad: () => this.setState({ styleLoaded: true }) });
                this.loadFile({ url: scriptURL, type: 'script', onLoad: () => this.setState({ scriptLoaded: true }) });

                return;
            }

            this.mountedLoadedComponent('FromCache');
        }

        componentWillUnmount() {
            this.decreasedLoadedComponents();
            const hasLoadedComponents = window[META_INF][componentName] === 0;
            const canBeDestroyed = destroyOnUnmount && hasLoadedComponents;

            if (canBeDestroyed) {
                document.getElementById(`@${componentName}-script`).remove();
                document.getElementById(`@${componentName}-link`).remove();

                delete window[componentName];

                this.notify('Cleared');
            }
        }

        render() {
            const { LoadedComponent } = this.state;

            return (
                <Fragment>
                    {LoadedComponent && <LoadedComponent {...this.props} />}
                </Fragment>
            );
        }
    }

    return withRender()(LoadModule);
};
