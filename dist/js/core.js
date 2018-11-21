(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("propTypes"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "propTypes", "React"], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory(require("lodash"), require("propTypes"), require("React"));
	else
		root["core"] = factory(root["lodash"], root["propTypes"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: lazy, withRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy */ \"./src/lazy/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lazy\", function() { return _lazy__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"]; });\n\n/* harmony import */ var _with_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-render */ \"./src/with-render/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"withRender\", function() { return _with_render__WEBPACK_IMPORTED_MODULE_1__[\"withRender\"]; });\n\n\n\n\n//# sourceURL=webpack://core/./src/index.js?");

/***/ }),

/***/ "./src/lazy/hoc.js":
/*!*************************!*\
  !*** ./src/lazy/hoc.js ***!
  \*************************/
/*! exports provided: lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lazy\", function() { return lazy; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _with_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../with-render */ \"./src/with-render/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar head = document.getElementsByTagName('head')[0];\nvar lazy = function lazy(config) {\n  return function (name) {\n    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    var Lazy =\n    /*#__PURE__*/\n    function (_Component) {\n      _inherits(Lazy, _Component);\n\n      function Lazy() {\n        var _getPrototypeOf2;\n\n        var _this;\n\n        _classCallCheck(this, Lazy);\n\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Lazy)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {});\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"src\", \"\".concat(config.server, \"/js/\").concat(name, \".js\"));\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"href\", \"\".concat(config.server, \"/css/\").concat(name, \".css\"));\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"changeState\", function (url) {\n          _this.setState({\n            component: window[name] && window[name].default\n          }, function () {\n            _this.notify('Loaded', url);\n          });\n        });\n\n        return _this;\n      }\n\n      _createClass(Lazy, [{\n        key: \"componentDidMount\",\n        value: function componentDidMount() {\n          this.notify('Mounted');\n          this.loadScript();\n        }\n      }, {\n        key: \"loadChunk\",\n        value: function loadChunk(_ref) {\n          var path = _ref.path,\n              _ref$type = _ref.type,\n              type = _ref$type === void 0 ? 'script' : _ref$type,\n              fn = _ref.fn;\n          var chunk = document.createElement(type);\n          console.log(\"==> \", chunk);\n          chunk.onload = fn;\n          chunk.async = type !== 'link' && 1;\n          chunk[type === 'link' ? 'href' : 'src'] = path;\n          head.insertBefore(chunk, head.lastChild);\n        }\n      }, {\n        key: \"notify\",\n        value: function notify(state) {\n          var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n          console.info(\"[Module][\".concat(name, \"][\").concat(state, \"]\"), url);\n        }\n      }, {\n        key: \"loadScript\",\n        value: function loadScript() {\n          var _this2 = this;\n\n          if (!window[name]) {\n            this.setState({\n              component: config.loadingComponent\n            });\n            this.loadChunk({\n              path: this.href,\n              type: 'link',\n              fn: function fn() {\n                return _this2.notify('Loaded', _this2.href);\n              }\n            });\n            this.loadChunk({\n              path: this.src,\n              fn: function fn() {\n                return _this2.changeState(_this2.src);\n              }\n            });\n            return;\n          }\n\n          this.changeState('FromCache');\n        }\n      }, {\n        key: \"componentWillUnmount\",\n        value: function componentWillUnmount() {\n          if (params.clearOnUnMount) {\n            document.querySelector(\"script[src=\\\"\".concat(this.src, \"\\\"]\")).remove();\n            document.querySelector(\"link[href=\\\"\".concat(this.href, \"\\\"]\")).remove();\n            delete window[name];\n            this.notify('Cleared');\n          }\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          var LazyLoadedComponent = this.state.component;\n          return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, LazyLoadedComponent && React.createElement(LazyLoadedComponent, this.props));\n        }\n      }]);\n\n      return Lazy;\n    }(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n    return Object(_with_render__WEBPACK_IMPORTED_MODULE_2__[\"withRender\"])()(Lazy);\n  };\n};\nlazy.propTypes = {\n  server: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired,\n  loadingComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"node\"]\n};\nlazy.defaultProps = {\n  loadingComponent: null\n};\n\n//# sourceURL=webpack://core/./src/lazy/hoc.js?");

/***/ }),

/***/ "./src/lazy/index.js":
/*!***************************!*\
  !*** ./src/lazy/index.js ***!
  \***************************/
/*! exports provided: lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoc */ \"./src/lazy/hoc.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lazy\", function() { return _hoc__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"]; });\n\n\n\n//# sourceURL=webpack://core/./src/lazy/index.js?");

/***/ }),

/***/ "./src/with-render/hoc.js":
/*!********************************!*\
  !*** ./src/with-render/hoc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return function (WrappedComponent) {\n    var WithRender = function WithRender(props) {\n      return !props.rendered ? null : !props.hidden ? React.createElement(WrappedComponent, Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"omit\"])(props, ['rendered']), props.children) : React.createElement(\"div\", {\n        hidden: props.hidden\n      }, React.createElement(WrappedComponent, Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"omit\"])(props, ['rendered']), props.children));\n    };\n\n    WithRender.propTypes = {\n      hidden: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"bool\"],\n      rendered: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"bool\"],\n      children: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__[\"oneOfType\"])([prop_types__WEBPACK_IMPORTED_MODULE_0__[\"node\"], prop_types__WEBPACK_IMPORTED_MODULE_0__[\"func\"]])\n    };\n    WithRender.defaultProps = {\n      hidden: false,\n      rendered: true,\n      children: null\n    };\n    return WithRender;\n  };\n});\n\n//# sourceURL=webpack://core/./src/with-render/hoc.js?");

/***/ }),

/***/ "./src/with-render/index.js":
/*!**********************************!*\
  !*** ./src/with-render/index.js ***!
  \**********************************/
/*! exports provided: withRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoc */ \"./src/with-render/hoc.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"withRender\", function() { return _hoc__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack://core/./src/with-render/index.js?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://core/external_%22lodash%22?");

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "propTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://core/external_%22propTypes%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://core/external_%22React%22?");

/***/ })

/******/ });
});