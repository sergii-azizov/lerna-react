import { APP } from '../../../configs/namespace.config';

window[APP].NODE_ENV = process.env.NODE_ENV;

window[APP].React = window.React = require('react');
window[APP].ReactDOM = require('react-dom');
window[APP].propTypes = require('prop-types');

window[APP].reactRouterDom = require('react-router-dom');
window[APP].History = require('history');
window[APP].connectedReactRouter = require('connected-react-router');

window[APP].redux = require('redux');
window[APP].reactRedux = require('react-redux');

window[APP].lodash = require('lodash');
