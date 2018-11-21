import { Component, Fragment } from "react";
import { string, node } from 'prop-types';

import { withRender } from '../with-render'

const head = document.getElementsByTagName('head')[0];

export const lazy = config => (name, params = {}) => {
    class Lazy extends Component {
        state = {};

        src = `${config.server}/js/${name}.js`;

        href = `${config.server}/css/${name}.css`;

        componentDidMount() {
            this.notify('Mounted');
            this.loadScript();
        };

        loadChunk({ path, type = 'script', fn }) {
            const chunk = document.createElement(type);
            console.log("==> ", chunk);


            chunk.onload = fn;
            chunk.async = type !== 'link' && 1;
            chunk[type === 'link' ? 'href' : 'src'] = path;
            head.insertBefore(chunk, head.lastChild)
        }

        changeState = url => {
            this.setState({ component: window[name] && window[name].default }, () => {
                this.notify('Loaded', url);
            });
        };

        notify(state, url = '') {
            console.info(`[Module][${name}][${state}]`, url);
        }

        loadScript() {
            if (!window[name]) {
                this.setState({ component: config.loadingComponent });

                this.loadChunk({ path: this.href, type: 'link', fn: () => this.notify('Loaded', this.href) });
                this.loadChunk({ path: this.src, fn: () => this.changeState(this.src) });

                return;
            }

            this.changeState('FromCache');
        }

        componentWillUnmount() {
            if (params.clearOnUnMount) {
                document.querySelector(`script[src="${this.src}"]`).remove();
                document.querySelector(`link[href="${this.href}"]`).remove();

                delete window[name];

                this.notify('Cleared');
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
