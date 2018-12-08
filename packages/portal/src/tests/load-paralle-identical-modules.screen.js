import { Fragment, PureComponent } from "react";
import { asyncImportComponent, PACKAGE_NAMES } from 'core';

const Counter = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Counter', loadingComponent: <div>12312313123</div>});
const Button = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button'});
const Button1 = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button'});
const Button2 = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button'});
const Button3 = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button'});
const Button4 = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button'});
const Button5 = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button'});
const Button6 = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button'});

export default class loadParalleIdenticalModules extends PureComponent {
    render() {
        return (
            <Fragment>
                <h2>Load Module</h2>
                <Counter />
                <Button>Button</Button>
                <Button1>Button1</Button1>
                <Button2>Button2</Button2>
                <Button3>Button3</Button3>
                <Button4>Button4</Button4>
                <Button5>Button5</Button5>
                <Button6>Button6</Button6>
            </Fragment>
        );
    }
};
