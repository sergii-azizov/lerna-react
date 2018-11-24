import React, { Component, Fragment } from "react";
import { bool, string, node } from 'prop-types';
import { get, set, isNumber } from 'lodash';

import { withRender } from '../with-render'

const head = document.getElementsByTagName('head')[0];

export const loadModule = config => (name, params = {}) => {
    const destroyOnUnmount = config.destroyOnUnMount || params.destroyOnUnMount || false;
    const scriptURL = `${config.server}/js/${name}.js`;
    const styleURL = `${config.server}/css/${name}.css`;
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
            if (nextState.component) {
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
            el.id = `@${name}-${type}`;

            if (type === 'link') {
                el.rel = 'stylesheet';
                el.type = 'text/css';
                el.href = url;
            }

            head.insertBefore(el, head.lastChild)
        }

        increasedLoadedComponents() {
            const loadedComponents = get(window, [META_INF, name], 0);

            set(window, [META_INF, name], loadedComponents + 1);
        }

        decreasedLoadedComponents() {
            const loadedComponents = get(window, [META_INF, name]);

            set(window, [META_INF, name], loadedComponents - 1);
        }

        mountedLoadedComponent = (state) => {
            const isComponentLoaded = window[name].default;

            if (isComponentLoaded) {
                this.increasedLoadedComponents();
                this.notify(state || 'Loaded');
                this.setState({ LoadedComponent: window[name].default });
            } else {
                setTimeout(() => this.mountedLoadedComponent('Loading'))
            }
        };

        notify(state) {
            console.info(`[Module][${name}][${state}][Total count: ${window[META_INF][name]}]`);
        }

        loadModule() {
            const isComponentLoaded = window[name];

            if (!isComponentLoaded) {
                if (config.loadingComponent) {
                    this.setState({ LoadedComponent: config.loadingComponent });
                }

                window[name] = 'Loading';

                this.loadFile({ url: styleURL, type: 'link', onLoad: () => this.setState({ styleLoaded: true }) });
                this.loadFile({ url: scriptURL, type: 'script', onLoad: () => this.setState({ scriptLoaded: true }) });

                return;
            }

            this.mountedLoadedComponent('FromCache');
        }

        componentWillUnmount() {
            this.decreasedLoadedComponents();
            const hasLoadedComponents = window[META_INF][name] === 0;
            const canBeDestroyed = destroyOnUnmount && hasLoadedComponents;

            if (canBeDestroyed) {
                document.getElementById(`@${name}-script`).remove();
                document.getElementById(`@${name}-link`).remove();

                delete window[name];

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

loadModule.propTypes = {
    server: string.isRequired,
    destroyOnUnMount: bool,
    loadingComponent: node
};

loadModule.defaultProps = {
    destroyOnUnMount: false,
    loadingComponent: null
};
