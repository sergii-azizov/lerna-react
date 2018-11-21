import { Component, Fragment } from "react";
import { string, node } from 'prop-types';
import $script from "scriptjs";

import { withRender } from '../with-render'

export const lazy = config => (name, params = {}) => {
    class Lazy extends Component {
        state = {};

        url = `${config.server}/${name}`;

        componentDidMount() {
            this.notify('Mounted');
            this.loadScript();
        };

        changeState = () => {
            this.setState({ component: window[name] && window[name].default }, () => {
                this.notify('Loaded', this.url);
            });
        };

        notify(state, url = '') {
            console.info(`[Module][${name}][${state}]`, url);
        }

        loadScript() {
            if (!window[name]) {
                this.setState({ component: config.loadingComponent });

                $script.get(`${this.url}.js`, () => this.changeState(this.url));
                $script.get(`${this.url}.css`, () => this.changeState(this.url));

                return;
            }

            this.changeState('FromCache');
        }

        componentWillUnmount() {
            if (params.clearOnUnMount) {
                document.querySelector(`script[src="${this.url}"]`).remove();
                document.querySelector(`style[href="${this.url}"]`).remove();

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
