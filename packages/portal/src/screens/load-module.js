import { Fragment } from "react";
import { loadModule, MS_NAMES } from 'core';

const Button = loadModule(MS_NAMES.COMPONENTS, { componentName: 'Button', destroyOnUnmount: true });

export default props => (
    <Fragment>
        <h2>Load Module</h2>
        <Button>Button</Button>
    </Fragment>
);
