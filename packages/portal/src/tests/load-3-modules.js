import { Fragment, PureComponent } from "react";
import { loadModule, MS_NAMES } from 'core';

const Sc1 = loadModule(MS_NAMES.SCRIPTING);
const Sc2 = loadModule(MS_NAMES.SCRIPTING);

export default class Load3Module extends PureComponent {
    render() {
        return (
            <Fragment>
                <h2>Load 3 Module</h2>
                <Sc1 />
                <Sc2 />
            </Fragment>
        );
    }
};
