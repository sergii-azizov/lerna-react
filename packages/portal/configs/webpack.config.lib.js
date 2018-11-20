const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const version = require('../package.json').version;
const baseWebpackConfig = require('../../../configs/webpack.config.dev.js');

module.exports = webpackMerge(baseWebpackConfig, {
    entry: {
        vendor: Object.keys(baseWebpackConfig.externals),
        app: path.resolve(__dirname, '../src/index.js')
    },
    externals: [],
    output: {
        filename: `js/v${version}.portal.[name].js`,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./src/index.html"
        })
    ]
});
