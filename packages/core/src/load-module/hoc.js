import React, { Component, Fragment } from "react";
import { bool, string, node } from 'prop-types';
import { get, set, isNumber } from 'lodash';
import { store } from '../store';
import createReducer from '../store/reducers'

import { STATIC_SERVER } from "./constants.js";
import { withRender } from '../with-render'

const head = document.getElementsByTagName('head')[0];

export const loadModule = (chunkName, { server = STATIC_SERVER, destroyOnUnmount = false, loadingComponent = null, componentName = 'default', reducerName = 'reducers' } = {}) => {
    const scriptURL = `${server}/js/${chunkName}.js`;
    const styleURL = `${server}/css/${chunkName}.css`;
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
            el.id = `@${chunkName}-${type}`;

            if (type === 'link') {
                el.rel = 'stylesheet';
                el.type = 'text/css';
                el.href = url;
            }

            head.insertBefore(el, head.lastChild)
        }

        increasedLoadedComponents() {
            const loadedComponents = get(window, [META_INF, chunkName], 0);

            set(window, [META_INF, chunkName], loadedComponents + 1);
        }

        decreasedLoadedComponents() {
            const loadedComponents = get(window, [META_INF, chunkName]);

            set(window, [META_INF, chunkName], loadedComponents - 1);
        }

        mountedLoadedComponent = (state) => {
            const LoadedComponent = get(window, [chunkName, componentName]);
            const asyncReducers = get(window, [chunkName, reducerName]);

            if (LoadedComponent) {
                this.increasedLoadedComponents();
                this.notify(state || 'Loaded');
                if (asyncReducers && !get(store, ['asyncReducers', chunkName])) {
                    set(store, ['asyncReducers', chunkName], asyncReducers);
                    store.replaceReducer(createReducer(store.asyncReducers));
                }
                this.setState({ LoadedComponent });
            } else {
                setTimeout(() => this.mountedLoadedComponent('FromCache'))
            }
        };

        notify(state) {
            console.info(`[Module][${chunkName}][${state}][Total count: ${window[META_INF][chunkName]}]`);
        }

        loadModule() {
            const isComponentLoaded = window[chunkName];

            if (!isComponentLoaded) {
                if (loadingComponent) {
                    this.setState({ LoadedComponent: loadingComponent });
                }

                window[chunkName] = 'Loading';

                this.loadFile({ url: styleURL, type: 'link', onLoad: () => this.setState({ styleLoaded: true }) });
                this.loadFile({ url: scriptURL, type: 'script', onLoad: () => this.setState({ scriptLoaded: true }) });

                return;
            }

            this.mountedLoadedComponent('FromCache');
        }

        componentWillUnmount() {
            this.decreasedLoadedComponents();
            const hasLoadedComponents = window[META_INF][chunkName] === 0;
            const canBeDestroyed = destroyOnUnmount && hasLoadedComponents;

            if (canBeDestroyed) {
                document.getElementById(`@${chunkName}-script`).remove();
                document.getElementById(`@${chunkName}-link`).remove();

                delete store.asyncReducers[chunkName];
                delete window[chunkName];

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
