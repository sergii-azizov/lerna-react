import { Fragment, Component } from "react";
import { loadModule, COMPONENTS_NAME } from 'core';

export default class ToggleComponentsMounting extends Component {
    state = {
        Icon1: () => <div>loading ICON-1</div>,
        Icon2: () => <div>loading ICON-2</div>,
        Icon3: () => <div>loading ICON-3</div>,
    };

    addIcons = () => {
        this.setState({
            Icon1: loadModule(COMPONENTS_NAME.ICON),
            Icon2: loadModule(COMPONENTS_NAME.ICON),
            Icon3: loadModule(COMPONENTS_NAME.ICON)
        });

        setTimeout(this.removedIcons, 2000);
    };

    removedIcons = () => {
        this.setState({ Icon1: () => <div>removed ICON-1</div> });
        this.setState({ Icon2: () => <div>removed ICON-2</div> });
        this.setState({ Icon3: () => <div>removed ICON-3</div> });
    };

    componentDidMount() {
        setInterval(this.addIcons, 3000);
    }

    render() {
        const { Icon1, Icon2, Icon3 } = this.state;

        return (
            <Fragment>
                <h2>Toggle Components Mounting</h2>
                <div><Icon1 /></div>
                <div><Icon2 /></div>
                <div><Icon3 /></div>
            </Fragment>
        )
    }
}
