(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("core"), require("React"), require("reactRedux"));
	else if(typeof define === 'function' && define.amd)
		define("desktop-summary-screen", ["core", "React", "reactRedux"], factory);
	else if(typeof exports === 'object')
		exports["desktop-summary-screen"] = factory(require("core"), require("React"), require("reactRedux"));
	else
		root["desktop-summary-screen"] = factory(root["core"], root["React"], root["reactRedux"]);
})(window.__APP__, function(__WEBPACK_EXTERNAL_MODULE_core__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_redux__) {
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

/***/ "./src/desktop-summary-screen/actions.js":
/*!***********************************************!*\
  !*** ./src/desktop-summary-screen/actions.js ***!
  \***********************************************/
/*! exports provided: increment, decrement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
var increment = function increment() {
  return function (dispatch) {
    return dispatch({
      type: 'INCREMENT-1'
    });
  };
};
var decrement = function decrement() {
  return function (dispatch) {
    return dispatch({
      type: 'DECREMENT-1'
    });
  };
};

/***/ }),

/***/ "./src/desktop-summary-screen/index.js":
/*!*********************************************!*\
  !*** ./src/desktop-summary-screen/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/desktop-summary-screen/screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _screen__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/desktop-summary-screen/reducers.js":
/*!************************************************!*\
  !*** ./src/desktop-summary-screen/reducers.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    count: 0
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INCREMENT-1':
      return {
        count: state.count + 1
      };

    case 'DECREMENT-1':
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/desktop-summary-screen/screen.js":
/*!**********************************************!*\
  !*** ./src/desktop-summary-screen/screen.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core */ "core");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions.js */ "./src/desktop-summary-screen/actions.js");
/* harmony import */ var _screen_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screen.scss */ "./src/desktop-summary-screen/screen.scss");
/* harmony import */ var _screen_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_screen_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Counter = Object(core__WEBPACK_IMPORTED_MODULE_2__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_2__["MS_NAMES"].COMPONENTS);
var Button = Object(core__WEBPACK_IMPORTED_MODULE_2__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_2__["MS_NAMES"].COMPONENTS, {
  componentName: 'Button'
});
var TaskSelector = Object(core__WEBPACK_IMPORTED_MODULE_2__["loadModule"])(core__WEBPACK_IMPORTED_MODULE_2__["MS_NAMES"].TASK_SELECTOR);

var DesktopSummaryScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DesktopSummaryScreen, _React$Component);

  function DesktopSummaryScreen() {
    _classCallCheck(this, DesktopSummaryScreen);

    return _possibleConstructorReturn(this, _getPrototypeOf(DesktopSummaryScreen).apply(this, arguments));
  }

  _createClass(DesktopSummaryScreen, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Desktop Summary"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        onClick: this.props.decrement
      }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _screen_scss__WEBPACK_IMPORTED_MODULE_4___default.a.counter
      }, this.props.count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        onClick: this.props.increment
      }, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Counter, null));
    }
  }]);

  return DesktopSummaryScreen;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function mapStateToProps(state) {
  console.log("==> ", state);
  return {
    count: state['desktop-summary-screen'].count
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  increment: _actions_js__WEBPACK_IMPORTED_MODULE_3__["increment"],
  decrement: _actions_js__WEBPACK_IMPORTED_MODULE_3__["decrement"]
})(DesktopSummaryScreen));

/***/ }),

/***/ "./src/desktop-summary-screen/screen.scss":
/*!************************************************!*\
  !*** ./src/desktop-summary-screen/screen.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"src-desktop-summary-screen--desktop-summary-screen-root","counter":"src-desktop-summary-screen--desktop-summary-screen-counter"};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, rootReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _desktop_summary_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desktop-summary-screen */ "./src/desktop-summary-screen/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _desktop_summary_screen__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _desktop_summary_screen_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop-summary-screen/reducers */ "./src/desktop-summary-screen/reducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rootReducers", function() { return _desktop_summary_screen_reducers__WEBPACK_IMPORTED_MODULE_1__["default"]; });




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

/***/ "react-redux":
/*!*****************************!*\
  !*** external "reactRedux" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;

/***/ })

/******/ });
});
//# sourceMappingURL=desktop-summary-screen.js.map