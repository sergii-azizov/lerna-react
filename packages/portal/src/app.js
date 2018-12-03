import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { loadModule, MS_NAMES } from 'core';

import { Home, LoadModule } from './screens';
import styles from './app.scss';


const App = props => (
    <div className={styles.root}>
        <nav>
            <ul>
                <li><Link to="/lerna-react/index.html">Home</Link></li>
                <li><Link to="/lerna-react/index.html/load-module">Load Modules</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/lerna-react/index.html" exact component={Home}/>
            <Route path="/lerna-react/index.html/load-module" component={LoadModule}/>
        </Switch>
    </div>
);

export default App;
