import React from 'react';
import { lazyModule, withRender } from 'core';

import styles from './screen.scss';

const Icon = lazyModule()('icon');

const Screen = props => (
    <div className={styles.root}>
        <h2>Screen</h2>
        <Icon />
    </div>
);

export default withRender()(Screen);
