import { Fragment, PureComponent } from "react";
import { injectAsyncReducer } from 'core';

export default class HomeScreen extends PureComponent {
    state = {};

    componentWillMount() {
        if (this.props.a) {
            import(`../../../components/src/button/component.js`).then((components) => {
                //injectAsyncReducer('components', components.rootReducer);
                this.setState({ components });
            });
        }
    }

    render() {
        const { components: { Counter } = {} } = this.state;

        return (
            <Fragment>
                {Counter && <Counter />}

                {() => (
                    <svg key={uuid()} className={glyphClassName}>
                        <use xlinkHref={`#${this.props.glyph}`} />
                    </svg>
                    )
                }
            </Fragment>
        );
    }
};
