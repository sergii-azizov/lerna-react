const path = require('path');
const webpackMerge = require('webpack-merge');
const version = require('../package.json').version;
const baseWebpackConfig = require('../../../configs/webpack.config.dev.js');

module.exports = webpackMerge(baseWebpackConfig, {
    entry: {
        button: path.resolve(__dirname, '../src/button/component.js'),
        icon: path.resolve(__dirname, '../src/icon/component.js')
    },
    output: {
        filename: `js/v${version}.shared.[name].js`,
        library: 'shared.[name]'
    }
});
