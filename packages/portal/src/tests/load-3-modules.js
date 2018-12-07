import { Fragment, PureComponent } from "react";
import { asyncImportComponent, PACKAGE_NAMES } from 'core';

const Sc1 = asyncImportComponent(PACKAGE_NAMES.scripting, { component: 'Scripting' });
const Sc2 = asyncImportComponent(PACKAGE_NAMES.scripting, { component: 'Scripting' });

export default class Load3ModuleScreen extends PureComponent {
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
