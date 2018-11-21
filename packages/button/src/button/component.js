import React from 'react';
import { bool } from 'prop-types';
import { lazy, withRender } from 'core';
import { STATIC_SERVER } from '../../../../configs/static.serve.config.js';

import styles from './component.scss';

const Icon = lazy({ server: STATIC_SERVER })('icon');

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
