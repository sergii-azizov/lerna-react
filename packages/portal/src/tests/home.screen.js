import { Fragment, PureComponent } from "react";
import { injectAsyncReducer } from 'core';

export default class HomeScreen extends PureComponent {
    state = {};

    componentWillMount() {
        import(/* webpackChunkName: 'components' */ `../../../components/src/index.js`).then((components) => {
            injectAsyncReducer('components', components.rootReducer);
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
