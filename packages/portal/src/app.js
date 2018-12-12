import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { asyncImportComponent, MS_NAMES } from 'core';

import {
    HomeScreen
} from './tests';

import styles from './app.scss';

const App = props => (
    <div className={styles.root}>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/" exact component={HomeScreen}/>
        </Switch>
    </div>
);

export default App;
