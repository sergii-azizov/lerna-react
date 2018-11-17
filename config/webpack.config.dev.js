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
            }
        ]
    }
};
