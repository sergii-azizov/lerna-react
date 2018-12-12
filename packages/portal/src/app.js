import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import {
    HomeScreen,
/*    Load2ModulesWithDependency,
    loadParalleIdenticalModules,
    ToggleModulesScreen,
    DesktopSummaryScreen,
    ParallelToggleComponentsMountingScreen,
    AsyncImportScreen*/
} from './tests';

import styles from './app.scss';

const App = props => (
    <div className={styles.root}>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>{/*
                <li><Link to="/async-import">asyncImport</Link></li>
                <li><Link to="/load-module">Load Paralle Identical Modules</Link></li>
                <li><Link to="/desktop-summary">Desktop Summary</Link></li>
                <li><Link to="/load-2-modules-with-dependency">Load 3 Modules</Link></li>
                <li><Link to="/toggle-modules">Toggle Modules</Link></li>
                <li><Link to="/parallel-toggle-modules">Parallel Toggle Modules</Link></li>*/}
            </ul>
        </nav>
        <Switch>
            <Route path="/" exact component={HomeScreen}/>{/*
            <Route path="/async-import" component={AsyncImportScreen}/>
            <Route path="/load-module" component={loadParalleIdenticalModules}/>
            <Route path="/desktop-summary" component={DesktopSummaryScreen}/>
            <Route path="/load-2-modules-with-dependency" component={Load2ModulesWithDependency}/>
            <Route path="/toggle-modules" component={ToggleModulesScreen}/>
            <Route path="/parallel-toggle-modules" component={ParallelToggleComponentsMountingScreen}/>*/}
        </Switch>
    </div>
);

export default App;
