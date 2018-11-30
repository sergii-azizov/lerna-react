(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("connectedReactRouter"), require("core"), require("React"), require("ReactDOM"), require("reactRedux"), require("reactRouterDom"));
	else if(typeof define === 'function' && define.amd)
		define("portal", ["connectedReactRouter", "core", "React", "ReactDOM", "reactRedux", "reactRouterDom"], factory);
	else if(typeof exports === 'object')
		exports["portal"] = factory(require("connectedReactRouter"), require("core"), require("React"), require("ReactDOM"), require("reactRedux"), require("reactRouterDom"));
	else
		root["portal"] = factory(root["connectedReactRouter"], root["core"], root["React"], root["ReactDOM"], root["reactRedux"], root["reactRouterDom"]);
})(window.__APP__, function(__WEBPACK_EXTERNAL_MODULE_connected_react_router__, __WEBPACK_EXTERNAL_MODULE_core__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE_react_redux__, __WEBPACK_EXTERNAL_MODULE_react_router_dom__) {
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core */ "core");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens */ "./src/screens/index.js");
/* harmony import */ var _tests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tests */ "./src/tests/index.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_5__);







var App = function App(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_5___default.a.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/lerna-react/index.html"
  }, "Clear")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/lerna-react/index.html/desktop-summary"
  }, "Desktop Summary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/lerna-react/index.html/load-module"
  }, "Load Modules")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/lerna-react/index.html/toggle-modules"
  }, "Toggle Modules")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/lerna-react/index.html/parallel-toggle-modules"
  }, "Parallel Toggle Modules")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/lerna-react/index.html",
    exact: true,
    component: _tests__WEBPACK_IMPORTED_MODULE_4__["Clear"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/lerna-react/index.html/desktop-summary",
    component: _screens__WEBPACK_IMPORTED_MODULE_3__["DesktopSummaryScreen"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/lerna-react/index.html/load-module",
    component: _tests__WEBPACK_IMPORTED_MODULE_4__["LoadModule"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/lerna-react/index.html/toggle-modules",
    component: _tests__WEBPACK_IMPORTED_MODULE_4__["ToggleModules"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/lerna-react/index.html/parallel-toggle-modules",
    component: _tests__WEBPACK_IMPORTED_MODULE_4__["ParallelToggleModules"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"src--src-root"};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core */ "core");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./src/app.js");





react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(React.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
  store: core__WEBPACK_IMPORTED_MODULE_3__["store"]
}, React.createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["ConnectedRouter"], {
  history: core__WEBPACK_IMPORTED_MODULE_3__["history"]
}, React.createElement(_app__WEBPACK_IMPORTED_MODULE_4__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ "./src/screens/desktop-summary-screen.js":
/*!***********************************************!*\
  !*** ./src/screens/desktop-summary-screen.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "core");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_1__);


var DesktopSummaryScreen = Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].DESKTOP_SUMMARY_SCREEN);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DesktopSummaryScreen, props);
});

/***/ }),

/***/ "./src/screens/index.js":
/*!******************************!*\
  !*** ./src/screens/index.js ***!
  \******************************/
/*! exports provided: DesktopSummaryScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _desktop_summary_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desktop-summary-screen */ "./src/screens/desktop-summary-screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesktopSummaryScreen", function() { return _desktop_summary_screen__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/tests/clear.js":
/*!****************************!*\
  !*** ./src/tests/clear.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clear; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Clear =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Clear, _PureComponent);

  function Clear() {
    _classCallCheck(this, Clear);

    return _possibleConstructorReturn(this, _getPrototypeOf(Clear).apply(this, arguments));
  }

  _createClass(Clear, [{
    key: "render",
    value: function render() {
      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, React.createElement("h2", null, "Clear"));
    }
  }]);

  return Clear;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);


;

/***/ }),

/***/ "./src/tests/index.js":
/*!****************************!*\
  !*** ./src/tests/index.js ***!
  \****************************/
/*! exports provided: LoadModule, ToggleModules, ParallelToggleModules, Clear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-module */ "./src/tests/load-module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadModule", function() { return _load_module__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _toggle_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-modules */ "./src/tests/toggle-modules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleModules", function() { return _toggle_modules__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _parallel_toggle_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parallel-toggle-modules */ "./src/tests/parallel-toggle-modules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParallelToggleModules", function() { return _parallel_toggle_modules__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clear */ "./src/tests/clear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clear", function() { return _clear__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/tests/load-module.js":
/*!**********************************!*\
  !*** ./src/tests/load-module.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadModule; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "core");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Counter = Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].COMPONENTS, {
  loadingComponent: function loadingComponent() {
    return React.createElement("div", null, "12312313123");
  }
});
var Button = Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].COMPONENTS, {
  componentName: 'Button'
});
var Button1 = Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].COMPONENTS, {
  componentName: 'Button'
});
var Button2 = Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].COMPONENTS, {
  componentName: 'Button'
});
var Button3 = Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].COMPONENTS, {
  componentName: 'Button'
});
var Button4 = Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].COMPONENTS, {
  componentName: 'Button'
});
var Button5 = Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].COMPONENTS, {
  componentName: 'Button'
});
var Button6 = Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].COMPONENTS, {
  componentName: 'Button'
});

var LoadModule =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(LoadModule, _PureComponent);

  function LoadModule() {
    _classCallCheck(this, LoadModule);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadModule).apply(this, arguments));
  }

  _createClass(LoadModule, [{
    key: "render",
    value: function render() {
      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, React.createElement("h2", null, "Load Module"), React.createElement(Counter, null), React.createElement(Button, null, "Button"), React.createElement(Button1, null, "Button1"), React.createElement(Button2, null, "Button2"), React.createElement(Button3, null, "Button3"), React.createElement(Button4, null, "Button4"), React.createElement(Button5, null, "Button5"), React.createElement(Button6, null, "Button6"));
    }
  }]);

  return LoadModule;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);


;

/***/ }),

/***/ "./src/tests/parallel-toggle-modules.js":
/*!**********************************************!*\
  !*** ./src/tests/parallel-toggle-modules.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParallelToggleComponentsMounting; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "core");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ParallelToggleComponentsMounting =
/*#__PURE__*/
function (_Component) {
  _inherits(ParallelToggleComponentsMounting, _Component);

  function ParallelToggleComponentsMounting() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ParallelToggleComponentsMounting);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ParallelToggleComponentsMounting)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      Button1: function Button1() {
        return React.createElement("div", null, "loading Button-1");
      },
      Button2: function Button2() {
        return React.createElement("div", null, "loading Button-2");
      },
      Button3: function Button3() {
        return React.createElement("div", null, "loading Button-3");
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "add", function () {
      _this.setState({
        Button1: Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].COMPONENTS, {
          componentName: 'Button'
        }),
        Button2: Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].COMPONENTS, {
          componentName: 'Button'
        }),
        Button3: Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].COMPONENTS, {
          componentName: 'Button'
        })
      });

      setTimeout(_this.remove, 2000);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "remove", function () {
      _this.setState({
        Button1: function Button1() {
          return React.createElement("div", null, "removed Button-1");
        }
      });

      _this.setState({
        Button2: function Button2() {
          return React.createElement("div", null, "removed Button-2");
        }
      });

      _this.setState({
        Button3: function Button3() {
          return React.createElement("div", null, "removed Button-3");
        }
      });
    });

    return _this;
  }

  _createClass(ParallelToggleComponentsMounting, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setInterval(this.add, 3000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          Button1 = _this$state.Button1,
          Button2 = _this$state.Button2,
          Button3 = _this$state.Button3;
      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, React.createElement("h2", null, "Toggle Components Mounting"), React.createElement("div", null, React.createElement(Button1, null)), React.createElement("div", null, React.createElement(Button2, null)), React.createElement("div", null, React.createElement(Button3, null)));
    }
  }]);

  return ParallelToggleComponentsMounting;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/tests/toggle-modules.js":
/*!*************************************!*\
  !*** ./src/tests/toggle-modules.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleModules; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "core");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ToggleModules =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ToggleModules, _PureComponent);

  function ToggleModules() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ToggleModules);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToggleModules)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      TaskSelector: function TaskSelector() {
        return React.createElement("div", null, "TaskSelector");
      },
      Button: function Button() {
        return React.createElement("div", null, "Button");
      }
    });

    return _this;
  }

  _createClass(ToggleModules, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          TaskSelector: Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].TASK_SELECTOR)
        });
      }, 1000);
      setTimeout(function () {
        _this2.setState({
          TaskSelector: function TaskSelector() {
            return React.createElement("div", null, "TaskSelector");
          }
        });
      }, 2000);
      setTimeout(function () {
        _this2.setState({
          TaskSelector: Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].TASK_SELECTOR)
        });
      }, 3000);
      setTimeout(function () {
        _this2.setState({
          TaskSelector: function TaskSelector() {
            return React.createElement("div", null, "TaskSelector");
          }
        });
      }, 4000);
      setTimeout(function () {
        _this2.setState({
          TaskSelector: Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].TASK_SELECTOR)
        });
      }, 5000);
      setTimeout(function () {
        _this2.setState({
          Button: Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].COMPONENTS, {
            componentName: 'Button'
          })
        });
      }, 1000);
      setTimeout(function () {
        _this2.setState({
          Button: function Button() {
            return React.createElement("div", null, "Button");
          }
        });
      }, 2000);
      setTimeout(function () {
        _this2.setState({
          Button: Object(core__WEBPACK_IMPORTED_MODULE_1__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_1__["MS_NAMES"].COMPONENTS, {
            componentName: 'Button'
          })
        });
      }, 3000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          TaskSelector = _this$state.TaskSelector,
          Button = _this$state.Button;
      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, React.createElement("h2", null, "Toggle Components"), React.createElement(TaskSelector, null), React.createElement(Button, null, "lazy loaded from static server"));
    }
  }]);

  return ToggleModules;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);


;

/***/ }),

/***/ "connected-react-router":
/*!***************************************!*\
  !*** external "connectedReactRouter" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_connected_react_router__;

/***/ }),

/***/ "core":
/*!***********************!*\
  !*** external "core" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core__;

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

/***/ })

/******/ });
});
//# sourceMappingURL=portal.js.map