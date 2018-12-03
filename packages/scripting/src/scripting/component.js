import { PureComponent } from 'react';
import { loadModule, withRender, MS_NAMES } from 'core';
import styles from './component.scss';

const Button = loadModule(MS_NAMES.COMPONENTS, { componentName: 'Button' });

class Scripting extends PureComponent {
    render() {
        return (
            <div className={styles.root}>
                <h3>Scripting</h3>
                <Button>scripting button</Button>
            </div>
        );
    }
}

export default withRender()(Scripting);
