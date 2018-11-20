import React from 'react';
import { withRender } from 'core';

import styles from './component.scss';

const Icon = props => (<i className={styles.root}>∑</i>);

export default withRender()(Icon);
