import React from 'react';
import { lazy, withRender } from 'core';

import styles from './component.scss';

const Icon = lazy({
    server: 'https://rawcdn.githack.com/sergii-azizov/lerna-react/06921ec13ff87f72dcd741cf7d2baaabfa0c4b1c/dist/js'
})('icon');

const Button = props => {
    return (
        <button className={styles.root}>
            {props.withIcon && <Icon />}
            {props.children}
        </button>
    )
};

export default withRender()(Button);
