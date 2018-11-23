import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ToggleComponentsMounting from './toggle-components-mounting';
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
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/lerna-react/index.html/decrease-mount-count" exact component={ToggleComponentsMounting}/>
            <Route path="/about/" component={About}/>
            <Route path="/users/" component={Users}/>
        </div>
    </Router>
);

export default App;
