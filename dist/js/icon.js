(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("core"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["core", "React"], factory);
	else if(typeof exports === 'object')
		exports["icon"] = factory(require("core"), require("React"));
	else
		root["icon"] = factory(root["core"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_core__, __WEBPACK_EXTERNAL_MODULE_react__) {
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

/***/ "./src/icon/component.js":
/*!*******************************!*\
  !*** ./src/icon/component.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ \"core\");\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component.scss */ \"./src/icon/component.scss\");\n/* harmony import */ var _component_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_component_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Icon = function Icon(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: _component_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root\n  }, \"\\u2211\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(core__WEBPACK_IMPORTED_MODULE_1__[\"withRender\"])()(Icon));\n\n//# sourceURL=webpack://icon/./src/icon/component.js?");

/***/ }),

/***/ "./src/icon/component.scss":
/*!*********************************!*\
  !*** ./src/icon/component.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"root\":\"icon-1nxIC\"};\n\n//# sourceURL=webpack://icon/./src/icon/component.scss?");

/***/ }),

/***/ "./src/icon/index.js":
/*!***************************!*\
  !*** ./src/icon/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/icon/component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack://icon/./src/icon/index.js?");

/***/ }),

/***/ "./src/icon2/component.js":
/*!********************************!*\
  !*** ./src/icon2/component.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ \"core\");\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component.scss */ \"./src/icon2/component.scss\");\n/* harmony import */ var _component_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_component_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Icon2 = function Icon2(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: _component_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root\n  }, \"\\u22112\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(core__WEBPACK_IMPORTED_MODULE_1__[\"withRender\"])()(Icon2));\n\n//# sourceURL=webpack://icon/./src/icon2/component.js?");

/***/ }),

/***/ "./src/icon2/component.scss":
/*!**********************************!*\
  !*** ./src/icon2/component.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"root\":\"icon2-13nGY\"};\n\n//# sourceURL=webpack://icon/./src/icon2/component.scss?");

/***/ }),

/***/ "./src/icon2/index.js":
/*!****************************!*\
  !*** ./src/icon2/index.js ***!
  \****************************/
/*! exports provided: Icon2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/icon2/component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Icon2\", function() { return _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack://icon/./src/icon2/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, Icon2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/icon/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _icon2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon2 */ \"./src/icon2/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Icon2\", function() { return _icon2__WEBPACK_IMPORTED_MODULE_1__[\"Icon2\"]; });\n\n\n\n\n//# sourceURL=webpack://icon/./src/index.js?");

/***/ }),

/***/ "core":
/*!***********************!*\
  !*** external "core" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_core__;\n\n//# sourceURL=webpack://icon/external_%22core%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://icon/external_%22React%22?");

/***/ })

/******/ });
});