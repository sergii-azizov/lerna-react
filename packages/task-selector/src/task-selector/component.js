import { PureComponent } from 'react';
import { loadModule, withRender, MS_NAMES } from 'core';
import styles from './component.scss';

const Scripting = loadModule(MS_NAMES.SCRIPTING);
const Sequence = loadModule(MS_NAMES.SEQUENCE);
const Button = loadModule(MS_NAMES.COMPONENTS, { componentName: 'Button' });

class TaskSelector extends PureComponent {
    render() {
        return (
            <div className={styles.root}>
                <h2>Task Selector</h2>
                <Scripting />
                <Sequence />
                <Button>task selector button</Button>
            </div>
        );
    }
}

export default withRender()(TaskSelector);
