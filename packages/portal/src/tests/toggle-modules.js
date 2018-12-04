import { Fragment, PureComponent } from "react";
import { loadModule, MS_NAMES } from 'core';

export default class ToggleModules extends PureComponent {
    state = {
        TaskSelector: () => <div>TaskSelector</div>,
        Button: () => <div>Button</div>
    };

    componentDidMount() {
        setTimeout(() => { this.setState({ TaskSelector: loadModule(MS_NAMES.TASK_SELECTOR) }); }, 1000);
        setTimeout(() => { this.setState({ TaskSelector: () => <div>TaskSelector</div> }); }, 2000);
        setTimeout(() => { this.setState({ TaskSelector: loadModule(MS_NAMES.TASK_SELECTOR) }); }, 3000);
        setTimeout(() => { this.setState({ TaskSelector: () => <div>TaskSelector</div> }); }, 4000);
        setTimeout(() => { this.setState({ TaskSelector: loadModule(MS_NAMES.TASK_SELECTOR) }); }, 5000);

        setTimeout(() => { this.setState({ Button: loadModule(MS_NAMES.COMPONENTS, { component: 'Button' }) }); }, 1000);
        setTimeout(() => { this.setState({ Button: () => <div>Button</div> }); }, 2000);
        setTimeout(() => { this.setState({ Button: loadModule(MS_NAMES.COMPONENTS, { component: 'Button' }) }); }, 3000);
    }

    render() {
        const { TaskSelector, Button } = this.state;

        return (
            <Fragment>
                <h2>Toggle Components</h2>
                <TaskSelector />
                <Button>lazy loaded from static server</Button>
            </Fragment>
        )
    }
};
