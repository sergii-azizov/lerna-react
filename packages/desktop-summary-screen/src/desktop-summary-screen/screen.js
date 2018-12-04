import React from 'react';
import { connect } from 'react-redux';
import { loadModule, MS_NAMES } from 'core';

import { increment, decrement } from './actions.js';
import styles from './screen.scss';

const Counter = loadModule(MS_NAMES.COMPONENTS);
const Button = loadModule(MS_NAMES.COMPONENTS, { componentName: 'Button' });
const TaskSelector = loadModule(MS_NAMES.TASK_SELECTOR);

class DesktopSummaryScreen extends React.Component {
    render() {
        return (
            <div>
                <h2>Desktop Summary</h2>

                <Button onClick={this.props.decrement}>-</Button>
                <span className={styles.counter}>{this.props.count}</span>
                <Button onClick={this.props.increment}>+</Button>

                <Counter />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("==> ", state);

    return {
        count: state['desktop-summary-screen'].count
    };
}

export default connect(mapStateToProps, { increment, decrement })(DesktopSummaryScreen);
