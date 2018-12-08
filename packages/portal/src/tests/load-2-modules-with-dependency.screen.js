import { Fragment, PureComponent } from "react";
import { asyncImportComponent, PACKAGE_NAMES } from 'core';

const Module1 = asyncImportComponent(PACKAGE_NAMES.scripting, { component: 'Scripting' });
const Module2 = asyncImportComponent(PACKAGE_NAMES.scripting, { component: 'Scripting' });

export default class Load3ModuleScreen extends PureComponent {
    render() {
        return (
            <Fragment>
                <h2>Load 3 Module</h2>
                <Module1 />
                <Module2 />
            </Fragment>
        );
    }
};
