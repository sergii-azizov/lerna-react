import { Component, Fragment } from "react";
import { string } from 'prop-types';
import $script from "scriptjs";

import { withRender } from '../with-render'

export const lazy = config => name => {
    class Lazy extends Component {
        state = {};

        componentDidMount() {
            this.loadScript();
        };

        changeState = url => {
            this.setState({ component: window[name] && window[name].default }, () => {
                this.notify(url);
            });
        };

        notify(url = '') {
            console.info(`[Module][${name}][${url ? 'Loaded' : 'FromCache'}]`, url);
        }

        loadScript() {
            if (!window[name]) {
                const url = `${config.server}/${name}.js`;

                this.setState({ component: config.loadingComponent });

                return $script(url, () => this.changeState(url));
            }

            this.changeState();
        }

        componentWillUnmount() {
            //window[this.componentName] = null;
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
