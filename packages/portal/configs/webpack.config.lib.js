const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('../../../config/webpack.config.dev.js');

module.exports = webpackMerge(baseWebpackConfig, {
    entry: {
        vendor: ['react', 'react-dom'],
        app: path.resolve(__dirname, '../src/index.js')
    },
    externals: [],
    output: {
        filename: '[name].js'
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
