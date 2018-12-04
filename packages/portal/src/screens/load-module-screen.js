import { Fragment } from "react";
import { loadModule, MS_NAMES } from 'core';

const Counter = loadModule(MS_NAMES.COMPONENTS);
const Counter1 = loadModule(MS_NAMES.COMPONENTS);
const Counter2 = loadModule(MS_NAMES.COMPONENTS);

export default props => (
    <Fragment>
        <h2>Load Module</h2>
        <Counter />
        <Counter1 />
        <Counter2 />
    </Fragment>
);
