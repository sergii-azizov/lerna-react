import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { loadModule, MS_NAMES } from 'core';

import { DesktopSummaryScreen } from './screens';
import { Clear, LoadModule, ToggleModules, ParallelToggleModules } from './tests';
import styles from './app.scss';

const App = props => (
    <div className={styles.root}>
        <nav>
            <ul>
                <li><Link to="/lerna-react/index.html">Clear</Link></li>
                <li><Link to="/lerna-react/index.html/desktop-summary">Desktop Summary</Link></li>
                <li><Link to="/lerna-react/index.html/load-module">Load Modules</Link></li>
                <li><Link to="/lerna-react/index.html/toggle-modules">Toggle Modules</Link></li>
                <li><Link to="/lerna-react/index.html/parallel-toggle-modules">Parallel Toggle Modules</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/lerna-react/index.html" exact component={Clear}/>
            <Route path="/lerna-react/index.html/desktop-summary" component={DesktopSummaryScreen}/>
            <Route path="/lerna-react/index.html/load-module" component={LoadModule}/>
            <Route path="/lerna-react/index.html/toggle-modules" component={ToggleModules}/>
            <Route path="/lerna-react/index.html/parallel-toggle-modules" component={ParallelToggleModules}/>
        </Switch>
    </div>
);

export default App;
