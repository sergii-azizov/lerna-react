(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("core"), require("React"), require("ReactDOM"), require("reactRouterDom"));
	else if(typeof define === 'function' && define.amd)
		define(["core", "React", "ReactDOM", "reactRouterDom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("core"), require("React"), require("ReactDOM"), require("reactRouterDom")) : factory(root["core"], root["React"], root["ReactDOM"], root["reactRouterDom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_core__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE_react_router_dom__) {
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

/***/ "../../configs/static.serve.config.js":
/*!*********************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/configs/static.serve.config.js ***!
  \*********************************************************************************/
/*! exports provided: STATIC_SERVER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STATIC_SERVER\", function() { return STATIC_SERVER; });\nvar STATIC_SERVERS = {\n  DT: 'https://rawcdn.githack.com/sergii-azizov/lerna-react/46b89d12ef13061446b5dbbbf64c09d6eb9fb9a7/dist'\n};\nvar STATIC_SERVER = STATIC_SERVERS.DT;\n\n//# sourceURL=webpack:////Users/saziz/projects/training/lerna-react/configs/static.serve.config.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _toggle_components_mounting_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-components-mounting/index.js */ \"./src/toggle-components-mounting/index.js\");\n/* harmony import */ var _toggle_components_mounting_index2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle-components-mounting/index2.js */ \"./src/toggle-components-mounting/index2.js\");\n/* harmony import */ var _toggle_components_mounting_index3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggle-components-mounting/index3.js */ \"./src/toggle-components-mounting/index3.js\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.scss */ \"./src/app.scss\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar App = function App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _app_scss__WEBPACK_IMPORTED_MODULE_5___default.a.root\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/lerna-react/index.html/decrease-mount-count\"\n  }, \"Toggle Components Mounting\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/lerna-react/index.html/decrease-mount-count2\"\n  }, \"Toggle Components Mounting 2\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/lerna-react/index.html/decrease-mount-count3\"\n  }, \"Toggle Components Mounting 3\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/lerna-react/index.html/decrease-mount-count\",\n    exact: true,\n    component: _toggle_components_mounting_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/lerna-react/index.html/decrease-mount-count2\",\n    component: _toggle_components_mounting_index2_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/lerna-react/index.html/decrease-mount-count3\",\n    component: _toggle_components_mounting_index3_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"root\":\"src-957ii\"};\n\n//# sourceURL=webpack:///./src/app.scss?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core */ \"core\");\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _configs_static_serve_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configs/static.serve.config.js */ \"../../configs/static.serve.config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(core__WEBPACK_IMPORTED_MODULE_0__[\"loadModule\"])({\n  server: _configs_static_serve_config_js__WEBPACK_IMPORTED_MODULE_1__[\"STATIC_SERVER\"],\n  destroyOnUnMount: true,\n  loadingComponent: function loadingComponent() {\n    return React.createElement(\"div\", null, \"loading\");\n  }\n}));\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(React.createElement(_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/toggle-components-mounting/index.js":
/*!*************************************************!*\
  !*** ./src/toggle-components-mounting/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ToggleComponentsMounting; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers.js */ \"./src/helpers.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar ToggleComponentsMounting =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ToggleComponentsMounting, _Component);\n\n  function ToggleComponentsMounting() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, ToggleComponentsMounting);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToggleComponentsMounting)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      Icon1: function Icon1() {\n        return React.createElement(\"div\", null, \"loading ICON-1\");\n      },\n      Icon2: function Icon2() {\n        return React.createElement(\"div\", null, \"loading ICON-2\");\n      },\n      Icon3: function Icon3() {\n        return React.createElement(\"div\", null, \"loading ICON-3\");\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"addIcons\", function () {\n      _this.setState({\n        Icon1: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('icon'),\n        Icon2: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('icon'),\n        Icon3: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('icon')\n      });\n\n      setTimeout(_this.removedIcons, 2000);\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"removedIcons\", function () {\n      _this.setState({\n        Icon1: function Icon1() {\n          return React.createElement(\"div\", null, \"removed ICON-1\");\n        }\n      });\n\n      _this.setState({\n        Icon2: function Icon2() {\n          return React.createElement(\"div\", null, \"removed ICON-2\");\n        }\n      });\n\n      _this.setState({\n        Icon3: function Icon3() {\n          return React.createElement(\"div\", null, \"removed ICON-3\");\n        }\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(ToggleComponentsMounting, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      setInterval(this.addIcons, 3000);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          Icon1 = _this$state.Icon1,\n          Icon2 = _this$state.Icon2,\n          Icon3 = _this$state.Icon3;\n      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, React.createElement(\"h2\", null, \"Toggle Components Mounting\"), React.createElement(\"div\", null, React.createElement(Icon1, null)), React.createElement(\"div\", null, React.createElement(Icon2, null)), React.createElement(\"div\", null, React.createElement(Icon3, null)));\n    }\n  }]);\n\n  return ToggleComponentsMounting;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/toggle-components-mounting/index.js?");

/***/ }),

/***/ "./src/toggle-components-mounting/index2.js":
/*!**************************************************!*\
  !*** ./src/toggle-components-mounting/index2.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ToggleComponentsMounting2; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers.js */ \"./src/helpers.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar ToggleComponentsMounting2 =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ToggleComponentsMounting2, _Component);\n\n  function ToggleComponentsMounting2() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, ToggleComponentsMounting2);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToggleComponentsMounting2)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      Icon1: function Icon1() {\n        return React.createElement(\"div\", null, \"ICON-1\");\n      },\n      Icon2: function Icon2() {\n        return React.createElement(\"div\", null, \"ICON-2\");\n      },\n      Button: function Button() {\n        return React.createElement(\"div\", null, \"BUTTON\");\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(ToggleComponentsMounting2, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      setTimeout(function () {\n        _this2.setState({\n          Icon1: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('icon')\n        });\n      }, 1000);\n      setTimeout(function () {\n        _this2.setState({\n          Icon1: function Icon1() {\n            return React.createElement(\"div\", null, \"ICON\");\n          }\n        });\n      }, 2000);\n      setTimeout(function () {\n        _this2.setState({\n          Icon1: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('icon')\n        });\n      }, 3000);\n      setTimeout(function () {\n        _this2.setState({\n          Icon1: function Icon1() {\n            return React.createElement(\"div\", null, \"ICON\");\n          }\n        });\n      }, 4000);\n      setTimeout(function () {\n        _this2.setState({\n          Icon1: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('icon')\n        });\n      }, 5000);\n      setTimeout(function () {\n        _this2.setState({\n          Button: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button')\n        });\n      }, 1000);\n      setTimeout(function () {\n        _this2.setState({\n          Button: function Button() {\n            return React.createElement(\"div\", null, \"Button\");\n          }\n        });\n      }, 2000);\n      setTimeout(function () {\n        _this2.setState({\n          Button: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button')\n        });\n      }, 3000);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          Icon1 = _this$state.Icon1,\n          Button = _this$state.Button,\n          Icon2 = _this$state.Icon2;\n      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, React.createElement(\"h2\", null, \"Toggle Components Mounting 2\"), React.createElement(Icon1, null), React.createElement(Icon2, null), React.createElement(Button, {\n        withIcon: true\n      }, \"lazy loaded from static server\"));\n    }\n  }]);\n\n  return ToggleComponentsMounting2;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n;\n\n//# sourceURL=webpack:///./src/toggle-components-mounting/index2.js?");

/***/ }),

/***/ "./src/toggle-components-mounting/index3.js":
/*!**************************************************!*\
  !*** ./src/toggle-components-mounting/index3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ToggleComponentsMounting3; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers.js */ \"./src/helpers.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar ToggleComponentsMounting3 =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ToggleComponentsMounting3, _Component);\n\n  function ToggleComponentsMounting3() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, ToggleComponentsMounting3);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToggleComponentsMounting3)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      Icon: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Icon', {\n        super: _assertThisInitialized(_assertThisInitialized(_this))\n      })\n    });\n\n    return _this;\n  }\n\n  _createClass(ToggleComponentsMounting3, [{\n    key: \"render\",\n    value: function render() {\n      var Icon = this.state.Icon;\n      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, React.createElement(\"h2\", null, \"Toggle Components Mounting 3\"), React.createElement(Icon, null));\n    }\n  }]);\n\n  return ToggleComponentsMounting3;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n;\n\n//# sourceURL=webpack:///./src/toggle-components-mounting/index3.js?");

/***/ }),

/***/ "core":
/*!***********************!*\
  !*** external "core" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_core__;\n\n//# sourceURL=webpack:///external_%22core%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ }),

/***/ "react-router-dom":
/*!*********************************!*\
  !*** external "reactRouterDom" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_router_dom__;\n\n//# sourceURL=webpack:///external_%22reactRouterDom%22?");

/***/ })

/******/ });
});