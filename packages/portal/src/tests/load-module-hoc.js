import { connect } from 'react-redux';
import { PACKAGE_NAMES, asyncImport } from 'core';

const LoadModuleHOCScreen = ({ components: { Button, Counter }, increment}) => {
        return (
            <div>
                <h2>Load Module</h2>
                <Counter />
                <button onClick={increment}>+1</button>
            </div>
        );
};

const packages =  [PACKAGE_NAMES.components, PACKAGE_NAMES.scripting];
const withConnect = ({ components: { increment } }) => connect(null, { increment });

export default asyncImport(packages, { withConnect })(LoadModuleHOCScreen)
