(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("connectedReactRouter"), require("lodash"), require("propTypes"), require("React"), require("redux"));
	else if(typeof define === 'function' && define.amd)
		define("core", ["connectedReactRouter", "lodash", "propTypes", "React", "redux"], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory(require("connectedReactRouter"), require("lodash"), require("propTypes"), require("React"), require("redux"));
	else
		root["core"] = factory(root["connectedReactRouter"], root["lodash"], root["propTypes"], root["React"], root["redux"]);
})(window.__APP__, function(__WEBPACK_EXTERNAL_MODULE_connected_react_router__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_redux__) {
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

/***/ "../../configs/namespace.config.js":
/*!******************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/configs/namespace.config.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    APP: '__APP__',\n    COMPONENTS_COUNT: \"LOADED_COMPONENTS_COUNT\"\n};\n\n\n//# sourceURL=webpack://%5Bname%5D//Users/saziz/projects/training/lerna-react/configs/namespace.config.js?");

/***/ }),

/***/ "../../node_modules/history/DOMUtils.js":
/*!***********************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/history/DOMUtils.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nvar canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);\n\nvar addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {\n  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);\n};\n\nvar removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {\n  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);\n};\n\nvar getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {\n  return callback(window.confirm(message));\n}; // eslint-disable-line no-alert\n\n/**\n * Returns true if the HTML5 history API is supported. Taken from Modernizr.\n *\n * https://github.com/Modernizr/Modernizr/blob/master/LICENSE\n * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js\n * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586\n */\nvar supportsHistory = exports.supportsHistory = function supportsHistory() {\n  var ua = window.navigator.userAgent;\n\n  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;\n\n  return window.history && 'pushState' in window.history;\n};\n\n/**\n * Returns true if browser fires popstate on hash change.\n * IE10 and IE11 do not.\n */\nvar supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {\n  return window.navigator.userAgent.indexOf('Trident') === -1;\n};\n\n/**\n * Returns false if using go(n) with hash history causes a full page reload.\n */\nvar supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {\n  return window.navigator.userAgent.indexOf('Firefox') === -1;\n};\n\n/**\n * Returns true if a given popstate event is an extraneous WebKit event.\n * Accounts for the fact that Chrome on iOS fires real popstate events\n * containing undefined state when pressing the back button.\n */\nvar isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {\n  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;\n};\n\n//# sourceURL=webpack://%5Bname%5D//Users/saziz/projects/training/lerna-react/node_modules/history/DOMUtils.js?");

/***/ }),

/***/ "../../node_modules/history/LocationUtils.js":
/*!****************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/history/LocationUtils.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.locationsAreEqual = exports.createLocation = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _resolvePathname = __webpack_require__(/*! resolve-pathname */ \"../../node_modules/resolve-pathname/index.js\");\n\nvar _resolvePathname2 = _interopRequireDefault(_resolvePathname);\n\nvar _valueEqual = __webpack_require__(/*! value-equal */ \"../../node_modules/value-equal/index.js\");\n\nvar _valueEqual2 = _interopRequireDefault(_valueEqual);\n\nvar _PathUtils = __webpack_require__(/*! ./PathUtils */ \"../../node_modules/history/PathUtils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {\n  var location = void 0;\n  if (typeof path === 'string') {\n    // Two-arg form: push(path, state)\n    location = (0, _PathUtils.parsePath)(path);\n    location.state = state;\n  } else {\n    // One-arg form: push(location)\n    location = _extends({}, path);\n\n    if (location.pathname === undefined) location.pathname = '';\n\n    if (location.search) {\n      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;\n    } else {\n      location.search = '';\n    }\n\n    if (location.hash) {\n      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;\n    } else {\n      location.hash = '';\n    }\n\n    if (state !== undefined && location.state === undefined) location.state = state;\n  }\n\n  try {\n    location.pathname = decodeURI(location.pathname);\n  } catch (e) {\n    if (e instanceof URIError) {\n      throw new URIError('Pathname \"' + location.pathname + '\" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');\n    } else {\n      throw e;\n    }\n  }\n\n  if (key) location.key = key;\n\n  if (currentLocation) {\n    // Resolve incomplete/relative pathname relative to current location.\n    if (!location.pathname) {\n      location.pathname = currentLocation.pathname;\n    } else if (location.pathname.charAt(0) !== '/') {\n      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);\n    }\n  } else {\n    // When there is no prior location and pathname is empty, set it to /\n    if (!location.pathname) {\n      location.pathname = '/';\n    }\n  }\n\n  return location;\n};\n\nvar locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {\n  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);\n};\n\n//# sourceURL=webpack://%5Bname%5D//Users/saziz/projects/training/lerna-react/node_modules/history/LocationUtils.js?");

/***/ }),

/***/ "../../node_modules/history/PathUtils.js":
/*!************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/history/PathUtils.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nvar addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {\n  return path.charAt(0) === '/' ? path : '/' + path;\n};\n\nvar stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {\n  return path.charAt(0) === '/' ? path.substr(1) : path;\n};\n\nvar hasBasename = exports.hasBasename = function hasBasename(path, prefix) {\n  return new RegExp('^' + prefix + '(\\\\/|\\\\?|#|$)', 'i').test(path);\n};\n\nvar stripBasename = exports.stripBasename = function stripBasename(path, prefix) {\n  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;\n};\n\nvar stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {\n  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;\n};\n\nvar parsePath = exports.parsePath = function parsePath(path) {\n  var pathname = path || '/';\n  var search = '';\n  var hash = '';\n\n  var hashIndex = pathname.indexOf('#');\n  if (hashIndex !== -1) {\n    hash = pathname.substr(hashIndex);\n    pathname = pathname.substr(0, hashIndex);\n  }\n\n  var searchIndex = pathname.indexOf('?');\n  if (searchIndex !== -1) {\n    search = pathname.substr(searchIndex);\n    pathname = pathname.substr(0, searchIndex);\n  }\n\n  return {\n    pathname: pathname,\n    search: search === '?' ? '' : search,\n    hash: hash === '#' ? '' : hash\n  };\n};\n\nvar createPath = exports.createPath = function createPath(location) {\n  var pathname = location.pathname,\n      search = location.search,\n      hash = location.hash;\n\n\n  var path = pathname || '/';\n\n  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;\n\n  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;\n\n  return path;\n};\n\n//# sourceURL=webpack://%5Bname%5D//Users/saziz/projects/training/lerna-react/node_modules/history/PathUtils.js?");

/***/ }),

/***/ "../../node_modules/history/createBrowserHistory.js":
/*!***********************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/history/createBrowserHistory.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _warning = __webpack_require__(/*! warning */ \"../../node_modules/history/node_modules/warning/browser.js\");\n\nvar _warning2 = _interopRequireDefault(_warning);\n\nvar _invariant = __webpack_require__(/*! invariant */ \"../../node_modules/invariant/browser.js\");\n\nvar _invariant2 = _interopRequireDefault(_invariant);\n\nvar _LocationUtils = __webpack_require__(/*! ./LocationUtils */ \"../../node_modules/history/LocationUtils.js\");\n\nvar _PathUtils = __webpack_require__(/*! ./PathUtils */ \"../../node_modules/history/PathUtils.js\");\n\nvar _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ \"../../node_modules/history/createTransitionManager.js\");\n\nvar _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);\n\nvar _DOMUtils = __webpack_require__(/*! ./DOMUtils */ \"../../node_modules/history/DOMUtils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PopStateEvent = 'popstate';\nvar HashChangeEvent = 'hashchange';\n\nvar getHistoryState = function getHistoryState() {\n  try {\n    return window.history.state || {};\n  } catch (e) {\n    // IE 11 sometimes throws when accessing window.history.state\n    // See https://github.com/ReactTraining/history/pull/289\n    return {};\n  }\n};\n\n/**\n * Creates a history object that uses the HTML5 history API including\n * pushState, replaceState, and the popstate event.\n */\nvar createBrowserHistory = function createBrowserHistory() {\n  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');\n\n  var globalHistory = window.history;\n  var canUseHistory = (0, _DOMUtils.supportsHistory)();\n  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();\n\n  var _props$forceRefresh = props.forceRefresh,\n      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,\n      _props$getUserConfirm = props.getUserConfirmation,\n      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,\n      _props$keyLength = props.keyLength,\n      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;\n\n  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';\n\n  var getDOMLocation = function getDOMLocation(historyState) {\n    var _ref = historyState || {},\n        key = _ref.key,\n        state = _ref.state;\n\n    var _window$location = window.location,\n        pathname = _window$location.pathname,\n        search = _window$location.search,\n        hash = _window$location.hash;\n\n\n    var path = pathname + search + hash;\n\n    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path \"' + path + '\" to begin with \"' + basename + '\".');\n\n    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);\n\n    return (0, _LocationUtils.createLocation)(path, state, key);\n  };\n\n  var createKey = function createKey() {\n    return Math.random().toString(36).substr(2, keyLength);\n  };\n\n  var transitionManager = (0, _createTransitionManager2.default)();\n\n  var setState = function setState(nextState) {\n    _extends(history, nextState);\n\n    history.length = globalHistory.length;\n\n    transitionManager.notifyListeners(history.location, history.action);\n  };\n\n  var handlePopState = function handlePopState(event) {\n    // Ignore extraneous popstate events in WebKit.\n    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;\n\n    handlePop(getDOMLocation(event.state));\n  };\n\n  var handleHashChange = function handleHashChange() {\n    handlePop(getDOMLocation(getHistoryState()));\n  };\n\n  var forceNextPop = false;\n\n  var handlePop = function handlePop(location) {\n    if (forceNextPop) {\n      forceNextPop = false;\n      setState();\n    } else {\n      var action = 'POP';\n\n      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n        if (ok) {\n          setState({ action: action, location: location });\n        } else {\n          revertPop(location);\n        }\n      });\n    }\n  };\n\n  var revertPop = function revertPop(fromLocation) {\n    var toLocation = history.location;\n\n    // TODO: We could probably make this more reliable by\n    // keeping a list of keys we've seen in sessionStorage.\n    // Instead, we just default to 0 for keys we don't know.\n\n    var toIndex = allKeys.indexOf(toLocation.key);\n\n    if (toIndex === -1) toIndex = 0;\n\n    var fromIndex = allKeys.indexOf(fromLocation.key);\n\n    if (fromIndex === -1) fromIndex = 0;\n\n    var delta = toIndex - fromIndex;\n\n    if (delta) {\n      forceNextPop = true;\n      go(delta);\n    }\n  };\n\n  var initialLocation = getDOMLocation(getHistoryState());\n  var allKeys = [initialLocation.key];\n\n  // Public interface\n\n  var createHref = function createHref(location) {\n    return basename + (0, _PathUtils.createPath)(location);\n  };\n\n  var push = function push(path, state) {\n    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');\n\n    var action = 'PUSH';\n    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);\n\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n\n      var href = createHref(location);\n      var key = location.key,\n          state = location.state;\n\n\n      if (canUseHistory) {\n        globalHistory.pushState({ key: key, state: state }, null, href);\n\n        if (forceRefresh) {\n          window.location.href = href;\n        } else {\n          var prevIndex = allKeys.indexOf(history.location.key);\n          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);\n\n          nextKeys.push(location.key);\n          allKeys = nextKeys;\n\n          setState({ action: action, location: location });\n        }\n      } else {\n        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');\n\n        window.location.href = href;\n      }\n    });\n  };\n\n  var replace = function replace(path, state) {\n    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');\n\n    var action = 'REPLACE';\n    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);\n\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n\n      var href = createHref(location);\n      var key = location.key,\n          state = location.state;\n\n\n      if (canUseHistory) {\n        globalHistory.replaceState({ key: key, state: state }, null, href);\n\n        if (forceRefresh) {\n          window.location.replace(href);\n        } else {\n          var prevIndex = allKeys.indexOf(history.location.key);\n\n          if (prevIndex !== -1) allKeys[prevIndex] = location.key;\n\n          setState({ action: action, location: location });\n        }\n      } else {\n        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');\n\n        window.location.replace(href);\n      }\n    });\n  };\n\n  var go = function go(n) {\n    globalHistory.go(n);\n  };\n\n  var goBack = function goBack() {\n    return go(-1);\n  };\n\n  var goForward = function goForward() {\n    return go(1);\n  };\n\n  var listenerCount = 0;\n\n  var checkDOMListeners = function checkDOMListeners(delta) {\n    listenerCount += delta;\n\n    if (listenerCount === 1) {\n      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);\n\n      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);\n    } else if (listenerCount === 0) {\n      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);\n\n      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);\n    }\n  };\n\n  var isBlocked = false;\n\n  var block = function block() {\n    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n    var unblock = transitionManager.setPrompt(prompt);\n\n    if (!isBlocked) {\n      checkDOMListeners(1);\n      isBlocked = true;\n    }\n\n    return function () {\n      if (isBlocked) {\n        isBlocked = false;\n        checkDOMListeners(-1);\n      }\n\n      return unblock();\n    };\n  };\n\n  var listen = function listen(listener) {\n    var unlisten = transitionManager.appendListener(listener);\n    checkDOMListeners(1);\n\n    return function () {\n      checkDOMListeners(-1);\n      unlisten();\n    };\n  };\n\n  var history = {\n    length: globalHistory.length,\n    action: 'POP',\n    location: initialLocation,\n    createHref: createHref,\n    push: push,\n    replace: replace,\n    go: go,\n    goBack: goBack,\n    goForward: goForward,\n    block: block,\n    listen: listen\n  };\n\n  return history;\n};\n\nexports.default = createBrowserHistory;\n\n//# sourceURL=webpack://%5Bname%5D//Users/saziz/projects/training/lerna-react/node_modules/history/createBrowserHistory.js?");

/***/ }),

/***/ "../../node_modules/history/createTransitionManager.js":
/*!**************************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/history/createTransitionManager.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _warning = __webpack_require__(/*! warning */ \"../../node_modules/history/node_modules/warning/browser.js\");\n\nvar _warning2 = _interopRequireDefault(_warning);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createTransitionManager = function createTransitionManager() {\n  var prompt = null;\n\n  var setPrompt = function setPrompt(nextPrompt) {\n    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');\n\n    prompt = nextPrompt;\n\n    return function () {\n      if (prompt === nextPrompt) prompt = null;\n    };\n  };\n\n  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {\n    // TODO: If another transition starts while we're still confirming\n    // the previous one, we may end up in a weird state. Figure out the\n    // best way to handle this.\n    if (prompt != null) {\n      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;\n\n      if (typeof result === 'string') {\n        if (typeof getUserConfirmation === 'function') {\n          getUserConfirmation(result, callback);\n        } else {\n          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');\n\n          callback(true);\n        }\n      } else {\n        // Return false from a transition hook to cancel the transition.\n        callback(result !== false);\n      }\n    } else {\n      callback(true);\n    }\n  };\n\n  var listeners = [];\n\n  var appendListener = function appendListener(fn) {\n    var isActive = true;\n\n    var listener = function listener() {\n      if (isActive) fn.apply(undefined, arguments);\n    };\n\n    listeners.push(listener);\n\n    return function () {\n      isActive = false;\n      listeners = listeners.filter(function (item) {\n        return item !== listener;\n      });\n    };\n  };\n\n  var notifyListeners = function notifyListeners() {\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    listeners.forEach(function (listener) {\n      return listener.apply(undefined, args);\n    });\n  };\n\n  return {\n    setPrompt: setPrompt,\n    confirmTransitionTo: confirmTransitionTo,\n    appendListener: appendListener,\n    notifyListeners: notifyListeners\n  };\n};\n\nexports.default = createTransitionManager;\n\n//# sourceURL=webpack://%5Bname%5D//Users/saziz/projects/training/lerna-react/node_modules/history/createTransitionManager.js?");

/***/ }),

/***/ "../../node_modules/history/node_modules/warning/browser.js":
/*!*******************************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/history/node_modules/warning/browser.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright 2014-2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n\n\n/**\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */\n\nvar warning = function() {};\n\nif (true) {\n  warning = function(condition, format, args) {\n    var len = arguments.length;\n    args = new Array(len > 2 ? len - 2 : 0);\n    for (var key = 2; key < len; key++) {\n      args[key - 2] = arguments[key];\n    }\n    if (format === undefined) {\n      throw new Error(\n        '`warning(condition, format, ...args)` requires a warning ' +\n        'message argument'\n      );\n    }\n\n    if (format.length < 10 || (/^[s\\W]*$/).test(format)) {\n      throw new Error(\n        'The warning format should be able to uniquely identify this ' +\n        'warning. Please, use a more descriptive format than: ' + format\n      );\n    }\n\n    if (!condition) {\n      var argIndex = 0;\n      var message = 'Warning: ' +\n        format.replace(/%s/g, function() {\n          return args[argIndex++];\n        });\n      if (typeof console !== 'undefined') {\n        console.error(message);\n      }\n      try {\n        // This error was thrown as a convenience so that you can use this stack\n        // to find the callsite that caused this warning to fire.\n        throw new Error(message);\n      } catch(x) {}\n    }\n  };\n}\n\nmodule.exports = warning;\n\n\n//# sourceURL=webpack://%5Bname%5D//Users/saziz/projects/training/lerna-react/node_modules/history/node_modules/warning/browser.js?");

/***/ }),

/***/ "../../node_modules/invariant/browser.js":
/*!************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/invariant/browser.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar invariant = function(condition, format, a, b, c, d, e, f) {\n  if (true) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  }\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error(\n        'Minified exception occurred; use the non-minified dev environment ' +\n        'for the full error message and additional helpful warnings.'\n      );\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(\n        format.replace(/%s/g, function() { return args[argIndex++]; })\n      );\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n};\n\nmodule.exports = invariant;\n\n\n//# sourceURL=webpack://%5Bname%5D//Users/saziz/projects/training/lerna-react/node_modules/invariant/browser.js?");

/***/ }),

/***/ "../../node_modules/resolve-pathname/index.js":
/*!*****************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/resolve-pathname/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction isAbsolute(pathname) {\n  return pathname.charAt(0) === '/';\n}\n\n// About 1.5x faster than the two-arg version of Array#splice()\nfunction spliceOne(list, index) {\n  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {\n    list[i] = list[k];\n  }\n\n  list.pop();\n}\n\n// This implementation is based heavily on node's url.parse\nfunction resolvePathname(to) {\n  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n  var toParts = to && to.split('/') || [];\n  var fromParts = from && from.split('/') || [];\n\n  var isToAbs = to && isAbsolute(to);\n  var isFromAbs = from && isAbsolute(from);\n  var mustEndAbs = isToAbs || isFromAbs;\n\n  if (to && isAbsolute(to)) {\n    // to is absolute\n    fromParts = toParts;\n  } else if (toParts.length) {\n    // to is relative, drop the filename\n    fromParts.pop();\n    fromParts = fromParts.concat(toParts);\n  }\n\n  if (!fromParts.length) return '/';\n\n  var hasTrailingSlash = void 0;\n  if (fromParts.length) {\n    var last = fromParts[fromParts.length - 1];\n    hasTrailingSlash = last === '.' || last === '..' || last === '';\n  } else {\n    hasTrailingSlash = false;\n  }\n\n  var up = 0;\n  for (var i = fromParts.length; i >= 0; i--) {\n    var part = fromParts[i];\n\n    if (part === '.') {\n      spliceOne(fromParts, i);\n    } else if (part === '..') {\n      spliceOne(fromParts, i);\n      up++;\n    } else if (up) {\n      spliceOne(fromParts, i);\n      up--;\n    }\n  }\n\n  if (!mustEndAbs) for (; up--; up) {\n    fromParts.unshift('..');\n  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');\n\n  var result = fromParts.join('/');\n\n  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';\n\n  return result;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resolvePathname);\n\n//# sourceURL=webpack://%5Bname%5D//Users/saziz/projects/training/lerna-react/node_modules/resolve-pathname/index.js?");

/***/ }),

/***/ "../../node_modules/value-equal/index.js":
/*!************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/value-equal/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction valueEqual(a, b) {\n  if (a === b) return true;\n\n  if (a == null || b == null) return false;\n\n  if (Array.isArray(a)) {\n    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {\n      return valueEqual(item, b[index]);\n    });\n  }\n\n  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);\n  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);\n\n  if (aType !== bType) return false;\n\n  if (aType === 'object') {\n    var aValue = a.valueOf();\n    var bValue = b.valueOf();\n\n    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);\n\n    var aKeys = Object.keys(a);\n    var bKeys = Object.keys(b);\n\n    if (aKeys.length !== bKeys.length) return false;\n\n    return aKeys.every(function (key) {\n      return valueEqual(a[key], b[key]);\n    });\n  }\n\n  return false;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (valueEqual);\n\n//# sourceURL=webpack://%5Bname%5D//Users/saziz/projects/training/lerna-react/node_modules/value-equal/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: loadModule, MS_NAMES, withRender, store, history, createReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-module */ \"./src/load-module/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loadModule\", function() { return _load_module__WEBPACK_IMPORTED_MODULE_0__[\"loadModule\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MS_NAMES\", function() { return _load_module__WEBPACK_IMPORTED_MODULE_0__[\"MS_NAMES\"]; });\n\n/* harmony import */ var _shared_with_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/with-render */ \"./src/shared/with-render/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"withRender\", function() { return _shared_with_render__WEBPACK_IMPORTED_MODULE_1__[\"withRender\"]; });\n\n/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/store */ \"./src/shared/store/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return _shared_store__WEBPACK_IMPORTED_MODULE_2__[\"store\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"history\", function() { return _shared_store__WEBPACK_IMPORTED_MODULE_2__[\"history\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createReducer\", function() { return _shared_store__WEBPACK_IMPORTED_MODULE_2__[\"createReducer\"]; });\n\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/index.js?");

/***/ }),

/***/ "./src/load-module/constants.js":
/*!**************************************!*\
  !*** ./src/load-module/constants.js ***!
  \**************************************/
/*! exports provided: STATIC_SERVER, MS_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STATIC_SERVER\", function() { return STATIC_SERVER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MS_NAMES\", function() { return MS_NAMES; });\n/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../configs/namespace.config */ \"../../configs/namespace.config.js\");\n/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__);\n\nvar STATIC_SERVERS = {\n  DT: 'https://rawcdn.githack.com/sergii-azizov/lerna-react/b50a0efc0516f3c42e1dada39cf25259d3b624a2/dist'\n};\nvar STATIC_SERVER = window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__[\"APP\"]].STATIC_SERVER = window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__[\"APP\"].STATIC_SERVER] || STATIC_SERVERS.DT;\nvar MS_NAMES = window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_0__[\"APP\"]].MS_NAMES = {\n  PORTAL: 'portal',\n  COMPONENTS: 'components',\n  DESKTOP_SUMMARY_SCREEN: 'desktop-summary-screen',\n  TASK_SELECTOR: 'task-selector',\n  SCRIPTING: 'scripting',\n  SEQUENCE: 'sequence'\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/load-module/constants.js?");

/***/ }),

/***/ "./src/load-module/hoc.js":
/*!********************************!*\
  !*** ./src/load-module/hoc.js ***!
  \********************************/
/*! exports provided: loadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadModule\", function() { return loadModule; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../configs/namespace.config */ \"../../configs/namespace.config.js\");\n/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants.js */ \"./src/load-module/constants.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar head = document.getElementsByTagName('head')[0];\nvar TOTAL = 'total';\nvar FROM_CACHE = 'From Cache';\nvar LOADED = 'Loaded';\nvar ASYNC_REDUCERS = 'asyncReducers';\nvar loadModule = function loadModule(chunkName) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$server = _ref.server,\n      server = _ref$server === void 0 ? _constants_js__WEBPACK_IMPORTED_MODULE_5__[\"STATIC_SERVER\"] : _ref$server,\n      _ref$destroyOnUnmount = _ref.destroyOnUnmount,\n      destroyOnUnmount = _ref$destroyOnUnmount === void 0 ? true : _ref$destroyOnUnmount,\n      _ref$loadingComponent = _ref.loadingComponent,\n      loadingComponent = _ref$loadingComponent === void 0 ? null : _ref$loadingComponent,\n      _ref$componentName = _ref.componentName,\n      componentName = _ref$componentName === void 0 ? 'default' : _ref$componentName,\n      _ref$reducerName = _ref.reducerName,\n      reducerName = _ref$reducerName === void 0 ? 'rootReducers' : _ref$reducerName;\n\n  var LoadModule =\n  /*#__PURE__*/\n  function (_PureComponent) {\n    _inherits(LoadModule, _PureComponent);\n\n    function LoadModule(props) {\n      var _this;\n\n      _classCallCheck(this, LoadModule);\n\n      _this = _possibleConstructorReturn(this, _getPrototypeOf(LoadModule).call(this, props));\n\n      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"PATHS\", {\n        APP: window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__[\"APP\"]],\n        NAME: [chunkName, componentName],\n        COUNT: [_configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__[\"COMPONENTS_COUNT\"], chunkName],\n        REDUCER_CACHE: [ASYNC_REDUCERS, chunkName],\n        REDUCER: [chunkName, reducerName]\n      });\n\n      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"mountLoadedComponent\", function (fromCache) {\n        if (!fromCache) {\n          _this.resolve && _this.resolve();\n\n          _this.setState({\n            LoadedComponent: _this.getLoadedComponent()\n          });\n        }\n\n        _this.injectAsyncReducer();\n\n        _this.increasedLoadedComponents();\n\n        _this.notify(fromCache || LOADED);\n      });\n\n      _this.init();\n\n      return _this;\n    }\n\n    _createClass(LoadModule, [{\n      key: \"init\",\n      value: function init() {\n        var _this2 = this;\n\n        var LoadedComponent = this.getLoadedComponent();\n        var isModuleLoading = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(this.PATHS.APP, [chunkName, 'then']);\n        this.state = {\n          LoadedComponent: LoadedComponent || this.props.loadingComponent\n        };\n\n        if (isModuleLoading) {\n          this.PATHS.APP[chunkName].then(function () {\n            _this2.setState({\n              LoadedComponent: _this2.getLoadedComponent()\n            });\n\n            _this2.mountLoadedComponent(FROM_CACHE);\n          });\n        } else if (LoadedComponent) {\n          this.mountLoadedComponent(FROM_CACHE);\n        } else if (!LoadedComponent) {\n          this.loadModule();\n        }\n      }\n    }, {\n      key: \"getLoadedComponent\",\n      value: function getLoadedComponent() {\n        return Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(this.PATHS.APP, this.PATHS.NAME);\n      }\n    }, {\n      key: \"loadFile\",\n      value: function loadFile(_ref2) {\n        var url = _ref2.url,\n            type = _ref2.type,\n            onLoad = _ref2.onLoad;\n        var el = document.createElement(type);\n\n        if (type === 'script') {\n          el.async = true;\n          el.src = url;\n        }\n\n        el.onload = onLoad;\n        el.id = \"__\".concat(chunkName, \"-\").concat(type, \"__\");\n\n        if (type === 'link') {\n          el.rel = 'stylesheet';\n          el.type = 'text/css';\n          el.href = url;\n        }\n\n        head.insertBefore(el, head.lastChild);\n      }\n    }, {\n      key: \"getLoadedComponentsCount\",\n      value: function getLoadedComponentsCount(name) {\n        return Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(this.PATHS.APP, this.PATHS.COUNT.concat([name]), 0);\n      }\n    }, {\n      key: \"increasedLoadedComponents\",\n      value: function increasedLoadedComponents() {\n        var _objectSpread2;\n\n        Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"set\"])(this.PATHS.APP, this.PATHS.COUNT, _objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(this.PATHS.APP, this.PATHS.COUNT), (_objectSpread2 = {}, _defineProperty(_objectSpread2, componentName, this.getLoadedComponentsCount(componentName) + 1), _defineProperty(_objectSpread2, TOTAL, this.getLoadedComponentsCount(TOTAL) + 1), _objectSpread2)));\n      }\n    }, {\n      key: \"decreasedLoadedComponents\",\n      value: function decreasedLoadedComponents() {\n        var _objectSpread3;\n\n        Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"set\"])(this.PATHS.APP, this.PATHS.COUNT, _objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(this.PATHS.APP, this.PATHS.COUNT), (_objectSpread3 = {}, _defineProperty(_objectSpread3, componentName, this.getLoadedComponentsCount(componentName) - 1), _defineProperty(_objectSpread3, TOTAL, this.getLoadedComponentsCount(TOTAL) - 1), _objectSpread3)));\n      }\n    }, {\n      key: \"injectAsyncReducer\",\n      value: function injectAsyncReducer() {\n        var asyncReducers = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(this.PATHS.APP, this.PATHS.REDUCER);\n\n        if (asyncReducers && !Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(_index__WEBPACK_IMPORTED_MODULE_4__[\"store\"], this.PATHS.REDUCER_CACHE)) {\n          Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"set\"])(_index__WEBPACK_IMPORTED_MODULE_4__[\"store\"], this.PATHS.REDUCER_CACHE, asyncReducers);\n          _index__WEBPACK_IMPORTED_MODULE_4__[\"store\"].replaceReducer(Object(_index__WEBPACK_IMPORTED_MODULE_4__[\"createReducer\"])(_index__WEBPACK_IMPORTED_MODULE_4__[\"store\"][ASYNC_REDUCERS]));\n        }\n      }\n    }, {\n      key: \"notify\",\n      value: function notify(state) {\n        try {\n          if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(JSON.parse(window.localStorage.getItem(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__[\"APP\"])), 'DEBUG')) {\n            console.groupCollapsed('[Module][%s][%s][Component][%s]', chunkName, state, componentName);\n            console.log('[The total count imports of the components from the chunk %d on the screen]', this.getLoadedComponentsCount(componentName));\n            console.groupEnd();\n          }\n        } catch (e) {\n          console.error(e);\n        }\n      }\n    }, {\n      key: \"loadModule\",\n      value: function loadModule() {\n        var _this3 = this;\n\n        var isModuleLoaded = this.PATHS.APP[chunkName];\n\n        if (!isModuleLoaded) {\n          this.PATHS.APP[chunkName] = new Promise(function (resolve, reject) {\n            _this3.resolve = resolve;\n          });\n          this.loadFile({\n            type: 'link',\n            url: \"\".concat(server, \"/css/\").concat(chunkName, \".css\")\n          });\n          this.loadFile({\n            type: 'script',\n            url: \"\".concat(server, \"/js/\").concat(chunkName, \".js\"),\n            onLoad: function onLoad() {\n              _this3.mountLoadedComponent();\n            }\n          });\n        }\n      }\n    }, {\n      key: \"componentWillUnmount\",\n      value: function componentWillUnmount() {\n        this.decreasedLoadedComponents();\n        var hasLoadedComponents = this.getLoadedComponentsCount(TOTAL) !== 0;\n        var canBeDestroyed = destroyOnUnmount && !hasLoadedComponents;\n\n        if (canBeDestroyed) {\n          var scriptEl = document.getElementById(\"__\".concat(chunkName, \"-script__\"));\n          var linkEl = document.getElementById(\"__\".concat(chunkName, \"-link__\"));\n          scriptEl && scriptEl.remove();\n          linkEl && linkEl.remove();\n          delete this.PATHS.APP[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__[\"COMPONENTS_COUNT\"]][chunkName];\n          delete this.PATHS.APP[chunkName];\n\n          if (_index__WEBPACK_IMPORTED_MODULE_4__[\"store\"][ASYNC_REDUCERS]) {\n            delete _index__WEBPACK_IMPORTED_MODULE_4__[\"store\"][ASYNC_REDUCERS][chunkName];\n          }\n\n          this.notify('Cleared');\n        }\n      }\n    }, {\n      key: \"render\",\n      value: function render() {\n        var LoadedComponent = this.state.LoadedComponent;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, LoadedComponent && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadedComponent, this.props));\n      }\n    }]);\n\n    return LoadModule;\n  }(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n  LoadModule.defaultProps = {\n    loadingComponent: loadingComponent || function () {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"loading\");\n    }\n  };\n  return Object(_index__WEBPACK_IMPORTED_MODULE_4__[\"withRender\"])()(LoadModule);\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/load-module/hoc.js?");

/***/ }),

/***/ "./src/load-module/index.js":
/*!**********************************!*\
  !*** ./src/load-module/index.js ***!
  \**********************************/
/*! exports provided: loadModule, MS_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoc */ \"./src/load-module/hoc.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loadModule\", function() { return _hoc__WEBPACK_IMPORTED_MODULE_0__[\"loadModule\"]; });\n\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/load-module/constants.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MS_NAMES\", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__[\"MS_NAMES\"]; });\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/load-module/index.js?");

/***/ }),

/***/ "./src/shared/store/index.js":
/*!***********************************!*\
  !*** ./src/shared/store/index.js ***!
  \***********************************/
/*! exports provided: store, history, createReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/shared/store/store.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return _store__WEBPACK_IMPORTED_MODULE_0__[\"store\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"history\", function() { return _store__WEBPACK_IMPORTED_MODULE_0__[\"history\"]; });\n\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"./src/shared/store/reducers.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createReducer\", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/shared/store/index.js?");

/***/ }),

/***/ "./src/shared/store/reducers.js":
/*!**************************************!*\
  !*** ./src/shared/store/reducers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/shared/store/store.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var asyncReducers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])(_objectSpread({\n    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__[\"connectRouter\"])(_store__WEBPACK_IMPORTED_MODULE_2__[\"history\"])\n  }, asyncReducers));\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/shared/store/reducers.js?");

/***/ }),

/***/ "./src/shared/store/store.js":
/*!***********************************!*\
  !*** ./src/shared/store/store.js ***!
  \***********************************/
/*! exports provided: store, history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"history\", function() { return history; });\n/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history/createBrowserHistory */ \"../../node_modules/history/createBrowserHistory.js\");\n/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./src/shared/store/reducers.js\");\n/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../configs/namespace.config */ \"../../configs/namespace.config.js\");\n/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0___default()();\nvar composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_1__[\"compose\"];\nvar middleware = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__[\"routerMiddleware\"])(history)));\nvar store = window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_4__[\"APP\"]].store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(Object(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), middleware);\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/shared/store/store.js?");

/***/ }),

/***/ "./src/shared/with-render/hoc.js":
/*!***************************************!*\
  !*** ./src/shared/with-render/hoc.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return function (WrappedComponent) {\n    var WithRender = function WithRender(props) {\n      return !props.rendered ? null : !props.hidden ? React.createElement(WrappedComponent, Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"omit\"])(props, ['rendered']), props.children) : React.createElement(\"div\", {\n        hidden: props.hidden\n      }, React.createElement(WrappedComponent, Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"omit\"])(props, ['rendered']), props.children));\n    };\n\n    WithRender.propTypes = {\n      hidden: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"bool\"],\n      rendered: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"bool\"],\n      children: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__[\"oneOfType\"])([prop_types__WEBPACK_IMPORTED_MODULE_0__[\"node\"], prop_types__WEBPACK_IMPORTED_MODULE_0__[\"func\"]])\n    };\n    WithRender.defaultProps = {\n      hidden: false,\n      rendered: true,\n      children: null\n    };\n    return WithRender;\n  };\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/shared/with-render/hoc.js?");

/***/ }),

/***/ "./src/shared/with-render/index.js":
/*!*****************************************!*\
  !*** ./src/shared/with-render/index.js ***!
  \*****************************************/
/*! exports provided: withRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoc */ \"./src/shared/with-render/hoc.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"withRender\", function() { return _hoc__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/shared/with-render/index.js?");

/***/ }),

/***/ "connected-react-router":
/*!***************************************!*\
  !*** external "connectedReactRouter" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_connected_react_router__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22connectedReactRouter%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22lodash%22?");

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "propTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22propTypes%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22React%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_redux__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22redux%22?");

/***/ })

/******/ });
});