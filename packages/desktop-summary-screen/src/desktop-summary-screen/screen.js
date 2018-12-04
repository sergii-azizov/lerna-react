import React from 'react';
import { connect } from 'react-redux';
import { loadModule, MS_NAMES } from 'core';

import { increment, decrement } from './actions.js';

const Counter = loadModule(MS_NAMES.COMPONENTS);

class DesktopSummaryScreen extends React.Component {
    render() {
        return (
            <div>
                <h2>Desktop Summary</h2>
                <TaskSelector />

                <button onClick={this.props.decrement}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.props.increment}>+</button>

                <Counter />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("==> ", state);

    return {
        count: state
    };
}

export default connect(mapStateToProps, { increment, decrement })(DesktopSummaryScreen);
