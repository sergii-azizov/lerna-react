import { Fragment, Component } from "react";
import loadModule from '../helpers.js';

export default class ToggleComponentsMounting3 extends Component {
    state = {
        Icon: loadModule('Icon', { super: this })
    };

    render() {
        const { Icon } = this.state;

        return (
            <Fragment>
                <h2>Toggle Components Mounting 3</h2>
                <Icon />
            </Fragment>
        )
    }
};
