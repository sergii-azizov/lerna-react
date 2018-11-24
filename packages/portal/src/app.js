import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ToggleComponentsMounting from './toggle-components-mounting/index.js';
import ToggleComponentsMounting2 from './toggle-components-mounting/index2.js';
import styles from './app.scss';

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const App = props => (
    <Router>
        <div className={styles.root}>
            <nav>
                <ul>
                    <li>
                        <Link to="/lerna-react/index.html/decrease-mount-count">Toggle Components Mounting</Link>
                    </li>
                    <li>
                        <Link to="/lerna-react/index.html/decrease-mount-count2">Toggle Components Mounting 2</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/lerna-react/index.html/decrease-mount-count" exact component={ToggleComponentsMounting}/>
            <Route path="/lerna-react/index.html/decrease-mount-count2" component={ToggleComponentsMounting2}/>
            <Route path="/users/" component={Users}/>
        </div>
    </Router>
);

export default App;
