import React, { Component,  Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { lazy } from 'core';

import styles from './app.scss';

const Button = lazy({
    server: 'https://rawcdn.githack.com/sergii-azizov/lerna-react/68ae151923410fd543dee6e22acea19ec5489dea/dist/js'
})('button');

const lazyIcon = lazy({
    server: 'https://rawcdn.githack.com/sergii-azizov/lerna-react/06921ec13ff87f72dcd741cf7d2baaabfa0c4b1c/dist/js'
});

class Index extends Component {
    state = {
        component: () => <i>Icon</i>
    };

    componentDidMount() {
        const Icon = lazyIcon('icon');
        setTimeout(() => {
            this.setState({
                component: Icon
            })
        }, 3000);
    }

    render() {
        const Icon = lazyIcon('icon');
        const Icon2 = this.state.component;

        return (
            <Fragment>
                <h2>Home</h2>
                <Icon />
                <Icon2 />
                <Button>lazy loaded from static server</Button>
                <Button withIcon>lazy loaded from static server</Button>
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
