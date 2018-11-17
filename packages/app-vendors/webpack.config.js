const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    mode: 'development',
    output: {
        filename: 'app-vendors.js',
        library: {
            root: 'app-vendors',
            amd: "appVendors",
            commonjs: "appVendors"
        },
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './build'),
    }
};
