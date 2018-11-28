import { Component } from 'react';
import { connect } from 'react-redux';
import { flow } from 'lodash';
import { withRender } from 'core';

import mapStateToProps from './selectors';
import styles from './component.scss';

class Nav extends Component {
    render() {
        <nav className={styles.root}>
            <ul>
                <li>{this.props.path}</li>
            </ul>
        </nav>
    }
}

export default withRender()(connect(mapStateToProps)(Nav));

