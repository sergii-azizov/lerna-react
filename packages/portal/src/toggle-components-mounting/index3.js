import { Fragment, Component } from "react";
import { loadModule, MS_NAMES } from 'core';

const Icon3 = loadModule(MS_NAMES.ICON);
const Icon2 = loadModule(MS_NAMES.ICON, { componentName: 'Icon2'});
export default class ToggleComponentsMounting3 extends Component {
    state = {
        Icon: loadModule(MS_NAMES.ICON)
    };

    render() {
        const { Icon } = this.state;

        return (
            <Fragment>
                <h2>Toggle Components Mounting 3</h2>
                <Icon />
                <Icon2 />
                <Icon3 />
            </Fragment>
        )
    }
};
