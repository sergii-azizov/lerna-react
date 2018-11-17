import React, { Component, Suspense, lazy } from 'react';
import $script from "scriptjs";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            loading: false,
            component: null
        };

        this.handleLoad = this.handleLoad.bind(this);
    }

    handleLoad() {
        this.setState({
            loading: true,
            component: () => <div>Loading</div>
        });
        $script('http://raw.githack.com/sergii-azizov/lerna-react/master/packages/app-button/build/app-button.js', () => {
            const AppButton = window['app-button'];
            this.setState({
                loaded: true,
                loading: false,
                component: AppButton.Button
            })
        });
    }

    render() {
        const Co = this.state.component;

        return (
            <div>
                {!this.state.loaded && <button onClick={this.handleLoad}>Lazy load component by http</button>}
                {this.state.component && <Co>{this.props.children}</Co>}
            </div>
        );
    }
}

export default App;
