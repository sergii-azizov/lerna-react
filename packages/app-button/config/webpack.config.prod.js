const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    mode: 'development',
    output: {
        filename: 'app-button.js',
        library: {
            root: 'app-button',
            amd: "appButton",
            commonjs: "appButton"
        },
        libraryTarget: 'umd',
        path: path.resolve(__dirname, '../build'),
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
