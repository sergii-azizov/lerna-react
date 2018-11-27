import React from 'react';
import { bool } from 'prop-types';
import { loadModule, withRender, COMPONENTS_NAME } from 'core';

import styles from './component.scss';

const Icon = loadModule()(COMPONENTS_NAME.ICON);

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
