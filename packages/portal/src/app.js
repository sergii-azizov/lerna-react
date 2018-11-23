import React, { Component,  Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { lazy } from 'core';

import { STATIC_SERVER } from '../../../configs/static.serve.config.js'
import styles from './app.scss';

const LL = lazy({ server: STATIC_SERVER});
class Index extends Component {
    state = {
        Icon: () => <div>ICON</div>,
        Icon2: () => <div>ICON-2</div>,
        Button: () => <div>BUTTON</div>
    };

    componentDidMount() {
        setTimeout(() => { this.setState({ Icon: LL('icon', { clearOnUnMount: true }) }); }, 3000);
        setTimeout(() => { this.setState({ Icon: () => <div>ICON</div> }); }, 6000);
        setTimeout(() => { this.setState({ Icon: LL('icon', { clearOnUnMount: true }) }); }, 9000);
        /*setTimeout(() => { this.setState({ Icon: () => <div>ICON</div> }); }, 12000);
        setTimeout(() => { this.setState({ Icon: LL('icon', { clearOnUnMount: true }) }); }, 15000);*/

/*        setTimeout(() => { this.setState({ Button: LL('button', { clearOnUnMount: true }) }); }, 1000);
        setTimeout(() => { this.setState({ Button: () => <div>Button</div> }); }, 2000);
        setTimeout(() => { this.setState({ Button: LL('button', { clearOnUnMount: true }) }); }, 3000);*/
    }

    render() {
        const { Icon, Button, Icon2 } = this.state;

        return (
            <Fragment>
                <h2>Home</h2>
                <Icon />
                {/*<Icon2 />
                <Button withIcon>lazy loaded from static server</Button>*/}
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

            <Route path="/" exact component={Index}/>
            <Route path="/about/" component={About}/>
            <Route path="/users/" component={Users}/>
        </div>
    </Router>
);

export default App;
