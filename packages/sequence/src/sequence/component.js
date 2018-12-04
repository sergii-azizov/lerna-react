import { PureComponent } from 'react';
import { loadModule, withRender, MS_NAMES } from 'core';
import styles from './component.scss';

const Button = loadModule(MS_NAMES.COMPONENTS, { component: 'Button' });

class Sequence extends PureComponent {
    render() {
        return (
            <div className={styles.root}>
                <h3>Sequence</h3>
                <Button>sequence button</Button>
            </div>
        );
    }
}

export default withRender()(Sequence);
