import React, { PureComponent, Fragment } from "react";
import { bool, string, node } from 'prop-types';
import { get, set, isEqual } from 'lodash';

import { APP, COMPONENTS_COUNT } from '../../../../configs/namespace.config';
import { store, withRender, createReducer } from '../index';
import { STATIC_SERVER } from "./constants.js";

const head = document.getElementsByTagName('head')[0];
const TOTAL = 'total';
const FROM_CACHE = 'From Cache';
const LOADED = 'Loaded';
const ASYNC_REDUCERS = 'asyncReducers';

export const loadModule = (chunkName, { server = STATIC_SERVER, destroyOnUnmount = true, loadingComponent = null, componentName = 'default', reducerName = 'rootReducers' } = {}) => {

    if (!chunkName) return () => null;

    class LoadModule extends PureComponent {
        PATHS = {
            APP: window[APP],
            NAME: [chunkName, componentName],
            COUNT: [COMPONENTS_COUNT, chunkName],
            REDUCER_CACHE: [ASYNC_REDUCERS, chunkName],
            REDUCER: [chunkName, reducerName]
        };

        constructor(props) {
            super(props);
            this.init()
        }

        init() {
            const LoadedComponent = this.getLoadedComponent() || loadingComponent;
            const isModuleLoading = get(this.PATHS.APP, [chunkName, 'then']);

            this.state = { LoadedComponent };

            if (isModuleLoading) {
                this.PATHS.APP[chunkName].then(() => {
                    this.setState({ LoadedComponent: this.getLoadedComponent() });
                    this.mountLoadedComponent(FROM_CACHE);
                });
            } else if (LoadedComponent) {
                this.mountLoadedComponent(FROM_CACHE);
            } else if (!LoadedComponent) {
                this.loadModule();
            }
        }

        getLoadedComponent() {
            return get(this.PATHS.APP, this.PATHS.NAME);
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

            head.insertBefore(el, head.lastChild);
        }

        getLoadedComponentsCount(name) {
            return get(this.PATHS.APP, this.PATHS.COUNT.concat([name]), 0);
        }

        increasedLoadedComponents() {
            set(this.PATHS.APP, this.PATHS.COUNT, {
                ...get(this.PATHS.APP, this.PATHS.COUNT),
                [componentName]: this.getLoadedComponentsCount(componentName) + 1,
                [TOTAL]: this.getLoadedComponentsCount(TOTAL) + 1
            });
        }

        decreasedLoadedComponents() {
            set(this.PATHS.APP, this.PATHS.COUNT, {
                ...get(this.PATHS.APP, this.PATHS.COUNT),
                [componentName]: this.getLoadedComponentsCount(componentName) - 1,
                [TOTAL]: this.getLoadedComponentsCount(TOTAL) - 1
            });
        }

        injectAsyncReducer() {
            const asyncReducers = get(this.PATHS.APP, this.PATHS.REDUCER);

            if (asyncReducers && !get(store, this.PATHS.REDUCER_CACHE)) {
                set(store, this.PATHS.REDUCER_CACHE, asyncReducers);
                store.replaceReducer(createReducer(store[ASYNC_REDUCERS]));
            }
        }

        mountLoadedComponent = (fromCache) => {
            this.injectAsyncReducer();

            if(!fromCache) {
                this.resolve && this.resolve();
                this.setState({ LoadedComponent: this.getLoadedComponent() });
            }

            this.increasedLoadedComponents();
            this.notify(fromCache || LOADED);
        };

        notify(state) {
            try {
                if (get(JSON.parse(window.localStorage.getItem(APP)), 'DEBUG')) {
                    console.groupCollapsed('[Module][%s][%s][Component][%s]', chunkName, state, componentName);
                    console.log('[The total count imports of the components from the chunk %d on the screen]', this.getLoadedComponentsCount(componentName));
                    console.groupEnd();
                }
            } catch (e) {
                console.error(e);
            }
        }

        loadModule() {
            const isModuleLoaded = this.PATHS.APP[chunkName];

            if (!isModuleLoaded) {
                this.PATHS.APP[chunkName] = new Promise((resolve, reject) => {
                    this.resolve = resolve;
                });

                this.loadFile({ type: 'link', url: `${server}/css/${chunkName}.css`});
                this.loadFile({ type: 'script', url: `${server}/js/${chunkName}.js`, onLoad: () => {
                    this.mountLoadedComponent();
                }});
            }
        }

        componentWillUnmount() {
            this.decreasedLoadedComponents();
            const hasLoadedComponents = this.getLoadedComponentsCount(TOTAL) !== 0;
            const canBeDestroyed = destroyOnUnmount && !hasLoadedComponents;

            if (canBeDestroyed) {
                const scriptEl = document.getElementById(`__${chunkName}-script__`);
                const linkEl = document.getElementById(`__${chunkName}-link__`);

                scriptEl && scriptEl.remove();
                linkEl && linkEl.remove();

                delete this.PATHS.APP[COMPONENTS_COUNT][chunkName];
                delete this.PATHS.APP[chunkName];

                if (store[ASYNC_REDUCERS]) {
                    delete store[ASYNC_REDUCERS][chunkName];
                }

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
