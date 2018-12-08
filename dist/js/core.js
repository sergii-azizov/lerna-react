(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("connectedReactRouter"), require("lodash"), require("propTypes"), require("React"), require("redux"), require("ReduxThunk"));
	else if(typeof define === 'function' && define.amd)
		define("core", ["connectedReactRouter", "lodash", "propTypes", "React", "redux", "ReduxThunk"], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory(require("connectedReactRouter"), require("lodash"), require("propTypes"), require("React"), require("redux"), require("ReduxThunk"));
	else
		root["core"] = factory(root["connectedReactRouter"], root["lodash"], root["propTypes"], root["React"], root["redux"], root["ReduxThunk"]);
})(window.__APP__, function(__WEBPACK_EXTERNAL_MODULE_connected_react_router__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_redux__, __WEBPACK_EXTERNAL_MODULE_redux_thunk__) {
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

module.exports = {
    APP: '__APP__'
};


/***/ }),

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

/***/ "../../node_modules/history/node_modules/warning/browser.js":
/*!*******************************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/history/node_modules/warning/browser.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "../../node_modules/invariant/browser.js":
/*!************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/invariant/browser.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "../../node_modules/resolve-pathname/index.js":
/*!*****************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/resolve-pathname/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),

/***/ "../../node_modules/value-equal/index.js":
/*!************************************************************************************!*\
  !*** /Users/saziz/projects/training/lerna-react/node_modules/value-equal/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),

/***/ "./src/async-import-component.js":
/*!***************************************!*\
  !*** ./src/async-import-component.js ***!
  \***************************************/
/*! exports provided: asyncImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncImportComponent", function() { return asyncImportComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs/namespace.config */ "../../configs/namespace.config.js");
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
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







var head = document.getElementsByTagName('head')[0];
var asyncImportComponent = function asyncImportComponent(packageName) {
  var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!packageName) return function () {
    return null;
  };
  var _configs$server = configs.server,
      server = _configs$server === void 0 ? _constants_js__WEBPACK_IMPORTED_MODULE_4__["STATIC_SERVER"] : _configs$server,
      _configs$component = configs.component,
      component = _configs$component === void 0 ? 'default' : _configs$component,
      _configs$destroyOnUnm = configs.destroyOnUnmount,
      destroyOnUnmount = _configs$destroyOnUnm === void 0 ? false : _configs$destroyOnUnm,
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
        Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["injectAsyncReducer"])(packageName, reducer);

        if (!fromCache) {
          _this.resolve && _this.resolve();

          _this.setState({
            LoadedComponent: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getLoadPackage"])([packageName, component])
          });
        }

        Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["increasedLoadedComponents"])(packageName, component);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["notify"])(packageName, component, fromCache || _constants_js__WEBPACK_IMPORTED_MODULE_4__["PACKAGE_STATUSES"].LOADED);
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
          Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__["APP"]], [packageName], new Promise(function (resolve, reject) {
            _this2.resolve = resolve;
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
            _this2.mountLoadedComponent(packageName);
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["destroy"])(packageName, component, destroyOnUnmount);
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

/***/ "./src/async-import.js":
/*!*****************************!*\
  !*** ./src/async-import.js ***!
  \*****************************/
/*! exports provided: asyncImport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncImport", function() { return asyncImport; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs/namespace.config */ "../../configs/namespace.config.js");
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
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
        destroyOnUnmount = _configs$destroyOnUnm === void 0 ? false : _configs$destroyOnUnm,
        _configs$reducer = configs.reducer,
        reducer = _configs$reducer === void 0 ? 'rootReducer' : _configs$reducer,
        _configs$withConnect = configs.withConnect,
        withConnect = _configs$withConnect === void 0 ? null : _configs$withConnect;
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
          Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["injectAsyncReducer"])(packageName, reducer);

          if (!fromCache) {
            _this.resolve && _this.resolve();

            _this.setState(_defineProperty({}, packageName, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getLoadPackage"])(packageName)));
          }

          packages[packageName].forEach(function (module) {
            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["increasedLoadedComponents"])(packageName, module);
            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["notify"])(packageName, module, fromCache || _constants_js__WEBPACK_IMPORTED_MODULE_4__["PACKAGE_STATUSES"].LOADED);
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
            packages[packageName].forEach(function (module) {
              Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["destroy"])(packageName, module, destroyOnUnmount);
            });
          });
        }
      }, {
        key: "render",
        value: function render() {
          var packagesLoaded = this.packagesLoaded();
          var Component = withConnect && packagesLoaded ? withConnect(this.state)(WrappedComponent) : WrappedComponent;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, packagesLoaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
            loading: !packagesLoaded
          }, this.state, this.props)) : null);
        }
      }]);

      return LoadPackages;
    }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

    return LoadPackages;
  };
};

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: STATIC_SERVER, ASYNC_REDUCERS, TOTAL_COUNT, COMPONENTS_COUNT, PACKAGE_NAMES, PACKAGE_STATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_SERVER", function() { return STATIC_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASYNC_REDUCERS", function() { return ASYNC_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOTAL_COUNT", function() { return TOTAL_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS_COUNT", function() { return COMPONENTS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PACKAGE_NAMES", function() { return PACKAGE_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PACKAGE_STATUSES", function() { return PACKAGE_STATUSES; });
var STATIC_SERVERS = {
  DT: 'https://rawcdn.githack.com/sergii-azizov/lerna-react/cf97d409fa1bf975428de496854c9fdfa851db2d/dist/'
};
var STATIC_SERVER = STATIC_SERVERS.DT;
var ASYNC_REDUCERS = 'asyncReducers';
var TOTAL_COUNT = 'TOTAL_COUNT';
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

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configs/namespace.config */ "../../configs/namespace.config.js");
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.js");




var getAvailablePackageNames = function getAvailablePackageNames(packages) {
  return Object.keys(packages).filter(function (packageName) {
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
var getImportCount = function getImportCount(packageName, module) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_COUNT"], packageName, module], 0);
};
var increasedLoadedComponents = function increasedLoadedComponents(packageName, module) {
  if (module) {
    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_COUNT"], packageName, module], getImportCount(packageName, module) + 1);
  }

  Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_COUNT"], packageName, _constants__WEBPACK_IMPORTED_MODULE_2__["TOTAL_COUNT"]], getImportCount(packageName, _constants__WEBPACK_IMPORTED_MODULE_2__["TOTAL_COUNT"]) + 1);
};
var decreasedLoadedComponents = function decreasedLoadedComponents(packageName, module) {
  if (module) {
    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_COUNT"], packageName, module], getImportCount(packageName, module) - 1);
  }

  Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_COUNT"], packageName, _constants__WEBPACK_IMPORTED_MODULE_2__["TOTAL_COUNT"]], getImportCount(packageName, _constants__WEBPACK_IMPORTED_MODULE_2__["TOTAL_COUNT"]) - 1);
};
var injectAsyncReducer = function injectAsyncReducer(packageName, reducer) {
  var asyncReducers = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"]], [packageName, reducer]);

  if (asyncReducers && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(_index__WEBPACK_IMPORTED_MODULE_3__["store"], [_constants__WEBPACK_IMPORTED_MODULE_2__["ASYNC_REDUCERS"], packageName])) {
    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(_index__WEBPACK_IMPORTED_MODULE_3__["store"], [_constants__WEBPACK_IMPORTED_MODULE_2__["ASYNC_REDUCERS"], packageName], asyncReducers);
    _index__WEBPACK_IMPORTED_MODULE_3__["store"].replaceReducer(Object(_index__WEBPACK_IMPORTED_MODULE_3__["createReducer"])(_index__WEBPACK_IMPORTED_MODULE_3__["store"][_constants__WEBPACK_IMPORTED_MODULE_2__["ASYNC_REDUCERS"]]));
  }
};
var notify = function notify(packageName, module, state) {
  try {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(JSON.parse(window.localStorage.getItem(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_1__["APP"])), 'DEBUG')) {
      console.groupCollapsed('[Module][%s][%s][Component][%s]', packageName, state, module);
      console.log('[The total count imports of the components from the chunk %d on the screen]', getImportCount(packageName, module));
      console.groupEnd();
    }
  } catch (e) {
    console.error(e);
  }
};
var destroy = function destroy(packageName) {
  var module = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants__WEBPACK_IMPORTED_MODULE_2__["TOTAL_COUNT"];
  var destroyOnUnmount = arguments.length > 2 ? arguments[2] : undefined;
  decreasedLoadedComponents(packageName, module);
  var hasLoadedComponents = getImportCount(packageName, module) !== 0;
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

    notify('Cleared');
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: asyncImportComponent, asyncImport, PACKAGE_NAMES, withRender, store, history, createReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _async_import_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-import-component */ "./src/async-import-component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncImportComponent", function() { return _async_import_component__WEBPACK_IMPORTED_MODULE_0__["asyncImportComponent"]; });

/* harmony import */ var _async_import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async-import */ "./src/async-import.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncImport", function() { return _async_import__WEBPACK_IMPORTED_MODULE_1__["asyncImport"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PACKAGE_NAMES", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["PACKAGE_NAMES"]; });

/* harmony import */ var _with_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-render */ "./src/with-render/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRender", function() { return _with_render__WEBPACK_IMPORTED_MODULE_3__["withRender"]; });

/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store__WEBPACK_IMPORTED_MODULE_4__["store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "history", function() { return _store__WEBPACK_IMPORTED_MODULE_4__["history"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return _store__WEBPACK_IMPORTED_MODULE_4__["createReducer"]; });







/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: store, history, createReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store__WEBPACK_IMPORTED_MODULE_0__["store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "history", function() { return _store__WEBPACK_IMPORTED_MODULE_0__["history"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/store/reducers.js":
/*!*******************************!*\
  !*** ./src/store/reducers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/store/store.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var asyncReducers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_objectSpread({
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(_store__WEBPACK_IMPORTED_MODULE_2__["history"])
  }, asyncReducers));
});

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: store, history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history/createBrowserHistory */ "../../node_modules/history/createBrowserHistory.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers.js");
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../configs/namespace.config */ "../../configs/namespace.config.js");
/* harmony import */ var _configs_namespace_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_configs_namespace_config__WEBPACK_IMPORTED_MODULE_5__);






var history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_1___default()();
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
var middleware = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history), redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a));
var store = window[_configs_namespace_config__WEBPACK_IMPORTED_MODULE_5__["APP"]].store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"])(), middleware);


/***/ }),

/***/ "./src/with-render/hoc.js":
/*!********************************!*\
  !*** ./src/with-render/hoc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
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

/***/ "./src/with-render/index.js":
/*!**********************************!*\
  !*** ./src/with-render/index.js ***!
  \**********************************/
/*! exports provided: withRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoc */ "./src/with-render/hoc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRender", function() { return _hoc__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "connected-react-router":
/*!***************************************!*\
  !*** external "connectedReactRouter" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_connected_react_router__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "propTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_redux__;

/***/ }),

/***/ "redux-thunk":
/*!*****************************!*\
  !*** external "ReduxThunk" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_redux_thunk__;

/***/ })

/******/ });
});
//# sourceMappingURL=core.js.map