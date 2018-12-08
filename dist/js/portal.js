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
/* harmony import */ var _tests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tests */ "./src/tests/index.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_4__);






var App = function App(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/async-import"
  }, "asyncImport")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/load-module"
  }, "Load Paralle Identical Modules")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/desktop-summary"
  }, "Desktop Summary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/load-2-modules-with-dependency"
  }, "Load 3 Modules")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/toggle-modules"
  }, "Toggle Modules")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/parallel-toggle-modules"
  }, "Parallel Toggle Modules")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    component: _tests__WEBPACK_IMPORTED_MODULE_3__["HomeScreen"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/async-import",
    component: _tests__WEBPACK_IMPORTED_MODULE_3__["AsyncImportScreen"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/load-module",
    component: _tests__WEBPACK_IMPORTED_MODULE_3__["loadParalleIdenticalModules"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/desktop-summary",
    component: _tests__WEBPACK_IMPORTED_MODULE_3__["DesktopSummaryScreen"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/load-2-modules-with-dependency",
    component: _tests__WEBPACK_IMPORTED_MODULE_3__["Load2ModulesWithDependency"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/toggle-modules",
    component: _tests__WEBPACK_IMPORTED_MODULE_3__["ToggleModulesScreen"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/parallel-toggle-modules",
    component: _tests__WEBPACK_IMPORTED_MODULE_3__["ParallelToggleComponentsMountingScreen"]
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

/***/ "./src/tests/async-import.screen.js":
/*!******************************************!*\
  !*** ./src/tests/async-import.screen.js ***!
  \******************************************/
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
/* harmony import */ var _test_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.scss */ "./src/tests/test.scss");
/* harmony import */ var _test_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_test_scss__WEBPACK_IMPORTED_MODULE_3__);





var AsyncImportScreen = function AsyncImportScreen(_ref) {
  var _ref$components = _ref.components,
      Button = _ref$components.Button,
      Counter = _ref$components.Counter,
      decrement = _ref.decrement,
      increment = _ref.increment;
  return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, React.createElement("h2", null, "AsyncImport"), React.createElement("div", {
    className: _test_scss__WEBPACK_IMPORTED_MODULE_3___default.a.root
  }, React.createElement("h3", null, "Component with dynamic store from \"components\" package"), React.createElement(Counter, null)), React.createElement("div", {
    className: _test_scss__WEBPACK_IMPORTED_MODULE_3___default.a.root
  }, React.createElement("h3", null, "Imported Actions from \"components\" package"), React.createElement(Button, {
    onClick: increment
  }, "+1"), React.createElement(Button, {
    onClick: decrement
  }, "-1")));
};

var withConnect = function withConnect(_ref2) {
  var _ref2$components = _ref2.components,
      decrement = _ref2$components.decrement,
      increment = _ref2$components.increment;
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
    decrement: decrement,
    increment: increment
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(core__WEBPACK_IMPORTED_MODULE_2__["asyncImport"])([core__WEBPACK_IMPORTED_MODULE_2__["PACKAGE_NAMES"].components], {
  withConnect: withConnect
})(AsyncImportScreen));
/*

****** STEP 1

import { Fragment } from 'react';
const AsyncImportScreen = () => {
    return (
        <Fragment>
            <h2>AsyncImport</h2>
        </Fragment>
    );
};


export default AsyncImportScreen;






****** STEP 2

import { Fragment } from 'react';
import { PACKAGE_NAMES, asyncImport } from 'core';

const AsyncImportScreen = ({ components: { Button } }) => {
    return (
        <Fragment>
            <h2>AsyncImport</h2>
            <Button>Button</Button>
        </Fragment>
    );
};

export default asyncImport([PACKAGE_NAMES.components])(AsyncImportScreen);


****** STEP 3


import { Fragment } from 'react';
import { PACKAGE_NAMES, asyncImport } from 'core';

const AsyncImportScreen = ({ components: { Button, FRUITS, sum } }) => {
    return (
        <Fragment>
            <h2>AsyncImport</h2>
            <h3>Imported constant: {FRUITS.APPLE}</h3>
            <h3>Imported function sum, result: {sum(5, 7)}</h3>
            <Button>Imported component</Button>
        </Fragment>
    );
};

export default asyncImport([PACKAGE_NAMES.components])(AsyncImportScreen);


****** STEP 4


import { Fragment } from 'react';
import { connect } from 'react-redux';
import { PACKAGE_NAMES, asyncImport } from 'core';

import styles from './test.scss'

const AsyncImportScreen = ({ components: { Button, Counter }, decrement, increment }) => {
    return (
        <Fragment>
            <h2>AsyncImport</h2>
            <div className={styles.root}>
                <h3>Component with dynamic store from "components" package</h3>
                <Counter />
            </div>
            <div className={styles.root}>
                <h3>Imported Actions from "components" package</h3>
                <Button onClick={increment}>+1</Button>
                <Button onClick={decrement}>-1</Button>
            </div>
        </Fragment>
    );
};

const withConnect = ({ components: { decrement, increment } }) => connect(null, { decrement, increment });

export default asyncImport([PACKAGE_NAMES.components], { withConnect })(AsyncImportScreen);
*/

/***/ }),

/***/ "./src/tests/desktop-summary.screen.js":
/*!*********************************************!*\
  !*** ./src/tests/desktop-summary.screen.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "core");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_1__);


var DesktopSummaryScreen = Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].desktopSummaryScreen);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DesktopSummaryScreen, props);
});

/***/ }),

/***/ "./src/tests/home.screen.js":
/*!**********************************!*\
  !*** ./src/tests/home.screen.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeScreen; });
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



var HomeScreen =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(HomeScreen, _PureComponent);

  function HomeScreen() {
    _classCallCheck(this, HomeScreen);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomeScreen).apply(this, arguments));
  }

  _createClass(HomeScreen, [{
    key: "render",
    value: function render() {
      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, React.createElement("h2", null, "Home"), React.createElement("p", null, "some text"));
    }
  }]);

  return HomeScreen;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);


;

/***/ }),

/***/ "./src/tests/index.js":
/*!****************************!*\
  !*** ./src/tests/index.js ***!
  \****************************/
/*! exports provided: HomeScreen, AsyncImportScreen, DesktopSummaryScreen, loadParalleIdenticalModules, Load2ModulesWithDependency, ToggleModulesScreen, ParallelToggleComponentsMountingScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.screen */ "./src/tests/home.screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeScreen", function() { return _home_screen__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _async_import_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async-import.screen */ "./src/tests/async-import.screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncImportScreen", function() { return _async_import_screen__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _desktop_summary_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desktop-summary.screen */ "./src/tests/desktop-summary.screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesktopSummaryScreen", function() { return _desktop_summary_screen__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _load_paralle_identical_modules_screen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-paralle-identical-modules.screen.js */ "./src/tests/load-paralle-identical-modules.screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadParalleIdenticalModules", function() { return _load_paralle_identical_modules_screen_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _load_2_modules_with_dependency_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load-2-modules-with-dependency.screen */ "./src/tests/load-2-modules-with-dependency.screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Load2ModulesWithDependency", function() { return _load_2_modules_with_dependency_screen__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _toggle_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle-modules */ "./src/tests/toggle-modules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleModulesScreen", function() { return _toggle_modules__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _parallel_toggle_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallel-toggle-modules */ "./src/tests/parallel-toggle-modules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParallelToggleComponentsMountingScreen", function() { return _parallel_toggle_modules__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./src/tests/load-2-modules-with-dependency.screen.js":
/*!************************************************************!*\
  !*** ./src/tests/load-2-modules-with-dependency.screen.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Load3ModuleScreen; });
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



var Module1 = Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].scripting, {
  component: 'Scripting'
});
var Module2 = Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].scripting, {
  component: 'Scripting'
});

var Load3ModuleScreen =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Load3ModuleScreen, _PureComponent);

  function Load3ModuleScreen() {
    _classCallCheck(this, Load3ModuleScreen);

    return _possibleConstructorReturn(this, _getPrototypeOf(Load3ModuleScreen).apply(this, arguments));
  }

  _createClass(Load3ModuleScreen, [{
    key: "render",
    value: function render() {
      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, React.createElement("h2", null, "Load 3 Module"), React.createElement(Module1, null), React.createElement(Module2, null));
    }
  }]);

  return Load3ModuleScreen;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);


;

/***/ }),

/***/ "./src/tests/load-paralle-identical-modules.screen.js":
/*!************************************************************!*\
  !*** ./src/tests/load-paralle-identical-modules.screen.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadParalleIdenticalModules; });
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



var Counter = Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
  component: 'Counter',
  loadingComponent: React.createElement("div", null, "12312313123")
});
var Button = Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
  component: 'Button'
});
var Button1 = Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
  component: 'Button'
});
var Button2 = Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
  component: 'Button'
});
var Button3 = Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
  component: 'Button'
});
var Button4 = Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
  component: 'Button'
});
var Button5 = Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
  component: 'Button'
});
var Button6 = Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
  component: 'Button'
});

var loadParalleIdenticalModules =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(loadParalleIdenticalModules, _PureComponent);

  function loadParalleIdenticalModules() {
    _classCallCheck(this, loadParalleIdenticalModules);

    return _possibleConstructorReturn(this, _getPrototypeOf(loadParalleIdenticalModules).apply(this, arguments));
  }

  _createClass(loadParalleIdenticalModules, [{
    key: "render",
    value: function render() {
      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, React.createElement("h2", null, "Load Module"), React.createElement(Counter, null), React.createElement(Button, null, "Button"), React.createElement(Button1, null, "Button1"), React.createElement(Button2, null, "Button2"), React.createElement(Button3, null, "Button3"), React.createElement(Button4, null, "Button4"), React.createElement(Button5, null, "Button5"), React.createElement(Button6, null, "Button6"));
    }
  }]);

  return loadParalleIdenticalModules;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParallelToggleComponentsMountingScreen; });
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




var ParallelToggleComponentsMountingScreen =
/*#__PURE__*/
function (_Component) {
  _inherits(ParallelToggleComponentsMountingScreen, _Component);

  function ParallelToggleComponentsMountingScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ParallelToggleComponentsMountingScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ParallelToggleComponentsMountingScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
        Button1: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button2: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button3: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
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

  _createClass(ParallelToggleComponentsMountingScreen, [{
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
      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, React.createElement("h2", null, "Toggle Components Mounting"), React.createElement("div", null, React.createElement(Button1, null, "Button1")), React.createElement("div", null, React.createElement(Button2, null, "Button2")), React.createElement("div", null, React.createElement(Button3, null, "Button")));
    }
  }]);

  return ParallelToggleComponentsMountingScreen;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/tests/test.scss":
/*!*****************************!*\
  !*** ./src/tests/test.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"src-tests--tests-root"};

/***/ }),

/***/ "./src/tests/toggle-modules.js":
/*!*************************************!*\
  !*** ./src/tests/toggle-modules.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleModulesScreen; });
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




var ToggleModulesScreen =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ToggleModulesScreen, _PureComponent);

  function ToggleModulesScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ToggleModulesScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToggleModulesScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  _createClass(ToggleModulesScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          TaskSelector: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].taskSelector)
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
          TaskSelector: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].taskSelector)
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
          TaskSelector: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].taskSelector)
        });
      }, 5000);
      setTimeout(function () {
        _this2.setState({
          Button: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
            component: 'Button'
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
          Button: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
            component: 'Button'
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

  return ToggleModulesScreen;
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