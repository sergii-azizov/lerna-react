import { Fragment, Component } from "react";
import { asyncImportComponent, PACKAGE_NAMES } from 'core';

export default class ParallelToggleComponentsMountingScreen extends Component {
    state = {
        Button1: () => <div>loading Button-1</div>,
        Button2: () => <div>loading Button-2</div>,
        Button3: () => <div>loading Button-3</div>,
        Button4: () => <div>loading Button-5</div>,
        Button5: () => <div>loading Button-5</div>,

        Button11: () => <div>loading Button-1</div>,
        Button22: () => <div>loading Button-2</div>,
        Button33: () => <div>loading Button-3</div>,
        Button44: () => <div>loading Button-5</div>,
        Button55: () => <div>loading Button-5</div>,

        Button111: () => <div>loading Button-1</div>,
        Button222: () => <div>loading Button-2</div>,
        Button333: () => <div>loading Button-3</div>,
        Button444: () => <div>loading Button-5</div>,
        Button555: () => <div>loading Button-5</div>,

        Button1111: () => <div>loading Button-1</div>,
        Button2222: () => <div>loading Button-2</div>,
        Button3333: () => <div>loading Button-3</div>,
        Button4444: () => <div>loading Button-5</div>,
        Button5555: () => <div>loading Button-5</div>,

    };

    add = () => {
        this.setState({
            Button1: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button2: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button3: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button4: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button5: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),

            Button11: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button22: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button33: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button44: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button55: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),

            Button111: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button222: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button333: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button444: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button555: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),

            Button1111: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button2222: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button3333: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button4444: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }),
            Button5555: asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' })
        });

        setTimeout(this.remove, 2000);
    };

    remove = () => {
        this.setState({
            Button1: () => <div>removed Button</div>,
            Button2: () => <div>removed Button</div>,
            Button3: () => <div>removed Button</div>,
            Button4: () => <div>removed Button</div>,
            Button5: () => <div>removed Button</div>,

            Button11: () => <div>removed Button</div>,
            Button22: () => <div>removed Button</div>,
            Button33: () => <div>removed Button</div>,
            Button44: () => <div>removed Button</div>,
            Button55: () => <div>removed Button</div>,

            Button111: () => <div>removed Button</div>,
            Button222: () => <div>removed Button</div>,
            Button333: () => <div>removed Button</div>,
            Button444: () => <div>removed Button</div>,
            Button555: () => <div>removed Button</div>,

            Button1111: () => <div>removed Button</div>,
            Button2222: () => <div>removed Button</div>,
            Button3333: () => <div>removed Button</div>,
            Button4444: () => <div>removed Button</div>,
            Button5555: () => <div>removed Button</div>,
        });
    };

    componentDidMount() {
        setInterval(this.add, 3000);
    }

    render() {
        const {
            Button1,
            Button2,
            Button3,
            Button4,
            Button5,

            Button11,
            Button22,
            Button33,
            Button44,
            Button55,

            Button111,
            Button222,
            Button333,
            Button444,
            Button555,

            Button1111,
            Button2222,
            Button3333,
            Button4444,
            Button5555,
        } = this.state;

        return (
            <Fragment>
                <h2>Toggle Components Mounting</h2>
                <Button1>Button</Button1>
                <Button2>Button</Button2>
                <Button3>Button</Button3>
                <Button4>Button</Button4>
                <Button5>Button</Button5>

                <Button11>Button</Button11>
                <Button22>Button</Button22>
                <Button33>Button</Button33>
                <Button44>Button</Button44>
                <Button55>Button</Button55>

                <Button111>Button</Button111>
                <Button222>Button</Button222>
                <Button333>Button</Button333>
                <Button444>Button</Button444>
                <Button555>Button</Button555>

                <Button1111>Button</Button1111>
                <Button2222>Button</Button2222>
                <Button3333>Button</Button3333>
                <Button4444>Button</Button4444>
                <Button5555>Button</Button5555>
            </Fragment>
        )
    }
}
