(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reactRedux"), require("connectedReactRouter"), require("core"), require("ReactDOM"), require("reactRouterDom"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define("portal", ["reactRedux", "connectedReactRouter", "core", "ReactDOM", "reactRouterDom", "React"], factory);
	else if(typeof exports === 'object')
		exports["portal"] = factory(require("reactRedux"), require("connectedReactRouter"), require("core"), require("ReactDOM"), require("reactRouterDom"), require("React"));
	else
		root["portal"] = factory(root["reactRedux"], root["connectedReactRouter"], root["core"], root["ReactDOM"], root["reactRouterDom"], root["React"]);
})(window.__APP__, function(__WEBPACK_EXTERNAL_MODULE_react_redux__, __WEBPACK_EXTERNAL_MODULE_connected_react_router__, __WEBPACK_EXTERNAL_MODULE_core__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE_react_router_dom__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core */ \"core\");\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens */ \"./src/screens/index.js\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.scss */ \"./src/app.scss\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar App = function App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/lerna-react/index.html\"\n  }, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/lerna-react/index.html/load-module\"\n  }, \"Load Modules\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/lerna-react/index.html\",\n    exact: true,\n    component: _screens__WEBPACK_IMPORTED_MODULE_3__[\"Home\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/lerna-react/index.html/load-module\",\n    component: _screens__WEBPACK_IMPORTED_MODULE_3__[\"LoadModule\"]\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack://%5Bname%5D/./src/app.js?");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"root\":\"src-957ii\"};\n\n//# sourceURL=webpack://%5Bname%5D/./src/app.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core */ \"core\");\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(React.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n  store: core__WEBPACK_IMPORTED_MODULE_3__[\"store\"]\n}, React.createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_2__[\"ConnectedRouter\"], {\n  history: core__WEBPACK_IMPORTED_MODULE_3__[\"history\"]\n}, React.createElement(_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))), document.getElementById('root'));\n\n//# sourceURL=webpack://%5Bname%5D/./src/index.js?");

/***/ }),

/***/ "./src/screens/home.js":
/*!*****************************!*\
  !*** ./src/screens/home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  _inherits(Home, _PureComponent);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, React.createElement(\"h2\", null, \"Home\"));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n\n;\n\n//# sourceURL=webpack://%5Bname%5D/./src/screens/home.js?");

/***/ }),

/***/ "./src/screens/index.js":
/*!******************************!*\
  !*** ./src/screens/index.js ***!
  \******************************/
/*! exports provided: LoadModule, Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-module */ \"./src/screens/load-module.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LoadModule\", function() { return _load_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/screens/home.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/screens/index.js?");

/***/ }),

/***/ "./src/screens/load-module.js":
/*!************************************!*\
  !*** ./src/screens/load-module.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ \"core\");\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Button = Object(core__WEBPACK_IMPORTED_MODULE_1__[\"loadModule\"])(core__WEBPACK_IMPORTED_MODULE_1__[\"MS_NAMES\"].COMPONENTS, {\n  componentName: 'Button'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, React.createElement(\"h2\", null, \"Load Module\"), React.createElement(Button, null, \"Button\"));\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/screens/load-module.js?");

/***/ }),

/***/ "connected-react-router":
/*!***************************************!*\
  !*** external "connectedReactRouter" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_connected_react_router__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22connectedReactRouter%22?");

/***/ }),

/***/ "core":
/*!***********************!*\
  !*** external "core" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_core__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22core%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22ReactDOM%22?");

/***/ }),

/***/ "react-redux":
/*!*****************************!*\
  !*** external "reactRedux" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22reactRedux%22?");

/***/ }),

/***/ "react-router-dom":
/*!*********************************!*\
  !*** external "reactRouterDom" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_router_dom__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22reactRouterDom%22?");

/***/ })

/******/ });
});