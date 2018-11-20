const path = require('path');
const webpackMerge = require('webpack-merge');
const packageJSON = require('../package.json');
const baseWebpackConfig = require('../../../configs/webpack.config.dev.js');

const { name } = packageJSON;

module.exports = webpackMerge(baseWebpackConfig, {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: `js/${name}.js`,
        library: name
    }
});
