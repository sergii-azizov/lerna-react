import React, { Component} from 'react';
import $script from "scriptjs";

class ButtonLazy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            loading: false,
            component: null
        };
    }

    handleLoad = () =>{
        this.setState({
            loading: true,
            component: () => <div>Loading</div>
        });
        $script('https://rawcdn.githack.com/sergii-azizov/lerna-react/8a29d802bd2e6072901b9f2762689e07f5a824b9/packages/shared/dist/shared.js', () => {
            const shared = window['shared'];
            this.setState({
                loaded: true,
                loading: false,
                component: shared.Button
            })
        });
    };

    render() {
        const ButtonLazyLoad = this.state.component;

        return (
            <div>
                {!this.state.loaded && <button onClick={this.handleLoad}>Lazy load component by http</button>}
                {this.state.component && <ButtonLazyLoad>{this.props.children}</ButtonLazyLoad>}
            </div>
        );
    }
}

export default ButtonLazy;
