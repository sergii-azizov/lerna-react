import { PureComponent } from 'react';
import { asyncImportComponent, withRender, PACKAGE_NAMES } from 'core';
import styles from './component.scss';

const Scripting = asyncImportComponent(PACKAGE_NAMES.scripting, { component: 'Scripting'});
const Sequence = asyncImportComponent(PACKAGE_NAMES.sequence);
const Button = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' });

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
