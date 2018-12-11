import { Fragment } from 'react';

const AsyncImportScreen = () => {
    return (
        <Fragment>
            <h2>AsyncImport</h2>
        </Fragment>
    );
};


export default AsyncImportScreen;

/* ****** EXAMPLE 1 -> apply asyncImport HOC and import Button from components package

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


****** EXAMPLE 2 -> import constants and functions


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


****** EXAMPLE 3 -> import Redux actions creator


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




****** EXAMPLE 4 -> mapPackagesToProps is a function which can help with renaming or reorganization modules which will be puted to component


import { Fragment } from 'react';
import { connect } from 'react-redux';
import { PACKAGE_NAMES, asyncImport } from 'core';

import styles from './test.scss'

const AsyncImportScreen = ({ Button, Counter, decrement, increment }) => {
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

const withConnect = ({ decrement, increment }) => connect(null, { decrement, increment });
const mapPackagesToProps = ({ components: { Button, Counter, decrement, increment }}) => ({ Button, Counter, decrement, increment });

export default asyncImport([PACKAGE_NAMES.components], { mapPackagesToProps, withConnect })(AsyncImportScreen);




****** EXAMPLE 5 -> asyncImport HOC includes another asyncImport HOC


import { Fragment } from 'react';
import { connect } from 'react-redux';
import { PACKAGE_NAMES, asyncImport } from 'core';

import AsyncImportScreen2 from './async-import-2.screen';
import styles from './test.scss'

const AsyncImportScreen = ({ Button, Counter, decrement, increment }) => {
    return (
        <Fragment>
            <h1>AsyncImport 1</h1>
            <div className={styles.root}>
                <h3>Component with dynamic store from "components" package</h3>
                <Counter />
            </div>
            <div className={styles.root}>
                <h3>Imported Actions from "components" package</h3>
                <Button onClick={increment}>+1</Button>
                <Button onClick={decrement}>-1</Button>
            </div>
            <div className={styles.root}>
                <AsyncImportScreen2 />
            </div>
        </Fragment>
    );
};

const withConnect = ({ decrement, increment }) => connect(null, { decrement, increment });
const mapPackagesToProps = ({ components: { Button, Counter, decrement, increment }}) => ({ Button, Counter, decrement, increment });

export default asyncImport([PACKAGE_NAMES.components], { mapPackagesToProps, withConnect })(AsyncImportScreen);
*/
