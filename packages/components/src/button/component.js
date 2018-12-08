import { func, node } from 'prop-types';
import { memo } from 'react';
import { withRender } from 'core';

import styles from './component.scss';

const Button = memo(props => (
    <button className={styles.root} onClick={props.onClick}>{props.children}</button>
));

Button.propTypes = {
    children: node.isRequired,
    onClick: func
};

Button.defaultProps = {
    onClick: undefined
};

export default Button;
