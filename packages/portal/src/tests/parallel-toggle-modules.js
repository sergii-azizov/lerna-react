import { Fragment, Component } from "react";
import { asyncImportComponent, PACKAGE_NAMES } from 'core';

export default class ParallelToggleComponentsMountingScreen extends Component {
    state = {
        Button1: () => <div>loading Button-1</div>,
        Button2: () => <div>loading Button-2</div>,
        Button3: () => <div>loading Button-3</div>,
    };

    add = () => {
        this.setState({
            Button1: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button2: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button3: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' })
        });

        setTimeout(this.remove, 2000);
    };

    remove = () => {
        this.setState({ Button1: () => <div>removed Button-1</div> });
        this.setState({ Button2: () => <div>removed Button-2</div> });
        this.setState({ Button3: () => <div>removed Button-3</div> });
    };

    componentDidMount() {
        setInterval(this.add, 3000);
    }

    render() {
        const { Button1, Button2, Button3 } = this.state;

        return (
            <Fragment>
                <h2>Toggle Components Mounting</h2>
                <div><Button1>Button1</Button1></div>
                <div><Button2>Button2</Button2></div>
                <div><Button3>Button</Button3></div>
            </Fragment>
        )
    }
}
