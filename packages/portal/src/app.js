import React, { Component, lazy, Suspense } from 'react';

const ButtonLazy = lazy(() => import("./components/button/component.lazy"));

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            component: () => <div>Loading...</div>
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                component: lazy(() => import("./components/button/component"))
            });
        }, 2000)
    }

    render() {
        const Button = this.state.component;

        return (
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Button>Lazy loaded from Portal</Button>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <ButtonLazy>Lazy loaded by http</ButtonLazy>
                </Suspense>
            </div>
        );
    }
}

export default App;
