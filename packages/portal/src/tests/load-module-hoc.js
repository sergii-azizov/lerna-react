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

const modules =  {
    [PACKAGE_NAMES.components]: ['Button'],
    [PACKAGE_NAMES.scripting]: ['Scripting']
};

const withConnect = ({ components: { increment } }) => connect(null, { increment });

export default asyncImport(modules, { withConnect })(LoadModuleHOCScreen)
