import { Fragment, PureComponent } from "react";
import { PACKAGE_NAMES, asyncImportComponent } from "core";


const Module = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' }, () => (
    import(/* webpackChunkName: 'components' */ `../../../components/src/index.js`)
));


export default class HomeScreen extends PureComponent {
    render() {
        return (
            <Fragment>
                <h2>Home</h2>
                <p>some contsent</p>
                <Module>ASASasasdasddasd2sS</Module>
            </Fragment>
        );
    }
};
