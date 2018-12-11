import { Fragment } from 'react';
import { connect } from 'react-redux';
import { PACKAGE_NAMES, asyncImport } from 'core';

import styles from './test.scss'

const AsyncImportScreen2 = ({ Button, Counter, decrement, increment }) => {
    return (
        <Fragment>
            <h1>AsyncImport 2</h1>
            <div className={styles.root}>
                <h3>Component with dynamic store from "components" package</h3>
                <Counter />
            </div>
            <div className={styles.root}>
                <h3>Imported Actions from "components" package</h3>
                <Button onClick={increment}>+1</Button>
                <Button onClick={decrement}>-1</Button>
            </div>
        </Fragment>
    );
};

const withConnect = ({ decrement, increment }) => connect(null, { decrement, increment });
const mapPackagesToProps = ({ components: { Button, Counter, decrement, increment }}) => ({ Button, Counter, decrement, increment });

export default asyncImport([PACKAGE_NAMES.components], { mapPackagesToProps, withConnect })(AsyncImportScreen2);

