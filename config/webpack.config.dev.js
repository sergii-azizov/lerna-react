const path = require('path');

module.exports = {
    output: {
        libraryTarget: 'umd',
        path: path.resolve('./dist')
    },
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
            },
            {
                test: /\.scss/,
                use: [
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
