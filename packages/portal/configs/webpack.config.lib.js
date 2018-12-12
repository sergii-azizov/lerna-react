const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const name = require('../package.json').name;
const baseWebpackConfig = require('../../../configs/webpack.config.dev.js');

module.exports = webpackMerge(baseWebpackConfig, {
    entry: {
        vendor: path.resolve(__dirname, '../../vendor/src/index.js'),
        core: path.resolve(__dirname, '../../core/src/index.js'),
        portal: path.resolve(__dirname, '../src/index.js')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
});
