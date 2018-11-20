const path = require('path');

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
    }
};
