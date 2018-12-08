import { Fragment } from 'react';
import { connect } from 'react-redux';
import { PACKAGE_NAMES, asyncImport } from 'core';

import styles from './test.scss'

const AsyncImportScreen = ({ components: { Button, Counter }, decrement, increment }) => {
    return (
        <Fragment>
            <h2>AsyncImport</h2>
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

const withConnect = ({ components: { decrement, increment } }) => connect(null, { decrement, increment });

export default asyncImport([PACKAGE_NAMES.components], { withConnect })(AsyncImportScreen);











/*

****** STEP 1

import { Fragment } from 'react';
const AsyncImportScreen = () => {
    return (
        <Fragment>
            <h2>AsyncImport</h2>
        </Fragment>
    );
};


export default AsyncImportScreen;






****** STEP 2

import { Fragment } from 'react';
import { PACKAGE_NAMES, asyncImport } from 'core';

const AsyncImportScreen = ({ components: { Button } }) => {
    return (
        <Fragment>
            <h2>AsyncImport</h2>
            <Button>Button</Button>
        </Fragment>
    );
};

export default asyncImport([PACKAGE_NAMES.components])(AsyncImportScreen);


****** STEP 3


import { Fragment } from 'react';
import { PACKAGE_NAMES, asyncImport } from 'core';

const AsyncImportScreen = ({ components: { Button, FRUITS, sum } }) => {
    return (
        <Fragment>
            <h2>AsyncImport</h2>
            <h3>Imported constant: {FRUITS.APPLE}</h3>
            <h3>Imported function sum, result: {sum(5, 7)}</h3>
            <Button>Imported component</Button>
        </Fragment>
    );
};

export default asyncImport([PACKAGE_NAMES.components])(AsyncImportScreen);


****** STEP 4


import { Fragment } from 'react';
import { connect } from 'react-redux';
import { PACKAGE_NAMES, asyncImport } from 'core';

import styles from './test.scss'

const AsyncImportScreen = ({ components: { Button, Counter }, decrement, increment }) => {
    return (
        <Fragment>
            <h2>AsyncImport</h2>
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

const withConnect = ({ components: { decrement, increment } }) => connect(null, { decrement, increment });

export default asyncImport([PACKAGE_NAMES.components], { withConnect })(AsyncImportScreen);
*/

