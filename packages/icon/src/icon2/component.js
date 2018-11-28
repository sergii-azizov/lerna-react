import React from 'react';
import { withRender } from 'core';

import styles from './component.scss';

const Icon2 = props => (<i className={styles.root}>∑2</i>);

export default withRender()(Icon2);
