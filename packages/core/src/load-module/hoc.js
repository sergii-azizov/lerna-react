import React, { Component, Fragment } from "react";
import { bool, string, node } from 'prop-types';
import { get, set } from 'lodash';

import { APP, COMPONENTS_COUNT } from '../../../../configs/namespace.config';
import { store, withRender, createReducer } from '../index';
import { STATIC_SERVER } from "./constants.js";

const head = document.getElementsByTagName('head')[0];
const TOTAL = 'total';

export const loadModule = (chunkName, { server = STATIC_SERVER, destroyOnUnmount = true, loadingComponent = null, componentName = 'default', reducerName = 'rootReducers' } = {}) => {
    class LoadModule extends Component {
        PATHS = {
            SCOPE: window[APP],
            NAME: [chunkName, componentName],
            COUNT: [COMPONENTS_COUNT, chunkName],
            REDUCER_CACHE: ['asyncReducers', chunkName],
            REDUCER: [chunkName, reducerName]
        };

        state = {
            styleLoaded: false,
            scriptLoaded: false,
            LoadedComponent: this.props.loadingComponent
        };

        componentDidMount() {
            this.loadModule();
        };

        shouldComponentUpdate(nextProps, { styleLoaded, scriptLoaded, LoadedComponent }) {
            const isModuleLoaded = styleLoaded && scriptLoaded;
            const isLoadedComponentMounted = LoadedComponent === get(this.PATHS.SCOPE, this.PATHS.NAME);
            const updatedLoadedComponent = this.state.LoadedComponent !== LoadedComponent;

            if (isModuleLoaded && !isLoadedComponentMounted) {
                this.mountLoadedComponent();
                return true;
            }

            if (isModuleLoaded && updatedLoadedComponent) {
                return true
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

        getLoadedComponentsCount(name) {
            return get(this.PATHS.SCOPE, this.PATHS.COUNT.concat([name]), 0);
        }

        increasedLoadedComponents() {
            set(this.PATHS.SCOPE, this.PATHS.COUNT, {
                ...get(this.PATHS.SCOPE, this.PATHS.COUNT),
                [componentName]: this.getLoadedComponentsCount(componentName) + 1,
                [TOTAL]: this.getLoadedComponentsCount(TOTAL) + 1
            });
        }

        decreasedLoadedComponents() {
            set(this.PATHS.SCOPE, this.PATHS.COUNT, {
                ...get(this.PATHS.SCOPE, this.PATHS.COUNT),
                [componentName]: this.getLoadedComponentsCount(componentName) - 1,
                [TOTAL]: this.getLoadedComponentsCount(TOTAL) - 1
            });
        }

        injectAsyncReducer() {
            const asyncReducers = get(this.PATHS.SCOPE, this.PATHS.REDUCER);

            if (asyncReducers && !get(store, this.PATHS.REDUCER_CACHE)) {
                set(store, this.PATHS.REDUCER_CACHE, asyncReducers);
                store.replaceReducer(createReducer(store.asyncReducers));
            }
        }

        mountLoadedComponent = (fromCache) => {
            const LoadedComponent = get(this.PATHS.SCOPE, this.PATHS.NAME);

            if (fromCache) {
                this.setState({ styleLoaded: true, scriptLoaded: true, LoadedComponent });
            } else if (LoadedComponent) {
                this.resolve();
                this.injectAsyncReducer();
                this.setState({ LoadedComponent });
            }

            this.increasedLoadedComponents();
            this.notify(fromCache || 'Loaded');
        };

        notify(state) {
            console.groupCollapsed('[Module][%s][%s][Component][%s]', chunkName, state, componentName);
            console.log('[The total count imports of the components from the chunk %d on the screen]', this.getLoadedComponentsCount());
            console.groupEnd();
        }

        loadModule() {
            const isModuleLoaded = this.PATHS.SCOPE[chunkName];

            if (!isModuleLoaded) {
                this.PATHS.SCOPE[chunkName] = new Promise((resolve, reject) => {
                    this.resolve = resolve;
                });

                this.loadFile({ url: `${server}/css/${chunkName}.css`, type: 'link', onLoad: () => this.setState({ styleLoaded: true }) });
                this.loadFile({ url: `${server}/js/${chunkName}.js`, type: 'script', onLoad: () => this.setState({ scriptLoaded: true }) });
            } else {
                const isLoading = this.PATHS.SCOPE[chunkName].then;

                if (isLoading) {
                    this.PATHS.SCOPE[chunkName].then(() => this.mountLoadedComponent('From Cache'));
                } else {
                    this.mountLoadedComponent('From Cache');
                }
            }
        }

        componentWillUnmount() {
            this.decreasedLoadedComponents();
            const hasLoadedComponents = this.getLoadedComponentsCount(TOTAL) !== 0;
            const canBeDestroyed = destroyOnUnmount && !hasLoadedComponents;

            if (canBeDestroyed) {
                document.getElementById(`__${chunkName}-script__`).remove();
                document.getElementById(`__${chunkName}-link__`).remove();

                delete this.PATHS.SCOPE[COMPONENTS_COUNT][chunkName];
                delete this.PATHS.SCOPE[chunkName];
                delete store.asyncReducers[chunkName];

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

    LoadModule.defaultProps = {
        loadingComponent: loadingComponent || (() => (<div>loading</div>))
    };

    return withRender()(LoadModule);
};
