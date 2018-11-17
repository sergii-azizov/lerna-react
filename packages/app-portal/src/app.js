import React, { Component, lazy, Suspense } from 'react';

const AppButton = lazy(() => import("./app-button.lazy"));
const PortalButton = lazy(() => import("./button"));

class App extends Component {
    render() {
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
