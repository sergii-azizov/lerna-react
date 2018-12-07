import { Fragment, PureComponent } from "react";
import { asyncImportComponent, PACKAGE_NAMES } from 'core';

export default class ToggleModulesScreen extends PureComponent {
    state = {
        TaskSelector: () => <div>TaskSelector</div>,
        Button: () => <div>Button</div>
    };

    componentDidMount() {
        setTimeout(() => { this.setState({ TaskSelector: asyncImportComponent(PACKAGE_NAMES.taskSelector) }); }, 1000);
        setTimeout(() => { this.setState({ TaskSelector: () => <div>TaskSelector</div> }); }, 2000);
        setTimeout(() => { this.setState({ TaskSelector: asyncImportComponent(PACKAGE_NAMES.taskSelector) }); }, 3000);
        setTimeout(() => { this.setState({ TaskSelector: () => <div>TaskSelector</div> }); }, 4000);
        setTimeout(() => { this.setState({ TaskSelector: asyncImportComponent(PACKAGE_NAMES.taskSelector) }); }, 5000);

        setTimeout(() => { this.setState({ Button: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }) }); }, 1000);
        setTimeout(() => { this.setState({ Button: () => <div>Button</div> }); }, 2000);
        setTimeout(() => { this.setState({ Button: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }) }); }, 3000);
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
