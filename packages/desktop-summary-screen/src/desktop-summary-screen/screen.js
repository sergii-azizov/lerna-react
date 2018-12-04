import { PureComponent } from 'react';
import { loadModule, MS_NAMES } from 'core';
import styles from './screen.scss';

const Counter = loadModule(MS_NAMES.COMPONENTS);

class DesktopSummaryScreen extends PureComponent {
    render() {
      return (
          <div className={styles.root}>
              <h1>Desktop Summary</h1>
              <Counter />
          </div>
      );
    }
}

export default DesktopSummaryScreen;
