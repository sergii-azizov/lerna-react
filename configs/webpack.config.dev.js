const path = require('path');

module.exports = {
    output: {
        libraryTarget: 'window',
        path: path.resolve('../../dist')
    },
    externals: {
        "react": "React",
        "scriptjs": "$script",
        "react-dom": "ReactDom",
        "lodash": 'lodash',
        "prop-types": "PropTypes",
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
                            localIdentName: process.env.NODE_ENV === 'development' ? '[path]-[local]' : '[hash:base64]'
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    }
};
