import React from 'react';

import lazy, { withRender } from '../shared';
import styles from './component.scss';

const Button = props => {
    const Icon = lazy("icon");

    return (
        <button className={styles.root}>
            <Icon rendered={props.withIcon} />
            {props.children}
        </button>
    )
};

export default withRender()(Button);
