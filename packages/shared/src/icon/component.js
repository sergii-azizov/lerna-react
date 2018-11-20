import React from 'react';

import { withRender } from '../shared';
import styles from './component.scss';

const Icon = props => (<i className={styles.root}>∑</i>);

export default withRender()(Icon);
