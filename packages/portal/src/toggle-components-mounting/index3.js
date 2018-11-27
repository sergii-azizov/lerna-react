import { Fragment, Component } from "react";
import { loadModule, COMPONENTS_NAME } from 'core';

const Icon2 = loadModule()(COMPONENTS_NAME.ICON);
export default class ToggleComponentsMounting3 extends Component {
    state = {
        Icon: loadModule()(COMPONENTS_NAME.ICON)
    };

    render() {
        const { Icon } = this.state;

        return (
            <Fragment>
                <h2>Toggle Components Mounting 3</h2>
                <Icon />
                <Icon2 />
            </Fragment>
        )
    }
};
