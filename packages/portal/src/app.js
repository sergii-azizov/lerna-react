import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { asyncImportComponent, MS_NAMES } from 'core';

import { DesktopSummaryScreen } from './screens';
import {
    ClearScreen,
    Load3ModuleScreen,
    LoadModuleScreen,
    ToggleModulesScreen,
    ParallelToggleComponentsMountingScreen,
    LoadModuleHOCScreen
} from './tests';
import styles from './app.scss';

const App = props => (
    <div className={styles.root}>
        <nav>
            <ul>
                <li><Link to="/">Clear</Link></li>
                <li><Link to="/desktop-summary">Desktop Summary</Link></li>
                <li><Link to="/load-3-module">Load 3 Modules</Link></li>
                <li><Link to="/load-module">Load Modules</Link></li>
                <li><Link to="/load-module-hoc">Load Modules HOC</Link></li>
                <li><Link to="/toggle-modules">Toggle Modules</Link></li>
                <li><Link to="/parallel-toggle-modules">Parallel Toggle Modules</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/" exact component={ClearScreen}/>
            <Route path="/desktop-summary" component={DesktopSummaryScreen}/>
            <Route path="/load-3-module" component={Load3ModuleScreen}/>
            <Route path="/load-module-hoc" component={LoadModuleHOCScreen}/>
            <Route path="/load-module" component={LoadModuleScreen}/>
            <Route path="/toggle-modules" component={ToggleModulesScreen}/>
            <Route path="/parallel-toggle-modules" component={ParallelToggleComponentsMountingScreen}/>
        </Switch>
    </div>
);

export default App;
