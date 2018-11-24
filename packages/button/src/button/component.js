import React from 'react';
import { bool } from 'prop-types';

import loadModule, { withRender } from '../helpers.js'
import styles from './component.scss';

const Icon = loadModule('icon');

const Button = props => {
    return (
        <button className={styles.root}>
            {props.withIcon && <Icon />}
            {props.children}
        </button>
    )
};

Button.propTypes = {
    withIcon: bool
};

export default withRender()(Button);
