import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from './actions.js';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.props.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.props.increment}>+</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("==> ", state);

    return {
        count: state.components.count.count
    };
}

export default connect(mapStateToProps, { increment, decrement })(Counter);
