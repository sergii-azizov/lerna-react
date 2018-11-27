const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    output: {
        filename: `js/[name].js`,
        libraryTarget: 'umd',
        path: path.resolve('../../dist')
    },
    resolve: {
        alias: {
            core: path.resolve('../../dist/js/core.js')
        }
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "prop-types": "propTypes",
        "react-router-dom": "reactRouterDom",
        "redux": "redux",
        "react-redux": "reactRedux",
        "connected-react-router": "connectedReactRouter",
        "history": "History",
        "lodash": 'lodash',
        "core": "core"
    },
    devServer: {
        historyApiFallback: true
    },
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('../../configs/babel.config.js')
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: process.env.NODE_ENV === 'development',
                            localIdentName: process.env.NODE_ENV === 'development' ? '[path]-[folder]-[local]' : '[folder]-[hash:base64:5]'
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        })
    ],
};
