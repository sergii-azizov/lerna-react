import React, { Component, lazy, Suspense } from 'react';

const AppButton = lazy(() => import("./app-button.lazy.js"));
const PortalButton = lazy(() => import("./button"));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Portal
            <Suspense fallback={<div>Loading...</div>}>
                <PortalButton />
                <AppButton>AppButton</AppButton>
            </Suspense>
        </header>
      </div>
    );
  }
}

export default App;
