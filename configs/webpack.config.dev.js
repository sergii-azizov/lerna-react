const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const APP = require("./namespace.config").APP;
const externals = require("./vendors.config");

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    output: {
        filename: `js/[name].js`,
        libraryTarget: 'umd',
        library: '[name]',
        path: path.resolve('../../dist'),
        umdNamedDefine: true,
        globalObject: `window.${APP}`
    },
    resolve: {
        alias: {
            core: path.resolve('../../dist/js/core.js')
        }
    },
    externals,
    devServer: {
        historyApiFallback: true
    },
    devtool: isDevelopment ? 'source-map' : undefined,
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /packages/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('../../configs/babel.config.js')
                }
            },
            {
                test: /\.scss$/,
                include: /packages/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment,
                            localIdentName: isDevelopment ? '[path]-[folder]-[local]' : '[folder]-[hash:base64:5]'
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
