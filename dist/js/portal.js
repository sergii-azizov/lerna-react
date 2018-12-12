(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("portal", [], factory);
	else if(typeof exports === 'object')
		exports["portal"] = factory();
	else
		root["portal"] = factory();
})(window.__APP__, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"portal": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"portal": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"components":"components"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"components":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({"components":"components"}[chunkId]||chunkId) + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "https://rawcdn.githack.com/sergii-azizov/lerna-react/737c051736b0a1c1670414f0b72ef5bdbcb20bb3/dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window.__APP__["webpackJsonp_name_"] = window.__APP__["webpackJsonp_name_"] || [];
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

/***/ "../../dist/js/core.js":
/*!******************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/dist/js/core.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window.__APP__, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		"core": 0
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
/******/ 	__webpack_require__.p = "https://rawcdn.githack.com/sergii-azizov/lerna-react/737c051736b0a1c1670414f0b72ef5bdbcb20bb3/dist/";
/******/
/******/ 	var jsonpArray = window.__APP__["webpackJsonp_name_"] = window.__APP__["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["../core/src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/history/DOMUtils.js":
/*!***********************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/history/DOMUtils.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "../../node_modules/history/LocationUtils.js":
/*!****************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/history/LocationUtils.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(/*! resolve-pathname */ "../../node_modules/resolve-pathname/index.js");

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(/*! value-equal */ "../../node_modules/value-equal/index.js");

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "../../node_modules/history/PathUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),

/***/ "../../node_modules/history/PathUtils.js":
/*!************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/history/PathUtils.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "../../node_modules/history/createBrowserHistory.js":
/*!***********************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/history/createBrowserHistory.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "../../node_modules/history/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "../../node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "../../node_modules/history/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "../../node_modules/history/PathUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "../../node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(/*! ./DOMUtils */ "../../node_modules/history/DOMUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),

/***/ "../../node_modules/history/createTransitionManager.js":
/*!**************************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/history/createTransitionManager.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "../../node_modules/history/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),

/***/ "../core/src/async-import/async-import-component/async-import-component.js":
/*!*********************************************************************************!*\
  !*** ../core/src/async-import/async-import-component/async-import-component.js ***!
  \*********************************************************************************/
/*! exports provided: asyncImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncImportComponent", function() { return asyncImportComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../configs/namespace.config */ "../../configs/namespace.config.js");
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants.js */ "../core/src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "../core/src/async-import/helpers.js");
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







var asyncImportComponent = function asyncImportComponent(packageName) {
  var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var promise = arguments.length > 2 ? arguments[2] : undefined;
  if (!packageName) return function () {
    return Promise.resolve(null);
  };
  var _configs$server = configs.server,
      server = _configs$server === void 0 ? _constants_js__WEBPACK_IMPORTED_MODULE_4__["STATIC_SERVER"] : _configs$server,
      _configs$component = configs.component,
      component = _configs$component === void 0 ? 'default' : _configs$component,
      _configs$destroyOnUnm = configs.destroyOnUnmount,
      destroyOnUnmount = _configs$destroyOnUnm === void 0 ? true : _configs$destroyOnUnm,
      _configs$loadingCompo = configs.loadingComponent,
      loadingComponent = _configs$loadingCompo === void 0 ? null : _configs$loadingCompo,
      _configs$reducer = configs.reducer,
      reducer = _configs$reducer === void 0 ? 'rootReducer' : _configs$reducer;

  var asyncImportComponent =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(asyncImportComponent, _PureComponent);

    function asyncImportComponent(props) {
      var _this;

      _classCallCheck(this, asyncImportComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(asyncImportComponent).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadingPackage", function (packageName) {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getLoadPackage"])(packageName).then(function () {
          _this.setState({
            LoadedComponent: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getLoadPackage"])([packageName, component])
          });

          _this.mountLoadedComponent(packageName, _constants_js__WEBPACK_IMPORTED_MODULE_4__["PACKAGE_STATUSES"].FROM_CACHE);
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mountLoadedComponent", function (packageName, fromCache) {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["injectAsyncReducer"])({
          packageName: packageName,
          reducer: reducer
        });

        if (!fromCache) {
          _this.resolve && _this.resolve();

          _this.setState({
            LoadedComponent: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getLoadPackage"])([packageName, component])
          });
        }

        Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["increasedLoadedComponents"])({
          packageName: packageName,
          module: component
        });
        Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["notify"])({
          packageName: packageName,
          module: component,
          state: fromCache || _constants_js__WEBPACK_IMPORTED_MODULE_4__["PACKAGE_STATUSES"].LOADED
        });
      });

      _this.init();

      return _this;
    }

    _createClass(asyncImportComponent, [{
      key: "init",
      value: function init() {
        var LoadedComponent = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getLoadPackage"])([packageName, component]);
        var loadingPackage = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getLoadPackage"])([packageName, 'then']);
        this.state = {
          LoadedComponent: LoadedComponent
        };

        if (loadingPackage) {
          this.loadingPackage(packageName);
        } else if (LoadedComponent) {
          this.mountLoadedComponent(packageName, _constants_js__WEBPACK_IMPORTED_MODULE_4__["PACKAGE_STATUSES"].FROM_CACHE);
        } else if (!LoadedComponent) {
          this.loadPackage(packageName);
        }
      }
    }, {
      key: "loadPackage",
      value: function loadPackage(packageName) {
        var _this2 = this;

        var isModuleLoaded = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(window.APP, [packageName]);

        if (!isModuleLoaded) {
          Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__["APP"]], [packageName], promise().then(function (pkg) {
            window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__["APP"]][packageName] = pkg;

            _this2.mountLoadedComponent(packageName);
          }));
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["destroy"])({
          packageName: packageName,
          module: component,
          destroyOnUnmount: destroyOnUnmount
        });
      }
    }, {
      key: "render",
      value: function render() {
        var LoadedComponent = this.state.LoadedComponent;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, LoadedComponent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadedComponent, this.props) : loadingComponent);
      }
    }]);

    return asyncImportComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

  return asyncImportComponent;
};

/***/ }),

/***/ "../core/src/async-import/async-import-component/index.js":
/*!****************************************************************!*\
  !*** ../core/src/async-import/async-import-component/index.js ***!
  \****************************************************************/
/*! exports provided: asyncImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _async_import_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-import-component */ "../core/src/async-import/async-import-component/async-import-component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncImportComponent", function() { return _async_import_component__WEBPACK_IMPORTED_MODULE_0__["asyncImportComponent"]; });



/***/ }),

/***/ "../core/src/async-import/async-import.hoc.js":
/*!****************************************************!*\
  !*** ../core/src/async-import/async-import.hoc.js ***!
  \****************************************************/
/*! exports provided: asyncImport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncImport", function() { return asyncImport; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../configs/namespace.config */ "../../configs/namespace.config.js");
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants.js */ "../core/src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "../core/src/async-import/helpers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var head = document.getElementsByTagName('head')[0];
var asyncImport = function asyncImport(packages) {
  var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (WrappedComponent) {
    var _configs$server = configs.server,
        server = _configs$server === void 0 ? _constants_js__WEBPACK_IMPORTED_MODULE_4__["STATIC_SERVER"] : _configs$server,
        _configs$destroyOnUnm = configs.destroyOnUnmount,
        destroyOnUnmount = _configs$destroyOnUnm === void 0 ? true : _configs$destroyOnUnm,
        _configs$reducer = configs.reducer,
        reducer = _configs$reducer === void 0 ? 'rootReducer' : _configs$reducer,
        _configs$mapPackagesT = configs.mapPackagesToProps,
        mapPackagesToProps = _configs$mapPackagesT === void 0 ? undefined : _configs$mapPackagesT,
        _configs$withConnect = configs.withConnect,
        withConnect = _configs$withConnect === void 0 ? undefined : _configs$withConnect;
    var availablePackageNames = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getAvailablePackageNames"])(packages);

    if (!availablePackageNames) {
      console.groupCollapsed('No Available Packages for Loading');
      console.log(packages);
      console.groupEnd();
      return WrappedComponent;
    }

    var LoadPackages =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(LoadPackages, _PureComponent);

      function LoadPackages(props) {
        var _this;

        _classCallCheck(this, LoadPackages);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(LoadPackages).call(this, props));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadingPackage", function (packageName) {
          Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getLoadPackage"])(packageName).then(function () {
            _this.setState(_defineProperty({}, packageName, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getLoadPackage"])(packageName)));

            _this.mountLoadedComponent(packageName, _constants_js__WEBPACK_IMPORTED_MODULE_4__["PACKAGE_STATUSES"].FROM_CACHE);
          });
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mountLoadedComponent", function (packageName, fromCache) {
          Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["injectAsyncReducer"])({
            packageName: packageName,
            reducer: reducer
          });

          if (!fromCache) {
            _this.resolve && _this.resolve();

            _this.setState(_defineProperty({}, packageName, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getLoadPackage"])(packageName)));
          }

          Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["increasedLoadedComponents"])({
            packageName: packageName
          });
          Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["notify"])({
            packageName: packageName,
            state: fromCache || _constants_js__WEBPACK_IMPORTED_MODULE_4__["PACKAGE_STATUSES"].LOADED
          });
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "packagesLoaded", function () {
          return availablePackageNames.every(function (packageName) {
            return _this.state[packageName] && !_this.state[packageName].then;
          });
        });

        _this.state = _this.getInitialState();
        return _this;
      }

      _createClass(LoadPackages, [{
        key: "getInitialState",
        value: function getInitialState() {
          var _this2 = this;

          return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["reduce"])(availablePackageNames, function (state, packageName) {
            var LoadedPackage = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getLoadPackage"])(packageName);
            var loadingPackage = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getLoadPackage"])([packageName, 'then']);

            if (loadingPackage) {
              _this2.loadingPackage(packageName);
            } else if (LoadedPackage) {
              _this2.mountLoadedComponent(packageName, _constants_js__WEBPACK_IMPORTED_MODULE_4__["PACKAGE_STATUSES"].FROM_CACHE);
            } else if (!LoadedPackage) {
              _this2.loadPackage(packageName);
            }

            return _objectSpread({}, state, _defineProperty({}, packageName, LoadedPackage));
          }, {});
        }
      }, {
        key: "loadPackage",
        value: function loadPackage(packageName) {
          var _this3 = this;

          var isModuleLoaded = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(window.APP, [packageName]);

          if (!isModuleLoaded) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__["APP"]], [packageName], new Promise(function (resolve, reject) {
              _this3.resolve = resolve;
            }));
            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["loadFile"])({
              inject: head,
              type: 'link',
              url: "".concat(server, "/css/").concat(packageName, ".css"),
              packageName: packageName
            });
            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["loadFile"])({
              inject: head,
              type: 'script',
              url: "".concat(server, "/js/").concat(packageName, ".js"),
              packageName: packageName
            }).then(function () {
              _this3.mountLoadedComponent(packageName);
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          availablePackageNames.forEach(function (packageName) {
            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["destroy"])({
              packageName: packageName,
              destroyOnUnmount: destroyOnUnmount
            });
          });
        }
      }, {
        key: "render",
        value: function render() {
          var packagesLoaded = this.packagesLoaded();
          var mapedPackagesToProps = mapPackagesToProps && packagesLoaded ? mapPackagesToProps(this.state) : this.state;
          var Component = withConnect && packagesLoaded ? withConnect(mapedPackagesToProps)(WrappedComponent) : WrappedComponent;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, packagesLoaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
            loading: !packagesLoaded
          }, mapedPackagesToProps, this.props)) : null);
        }
      }]);

      return LoadPackages;
    }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

    return LoadPackages;
  };
};

/***/ }),

/***/ "../core/src/async-import/helpers.js":
/*!*******************************************!*\
  !*** ../core/src/async-import/helpers.js ***!
  \*******************************************/
/*! exports provided: getAvailablePackageNames, getLoadPackage, loadFile, getImportCount, increasedLoadedComponents, decreasedLoadedComponents, injectAsyncReducer, notify, destroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailablePackageNames", function() { return getAvailablePackageNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoadPackage", function() { return getLoadPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFile", function() { return loadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImportCount", function() { return getImportCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increasedLoadedComponents", function() { return increasedLoadedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreasedLoadedComponents", function() { return decreasedLoadedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectAsyncReducer", function() { return injectAsyncReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notify", function() { return notify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../configs/namespace.config */ "../../configs/namespace.config.js");
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../core/src/constants.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "../core/src/index.js");




var getAvailablePackageNames = function getAvailablePackageNames(packages) {
  return packages.filter(function (packageName) {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["PACKAGE_NAMES"][packageName];
  });
};
var getLoadPackage = function getLoadPackage(path) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], path);
};
var loadFile = function loadFile(_ref) {
  var inject = _ref.inject,
      url = _ref.url,
      type = _ref.type,
      onLoad = _ref.onLoad,
      packageName = _ref.packageName;
  var resolve = null;
  var el = document.createElement(type);
  var promise = new Promise(function (res) {
    resolve = res;
  });

  if (type === 'script') {
    el.async = true;
    el.src = url;
  }

  el.onload = resolve;
  el.id = "__".concat(packageName, "-").concat(type, "__");

  if (type === 'link') {
    el.rel = 'stylesheet';
    el.type = 'text/css';
    el.href = url;
  }

  inject.insertBefore(el, inject.lastChild);
  return promise;
};
var getImportCount = function getImportCount(_ref2) {
  var packageName = _ref2.packageName,
      name = _ref2.name;
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_COUNT"], packageName, name], 0);
};
var increasedLoadedComponents = function increasedLoadedComponents(_ref3) {
  var packageName = _ref3.packageName,
      module = _ref3.module;

  if (module) {
    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_COUNT"], packageName, module], getImportCount({
      packageName: packageName,
      name: module
    }) + 1);
  } else {
    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_COUNT"], packageName, _constants__WEBPACK_IMPORTED_MODULE_2__["ASYNC_IMPORT"]], getImportCount({
      packageName: packageName,
      name: _constants__WEBPACK_IMPORTED_MODULE_2__["ASYNC_IMPORT"]
    }) + 1);
  }

  Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_COUNT"], packageName, _constants__WEBPACK_IMPORTED_MODULE_2__["TOTAL_IMPORT"]], getImportCount({
    packageName: packageName,
    name: _constants__WEBPACK_IMPORTED_MODULE_2__["TOTAL_IMPORT"]
  }) + 1);
};
var decreasedLoadedComponents = function decreasedLoadedComponents(_ref4) {
  var packageName = _ref4.packageName,
      module = _ref4.module;

  if (module) {
    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_COUNT"], packageName, module], getImportCount({
      packageName: packageName,
      name: module
    }) - 1);
  } else {
    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_COUNT"], packageName, _constants__WEBPACK_IMPORTED_MODULE_2__["ASYNC_IMPORT"]], getImportCount({
      packageName: packageName,
      name: _constants__WEBPACK_IMPORTED_MODULE_2__["ASYNC_IMPORT"]
    }) - 1);
  }

  Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_COUNT"], packageName, _constants__WEBPACK_IMPORTED_MODULE_2__["TOTAL_IMPORT"]], getImportCount({
    packageName: packageName,
    name: _constants__WEBPACK_IMPORTED_MODULE_2__["TOTAL_IMPORT"]
  }) - 1);
};
var injectAsyncReducer = function injectAsyncReducer(_ref5) {
  var packageName = _ref5.packageName,
      reducer = _ref5.reducer;
  var asyncReducers = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [packageName, reducer]);

  if (asyncReducers && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(_index__WEBPACK_IMPORTED_MODULE_3__["store"], [_constants__WEBPACK_IMPORTED_MODULE_2__["ASYNC_REDUCERS"], packageName])) {
    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(_index__WEBPACK_IMPORTED_MODULE_3__["store"], [_constants__WEBPACK_IMPORTED_MODULE_2__["ASYNC_REDUCERS"], packageName], asyncReducers);
    _index__WEBPACK_IMPORTED_MODULE_3__["store"].replaceReducer(Object(_index__WEBPACK_IMPORTED_MODULE_3__["createReducer"])(_index__WEBPACK_IMPORTED_MODULE_3__["store"][_constants__WEBPACK_IMPORTED_MODULE_2__["ASYNC_REDUCERS"]]));
  }
};
var notify = function notify(_ref6) {
  var packageName = _ref6.packageName,
      module = _ref6.module,
      state = _ref6.state;

  try {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(JSON.parse(window.localStorage.getItem(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"])), 'DEBUG')) {
      var moduleMsg = module ? "[Component][".concat(module, "]") : '';
      console.groupCollapsed("[Package][%s][%s]".concat(moduleMsg), packageName, state);
      console.log('[The total count imports of the components from the chunk %d on the screen]', getImportCount({
        packageName: packageName,
        name: module || _constants__WEBPACK_IMPORTED_MODULE_2__["TOTAL_IMPORT"]
      }));
      console.groupEnd();
    }
  } catch (e) {
    console.error(e);
  }
};
var destroy = function destroy() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      packageName = _ref7.packageName,
      _ref7$module = _ref7.module,
      module = _ref7$module === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_2__["ASYNC_IMPORT"] : _ref7$module,
      destroyOnUnmount = _ref7.destroyOnUnmount;

  decreasedLoadedComponents({
    packageName: packageName,
    module: module
  });
  var hasLoadedComponents = getImportCount({
    packageName: packageName,
    name: _constants__WEBPACK_IMPORTED_MODULE_2__["TOTAL_IMPORT"]
  }) !== 0;
  var canBeDestroyed = destroyOnUnmount && !hasLoadedComponents;

  if (canBeDestroyed) {
    var scriptEl = document.getElementById("__".concat(packageName, "-script__"));
    var linkEl = document.getElementById("__".concat(packageName, "-link__"));
    scriptEl && scriptEl.remove();
    linkEl && linkEl.remove();
    delete window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]][_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_COUNT"]][packageName];
    delete window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]][packageName];

    if (_index__WEBPACK_IMPORTED_MODULE_3__["store"][_constants__WEBPACK_IMPORTED_MODULE_2__["ASYNC_REDUCERS"]]) {
      delete _index__WEBPACK_IMPORTED_MODULE_3__["store"][_constants__WEBPACK_IMPORTED_MODULE_2__["ASYNC_REDUCERS"]][packageName];
    }

    notify({
      packageName: packageName,
      state: 'Cleared'
    });
  }
};

/***/ }),

/***/ "../core/src/async-import/index.js":
/*!*****************************************!*\
  !*** ../core/src/async-import/index.js ***!
  \*****************************************/
/*! exports provided: asyncImport, asyncImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _async_import_hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-import.hoc */ "../core/src/async-import/async-import.hoc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncImport", function() { return _async_import_hoc__WEBPACK_IMPORTED_MODULE_0__["asyncImport"]; });

/* harmony import */ var _async_import_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async-import-component */ "../core/src/async-import/async-import-component/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncImportComponent", function() { return _async_import_component__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"]; });




/***/ }),

/***/ "../core/src/constants.js":
/*!********************************!*\
  !*** ../core/src/constants.js ***!
  \********************************/
/*! exports provided: STATIC_SERVER, ASYNC_REDUCERS, TOTAL_IMPORT, ASYNC_IMPORT, COMPONENTS_COUNT, PACKAGE_NAMES, PACKAGE_STATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_SERVER", function() { return STATIC_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASYNC_REDUCERS", function() { return ASYNC_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOTAL_IMPORT", function() { return TOTAL_IMPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASYNC_IMPORT", function() { return ASYNC_IMPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS_COUNT", function() { return COMPONENTS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PACKAGE_NAMES", function() { return PACKAGE_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PACKAGE_STATUSES", function() { return PACKAGE_STATUSES; });
var STATIC_SERVERS = {
  DT: 'https://rawcdn.githack.com/sergii-azizov/lerna-react/737c051736b0a1c1670414f0b72ef5bdbcb20bb3/dist/'
};
var STATIC_SERVER = STATIC_SERVERS.DT;
var ASYNC_REDUCERS = 'asyncReducers';
var TOTAL_IMPORT = 'totalImport';
var ASYNC_IMPORT = 'asyncImport';
var COMPONENTS_COUNT = 'LOADED_COMPONENTS_COUNT';
var PACKAGE_NAMES = {
  portal: 'portal',
  components: 'components',
  desktopSummaryScreen: 'desktopSummaryScreen',
  taskSelector: 'taskSelector',
  scripting: 'scripting',
  sequence: 'sequence'
};
var PACKAGE_STATUSES = {
  FROM_CACHE: 'From Cache',
  LOADED: 'Loaded'
};

/***/ }),

/***/ "../core/src/index.js":
/*!****************************!*\
  !*** ../core/src/index.js ***!
  \****************************/
/*! exports provided: asyncImport, asyncImportComponent, PACKAGE_NAMES, withRender, store, history, createReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _async_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-import */ "../core/src/async-import/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncImport", function() { return _async_import__WEBPACK_IMPORTED_MODULE_0__["asyncImport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncImportComponent", function() { return _async_import__WEBPACK_IMPORTED_MODULE_0__["asyncImportComponent"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../core/src/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PACKAGE_NAMES", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"]; });

/* harmony import */ var _with_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-render */ "../core/src/with-render/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRender", function() { return _with_render__WEBPACK_IMPORTED_MODULE_2__["withRender"]; });

/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "../core/src/store/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store__WEBPACK_IMPORTED_MODULE_3__["store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "history", function() { return _store__WEBPACK_IMPORTED_MODULE_3__["history"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return _store__WEBPACK_IMPORTED_MODULE_3__["createReducer"]; });






/***/ }),

/***/ "../core/src/store/index.js":
/*!**********************************!*\
  !*** ../core/src/store/index.js ***!
  \**********************************/
/*! exports provided: store, history, createReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "../core/src/store/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store__WEBPACK_IMPORTED_MODULE_0__["store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "history", function() { return _store__WEBPACK_IMPORTED_MODULE_0__["history"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "../core/src/store/reducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "../core/src/store/reducers.js":
/*!*************************************!*\
  !*** ../core/src/store/reducers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../../node_modules/redux/es/redux.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "../../node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "../core/src/store/store.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var asyncReducers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_objectSpread({
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(_store__WEBPACK_IMPORTED_MODULE_2__["history"])
  }, asyncReducers));
});

/***/ }),

/***/ "../core/src/store/store.js":
/*!**********************************!*\
  !*** ../core/src/store/store.js ***!
  \**********************************/
/*! exports provided: store, history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../../node_modules/redux/es/redux.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history/createBrowserHistory */ "../../node_modules/history/createBrowserHistory.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "../../node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "../../node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "../core/src/store/reducers.js");
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../configs/namespace.config */ "../../configs/namespace.config.js");
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_5__);






var history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_1___default()();
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
var middleware = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history), redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]));
var store = window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_5__["APP"]].store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"])(), middleware);


/***/ }),

/***/ "../core/src/with-render/hoc.js":
/*!**************************************!*\
  !*** ../core/src/with-render/hoc.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return function (WrappedComponent) {
    var WithRender = function WithRender(props) {
      return !props.rendered ? null : !props.hidden ? React.createElement(WrappedComponent, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(props, ['rendered']), props.children) : React.createElement("div", {
        hidden: props.hidden
      }, React.createElement(WrappedComponent, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(props, ['rendered']), props.children));
    };

    WithRender.propTypes = {
      hidden: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
      rendered: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
      children: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["node"], prop_types__WEBPACK_IMPORTED_MODULE_0__["func"]])
    };
    WithRender.defaultProps = {
      hidden: false,
      rendered: true,
      children: null
    };
    return WithRender;
  };
});

/***/ }),

/***/ "../core/src/with-render/index.js":
/*!****************************************!*\
  !*** ../core/src/with-render/index.js ***!
  \****************************************/
/*! exports provided: withRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoc */ "../core/src/with-render/hoc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRender", function() { return _hoc__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

/******/ });
});
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/es/index.js");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core */ "../../dist/js/core.js");
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "../../node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core */ "../../dist/js/core.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AsyncImportScreen = function AsyncImportScreen() {
  return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, React.createElement("h2", null, "AsyncImport"));
};

/* harmony default export */ __webpack_exports__["default"] = (AsyncImportScreen);
/* ****** EXAMPLE 1 -> apply asyncImport HOC and import Button from components package

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


****** EXAMPLE 2 -> import constants and functions


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


****** EXAMPLE 3 -> import Redux actions creator


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




****** EXAMPLE 4 -> mapPackagesToProps is a function which can help with renaming or reorganization modules which will be puted to component


import { Fragment } from 'react';
import { connect } from 'react-redux';
import { PACKAGE_NAMES, asyncImport } from 'core';

import styles from './test.scss'

const AsyncImportScreen = ({ Button, Counter, decrement, increment }) => {
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

const withConnect = ({ decrement, increment }) => connect(null, { decrement, increment });
const mapPackagesToProps = ({ components: { Button, Counter, decrement, increment }}) => ({ Button, Counter, decrement, increment });

export default asyncImport([PACKAGE_NAMES.components], { mapPackagesToProps, withConnect })(AsyncImportScreen);




****** EXAMPLE 5 -> asyncImport HOC includes another asyncImport HOC


import { Fragment } from 'react';
import { connect } from 'react-redux';
import { PACKAGE_NAMES, asyncImport } from 'core';

import AsyncImportScreen2 from './async-import-2.screen';
import styles from './test.scss'

const AsyncImportScreen = ({ Button, Counter, decrement, increment }) => {
    return (
        <Fragment>
            <h1>AsyncImport 1</h1>
            <div className={styles.root}>
                <h3>Component with dynamic store from "components" package</h3>
                <Counter />
            </div>
            <div className={styles.root}>
                <h3>Imported Actions from "components" package</h3>
                <Button onClick={increment}>+1</Button>
                <Button onClick={decrement}>-1</Button>
            </div>
            <div className={styles.root}>
                <AsyncImportScreen2 />
            </div>
        </Fragment>
    );
};

const withConnect = ({ decrement, increment }) => connect(null, { decrement, increment });
const mapPackagesToProps = ({ components: { Button, Counter, decrement, increment }}) => ({ Button, Counter, decrement, increment });

export default asyncImport([PACKAGE_NAMES.components], { mapPackagesToProps, withConnect })(AsyncImportScreen);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "../../dist/js/core.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "../../dist/js/core.js");
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



var Module = Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
  component: 'Button'
}, function () {
  return __webpack_require__.e(/*! import() | components */ "components").then(__webpack_require__.bind(null, /*! ../../../components/src/index.js */ "../components/src/index.js"));
});

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
      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, React.createElement("h2", null, "Home"), React.createElement("p", null, "some contsent"), React.createElement(Module, null, "ASASasasdasddasd2sS"));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "../../dist/js/core.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "../../dist/js/core.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "../../dist/js/core.js");
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
      },
      Button4: function Button4() {
        return React.createElement("div", null, "loading Button-5");
      },
      Button5: function Button5() {
        return React.createElement("div", null, "loading Button-5");
      },
      Button11: function Button11() {
        return React.createElement("div", null, "loading Button-1");
      },
      Button22: function Button22() {
        return React.createElement("div", null, "loading Button-2");
      },
      Button33: function Button33() {
        return React.createElement("div", null, "loading Button-3");
      },
      Button44: function Button44() {
        return React.createElement("div", null, "loading Button-5");
      },
      Button55: function Button55() {
        return React.createElement("div", null, "loading Button-5");
      },
      Button111: function Button111() {
        return React.createElement("div", null, "loading Button-1");
      },
      Button222: function Button222() {
        return React.createElement("div", null, "loading Button-2");
      },
      Button333: function Button333() {
        return React.createElement("div", null, "loading Button-3");
      },
      Button444: function Button444() {
        return React.createElement("div", null, "loading Button-5");
      },
      Button555: function Button555() {
        return React.createElement("div", null, "loading Button-5");
      },
      Button1111: function Button1111() {
        return React.createElement("div", null, "loading Button-1");
      },
      Button2222: function Button2222() {
        return React.createElement("div", null, "loading Button-2");
      },
      Button3333: function Button3333() {
        return React.createElement("div", null, "loading Button-3");
      },
      Button4444: function Button4444() {
        return React.createElement("div", null, "loading Button-5");
      },
      Button5555: function Button5555() {
        return React.createElement("div", null, "loading Button-5");
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
        }),
        Button4: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button5: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button11: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button22: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button33: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button44: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button55: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button111: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button222: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button333: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button444: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button555: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button1111: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button2222: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button3333: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button4444: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        }),
        Button5555: Object(core__WEBPACK_IMPORTED_MODULE_1__["asyncImportComponent"])(core__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_NAMES"].components, {
          component: 'Button'
        })
      });

      setTimeout(_this.remove, 2000);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "remove", function () {
      _this.setState({
        Button1: function Button1() {
          return React.createElement("div", null, "removed Button");
        },
        Button2: function Button2() {
          return React.createElement("div", null, "removed Button");
        },
        Button3: function Button3() {
          return React.createElement("div", null, "removed Button");
        },
        Button4: function Button4() {
          return React.createElement("div", null, "removed Button");
        },
        Button5: function Button5() {
          return React.createElement("div", null, "removed Button");
        },
        Button11: function Button11() {
          return React.createElement("div", null, "removed Button");
        },
        Button22: function Button22() {
          return React.createElement("div", null, "removed Button");
        },
        Button33: function Button33() {
          return React.createElement("div", null, "removed Button");
        },
        Button44: function Button44() {
          return React.createElement("div", null, "removed Button");
        },
        Button55: function Button55() {
          return React.createElement("div", null, "removed Button");
        },
        Button111: function Button111() {
          return React.createElement("div", null, "removed Button");
        },
        Button222: function Button222() {
          return React.createElement("div", null, "removed Button");
        },
        Button333: function Button333() {
          return React.createElement("div", null, "removed Button");
        },
        Button444: function Button444() {
          return React.createElement("div", null, "removed Button");
        },
        Button555: function Button555() {
          return React.createElement("div", null, "removed Button");
        },
        Button1111: function Button1111() {
          return React.createElement("div", null, "removed Button");
        },
        Button2222: function Button2222() {
          return React.createElement("div", null, "removed Button");
        },
        Button3333: function Button3333() {
          return React.createElement("div", null, "removed Button");
        },
        Button4444: function Button4444() {
          return React.createElement("div", null, "removed Button");
        },
        Button5555: function Button5555() {
          return React.createElement("div", null, "removed Button");
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
          Button3 = _this$state.Button3,
          Button4 = _this$state.Button4,
          Button5 = _this$state.Button5,
          Button11 = _this$state.Button11,
          Button22 = _this$state.Button22,
          Button33 = _this$state.Button33,
          Button44 = _this$state.Button44,
          Button55 = _this$state.Button55,
          Button111 = _this$state.Button111,
          Button222 = _this$state.Button222,
          Button333 = _this$state.Button333,
          Button444 = _this$state.Button444,
          Button555 = _this$state.Button555,
          Button1111 = _this$state.Button1111,
          Button2222 = _this$state.Button2222,
          Button3333 = _this$state.Button3333,
          Button4444 = _this$state.Button4444,
          Button5555 = _this$state.Button5555;
      return React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, React.createElement("h2", null, "Toggle Components Mounting"), React.createElement(Button1, null, "Button"), React.createElement(Button2, null, "Button"), React.createElement(Button3, null, "Button"), React.createElement(Button4, null, "Button"), React.createElement(Button5, null, "Button"), React.createElement(Button11, null, "Button"), React.createElement(Button22, null, "Button"), React.createElement(Button33, null, "Button"), React.createElement(Button44, null, "Button"), React.createElement(Button55, null, "Button"), React.createElement(Button111, null, "Button"), React.createElement(Button222, null, "Button"), React.createElement(Button333, null, "Button"), React.createElement(Button444, null, "Button"), React.createElement(Button555, null, "Button"), React.createElement(Button1111, null, "Button"), React.createElement(Button2222, null, "Button"), React.createElement(Button3333, null, "Button"), React.createElement(Button4444, null, "Button"), React.createElement(Button5555, null, "Button"));
    }
  }]);

  return ParallelToggleComponentsMountingScreen;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleModulesScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "../../dist/js/core.js");
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

/***/ })

/******/ });
});
//# sourceMappingURL=portal.js.map