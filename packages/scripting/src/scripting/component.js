import { PureComponent } from 'react';
import { asyncImportComponent, withRender, PACKAGE_NAMES } from 'core';
import styles from './component.scss';

const Button = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' });

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
