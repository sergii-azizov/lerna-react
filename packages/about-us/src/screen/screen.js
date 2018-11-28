import React from 'react';
import { loadModule, withRender, MS_NAMES } from 'core';

import styles from './screen.scss';

const Icon = loadModule(MS_NAMES.ICON);

const Screen = props => (
    <div className={styles.root}>
        <h2>About us</h2>
        <Icon />
    </div>
);

export default withRender()(Screen);
