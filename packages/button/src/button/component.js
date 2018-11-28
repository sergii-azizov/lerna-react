import React from 'react';
import { bool } from 'prop-types';
import { loadModule, withRender, MS_NAMES } from 'core';

import styles from './component.scss';

const Icon = loadModule(MS_NAMES.ICON);

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
