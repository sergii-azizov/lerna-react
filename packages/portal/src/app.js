import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { loadModule, MS_NAMES } from 'core';

import toggleComponentsMounting from './toggle-components-mounting/index.js';
import toggleComponentsMounting2 from './toggle-components-mounting/index2.js';
import toggleComponentsMounting3 from './toggle-components-mounting/index3.js';
import AboutUs from './about-us';
import styles from './app.scss';

const Nav = loadModule(MS_NAMES.NAV);

const App = props => (
    <div className={styles.root}>
        <nav>
            <ul>
                <li><Link to="/lerna-react/index.html/decrease-mount-count">Toggle Components Mounting</Link></li>
                <li><Link to="/lerna-react/index.html/decrease-mount-count2">Toggle Components Mounting 2</Link>
                </li>
                <li><Link to="/lerna-react/index.html/decrease-mount-count3">Toggle Components Mounting 3</Link>
                </li>
                <li><Link to="/lerna-react/index.html/screen">Screen</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/lerna-react/index.html/decrease-mount-count" exact component={toggleComponentsMounting}/>
            <Route path="/lerna-react/index.html/decrease-mount-count2" component={toggleComponentsMounting2}/>
            <Route path="/lerna-react/index.html/decrease-mount-count3" component={toggleComponentsMounting3}/>
            <Route path="/lerna-react/index.html/screen" component={AboutUs}/>
        </Switch>
    </div>
);

export default App;
