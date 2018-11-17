const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendors: path.resolve(__dirname, '../node_modules/app-vendors/build/app-vendors.js'),
        app: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../build'),
    },
    mode: 'development',
    externals: {
        "react": "React",
        "react-dom": "ReactDom"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./src/index.html"
        })
    ]
};
