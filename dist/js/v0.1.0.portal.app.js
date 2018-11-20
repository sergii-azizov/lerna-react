/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/sass-loader/lib/loader.js!./src/app.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/css-loader??ref--5-1!/Users/saziz/projects/training/lerna-react/node_modules/sass-loader/lib/loader.js!./src/app.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"../../node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"._957iieSey2iubdUH55Nmc {\\n  font-family: Arial;\\n  font-size: 12px; }\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"root\": \"_957iieSey2iubdUH55Nmc\"\n};\n\n//# sourceURL=webpack:///./src/app.scss?/Users/saziz/projects/training/lerna-react/node_modules/css-loader??ref--5-1!/Users/saziz/projects/training/lerna-react/node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "../core/index.js":
/*!************************!*\
  !*** ../core/index.js ***!
  \************************/
/*! exports provided: lazy, withRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy */ \"../core/lazy/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lazy\", function() { return _lazy__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"]; });\n\n/* harmony import */ var _with_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-render */ \"../core/with-render/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"withRender\", function() { return _with_render__WEBPACK_IMPORTED_MODULE_1__[\"withRender\"]; });\n\n\n\n\n//# sourceURL=webpack:///../core/index.js?");

/***/ }),

/***/ "../core/lazy/hoc.js":
/*!***************************!*\
  !*** ../core/lazy/hoc.js ***!
  \***************************/
/*! exports provided: lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lazy\", function() { return lazy; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var scriptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scriptjs */ \"../../node_modules/scriptjs/dist/script.js\");\n/* harmony import */ var scriptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scriptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _with_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../with-render */ \"../core/with-render/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar lazy = function lazy(config) {\n  return function (name, context) {\n    var Lazy =\n    /*#__PURE__*/\n    function (_Component) {\n      _inherits(Lazy, _Component);\n\n      function Lazy() {\n        var _getPrototypeOf2;\n\n        var _this;\n\n        _classCallCheck(this, Lazy);\n\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Lazy)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n          loaded: false,\n          loading: false,\n          error: null,\n          component: null\n        });\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"changeState\", function () {\n          var component = window[_this.componentName] && window[_this.componentName].default;\n\n          _this.setState({\n            loaded: true,\n            loading: false,\n            component: component\n          });\n        });\n\n        return _this;\n      }\n\n      _createClass(Lazy, [{\n        key: \"componentDidMount\",\n        value: function componentDidMount() {\n          this.componentName = \"\".concat(config.context || context, \".\").concat(name);\n          this.loadScript(this.componentName);\n        }\n      }, {\n        key: \"loadScript\",\n        value: function loadScript(name) {\n          if (!window[this.componentName]) {\n            var url = \"\".concat(config.server, \"/v\").concat(config.version, \".\").concat(name, \".js\");\n            this.setState({\n              loading: true,\n              component: config.loadingComponent\n            });\n            console.info(\"[Module][\".concat(name, \"][Loaded]\"), url);\n            return scriptjs__WEBPACK_IMPORTED_MODULE_1___default()(\"\".concat(config.server, \"/v\").concat(config.version, \".\").concat(name, \".js\"), this.changeState);\n          }\n\n          console.info(\"[Module][\".concat(name, \"][FromCache]\"));\n          this.changeState();\n        }\n      }, {\n        key: \"componentWillUnmount\",\n        value: function componentWillUnmount() {//window[this.componentName] = null;\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          var LazyLoadedComponent = this.state.component;\n          return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, LazyLoadedComponent && React.createElement(LazyLoadedComponent, this.props));\n        }\n      }]);\n\n      return Lazy;\n    }(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n    return Object(_with_render__WEBPACK_IMPORTED_MODULE_2__[\"withRender\"])()(Lazy);\n  };\n};\n\n//# sourceURL=webpack:///../core/lazy/hoc.js?");

/***/ }),

/***/ "../core/lazy/index.js":
/*!*****************************!*\
  !*** ../core/lazy/index.js ***!
  \*****************************/
/*! exports provided: lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoc */ \"../core/lazy/hoc.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lazy\", function() { return _hoc__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"]; });\n\n\n\n//# sourceURL=webpack:///../core/lazy/index.js?");

/***/ }),

/***/ "../core/with-render/hoc.js":
/*!**********************************!*\
  !*** ../core/with-render/hoc.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"../../node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return function (WrappedComponent) {\n    var WithRender = function WithRender(props) {\n      return true ? React.createElement(WrappedComponent, Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"omit\"])(props, ['rendered']), props.children) : undefined;\n    };\n\n    return WithRender;\n  };\n});\n\n//# sourceURL=webpack:///../core/with-render/hoc.js?");

/***/ }),

/***/ "../core/with-render/index.js":
/*!************************************!*\
  !*** ../core/with-render/index.js ***!
  \************************************/
/*! exports provided: withRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoc */ \"../core/with-render/hoc.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"withRender\", function() { return _hoc__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///../core/with-render/index.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, private, scripts, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"app-portal\",\"version\":\"0.1.0\",\"private\":true,\"scripts\":{\"build\":\"webpack --mode=production --config ./configs/webpack.config.lib.js\",\"build:watch\":\"webpack --watch --mode=development --config ./configs/webpack.config.lib.js\"}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"../../node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.scss */ \"./src/app.scss\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ \"./src/shared.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Button = Object(_shared__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('button');\n\nvar Index =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Index, _Component);\n\n  function Index() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      component: function component() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, \"Icon\");\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(Index, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var Icon = Object(_shared__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('icon');\n      setTimeout(function () {\n        _this2.setState({\n          component: Icon\n        });\n      }, 3000);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var Icon = Object(_shared__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('icon');\n      var Icon2 = this.state.component;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Home\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon2, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, null, \"lazy loaded from static server\"));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n;\n\nvar About = function About() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"About\");\n};\n\nvar Users = function Users() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Users\");\n};\n\nvar App = function App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _app_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/about/\"\n  }, \"About\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/users/\"\n  }, \"Users\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\",\n    component: Index\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/about/\",\n    component: About\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/users/\",\n    component: Users\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/sass-loader/lib/loader.js!./app.scss */ \"../../node_modules/css-loader/index.js?!../../node_modules/sass-loader/lib/loader.js!./src/app.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"../../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/app.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor.js */ \"./src/vendor.js\");\n/* harmony import */ var _vendor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../../node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(React.createElement(_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shared.js":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ \"../core/index.js\");\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ \"./package.json\", 1);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])({\n  context: 'shared',\n  server: 'https://rawcdn.githack.com/sergii-azizov/lerna-react/cb6b89c5e9b1a490fff96eef88aa429a24b81474/dist/js',\n  version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n}));\n\n//# sourceURL=webpack:///./src/shared.js?");

/***/ }),

/***/ "./src/vendor.js":
/*!***********************!*\
  !*** ./src/vendor.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.React = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\nwindow.ReactDom = __webpack_require__(/*! react-dom */ \"../../node_modules/react-dom/index.js\");\nwindow.lodash = __webpack_require__(/*! lodash */ \"../../node_modules/lodash/lodash.js\");\nwindow.loadjs = __webpack_require__(/*! loadjs */ \"../../node_modules/loadjs/dist/loadjs.umd.js\");\nwindow.reactRouterDom = __webpack_require__(/*! react-router-dom */ \"../../node_modules/react-router-dom/es/index.js\");\nwindow.$script = __webpack_require__(/*! scriptjs */ \"../../node_modules/scriptjs/dist/script.js\");\nwindow.propTypes = __webpack_require__(/*! prop-types */ \"../../node_modules/prop-types/index.js\");\n\n//# sourceURL=webpack:///./src/vendor.js?");

/***/ })

/******/ });