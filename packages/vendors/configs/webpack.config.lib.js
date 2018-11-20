const path = require('path');
const webpackMerge = require('webpack-merge');
const name = require('../package.json').name;
const baseWebpackConfig = require('../../../configs/webpack.config.dev.js');

module.exports = webpackMerge(baseWebpackConfig, {
    entry: { [name]: path.resolve(__dirname, '../src/index.js') },
    output: { library: name },
    externals: []
});
