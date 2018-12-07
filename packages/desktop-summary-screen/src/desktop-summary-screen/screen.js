import { PureComponent } from 'react';
import { asyncImportComponent, PACKAGE_NAMES } from 'core';
import styles from './screen.scss';

const TaskSelector = asyncImportComponent(PACKAGE_NAMES.taskSelector);
const Button = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' });

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
