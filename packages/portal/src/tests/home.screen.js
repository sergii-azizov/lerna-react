import { Fragment,Suspense, PureComponent, lazy } from "react";
import { PACKAGE_NAMES, injectAsyncReducer } from "core";
import { set } from "lodash";




export default class HomeScreen extends PureComponent {
    state={};
    componentWillMount() {
        import(/* webpackChunkName: 'components' */ `../../../components/src/index.js`).then((components) => {

            injectAsyncReducer({ packageName: 'components', reducer: components.rootReducer });

            this.setState({ components });
        });
    }
    render() {
        const { components: { Counter } = {} } = this.state;
        return (
            <Fragment>
                <h2>Home</h2>
                {Counter && <Counter />}
            </Fragment>
        );
    }
};
