import React, { Component, Fragment } from "react";
import { bool, string, node } from 'prop-types';
import { get, set, isNumber } from 'lodash';

import { APP, COMPONENTS_COUNT } from '../../../../configs/namespace.config';
import { store, withRender, createReducer } from '../index';
import { STATIC_SERVER } from "./constants.js";

const head = document.getElementsByTagName('head')[0];

export const loadModule = (chunkName, { server = STATIC_SERVER, destroyOnUnmount = false, loadingComponent = null, componentName = 'default', reducerName = 'reducers' } = {}) => {
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
            el.id = `__${chunkName}-${type}__`;

            if (type === 'link') {
                el.rel = 'stylesheet';
                el.type = 'text/css';
                el.href = url;
            }

            head.insertBefore(el, head.lastChild)
        }

        increasedLoadedComponents() {
            const loadedComponents = get(window[APP], [COMPONENTS_COUNT, chunkName], 0);

            set(window[APP], [COMPONENTS_COUNT, chunkName], loadedComponents + 1);
        }

        decreasedLoadedComponents() {
            const loadedComponents = get(window[APP], [COMPONENTS_COUNT, chunkName]);

            set(window[APP], [COMPONENTS_COUNT, chunkName], loadedComponents - 1);
        }

        injectAsyncReducer() {
            const asyncReducers = get(window[APP], [chunkName, reducerName]);

            if (asyncReducers && !get(store, ['asyncReducers', chunkName])) {
                set(store, ['asyncReducers', chunkName], asyncReducers);
                store.replaceReducer(createReducer(store.asyncReducers));
            }
        }

        mountedLoadedComponent = (state) => {
            const LoadedComponent = get(window[APP], [chunkName, componentName]);

            if (LoadedComponent) {
                this.increasedLoadedComponents();
                this.injectAsyncReducer();
                this.setState({ LoadedComponent });
                this.notify(state || 'Loaded');
            } else {
                setTimeout(() => this.mountedLoadedComponent('FromCache'))
            }
        };

        notify(state) {
            console.info(`[Module][${chunkName}][${state}][Total count: ${window[APP][COMPONENTS_COUNT][chunkName]}]`);
        }

        loadModule() {
            const isComponentLoaded = window[APP][chunkName];

            if (!isComponentLoaded) {
                if (loadingComponent) {
                    this.setState({ LoadedComponent: loadingComponent });
                }

                window[APP][chunkName] = 'Loading';

                this.loadFile({ url: `${server}/css/${chunkName}.css`, type: 'link', onLoad: () => this.setState({ styleLoaded: true }) });
                this.loadFile({ url: `${server}/js/${chunkName}.js`, type: 'script', onLoad: () => this.setState({ scriptLoaded: true }) });

                return;
            }

            this.mountedLoadedComponent('FromCache');
        }

        componentWillUnmount() {
            this.decreasedLoadedComponents();
            const hasLoadedComponents = window[APP][COMPONENTS_COUNT][chunkName] === 0;
            const canBeDestroyed = destroyOnUnmount && hasLoadedComponents;

            if (canBeDestroyed) {
                document.getElementById(`__${chunkName}-script__`).remove();
                document.getElementById(`__${chunkName}-link__`).remove();

                delete store.asyncReducers[chunkName];
                delete window[APP][chunkName];

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
