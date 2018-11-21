const path = require('path');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

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
        "core": "core",
        "react": "React",
        "scriptjs": "$script",
        "react-dom": "ReactDOM",
        "lodash": 'lodash',
        "prop-types": "propTypes",
        "react-router-dom": "reactRouterDom"
    },
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
                    { loader: 'style-loader' },
                    ExtractCssChunks.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
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
        new ExtractCssChunks({
            filename: "css/[name].css",
            hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
            orderWarning: true, // Disable to remove warnings about conflicting order between imports
            reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
            cssModules: true // if you use cssModules, this can help.
        })
    ]
};
