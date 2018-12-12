(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("connectedReactRouter"), require("History"), require("lodash"), require("propTypes"), require("React"), require("ReactDOM"), require("reactRedux"), require("reactRouterDom"), require("redux"), require("ReduxThunk"));
	else if(typeof define === 'function' && define.amd)
		define("vendor", ["connectedReactRouter", "History", "lodash", "propTypes", "React", "ReactDOM", "reactRedux", "reactRouterDom", "redux", "ReduxThunk"], factory);
	else if(typeof exports === 'object')
		exports["vendor"] = factory(require("connectedReactRouter"), require("History"), require("lodash"), require("propTypes"), require("React"), require("ReactDOM"), require("reactRedux"), require("reactRouterDom"), require("redux"), require("ReduxThunk"));
	else
		root["vendor"] = factory(root["connectedReactRouter"], root["History"], root["lodash"], root["propTypes"], root["React"], root["ReactDOM"], root["reactRedux"], root["reactRouterDom"], root["redux"], root["ReduxThunk"]);
})(window.__APP__, function(__WEBPACK_EXTERNAL_MODULE_connected_react_router__, __WEBPACK_EXTERNAL_MODULE_history__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE_react_redux__, __WEBPACK_EXTERNAL_MODULE_react_router_dom__, __WEBPACK_EXTERNAL_MODULE_redux__, __WEBPACK_EXTERNAL_MODULE_redux_thunk__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://rawcdn.githack.com/sergii-azizov/lerna-react/b2390270ecef13dc8484334a9889d52487f80c11/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../vendor/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../configs/namespace.config.js":
/*!******************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/configs/namespace.config.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
    APP: '__APP__'
};


/***/ }),

/***/ "../vendor/src/index.js":
/*!******************************!*\
  !*** ../vendor/src/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../configs/namespace.config */ "../../configs/namespace.config.js");
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__);

window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__["APP"]].NODE_ENV = "development";
window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__["APP"]].React = window.React = __webpack_require__(/*! react */ "react");
window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__["APP"]].ReduxThunk = window.ReduxThunk = __webpack_require__(/*! redux-thunk */ "redux-thunk");
window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__["APP"]].ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__["APP"]].propTypes = __webpack_require__(/*! prop-types */ "prop-types");
window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__["APP"]].reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");
window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__["APP"]].History = __webpack_require__(/*! history */ "history");
window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__["APP"]].connectedReactRouter = __webpack_require__(/*! connected-react-router */ "connected-react-router");
window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__["APP"]].redux = __webpack_require__(/*! redux */ "redux");
window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__["APP"]].reactRedux = __webpack_require__(/*! react-redux */ "react-redux");
window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__["APP"]].lodash = __webpack_require__(/*! lodash */ "lodash");

/***/ }),

/***/ "connected-react-router":
/*!***************************************!*\
  !*** external "connectedReactRouter" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_connected_react_router__;

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "History" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_history__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "propTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "react-redux":
/*!*****************************!*\
  !*** external "reactRedux" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;

/***/ }),

/***/ "react-router-dom":
/*!*********************************!*\
  !*** external "reactRouterDom" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_router_dom__;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_redux__;

/***/ }),

/***/ "redux-thunk":
/*!*****************************!*\
  !*** external "ReduxThunk" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_redux_thunk__;

/***/ })

/******/ });
});
//# sourceMappingURL=vendor.js.map