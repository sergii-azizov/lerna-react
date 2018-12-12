(window.__APP__["webpackJsonp_name_"] = window.__APP__["webpackJsonp_name_"] || []).push([["components"],{

/***/ "../components/src/button/component.js":
/*!*********************************************!*\
  !*** ../components/src/button/component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core */ "../../dist/js/core.js");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component.scss */ "../components/src/button/component.scss");
/* harmony import */ var _component_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_component_scss__WEBPACK_IMPORTED_MODULE_3__);




var Button = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function (props) {
  return React.createElement("button", {
    className: _component_scss__WEBPACK_IMPORTED_MODULE_3___default.a.root,
    onClick: props.onClick
  }, props.children);
});
Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0__["node"].isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"]
};
Button.defaultProps = {
  onClick: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../components/src/button/component.scss":
/*!***********************************************!*\
  !*** ../components/src/button/component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"_-components-src-button--button-root"};

/***/ }),

/***/ "../components/src/button/index.js":
/*!*****************************************!*\
  !*** ../components/src/button/index.js ***!
  \*****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "../components/src/button/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../components/src/constants.js":
/*!**************************************!*\
  !*** ../components/src/constants.js ***!
  \**************************************/
/*! exports provided: CITY, FRUITS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITY", function() { return CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRUITS", function() { return FRUITS; });
var CITY = "DNIPRO";
var FRUITS = {
  APPLE: 'APPLE',
  APRICOTS: 'APRICOTS',
  BANANAS: 'BANANAS'
};

/***/ }),

/***/ "../components/src/counter/actions.js":
/*!********************************************!*\
  !*** ../components/src/counter/actions.js ***!
  \********************************************/
/*! exports provided: increment, decrement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
var increment = function increment() {
  return function (dispatch) {
    return dispatch({
      type: 'INCREMENT'
    });
  };
};
var decrement = function decrement() {
  return function (dispatch) {
    return dispatch({
      type: 'DECREMENT'
    });
  };
};

/***/ }),

/***/ "../components/src/counter/component.js":
/*!**********************************************!*\
  !*** ../components/src/counter/component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions.js */ "../components/src/counter/actions.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Counter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Counter).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Counter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.props.decrement
      }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.props.count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.props.increment
      }, "+")));
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function mapStateToProps(state) {
  console.log("==> ", state);
  return {
    count: state.components.count.count
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  increment: _actions_js__WEBPACK_IMPORTED_MODULE_2__["increment"],
  decrement: _actions_js__WEBPACK_IMPORTED_MODULE_2__["decrement"]
})(Counter));

/***/ }),

/***/ "../components/src/counter/index.js":
/*!******************************************!*\
  !*** ../components/src/counter/index.js ***!
  \******************************************/
/*! exports provided: Counter, counterReducer, increment, decrement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "../components/src/counter/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Counter", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../components/src/counter/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["increment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["decrement"]; });

/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "../components/src/counter/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "counterReducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "../components/src/counter/reducer.js":
/*!********************************************!*\
  !*** ../components/src/counter/reducer.js ***!
  \********************************************/
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
    case 'INCREMENT':
      return {
        count: state.count + 1
      };

    case 'DECREMENT':
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "../components/src/helpers.js":
/*!************************************!*\
  !*** ../components/src/helpers.js ***!
  \************************************/
/*! exports provided: sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
var sum = function sum(a, b) {
  return a + b;
};

/***/ }),

/***/ "../components/src/index.js":
/*!**********************************!*\
  !*** ../components/src/index.js ***!
  \**********************************/
/*! exports provided: Button, rootReducer, Counter, counterReducer, sum, CITY, FRUITS, increment, decrement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ "../components/src/counter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Counter", function() { return _counter__WEBPACK_IMPORTED_MODULE_0__["Counter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "counterReducer", function() { return _counter__WEBPACK_IMPORTED_MODULE_0__["counterReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return _counter__WEBPACK_IMPORTED_MODULE_0__["increment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return _counter__WEBPACK_IMPORTED_MODULE_0__["decrement"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "../components/src/helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _helpers__WEBPACK_IMPORTED_MODULE_1__["sum"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../components/src/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CITY", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["CITY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FRUITS", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["FRUITS"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "../components/src/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_3__["Button"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "../components/src/reducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "../components/src/reducers.js":
/*!*************************************!*\
  !*** ../components/src/reducers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../../node_modules/redux/es/redux.js");
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter */ "../components/src/counter/index.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  count: _counter__WEBPACK_IMPORTED_MODULE_1__["counterReducer"]
}));

/***/ })

}]);
//# sourceMappingURL=components.js.map