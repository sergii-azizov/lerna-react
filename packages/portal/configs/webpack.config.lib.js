const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const name = require('../package.json').name;
const baseWebpackConfig = require('../../../configs/webpack.config.dev.js');

module.exports = webpackMerge(baseWebpackConfig, {
    entry: { [name]: path.resolve(__dirname, '../src/index.js') },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: "./src/index.html",
            publicPath: baseWebpackConfig.output.publicPath
        })
    ]
});
