import { Component, Fragment } from "react";
import $script from "scriptjs";

import { withRender } from '../with-render'

export const lazy = config => (name, context) => {
    class Lazy extends Component {
        state = {
            loaded: false,
            loading: false,
            error: null,
            component: null
        };

        componentDidMount() {
            this.componentName = `${config.context || context}.${name}`;

            this.loadScript(this.componentName);
        };

        changeState = () => {
            const component =  window[this.componentName] && window[this.componentName].default;

            this.setState({
                loaded: true,
                loading: false,
                component
            });
        };

        loadScript(name) {
            if(!window[this.componentName]) {
                const url = `${config.server}/v${config.version}.${name}.js`;
                this.setState({
                    loading: true,
                    component: config.loadingComponent
                });

                console.info(`[Module][${name}][Loaded]`, url);

                return $script(`${config.server}/v${config.version}.${name}.js`, this.changeState);
            }

            console.info(`[Module][${name}][FromCache]`);

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
