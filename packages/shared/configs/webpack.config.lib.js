const path = require('path');
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('../../../config/webpack.config.dev.js');

module.exports = webpackMerge(baseWebpackConfig, {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'shared.js',
        library: {
            root: 'shared',
            amd: "shared",
            commonjs: "shared"
        }
    }
});
