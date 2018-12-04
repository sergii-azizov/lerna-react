import { PureComponent } from 'react';
import { loadModule, MS_NAMES } from 'core';
import styles from './screen.scss';

const TaskSelector = loadModule(MS_NAMES.TASK_SELECTOR);
const Button = loadModule(MS_NAMES.COMPONENTS, { component: 'Button' });

class DesktopSummaryScreen extends PureComponent {
    render() {
      return (
          <div className={styles.root}>
              <h1>Desktop Summary</h1>
              <TaskSelector />
              <Button>desktop summary button</Button>
          </div>
      );
    }
}

export default DesktopSummaryScreen;
