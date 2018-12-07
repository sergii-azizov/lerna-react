const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const express = require('express');
const webpackConfig = require('./configs/webpack.config.lib');

const app = express();

app.use(webpackDevMiddleware(webpack(webpackConfig), {
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 3000
}));

const packages = ['vendor', 'core'];

packages.forEach(pkg =>  {
    app.get(`/js/${pkg}.js`, (req, res) => res.sendFile(path.join(__dirname, `../../dist/js/${pkg}.js`)));
    app.get(`/js/${pkg}.js.map`, (req, res) => res.sendFile(path.join(__dirname, `../../dist/js/${pkg}.js.map`)));
    app.get(`/css/${pkg}.css`, (req, res) => res.sendFile(path.join(__dirname, `../../dist/css/${pkg}.css`)));
    app.get(`/css/${pkg}.css.map`, (req, res) => res.sendFile(path.join(__dirname, `../../dist/css/${pkg}.css.map`)));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
