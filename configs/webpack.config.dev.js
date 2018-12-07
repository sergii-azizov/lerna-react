const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const APP = require("./namespace.config").APP;
const externals = require("./vendors.config");

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    output: {
        filename: `js/[name].js`,
        libraryTarget: 'umd',
        library: '[name]',
        path: path.resolve(__dirname, '../dist'),
        umdNamedDefine: true,
        globalObject: `window.${APP}`
    },
    mode: process.env.NODE_ENV,
    resolve: {
        alias: {
            core: path.resolve(__dirname, '../dist/js/core.js')
        }
    },
    externals,
    devtool: isDevelopment ? 'source-map' : undefined,
    watch: process.env.WATCH === 'true',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /packages/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve(__dirname, '../configs/babel.config.js')
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        })
    ]
};
