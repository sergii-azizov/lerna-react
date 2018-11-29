const path = require('path');
const webpackMerge = require('webpack-merge');
const packageJSON = require('../package.json');
const baseWebpackConfig = require('../../../configs/webpack.config.dev.js');

const { name } = packageJSON;

module.exports = webpackMerge(baseWebpackConfig, {
    entry: { [name]: path.resolve(__dirname, '../src/index.js') }
});
