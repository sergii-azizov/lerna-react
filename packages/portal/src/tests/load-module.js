import { Fragment, PureComponent } from "react";
import { loadModule, MS_NAMES } from 'core';

const Counter = loadModule(MS_NAMES.COMPONENTS, { loadingComponent: () => <div>12312313123</div>});
const Button = loadModule(MS_NAMES.COMPONENTS, { component: 'Button'});
const Button1 = loadModule(MS_NAMES.COMPONENTS, { component: 'Button'});
const Button2 = loadModule(MS_NAMES.COMPONENTS, { component: 'Button'});
const Button3 = loadModule(MS_NAMES.COMPONENTS, { component: 'Button'});
const Button4 = loadModule(MS_NAMES.COMPONENTS, { component: 'Button'});
const Button5 = loadModule(MS_NAMES.COMPONENTS, { component: 'Button'});
const Button6 = loadModule(MS_NAMES.COMPONENTS, { component: 'Button'});

export default class LoadModule extends PureComponent {
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
