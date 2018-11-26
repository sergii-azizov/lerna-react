import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ToggleComponentsMounting from './toggle-components-mounting/index.js';
import ToggleComponentsMounting2 from './toggle-components-mounting/index2.js';
import ToggleComponentsMounting3 from './toggle-components-mounting/index3.js';
import styles from './app.scss';

const App = props => (
    <Router>
        <div className={styles.root}>
            <nav>
                <ul>
                    <li><Link to="/lerna-react/index.html/decrease-mount-count">Toggle Components Mounting</Link></li>
                    <li><Link to="/lerna-react/index.html/decrease-mount-count2">Toggle Components Mounting 2</Link></li>
                    <li><Link to="/lerna-react/index.html/decrease-mount-count3">Toggle Components Mounting 3</Link></li>
                </ul>
            </nav>

            <Route path="/lerna-react/index.html/decrease-mount-count" exact component={ToggleComponentsMounting}/>
            <Route path="/lerna-react/index.html/decrease-mount-count2" component={ToggleComponentsMounting2}/>
            <Route path="/lerna-react/index.html/decrease-mount-count3" component={ToggleComponentsMounting3}/>
        </div>
    </Router>
);

export default App;
