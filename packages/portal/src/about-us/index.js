import React from "react";
import { loadModule, COMPONENTS_NAME } from 'core';


const Screen = loadModule(COMPONENTS_NAME.ABOUT_US);

export default () => (<Screen />);
