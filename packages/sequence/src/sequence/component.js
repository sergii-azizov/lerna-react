import { PureComponent } from 'react';
import { asyncImportComponent, withRender, PACKAGE_NAMES } from 'core';
import styles from './component.scss';

const Button = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' });

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
