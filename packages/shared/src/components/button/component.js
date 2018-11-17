import React from 'react';
import styles from './component.scss';

const Button = props => (
    <button className={styles.root}>
        {props.children}
    </button>
);

export default Button;
