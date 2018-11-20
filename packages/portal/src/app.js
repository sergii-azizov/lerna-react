import React, { Component,  Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './app.scss';
import lazy from './shared';

const Button = lazy('button');

class Index extends Component {
    state = {
        component: () => <i>Icon</i>
    };

    componentDidMount() {
        const Icon = lazy('icon');
        setTimeout(() => {
            this.setState({
                component: Icon
            })
        }, 3000);
    }

    render() {
        const Icon = lazy('icon');
        const Icon2 = this.state.component;

        return (
            <Fragment>
                <h2>Home</h2>
                <Icon2 />
                <Icon />
                <Button>lazy loaded from static server</Button>
            </Fragment>
        )
    }
};
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const App = props => (
    <Router>
        <div className={styles.root}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" component={Index}/>
            <Route path="/about/" component={About}/>
            <Route path="/users/" component={Users}/>
        </div>
    </Router>
);

export default App;
