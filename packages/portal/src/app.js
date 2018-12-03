import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { loadModule, MS_NAMES } from 'core';

import { HomeScreen, LoadModuleScreen, DesktopSummaryScreen } from './screens';
import styles from './app.scss';


const App = props => (
    <div className={styles.root}>
        <nav>
            <ul>
                <li><Link to="/lerna-react/index.html">Home</Link></li>
                <li><Link to="/lerna-react/index.html/load-module">Load Modules</Link></li>
                <li><Link to="/lerna-react/index.html/desktop-summary">Desktop Summary</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/lerna-react/index.html" exact component={HomeScreen}/>
            <Route path="/lerna-react/index.html/load-module" component={LoadModuleScreen}/>
            <Route path="/lerna-react/index.html/desktop-summary" component={DesktopSummaryScreen}/>
        </Switch>
    </div>
);

export default App;
