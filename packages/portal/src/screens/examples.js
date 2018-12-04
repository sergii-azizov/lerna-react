
/*

*** Simple Load module

import { Fragment } from "react";
import { loadModule, MS_NAMES } from 'core';

const Button = loadModule(MS_NAMES.COMPONENTS, { componentName: 'Button' });

export default props => (
    <Fragment>
        <h2>Load Module</h2>
        <Button>Button</Button>
    </Fragment>
);
*/

/*

** Load 3 parallel identical modules(from cache)

import { Fragment } from "react";
import { loadModule, MS_NAMES } from 'core';

const Button = loadModule(MS_NAMES.COMPONENTS, { componentName: 'Button' });
const Button1 = loadModule(MS_NAMES.COMPONENTS, { componentName: 'Button' });
const Button2 = loadModule(MS_NAMES.COMPONENTS, { componentName: 'Button' });
const Button3 = loadModule(MS_NAMES.COMPONENTS, { componentName: 'Button' });

export default props => (
    <Fragment>
        <h2>Load Module</h2>
        <Button>Button</Button>
        <Button1>Button</Button1>
        <Button2>Button</Button2>
        <Button3>Button</Button3>
    </Fragment>
);

*/








/*

**** Load module by delay + pass new props

import { Fragment, PureComponent } from "react";
import { loadModule, MS_NAMES } from 'core';

export default class extends PureComponent {
    state = {
        btnText: 'I\'m a button'
    };

    componentDidMount() {
        setTimeout(() => { this.setState({ Button: loadModule(MS_NAMES.COMPONENTS, { componentName: 'Button'}) }); }, 3000);
    }

    handleClick = () => {
        this.setState({
            btnText: 'you clicked me!'
        })
    };

    render() {
        const { Button } = this.state;

        return (
            <Fragment>
                <h2>Loaded Component by Delay</h2>
                {Button && <Button onClick={this.handleClick}>{this.state.btnText}</Button>}
            </Fragment>
        )
    }
};

*/


/*

*** Destroy

import { Fragment } from "react";
import { loadModule, MS_NAMES } from 'core';

const Button = loadModule(MS_NAMES.COMPONENTS, { componentName: 'Button', destroyOnUnmount: true, loadingComponent: () => <div>loading</div> });

export default props => (
    <Fragment>
        <h2>Load Module</h2>
        <Button>Button</Button>
    </Fragment>
);


*/


/*

*** load 3 identical components with redux

import { Fragment } from "react";
import { loadModule, MS_NAMES } from 'core';

const Counter = loadModule(MS_NAMES.COMPONENTS);
const Counter1 = loadModule(MS_NAMES.COMPONENTS);
const Counter2 = loadModule(MS_NAMES.COMPONENTS);

export default props => (
    <Fragment>
        <h2>Load Module</h2>
        <Counter />
        <Counter1 />
        <Counter2 />
    </Fragment>
);

*/
