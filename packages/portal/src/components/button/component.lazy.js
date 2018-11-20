import React, { Component} from 'react';
import {} from '../lazy'

class ButtonLazy extends Component {
    state = {
        loaded: false,
        loading: false,
        error: null,
        component: null
    };

    handleLoad = () =>{
        this.setState({
            loading: true,
            component: () => <div>Loading</div>
        });

        this.component = window['shared-button'];


        loadjs(['https://rawcdn.githack.com/sergii-azizov/lerna-react/86c632ec9edaa6a3e8f2fdcccf20180b56bf5f84/packages/shared/dist/shared.js'], {
            success: () => {
                this.setState({
                    loaded: true,
                    loading: false,
                    component: this.component.default
                })
            },
            error: error => {
                this.setState({
                    loaded: false,
                    loading: false,
                    error
                });
            }
        });
    };

    componentWillUnmount() {
        this.component = null;
    }

    render() {
        const ButtonLazyLoad = this.state.component;

        return (
            <div>
                {!this.state.loaded && <button onClick={this.handleLoad}>Lazy load component by http</button>}
                {this.state.component && <ButtonLazyLoad withIcon>{this.props.children}</ButtonLazyLoad>}
            </div>
        );
    }
}

export default ButtonLazy;
