import React from 'react';
import { loadModule, withRender, COMPONENTS_NAME } from 'core';

import styles from './screen.scss';

const Icon = loadModule()(COMPONENTS_NAME.ICON);

const Screen = props => (
    <div className={styles.root}>
        <h2>About us</h2>
        <Icon />
    </div>
);

export default withRender()(Screen);
