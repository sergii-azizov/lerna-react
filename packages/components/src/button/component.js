import { PureComponent } from 'react';
import { withRender } from 'core';

import styles from './component.scss';

class Button extends PureComponent {
    render() {
        return (
           <button className={styles.root}>{this.props.children}</button>
        );
    }
}

export default Button;
