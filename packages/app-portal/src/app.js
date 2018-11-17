import React, { Component, lazy, Suspense } from 'react';

const AppButton = lazy(() => import("./app-button.lazy"));

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
                component: lazy(() => import("./button"))
            });
        }, 2000)
    }

    render() {
        const PortalButton = this.state.component;

        return (
            <div className="App">
                <header className="App-header">
                    <Suspense fallback={<div>Loading...</div>}>
                        <PortalButton/>
                    </Suspense>
                </header>
                <Suspense fallback={<div>Loading...</div>}>
                    <AppButton>AppButton</AppButton>
                </Suspense>
            </div>
        );
    }
}

export default App;
