import { Component, Fragment } from "react";
import { string, node } from 'prop-types';
import $script from "scriptjs";

import { withRender } from '../with-render'

export const lazy = config => (name, params = {}) => {
    class Lazy extends Component {
        state = {};

        componentDidMount() {
            this.loadScript();
        };

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
                const url = `${config.server}/${name}.js`;

                this.setState({ component: config.loadingComponent });

                return $script(url, () => this.changeState(url));
            }

            this.changeState('FromCache');
        }

        componentWillUnmount() {
            if (params.clearOnUnMount) {
                window[name] = null;
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
