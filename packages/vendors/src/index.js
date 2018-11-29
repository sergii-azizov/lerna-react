import { APP } from '../../../configs/namespace.config';

window[APP] = {};

window[APP].React = window.React = require('react');
window[APP].ReactDOM = window.ReactDOM = require('react-dom');
window[APP].propTypes = window.propTypes = require('prop-types');

window[APP].reactRouterDom = window.reactRouterDom = require('react-router-dom');
window[APP].History = window.History = require('history');
window[APP].connectedReactRouter = window.connectedReactRouter = require('connected-react-router');

window[APP].redux = window.redux = require('redux');
window[APP].reactRedux = window.reactRedux = require('react-redux');

window[APP].lodash = window.lodash = require('lodash');
