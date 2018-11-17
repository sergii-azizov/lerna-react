import React, { Component, Suspense } from 'react';
import $script from 'scriptjs';

class App extends Component {
  render() {
      const PortalButton = $script('app-button', (p1,p2) => {
          console.log("==> ", p1,p2);
      });
    return (
      <div className="App">
        <header className="App-header">
          Portal
            <Suspense fallback={<div>Loading...</div>}>
                <PortalButton />
            </Suspense>
        </header>
      </div>
    );
  }
}

export default App;
