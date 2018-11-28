import { Fragment, Component } from "react";
import { loadModule, MS_NAMES } from 'core';

export default class ToggleComponentsMounting2 extends Component {
    state = {
        Icon1: () => <div>ICON-1</div>,
        Icon2: () => <div>ICON-2</div>,
        Button: () => <div>BUTTON</div>
    };

    componentDidMount() {
        setTimeout(() => { this.setState({ Icon1: loadModule(MS_NAMES.ICON) }); }, 1000);
        setTimeout(() => { this.setState({ Icon1: () => <div>ICON</div> }); }, 2000);
        setTimeout(() => { this.setState({ Icon1: loadModule(MS_NAMES.ICON) }); }, 3000);
        setTimeout(() => { this.setState({ Icon1: () => <div>ICON</div> }); }, 4000);
        setTimeout(() => { this.setState({ Icon1: loadModule(MS_NAMES.ICON) }); }, 5000);

        setTimeout(() => { this.setState({ Button: loadModule(MS_NAMES.BUTTON) }); }, 1000);
        setTimeout(() => { this.setState({ Button: () => <div>Button</div> }); }, 2000);
        setTimeout(() => { this.setState({ Button: loadModule(MS_NAMES.BUTTON) }); }, 3000);
    }

    render() {
        const { Icon1, Button, Icon2 } = this.state;

        return (
            <Fragment>
                <h2>Toggle Components Mounting 2</h2>
                <Icon1 />
                <Icon2 />
                <Button withIcon>lazy loaded from static server</Button>
            </Fragment>
        )
    }
};
