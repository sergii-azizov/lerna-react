!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash"),require("propTypes"),require("redux"),require("React"),require("connectedReactRouter")):"function"==typeof define&&define.amd?define("core",["lodash","propTypes","redux","React","connectedReactRouter"],t):"object"==typeof exports?exports.core=t(require("lodash"),require("propTypes"),require("redux"),require("React"),require("connectedReactRouter")):e.core=t(e.lodash,e.propTypes,e.redux,e.React,e.connectedReactRouter)}(window.__APP__,function(e,t,n,o,r){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(t,n){t.exports=e},function(e,t){e.exports={APP:"__APP__",COMPONENTS_COUNT:"LOADED_COMPONENTS_COUNT"}},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=r},function(e,t,n){"use strict";var o=function(){};o=function(e,t,n){var o=arguments.length;n=new Array(o>2?o-2:0);for(var r=2;r<o;r++)n[r-2]=arguments[r];if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(t.length<10||/^[s\W]*$/.test(t))throw new Error("The warning format should be able to uniquely identify this warning. Please, use a more descriptive format than: "+t);if(!e){var i=0,a="Warning: "+t.replace(/%s/g,function(){return n[i++]});"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(e){}}},e.exports=o},function(e,t,n){"use strict";t.__esModule=!0;t.addLeadingSlash=function(e){return"/"===e.charAt(0)?e:"/"+e},t.stripLeadingSlash=function(e){return"/"===e.charAt(0)?e.substr(1):e};var o=t.hasBasename=function(e,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(e)};t.stripBasename=function(e,t){return o(e,t)?e.substr(t.length):e},t.stripTrailingSlash=function(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e},t.parsePath=function(e){var t=e||"/",n="",o="",r=t.indexOf("#");-1!==r&&(o=t.substr(r),t=t.substr(0,r));var i=t.indexOf("?");return-1!==i&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===n?"":n,hash:"#"===o?"":o}},t.createPath=function(e){var t=e.pathname,n=e.search,o=e.hash,r=t||"/";return n&&"?"!==n&&(r+="?"===n.charAt(0)?n:"?"+n),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}},function(e,t,n){"use strict";t.__esModule=!0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=f(n(6)),a=f(n(9)),u=n(10),c=n(7),s=f(n(13)),d=n(14);function f(e){return e&&e.__esModule?e:{default:e}}var l=function(){try{return window.history.state||{}}catch(e){return{}}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.default)(d.canUseDOM,"Browser history needs a DOM");var t=window.history,n=(0,d.supportsHistory)(),f=!(0,d.supportsPopStateOnHashChange)(),p=e.forceRefresh,h=void 0!==p&&p,y=e.getUserConfirmation,m=void 0===y?d.getConfirmation:y,v=e.keyLength,g=void 0===v?6:v,b=e.basename?(0,c.stripTrailingSlash)((0,c.addLeadingSlash)(e.basename)):"",P=function(e){var t=e||{},n=t.key,o=t.state,r=window.location,a=r.pathname+r.search+r.hash;return(0,i.default)(!b||(0,c.hasBasename)(a,b),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+b+'".'),b&&(a=(0,c.stripBasename)(a,b)),(0,u.createLocation)(a,o,n)},O=function(){return Math.random().toString(36).substr(2,g)},w=(0,s.default)(),E=function(e){r(N,e),N.length=t.length,w.notifyListeners(N.location,N.action)},S=function(e){(0,d.isExtraneousPopstateEvent)(e)||T(P(e.state))},A=function(){T(P(l()))},C=!1,T=function(e){C?(C=!1,E()):w.confirmTransitionTo(e,"POP",m,function(t){t?E({action:"POP",location:e}):_(e)})},_=function(e){var t=N.location,n=L.indexOf(t.key);-1===n&&(n=0);var o=L.indexOf(e.key);-1===o&&(o=0);var r=n-o;r&&(C=!0,k(r))},j=P(l()),L=[j.key],R=function(e){return b+(0,c.createPath)(e)},k=function(e){t.go(e)},x=0,M=function(e){1===(x+=e)?((0,d.addEventListener)(window,"popstate",S),f&&(0,d.addEventListener)(window,"hashchange",A)):0===x&&((0,d.removeEventListener)(window,"popstate",S),f&&(0,d.removeEventListener)(window,"hashchange",A))},H=!1,N={length:t.length,action:"POP",location:j,createHref:R,push:function(e,r){(0,i.default)(!("object"===(void 0===e?"undefined":o(e))&&void 0!==e.state&&void 0!==r),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,u.createLocation)(e,r,O(),N.location);w.confirmTransitionTo(a,"PUSH",m,function(e){if(e){var o=R(a),r=a.key,u=a.state;if(n)if(t.pushState({key:r,state:u},null,o),h)window.location.href=o;else{var c=L.indexOf(N.location.key),s=L.slice(0,-1===c?0:c+1);s.push(a.key),L=s,E({action:"PUSH",location:a})}else(0,i.default)(void 0===u,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=o}})},replace:function(e,r){(0,i.default)(!("object"===(void 0===e?"undefined":o(e))&&void 0!==e.state&&void 0!==r),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,u.createLocation)(e,r,O(),N.location);w.confirmTransitionTo(a,"REPLACE",m,function(e){if(e){var o=R(a),r=a.key,u=a.state;if(n)if(t.replaceState({key:r,state:u},null,o),h)window.location.replace(o);else{var c=L.indexOf(N.location.key);-1!==c&&(L[c]=a.key),E({action:"REPLACE",location:a})}else(0,i.default)(void 0===u,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(o)}})},go:k,goBack:function(){return k(-1)},goForward:function(){return k(1)},block:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=w.setPrompt(e);return H||(M(1),H=!0),function(){return H&&(H=!1,M(-1)),t()}},listen:function(e){var t=w.appendListener(e);return M(1),function(){M(-1),t()}}};return N}},function(e,t,n){"use strict";e.exports=function(e,t,n,o,r,i,a,u){if(void 0===t)throw new Error("invariant requires an error message argument");if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,r,i,a,u],d=0;(c=new Error(t.replace(/%s/g,function(){return s[d++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,n){"use strict";t.__esModule=!0,t.locationsAreEqual=t.createLocation=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=u(n(11)),i=u(n(12)),a=n(7);function u(e){return e&&e.__esModule?e:{default:e}}t.createLocation=function(e,t,n,i){var u=void 0;"string"==typeof e?(u=(0,a.parsePath)(e)).state=t:(void 0===(u=o({},e)).pathname&&(u.pathname=""),u.search?"?"!==u.search.charAt(0)&&(u.search="?"+u.search):u.search="",u.hash?"#"!==u.hash.charAt(0)&&(u.hash="#"+u.hash):u.hash="",void 0!==t&&void 0===u.state&&(u.state=t));try{u.pathname=decodeURI(u.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+u.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(u.key=n),i?u.pathname?"/"!==u.pathname.charAt(0)&&(u.pathname=(0,r.default)(u.pathname,i.pathname)):u.pathname=i.pathname:u.pathname||(u.pathname="/"),u},t.locationsAreEqual=function(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&(0,i.default)(e.state,t.state)}},function(e,t,n){"use strict";function o(e){return"/"===e.charAt(0)}function r(e,t){for(var n=t,o=n+1,r=e.length;o<r;n+=1,o+=1)e[n]=e[o];e.pop()}n.r(t),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e&&e.split("/")||[],i=t&&t.split("/")||[],a=e&&o(e),u=t&&o(t),c=a||u;if(e&&o(e)?i=n:n.length&&(i.pop(),i=i.concat(n)),!i.length)return"/";var s=void 0;if(i.length){var d=i[i.length-1];s="."===d||".."===d||""===d}else s=!1;for(var f=0,l=i.length;l>=0;l--){var p=i[l];"."===p?r(i,l):".."===p?(r(i,l),f++):f&&(r(i,l),f--)}if(!c)for(;f--;f)i.unshift("..");!c||""===i[0]||i[0]&&o(i[0])||i.unshift("");var h=i.join("/");return s&&"/"!==h.substr(-1)&&(h+="/"),h}},function(e,t,n){"use strict";n.r(t);var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every(function(t,o){return e(t,n[o])});var r=void 0===t?"undefined":o(t);if(r!==(void 0===n?"undefined":o(n)))return!1;if("object"===r){var i=t.valueOf(),a=n.valueOf();if(i!==t||a!==n)return e(i,a);var u=Object.keys(t),c=Object.keys(n);return u.length===c.length&&u.every(function(o){return e(t[o],n[o])})}return!1}},function(e,t,n){"use strict";t.__esModule=!0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(6));t.default=function(){var e=null,t=[];return{setPrompt:function(t){return(0,o.default)(null==e,"A history supports only one prompt at a time"),e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,i){if(null!=e){var a="function"==typeof e?e(t,n):e;"string"==typeof a?"function"==typeof r?r(a,i):((0,o.default)(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==a)}else i(!0)},appendListener:function(e){var n=!0,o=function(){n&&e.apply(void 0,arguments)};return t.push(o),function(){n=!1,t=t.filter(function(e){return e!==o})}},notifyListeners:function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];t.forEach(function(e){return e.apply(void 0,n)})}}}},function(e,t,n){"use strict";t.__esModule=!0;t.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),t.addEventListener=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},t.removeEventListener=function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},t.getConfirmation=function(e,t){return t(window.confirm(e))},t.supportsHistory=function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},t.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},t.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},t.isExtraneousPopstateEvent=function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")}},function(e,t,n){"use strict";n.r(t);var o=n(4),r=n.n(o),i=n(2),a=n(0),u=n(1),c=window[u.APP].STATIC_SERVER=window[u.APP.STATIC_SERVER]||"https://rawcdn.githack.com/sergii-azizov/lerna-react/ee55cd2f64a386e3b9544a20e819942813ccffbf/dist",s=window[u.APP].MS_NAMES={PORTAL:"portal",COMPONENTS:"components",DESKTOP_SUMMARY_SCREEN:"desktop-summary-screen",TASK_SELECTOR:"task-selector",SCRIPTING:"scripting",SEQUENCE:"sequence"};function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){m(e,t,n[t])})}return e}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=document.getElementsByTagName("head")[0],g="Loaded",b="asyncReducers",P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.server,i=void 0===n?c:n,s=t.destroyOnUnmount,P=void 0===s||s,w=t.loadingComponent,E=void 0===w?null:w,S=t.componentName,A=void 0===S?"default":S,C=t.reducerName,_=void 0===C?"rootReducers":C,j=function(t){function n(t){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),m(y(y(o=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?y(e):t}(this,p(n).call(this,t)))),"PATHS",{APP:window[u.APP],NAME:[e,A],COUNT:[u.COMPONENTS_COUNT,e],REDUCER_CACHE:[b,e],REDUCER:[e,_]}),m(y(y(o)),"mountLoadedComponent",function(e){e||(o.resolve&&o.resolve(),o.injectAsyncReducer(),o.setState({LoadedComponent:o.getLoadedComponent()})),o.increasedLoadedComponents(),o.notify(e||g)}),o.init(),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(n,o["PureComponent"]),function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(n,[{key:"init",value:function(){var t=this,n=this.getLoadedComponent(),o=Object(a.get)(this.PATHS.APP,[e,"then"]);this.state={LoadedComponent:n||this.props.loadingComponent},o?this.PATHS.APP[e].then(function(){t.setState({LoadedComponent:t.getLoadedComponent()}),t.mountLoadedComponent("From Cache")}):n?this.mountLoadedComponent("From Cache"):n||this.loadModule()}},{key:"getLoadedComponent",value:function(){return Object(a.get)(this.PATHS.APP,this.PATHS.NAME)}},{key:"loadFile",value:function(t){var n=t.url,o=t.type,r=t.onLoad,i=document.createElement(o);"script"===o&&(i.async=!0,i.src=n),i.onload=r,i.id="__".concat(e,"-").concat(o,"__"),"link"===o&&(i.rel="stylesheet",i.type="text/css",i.href=n),v.insertBefore(i,v.lastChild)}},{key:"getLoadedComponentsCount",value:function(e){return Object(a.get)(this.PATHS.APP,this.PATHS.COUNT.concat([e]),0)}},{key:"increasedLoadedComponents",value:function(){var e;Object(a.set)(this.PATHS.APP,this.PATHS.COUNT,f({},Object(a.get)(this.PATHS.APP,this.PATHS.COUNT),(m(e={},A,this.getLoadedComponentsCount(A)+1),m(e,"total",this.getLoadedComponentsCount("total")+1),e)))}},{key:"decreasedLoadedComponents",value:function(){var e;Object(a.set)(this.PATHS.APP,this.PATHS.COUNT,f({},Object(a.get)(this.PATHS.APP,this.PATHS.COUNT),(m(e={},A,this.getLoadedComponentsCount(A)-1),m(e,"total",this.getLoadedComponentsCount("total")-1),e)))}},{key:"injectAsyncReducer",value:function(){var e=Object(a.get)(this.PATHS.APP,this.PATHS.REDUCER);e&&!Object(a.get)(L,this.PATHS.REDUCER_CACHE)&&(Object(a.set)(L,this.PATHS.REDUCER_CACHE,e),L.replaceReducer(T(L[b])))}},{key:"notify",value:function(t){try{Object(a.get)(JSON.parse(window.localStorage.getItem(u.APP)),"DEBUG")&&(console.groupCollapsed("[Module][%s][%s][Component][%s]",e,t,A),console.log("[The total count imports of the components from the chunk %d on the screen]",this.getLoadedComponentsCount(A)),console.groupEnd())}catch(e){console.error(e)}}},{key:"loadModule",value:function(){var t=this;this.PATHS.APP[e]||(this.PATHS.APP[e]=new Promise(function(e,n){t.resolve=e}),this.loadFile({type:"link",url:"".concat(i,"/css/").concat(e,".css")}),this.loadFile({type:"script",url:"".concat(i,"/js/").concat(e,".js"),onLoad:function(){t.mountLoadedComponent()}}))}},{key:"componentWillUnmount",value:function(){this.decreasedLoadedComponents();var t=0!==this.getLoadedComponentsCount("total");P&&!t&&(document.getElementById("__".concat(e,"-script__")).remove(),document.getElementById("__".concat(e,"-link__")).remove(),delete this.PATHS.APP[u.COMPONENTS_COUNT][e],delete this.PATHS.APP[e],delete L[b][e],this.notify("Cleared"))}},{key:"render",value:function(){var e=this.state.LoadedComponent;return r.a.createElement(o.Fragment,null,e&&r.a.createElement(e,this.props))}}]),n}();return j.defaultProps={loadingComponent:E||function(){return r.a.createElement("div",null,"loading")}},O()(j)},O=function(){return function(e){var t=function(t){return t.rendered?t.hidden?React.createElement("div",{hidden:t.hidden},React.createElement(e,Object(a.omit)(t,["rendered"]),t.children)):React.createElement(e,Object(a.omit)(t,["rendered"]),t.children):null};return t.propTypes={hidden:i.bool,rendered:i.bool,children:Object(i.oneOfType)([i.node,i.func])},t.defaultProps={hidden:!1,rendered:!0,children:null},t}},w=n(8),E=n.n(w),S=n(3),A=n(5);function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(S.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){C(e,t,n[t])})}return e}({router:Object(A.connectRouter)(_)},e))},_=E()(),j=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.compose)(Object(S.applyMiddleware)(Object(A.routerMiddleware)(_))),L=window[u.APP].store=Object(S.createStore)(T(),j);n.d(t,"loadModule",function(){return P}),n.d(t,"MS_NAMES",function(){return s}),n.d(t,"withRender",function(){return O}),n.d(t,"store",function(){return L}),n.d(t,"history",function(){return _}),n.d(t,"createReducer",function(){return T})}])});