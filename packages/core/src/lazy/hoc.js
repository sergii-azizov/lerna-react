import React, { Component, Fragment } from "react";
import { string, node } from 'prop-types';
import { get, set, isNumber } from 'lodash';

import { withRender } from '../with-render'

const head = document.getElementsByTagName('head')[0];

export const lazy = config => (name, params = { clearOnUnMount: true }) => {
    class Lazy extends Component {
        state = {
            styleLoaded: false,
            scriptLoaded: false
        };

        src = `${config.server}/js/${name}.js`;

        href = `${config.server}/css/${name}.css`;

        componentDidMount() {
            this.loadScript();
        };

        loadChunk({ path, type = 'script', fn }) {
            const chunk = document.createElement(type);

            chunk.onload = fn;
            chunk.async = type !== 'link' && 1;
            chunk[type === 'link' ? 'href' : 'src'] = path;

            chunk[type === 'link' ? 'href' : 'src'] = path;

            chunk.id   = `@${name}-${type}`;

            if(type === 'link') {
                const link = chunk;

                link.rel  = 'stylesheet';
                link.type = 'text/css';
            }

            head.insertBefore(chunk, head.lastChild)
        }

        increaseComponentsCount() {
            const componentsCount = get(window, ['$COMPONENTS_COUNT', name]);

            set(window, ['$COMPONENTS_COUNT', name], componentsCount ? componentsCount + 1 : 1);
        }

        decreaseComponentsCount() {
            const componentsCount = get(window, ['$COMPONENTS_COUNT', name]);

            set(window, ['$COMPONENTS_COUNT', name], componentsCount - 1);
        }

        mountLoadedComponent = (state) => {
            if (window[name].default) {
                this.increaseComponentsCount();
                this.notify(state || 'Loaded');
                this.setState({ component: window[name].default });
            } else {
                setTimeout(() => this.mountLoadedComponent('Loading'))
            }
        };

        notify(state) {
            console.info(`[Module][${name}][${state}][COUNT: ${window.$COMPONENTS_COUNT[name]}]`);
        }

        shouldComponentUpdate(nextProps, nextState) {
            if (nextState.component) {
                return true;
            }

            const isModuleLoaded = nextState.styleLoaded && nextState.scriptLoaded;
            const isLoadedStatusChanged = this.state.styleLoaded !== nextState.styleLoaded
                || this.state.scriptLoaded !== nextState.scriptLoaded;

            if (isLoadedStatusChanged && isModuleLoaded) {
                this.mountLoadedComponent();
                return true;
            }

            return false;
        }

        loadScript() {
            if (!window[name]) {
                if (config.loadingComponent) {
                    this.setState({ component: config.loadingComponent });
                }

                window[name] = 'Loading';

                this.loadChunk({ path: this.href, type: 'link', fn: () => this.setState({ styleLoaded: true  }) });
                this.loadChunk({ path: this.src, fn: () => this.setState({ scriptLoaded: true  }) });

                return;
            }
            this.mountLoadedComponent('FromCache');
        }

        componentWillUnmount() {
            if (params.clearOnUnMount ) {

                this.decreaseComponentsCount();

                if (window.$COMPONENTS_COUNT[name] === 0) {
                    document.getElementById(`@${name}-script`).remove();
                    document.getElementById(`@${name}-link`).remove();

                    delete window[name];

                    this.notify('Cleared');
                }

            }
        }

        render() {
            const LazyLoadedComponent = this.state.component;

            return (
                <Fragment>
                    {LazyLoadedComponent && <LazyLoadedComponent {...this.props} />}
                </Fragment>
            );
        }
    }

    return withRender()(Lazy);
};

lazy.propTypes = {
    server: string.isRequired,
    loadingComponent: node
};

lazy.defaultProps = {
    loadingComponent: null
};
