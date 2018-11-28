import React from "react";
import { loadModule, MS_NAMES } from 'core';

const Screen = loadModule(MS_NAMES.ABOUT_US);
const Nav = loadModule(MS_NAMES.NAV);
const Counter = loadModule(MS_NAMES.NAV, { componentName: 'Counter' });

export default () => (
    <div>
        <Nav />
        <Counter />
        <Screen />
    </div>
);
