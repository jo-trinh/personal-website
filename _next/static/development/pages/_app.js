(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/_app.js"],{

/***/ "./components/atom/Meta/Meta.js":
/*!**************************************!*\
  !*** ./components/atom/Meta/Meta.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/Jo/workspaces/projects/personal-website/components/atom/Meta/Meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Head = function Head(props) {
  return __jsx("head", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Jo Trinh's Resume Website"), __jsx("meta", {
    name: "description",
    content: 'Joseph Trinh software engineer resume',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/templates/Layout/Layout.js":
/*!***********************************************!*\
  !*** ./components/templates/Layout/Layout.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Layout = function Layout(props) {
  return props.children;
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/;
var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.13.0\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fad', 'fab', 'fa'].indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    maskId: node.getAttribute('data-fa-mask-id'),
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    var headers = {};

    if (_typeof(WINDOW.FontAwesomeKitConfig) === 'object' && typeof window.FontAwesomeKitConfig.token === 'string') {
      headers['fa-kit-token'] = WINDOW.FontAwesomeKitConfig.token;
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      titleId = nodeMeta.titleId,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      maskId = nodeMeta.maskId,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        maskId: maskId,
        title: title,
        titleId: titleId,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(content.length === 3 ? content.substr(1, 1) : content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/@fortawesome/fontawesome-svg-core/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/@fortawesome/fontawesome-svg-core/styles.css",
      function () {
        var newContent = __webpack_require__(/*! !../../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/@fortawesome/fontawesome-svg-core/styles.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  transform: scale(0.25);\n  transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  transform: scale(0.25);\n  transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  transform: scale(0.25);\n  transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  transform: scale(0.25);\n  transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  transform: scale(0.25);\n  transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(1, -1); }\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1); }\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4); }\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4); }\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1); }\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black; }\n\n.fad.fa-inverse {\n  color: #fff; }\n", "",{"version":3,"sources":["/Users/Jo/workspaces/projects/personal-website/node_modules/@fortawesome/fontawesome-svg-core/styles.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB,EAAE;;AAErB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,uBAAuB,EAAE;EACzB;IACE,uBAAuB,EAAE;EAC3B;IACE,eAAe,EAAE;EACnB;IACE,cAAc,EAAE;EAClB;IACE,eAAe,EAAE;EACnB;IACE,aAAa,EAAE;EACjB;IACE,eAAe,EAAE;EACnB;IACE,cAAc,EAAE;EAClB;IACE,eAAe,EAAE;EACnB;IACE,YAAY,EAAE;EAChB;IACE,eAAe,EAAE;EACnB;IACE,cAAc,EAAE;EAClB;IACE,eAAe,EAAE;EACnB;IACE,aAAa,EAAE;EACjB;IACE,eAAe,EAAE;EACnB;IACE,cAAc,EAAE;EAClB;IACE,eAAe,EAAE;EACnB;IACE,UAAU,EAAE;EACd;IACE,eAAe,EAAE;EACnB;IACE,cAAc,EAAE;EAClB;IACE,eAAe,EAAE;EACnB;IACE,aAAa,EAAE;EACjB;IACE,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,iBAAiB;IACjB,WAAW,EAAE;EACf;IACE,aAAa,EAAE;EACjB;IACE,UAAU,EAAE;EACd;IACE,aAAa,EAAE;;AAEnB;EACE,SAAS;EACT,OAAO;EACP,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,MAAM,EAAE;;AAEV;EACE,qBAAqB;EACrB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,uBAAuB;EACvB,UAAU,EAAE;EACZ;IAEU,+BAA+B,EAAE;;AAE7C;EACE,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB,EAAE;;AAEtB;EACE,SAAS;EACT,QAAQ;EAEA,gCAAgC;EAEhC,+BAA+B,EAAE;;AAE3C;EACE,yBAAyB;EACzB,kBAAkB;EAEV,sBAAsB;EAC9B,WAAW;EACX,aAAa;EACb,cAAc;EACd,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,QAAQ;EACR,uBAAuB;EACvB,MAAM;EAEE,sBAAsB;EAEtB,2BAA2B,EAAE;;AAEvC;EACE,SAAS;EACT,QAAQ;EACR,SAAS;EAED,sBAAsB;EAEtB,8BAA8B,EAAE;;AAE1C;EACE,SAAS;EACT,OAAO;EACP,WAAW;EACX,SAAS;EAED,sBAAsB;EAEtB,6BAA6B,EAAE;;AAEzC;EACE,QAAQ;EACR,MAAM;EAEE,sBAAsB;EAEtB,2BAA2B,EAAE;;AAEvC;EACE,OAAO;EACP,WAAW;EACX,MAAM;EAEE,sBAAsB;EAEtB,0BAA0B,EAAE;;AAEtC;EACE,oBAAoB;EACpB,mBAAmB;EACnB,wBAAwB,EAAE;;AAE5B;EACE,gBAAgB,EAAE;;AAEpB;EACE,iBAAiB,EAAE;;AAErB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,eAAe,EAAE;;AAEnB;EACE,kBAAkB;EAClB,aAAa,EAAE;;AAEjB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,kBAAkB,EAAE;;AAExB;EACE,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,oBAAoB,EAAE;;AAExB;EACE,yBAAyB;EACzB,mBAAmB;EACnB,yBAAyB,EAAE;;AAE7B;EACE,WAAW,EAAE;;AAEf;EACE,YAAY,EAAE;;AAEhB;;;;;EAKE,kBAAkB,EAAE;;AAEtB;;;;;EAKE,iBAAiB,EAAE;;AAErB;EACE,6CAA6C;UACrC,qCAAqC,EAAE;;AAEjD;EACE,+CAA+C;UACvC,uCAAuC,EAAE;;AAEnD;EACE;IAEU,uBAAuB,EAAE;EACnC;IAEU,yBAAyB,EAAE,EAAE;;AAEzC;EACE;IAEU,uBAAuB,EAAE;EACnC;IAEU,yBAAyB,EAAE,EAAE;;AAEzC;EACE,sEAAsE;EAE9D,wBAAwB,EAAE;;AAEpC;EACE,sEAAsE;EAE9D,yBAAyB,EAAE;;AAErC;EACE,sEAAsE;EAE9D,yBAAyB,EAAE;;AAErC;EACE,gFAAgF;EAExE,uBAAuB,EAAE;;AAEnC;EACE,gFAAgF;EAExE,uBAAuB,EAAE;;AAEnC;EACE,gFAAgF;EAExE,wBAAwB,EAAE;;AAEpC;;;;;;EAME,oBAAoB;UACZ,YAAY,EAAE;;AAExB;EACE,qBAAqB;EACrB,WAAW;EACX,kBAAkB;EAClB,YAAY,EAAE;;AAEhB;;EAEE,SAAS;EACT,OAAO;EACP,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,MAAM,EAAE;;AAEV;EACE,WAAW;EACX,aAAa,EAAE;;AAEjB;EACE,WAAW;EACX,YAAY,EAAE;;AAEhB;EACE,WAAW,EAAE;;AAEf;EACE,SAAS;EACT,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,kBAAkB;EAClB,UAAU,EAAE;;AAEd;EACE,UAAU;EACV,YAAY;EACZ,SAAS;EACT,iBAAiB;EACjB,gBAAgB;EAChB,WAAW,EAAE;;AAEf;EACE,2CAA2C;EAC3C,UAAU;EACV,qCAAqC,EAAE;;AAEzC;EACE,6CAA6C;EAC7C,YAAY;EACZ,yCAAyC,EAAE;;AAE7C;EACE,YAAY;EACZ,yCAAyC,EAAE;;AAE7C;EACE,UAAU;EACV,qCAAqC,EAAE;;AAEzC;;EAEE,WAAW,EAAE;;AAEf;EACE,WAAW,EAAE","file":"styles.css","sourcesContent":["svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1); }\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4); }\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4); }\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1); }\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black; }\n\n.fad.fa-inverse {\n  color: #fff; }\n"]}]);


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/papercss/dist/paper.css":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/papercss/dist/paper.css ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Imports

exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Neucha|Patrick+Hand+SC);"]);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.text-primary {\n  color: #41403e\n}\n.background-primary {\n  background-color: #c1c0bd\n}\n.text-secondary {\n  color: #0071de\n}\n.background-secondary {\n  background-color: #deefff\n}\n.text-success {\n  color: #86a361\n}\n.background-success {\n  background-color: #d0dbc2\n}\n.text-warning {\n  color: #ddcd45\n}\n.background-warning {\n  background-color: #f5f0c6\n}\n.text-danger {\n  color: #a7342d\n}\n.background-danger {\n  background-color: #f0cbc9\n}\n.text-muted {\n  color: #868e96\n}\n.background-muted {\n  background-color: #e6e7e9\n}\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  line-height: 1.15;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%\n}\nbody {\n  margin: 0\n}\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block\n}\nh1 {\n  font-size: 2em;\n  margin: .67em 0\n}\nfigcaption,\nfigure,\nmain {\n  display: block\n}\nfigure {\n  margin: 1em 40px\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible\n}\npre {\n  font-family: monospace,monospace;\n  font-size: 1em\n}\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects\n}\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted\n}\nb,\nstrong {\n  font-weight: inherit\n}\nb,\nstrong {\n  font-weight: bolder\n}\ncode,\nkbd,\nsamp {\n  font-family: monospace,monospace;\n  font-size: 1em\n}\ndfn {\n  font-style: italic\n}\nmark {\n  background-color: #ff0;\n  color: #000\n}\nsmall {\n  font-size: 80%\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline\n}\nsub {\n  bottom: -.25em\n}\nsup {\n  top: -.5em\n}\naudio,\nvideo {\n  display: inline-block\n}\naudio:not([controls]) {\n  display: none;\n  height: 0\n}\nimg {\n  border-style: none\n}\nsvg:not(:root) {\n  overflow: hidden\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0\n}\nbutton,\ninput {\n  overflow: visible\n}\nbutton,\nselect {\n  text-transform: none\n}\n[type=reset],\n[type=submit],\nbutton,\nhtml [type=button] {\n  -webkit-appearance: button\n}\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner,\nbutton::-moz-focus-inner {\n  border-style: none;\n  padding: 0\n}\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring,\nbutton:-moz-focusring {\n  outline: 1px dotted ButtonText\n}\nfieldset {\n  padding: .35em .75em .625em\n}\nlegend {\n  box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal\n}\nprogress {\n  display: inline-block;\n  vertical-align: baseline\n}\ntextarea {\n  overflow: auto\n}\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  padding: 0\n}\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px\n}\n[type=search]::-webkit-search-cancel-button,\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit\n}\ndetails,\nmenu {\n  display: block\n}\nsummary {\n  display: list-item\n}\ncanvas {\n  display: inline-block\n}\ntemplate {\n  display: none\n}\n[hidden] {\n  display: none\n}\nhtml {\n  box-sizing: border-box\n}\n*,\n:after,\n:before {\n  box-sizing: inherit\n}\n.container {\n  margin: 0 auto;\n  max-width: 960px;\n  position: relative;\n  width: 100%\n}\n@media only screen and (max-width:992px) {\n  .container {\n    width: 85%\n  }\n}\n@media only screen and (max-width:480px) {\n  .container {\n    width: 90%\n  }\n}\n.section {\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n  word-wrap: break-word\n}\n.section::after {\n  color: #8f8d89;\n  content: '~~~';\n  display: block;\n  font-size: 1.5rem;\n  position: relative;\n  text-align: center\n}\nhr {\n  border: 0\n}\nhr::after {\n  color: #8f8d89;\n  content: '~~~';\n  display: block;\n  font-size: 1.5rem;\n  position: relative;\n  text-align: center;\n  top: -.75rem\n}\n.paper {\n  background-color: #fff;\n  border: 1px solid #c1c0bd;\n  box-shadow: -1px 5px 35px -9px rgba(0,0,0,.2);\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  padding: 2rem\n}\n@media only screen and (max-width:480px) {\n  .paper {\n    margin-bottom: 0;\n    margin-top: 0;\n    padding: 1rem;\n    width: 100%\n  }\n}\n.row {\n  display: flex;\n  flex-flow: row wrap;\n  margin-bottom: 1rem;\n  margin-left: auto;\n  margin-right: auto\n}\n.row.flex-right {\n  justify-content: flex-end\n}\n.row.flex-center {\n  justify-content: center\n}\n.row.flex-edges {\n  justify-content: space-between\n}\n.row.flex-spaces {\n  justify-content: space-around\n}\n.row.flex-top {\n  align-items: flex-start\n}\n.row.flex-middle {\n  align-items: center\n}\n.row.flex-bottom {\n  align-items: flex-end\n}\n.col {\n  padding: 1rem\n}\n@media only screen and (max-width:768px) {\n  .col {\n    flex: 0 0 100%;\n    max-width: 100%\n  }\n}\n.col-fill {\n  flex: 1 1;\n  width: auto\n}\n@media only screen and (min-width:0) {\n  .col-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%\n  }\n  .col-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%\n  }\n  .col-3 {\n    flex: 0 0 25%;\n    max-width: 25%\n  }\n  .col-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%\n  }\n  .col-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%\n  }\n  .col-6 {\n    flex: 0 0 50%;\n    max-width: 50%\n  }\n  .col-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%\n  }\n  .col-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%\n  }\n  .col-9 {\n    flex: 0 0 75%;\n    max-width: 75%\n  }\n  .col-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%\n  }\n  .col-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%\n  }\n  .col-12 {\n    flex: 0 0 100%;\n    max-width: 100%\n  }\n}\n@media only screen and (min-width:480px) {\n  .xs-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%\n  }\n  .xs-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%\n  }\n  .xs-3 {\n    flex: 0 0 25%;\n    max-width: 25%\n  }\n  .xs-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%\n  }\n  .xs-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%\n  }\n  .xs-6 {\n    flex: 0 0 50%;\n    max-width: 50%\n  }\n  .xs-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%\n  }\n  .xs-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%\n  }\n  .xs-9 {\n    flex: 0 0 75%;\n    max-width: 75%\n  }\n  .xs-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%\n  }\n  .xs-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%\n  }\n  .xs-12 {\n    flex: 0 0 100%;\n    max-width: 100%\n  }\n}\n@media only screen and (min-width:768px) {\n  .sm-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%\n  }\n  .sm-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%\n  }\n  .sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%\n  }\n  .sm-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%\n  }\n  .sm-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%\n  }\n  .sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%\n  }\n  .sm-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%\n  }\n  .sm-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%\n  }\n  .sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%\n  }\n  .sm-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%\n  }\n  .sm-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%\n  }\n  .sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%\n  }\n}\n@media only screen and (min-width:992px) {\n  .md-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%\n  }\n  .md-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%\n  }\n  .md-3 {\n    flex: 0 0 25%;\n    max-width: 25%\n  }\n  .md-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%\n  }\n  .md-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%\n  }\n  .md-6 {\n    flex: 0 0 50%;\n    max-width: 50%\n  }\n  .md-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%\n  }\n  .md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%\n  }\n  .md-9 {\n    flex: 0 0 75%;\n    max-width: 75%\n  }\n  .md-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%\n  }\n  .md-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%\n  }\n  .md-12 {\n    flex: 0 0 100%;\n    max-width: 100%\n  }\n}\n@media only screen and (min-width:1200px) {\n  .lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%\n  }\n  .lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%\n  }\n  .lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%\n  }\n  .lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%\n  }\n  .lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%\n  }\n  .lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%\n  }\n  .lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%\n  }\n  .lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%\n  }\n  .lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%\n  }\n  .lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%\n  }\n  .lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%\n  }\n  .lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%\n  }\n}\n.align-top {\n  align-self: flex-start\n}\n.align-middle {\n  align-self: center\n}\n.align-bottom {\n  align-self: flex-end\n}\n.container {\n  margin: 0 auto;\n  max-width: 960px;\n  position: relative;\n  width: 100%\n}\n@media only screen and (max-width:992px) {\n  .container {\n    width: 85%\n  }\n}\n@media only screen and (max-width:480px) {\n  .container {\n    width: 90%\n  }\n}\ncode {\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  color: #0071de;\n  font-size: 80%;\n  padding: 2px 4px\n}\nkbd {\n  background-color: #41403e;\n  border-radius: 3px;\n  color: #fff;\n  font-size: 80%;\n  padding: 2px 4px\n}\npre {\n  background-color: #fafafa;\n  border: 1px solid #c1c0bd;\n  border-radius: 3px;\n  color: #41403e;\n  display: block;\n  font-size: 80%;\n  line-height: 1.5;\n  overflow-x: auto;\n  padding: 1em;\n  white-space: pre;\n  word-break: break-all;\n  word-wrap: break-word\n}\npre code {\n  background: 0 0;\n  color: inherit;\n  display: block;\n  font-size: inherit;\n  padding: 0;\n  padding: initial;\n  white-space: pre\n}\nhtml {\n  color: #41403e;\n  font-family: Neucha,sans-serif;\n  font-size: 20px\n}\na,\nbutton,\ninput,\noption,\np,\nselect,\ntable,\ntbody,\ntd,\ntextarea,\nth,\nthead,\ntr {\n  font-family: Neucha,sans-serif\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Patrick Hand SC\",sans-serif;\n  font-weight: 400\n}\nh1 {\n  font-size: 4rem\n}\nh2 {\n  font-size: 3rem\n}\nh3 {\n  font-size: 2rem\n}\nh4 {\n  font-size: 1.5rem\n}\nh5 {\n  font-size: 1rem\n}\nh6 {\n  font-size: .8rem\n}\n.text-left {\n  text-align: left\n}\n.text-center {\n  text-align: center\n}\n.text-right {\n  text-align: right\n}\nimg {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  border: 2px solid #41403e;\n  display: block;\n  height: auto;\n  max-width: 100%\n}\nimg.float-left {\n  float: left;\n  margin: 1rem 1rem 1rem 0\n}\nimg.float-right {\n  float: right;\n  margin: 1rem 0 1rem 1rem\n}\nimg.no-responsive {\n  display: inline;\n  display: initial;\n  height: auto;\n  height: initial;\n  max-width: none;\n  max-width: initial\n}\nimg.no-border {\n  border: 0;\n  border-radius: 0\n}\nol {\n  list-style-type: decimal\n}\nol ol {\n  list-style-type: upper-alpha\n}\nol ol ol {\n  list-style-type: upper-roman\n}\nol ol ol ol {\n  list-style-type: lower-alpha\n}\nol ol ol ol ol {\n  list-style-type: lower-roman\n}\nul {\n  list-style: none;\n  margin-left: 0\n}\nul li::before {\n  content: \"-\"\n}\nul li {\n  text-indent: -7px\n}\nul li .badge,\nul li [popover-bottom]::after,\nul li [popover-left]::after,\nul li [popover-right]::after,\nul li [popover-top]::after {\n  text-indent: 0\n}\nul li::before {\n  left: -7px;\n  position: relative\n}\nul ul li::before {\n  content: \"+\"\n}\nul ul ul li::before {\n  content: \"~\"\n}\nul ul ul ul li::before {\n  content: \"⤍\"\n}\nul ul ul ul ul li::before {\n  content: \"⁎\"\n}\nul.inline li {\n  display: inline;\n  margin-left: 5px\n}\ntable {\n  box-sizing: border-box;\n  max-width: 100%;\n  overflow-x: auto;\n  width: 100%\n}\n@media only screen and (max-width:480px) {\n  table thead tr th {\n    padding: 2%\n  }\n  table tbody tr td {\n    padding: 2%\n  }\n}\ntable thead tr th {\n  line-height: 1.5;\n  padding: 8px;\n  text-align: left;\n  vertical-align: bottom\n}\ntable tbody tr td {\n  border-top: 1px dashed #d9d9d8;\n  line-height: 1.5;\n  padding: 8px;\n  vertical-align: top\n}\ntable.table-hover tbody tr:hover {\n  color: #0071de\n}\ntable.table-alternating tbody tr:nth-of-type(even) {\n  color: #82807c\n}\n.border {\n  border: 2px solid #41403e\n}\n.border,\n.border-1,\n.child-borders > :nth-child(6n+1) {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px\n}\n.border-2,\n.child-borders > :nth-child(6n+2) {\n  border-bottom-left-radius: 185px 25px;\n  border-bottom-right-radius: 20px 205px;\n  border-top-left-radius: 125px 25px;\n  border-top-right-radius: 10px 205px\n}\n.border-3,\n.child-borders > :nth-child(6n+3) {\n  border-bottom-left-radius: 225px 15px;\n  border-bottom-right-radius: 15px 255px;\n  border-top-left-radius: 15px 225px;\n  border-top-right-radius: 255px 15px\n}\n.border-4,\n.child-borders > :nth-child(6n+4) {\n  border-bottom-left-radius: 25px 115px;\n  border-bottom-right-radius: 155px 25px;\n  border-top-left-radius: 15px 225px;\n  border-top-right-radius: 25px 150px\n}\n.border-5,\n.child-borders > :nth-child(6n+5) {\n  border-bottom-left-radius: 20px 115px;\n  border-bottom-right-radius: 15px 105px;\n  border-top-left-radius: 250px 15px;\n  border-top-right-radius: 25px 80px\n}\n.border-6,\n.child-borders > :nth-child(6n+6) {\n  border-bottom-left-radius: 15px 225px;\n  border-bottom-right-radius: 20px 205px;\n  border-top-left-radius: 28px 125px;\n  border-top-right-radius: 100px 30px\n}\n.child-borders > * {\n  border: 2px solid #41403e\n}\n.border-white {\n  border-color: #fff\n}\n.border-dotted {\n  border-style: dotted\n}\n.border-dashed {\n  border-style: dashed\n}\n.border-thick {\n  border-width: 5px\n}\n.border-primary {\n  border-color: #41403e\n}\n.border-secondary {\n  border-color: #0071de\n}\n.border-success {\n  border-color: #86a361\n}\n.border-warning {\n  border-color: #ddcd45\n}\n.border-danger {\n  border-color: #a7342d\n}\n.border-muted {\n  border-color: #868e96\n}\n.shadow {\n  transition: all 235ms ease 0s;\n  box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2)\n}\n.shadow.shadow-large {\n  transition: all 235ms ease 0s;\n  box-shadow: 20px 38px 34px -26px rgba(0,0,0,.2)\n}\n.shadow.shadow-small {\n  transition: all 235ms ease 0s;\n  box-shadow: 10px 19px 17px -13px rgba(0,0,0,.2)\n}\n.shadow.shadow-hover:hover {\n  transform: translate3d(0,2px,0);\n  box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3)\n}\n.child-shadows > * {\n  transition: all 235ms ease 0s;\n  box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2)\n}\n.child-shadows-hover > * {\n  transition: all 235ms ease 0s;\n  box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2)\n}\n.child-shadows-hover > :hover {\n  transform: translate3d(0,2px,0);\n  box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3)\n}\n.collapsible {\n  display: flex;\n  flex-direction: column\n}\n.collapsible:nth-of-type(1) {\n  border-top: 1px solid #e6e7e9\n}\n.collapsible .collapsible-body {\n  transition: all 235ms ease-in-out 0s;\n  background-color: rgba(204,204,204,.03);\n  border-bottom: 1px solid #e6e7e9;\n  margin: 0;\n  max-height: 0;\n  opacity: 0;\n  overflow: hidden;\n  padding: 0 .75rem\n}\n.collapsible input {\n  display: none\n}\n.collapsible input:checked + label {\n  color: #41403e\n}\n.collapsible input[id^=collapsible]:checked ~ div.collapsible-body {\n  margin: 0;\n  max-height: 960px;\n  opacity: 1;\n  padding: .75rem\n}\n.collapsible label {\n  border-bottom: 1px solid #e6e7e9;\n  color: #41403e;\n  display: inline-block;\n  font-weight: 600;\n  margin: 0 0 -1px;\n  padding: .75rem;\n  text-align: center\n}\n.collapsible label:hover {\n  color: #868e96;\n  cursor: pointer\n}\n.alert {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  border: 2px solid #41403e;\n  margin-bottom: 20px;\n  padding: 15px;\n  width: 100%\n}\n.alert.dismissible {\n  transition: all 235ms ease-in-out 0s;\n  display: flex;\n  justify-content: space-between;\n  max-height: 48rem;\n  overflow: hidden\n}\n.alert .btn-close {\n  transition: all 235ms ease-in-out 0s;\n  color: #5b5a57;\n  cursor: pointer;\n  margin-left: .75rem\n}\n.alert .btn-close:active,\n.alert .btn-close:focus,\n.alert .btn-close:hover {\n  color: #272625\n}\n.alert-primary {\n  background-color: #c1c0bd;\n  border-color: #41403e;\n  color: #41403e\n}\n.alert-primary .btn-close {\n  color: #5b5a57\n}\n.alert-primary .btn-close:active,\n.alert-primary .btn-close:focus,\n.alert-primary .btn-close:hover {\n  color: #272625\n}\n.alert-secondary {\n  background-color: #deefff;\n  border-color: #0071de;\n  color: #0071de\n}\n.alert-secondary .btn-close {\n  color: #128bff\n}\n.alert-secondary .btn-close:active,\n.alert-secondary .btn-close:focus,\n.alert-secondary .btn-close:hover {\n  color: #0057ab\n}\n.alert-success {\n  background-color: #d0dbc2;\n  border-color: #86a361;\n  color: #86a361\n}\n.alert-success .btn-close {\n  color: #9fb681\n}\n.alert-success .btn-close:active,\n.alert-success .btn-close:focus,\n.alert-success .btn-close:hover {\n  color: #6c844d\n}\n.alert-warning {\n  background-color: #f5f0c6;\n  border-color: #ddcd45;\n  color: #ddcd45\n}\n.alert-warning .btn-close {\n  color: #e5d970\n}\n.alert-warning .btn-close:active,\n.alert-warning .btn-close:focus,\n.alert-warning .btn-close:hover {\n  color: #cab925\n}\n.alert-danger {\n  background-color: #f0cbc9;\n  border-color: #a7342d;\n  color: #a7342d\n}\n.alert-danger .btn-close {\n  color: #cb453c\n}\n.alert-danger .btn-close:active,\n.alert-danger .btn-close:focus,\n.alert-danger .btn-close:hover {\n  color: #7f2722\n}\n.alert-muted {\n  background-color: #e6e7e9;\n  border-color: #868e96;\n  color: #868e96\n}\n.alert-muted .btn-close {\n  color: #a1a8ae\n}\n.alert-muted .btn-close:active,\n.alert-muted .btn-close:focus,\n.alert-muted .btn-close:hover {\n  color: #6c757d\n}\n.alert-state {\n  display: none\n}\n.alert-state:checked + .dismissible {\n  border-width: 0;\n  margin: 0;\n  max-height: 0;\n  opacity: 0;\n  padding-bottom: 0;\n  padding-top: 0\n}\narticle .article-title {\n  font-size: 3rem\n}\narticle .article-meta {\n  color: #868e96;\n  font-size: 15px\n}\narticle .article-meta a {\n  background-image: none;\n  color: #41403e\n}\narticle .article-meta a:hover {\n  color: rgba(0,0,0,.7)\n}\narticle .text-lead {\n  font-size: 30px;\n  line-height: 1.3;\n  margin: 35px\n}\narticle button:not(:first-of-type) {\n  margin-left: 2rem\n}\n@media only screen and (max-width:480px) {\n  article button:not(:first-of-type) {\n    margin-left: 0\n  }\n}\narticle p {\n  line-height: 1.6\n}\n.badge {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  background-color: #868e96;\n  border: 2px solid #41403e;\n  border-color: transparent;\n  color: #fff;\n  display: inline-block;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  padding: .25em .4em;\n  text-align: center;\n  vertical-align: baseline;\n  white-space: nowrap\n}\n.badge.primary {\n  background-color: #41403e\n}\n.badge.secondary {\n  background-color: #0071de\n}\n.badge.success {\n  background-color: #86a361\n}\n.badge.warning {\n  background-color: #ddcd45\n}\n.badge.danger {\n  background-color: #a7342d\n}\n.badge.muted {\n  background-color: #868e96\n}\n.paper-btn,\n[type=button],\nbutton {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  transition: all 235ms ease 0s;\n  box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2);\n  transition: all 235ms ease-in-out 0s;\n  align-self: center;\n  background: 0 0;\n  border: 2px solid #41403e;\n  color: #41403e;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1rem;\n  outline: 0;\n  padding: .75rem\n}\n@media only screen and (max-width:520px) {\n  .paper-btn,\n  [type=button],\n  button {\n    display: inline-block;\n    margin: 0 auto;\n    margin-bottom: 1rem;\n    text-align: center\n  }\n}\n.paper-btn.btn-large,\n[type=button].btn-large,\nbutton.btn-large {\n  transition: all 235ms ease 0s;\n  box-shadow: 20px 38px 34px -26px rgba(0,0,0,.2);\n  font-size: 2rem;\n  padding: 1rem\n}\n.paper-btn.btn-small,\n[type=button].btn-small,\nbutton.btn-small {\n  transition: all 235ms ease 0s;\n  box-shadow: 10px 19px 17px -13px rgba(0,0,0,.2);\n  font-size: .75rem;\n  padding: .5rem\n}\n.paper-btn.btn-block,\n[type=button].btn-block,\nbutton.btn-block {\n  display: block;\n  width: 100%\n}\n.paper-btn:hover,\n[type=button]:hover,\nbutton:hover {\n  transform: translate3d(0,2px,0);\n  box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3)\n}\n.paper-btn:focus,\n[type=button]:focus,\nbutton:focus {\n  border: 2px solid #0071de;\n  box-shadow: 2px 8px 4px -6px rgba(0,0,0,.3)\n}\n.paper-btn:active,\n[type=button]:active,\nbutton:active {\n  border-color: rgba(0,0,0,.2);\n  transition: none\n}\n.paper-btn.disabled,\n.paper-btn[disabled],\n[type=button].disabled,\n[type=button][disabled],\nbutton.disabled,\nbutton[disabled],\ninput.paper-btn[disabled],\ninput[type=button][disabled],\nselect.paper-btn[disabled],\nselect[type=button][disabled],\ntextarea.paper-btn[disabled],\ntextarea[type=button][disabled] {\n  cursor: not-allowed;\n  opacity: .5\n}\na {\n  background-image: linear-gradient(5deg,transparent 65%,#0071de 80%,transparent 90%),linear-gradient(165deg,transparent 5%,#0071de 15%,transparent 25%),linear-gradient(165deg,transparent 45%,#0071de 55%,transparent 65%),linear-gradient(15deg,transparent 25%,#0071de 35%,transparent 50%);\n  background-position: 0 90%;\n  background-repeat: repeat-x;\n  background-size: 4px 3px;\n  text-decoration: none\n}\na:visited {\n  color: #41403e;\n  text-decoration: none\n}\n.alert-primary {\n  background-color: #c1c0bd;\n  border-color: #41403e;\n  color: #41403e\n}\n.paper-btn.btn-primary,\n[type=button].btn-primary,\nbutton.btn-primary {\n  background-color: #c1c0bd;\n  border-color: #41403e;\n  color: #fff\n}\n.paper-btn.btn-primary:hover:active,\n[type=button].btn-primary:hover:active,\nbutton.btn-primary:hover:active {\n  background-color: #a8a6a3\n}\n.alert-secondary {\n  background-color: #deefff;\n  border-color: #0071de;\n  color: #0071de\n}\n.paper-btn.btn-secondary,\n[type=button].btn-secondary,\nbutton.btn-secondary {\n  background-color: #deefff;\n  border-color: #0071de;\n  color: #41403e\n}\n.paper-btn.btn-secondary:hover:active,\n[type=button].btn-secondary:hover:active,\nbutton.btn-secondary:hover:active {\n  background-color: #abd6ff\n}\n.alert-success {\n  background-color: #d0dbc2;\n  border-color: #86a361;\n  color: #86a361\n}\n.paper-btn.btn-success,\n[type=button].btn-success,\nbutton.btn-success {\n  background-color: #d0dbc2;\n  border-color: #86a361;\n  color: #41403e\n}\n.paper-btn.btn-success:hover:active,\n[type=button].btn-success:hover:active,\nbutton.btn-success:hover:active {\n  background-color: #b7c9a1\n}\n.alert-warning {\n  background-color: #f5f0c6;\n  border-color: #ddcd45;\n  color: #ddcd45\n}\n.paper-btn.btn-warning,\n[type=button].btn-warning,\nbutton.btn-warning {\n  background-color: #f5f0c6;\n  border-color: #ddcd45;\n  color: #41403e\n}\n.paper-btn.btn-warning:hover:active,\n[type=button].btn-warning:hover:active,\nbutton.btn-warning:hover:active {\n  background-color: #ede49b\n}\n.alert-danger {\n  background-color: #f0cbc9;\n  border-color: #a7342d;\n  color: #a7342d\n}\n.paper-btn.btn-danger,\n[type=button].btn-danger,\nbutton.btn-danger {\n  background-color: #f0cbc9;\n  border-color: #a7342d;\n  color: #41403e\n}\n.paper-btn.btn-danger:hover:active,\n[type=button].btn-danger:hover:active,\nbutton.btn-danger:hover:active {\n  background-color: #e6a5a1\n}\n.alert-muted {\n  background-color: #e6e7e9;\n  border-color: #868e96;\n  color: #868e96\n}\n.paper-btn.btn-muted,\n[type=button].btn-muted,\nbutton.btn-muted {\n  background-color: #e6e7e9;\n  border-color: #868e96;\n  color: #41403e\n}\n.paper-btn.btn-muted:hover:active,\n[type=button].btn-muted:hover:active,\nbutton.btn-muted:hover:active {\n  background-color: #caced1\n}\n.card {\n  transition: all 235ms ease 0s;\n  box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border: 2px solid #e6e7e9;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  will-change: transform;\n  word-wrap: break-word\n}\n.card:hover {\n  transform: translate3d(0,2px,0);\n  box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3)\n}\n.card .card-footer,\n.card .card-header {\n  background-color: rgba(0,0,0,.03);\n  padding: .75rem 1.25rem\n}\n.card .card-header {\n  border-bottom: 2px solid #e6e7e9\n}\n.card .card-footer {\n  border-top: 2px solid #e6e7e9\n}\n.card .card-body {\n  flex: 1 1 auto;\n  padding: 1.25rem\n}\n.card .card-body .card-title,\n.card .card-body h4 {\n  margin-bottom: .5rem;\n  margin-top: 0\n}\n.card .card-body .card-subtitle,\n.card .card-body h5 {\n  color: #0071de;\n  margin-bottom: .5rem;\n  margin-top: 0\n}\n.card .card-body .card-text,\n.card .card-body p {\n  margin-bottom: 1rem;\n  margin-top: 0\n}\n.card .card-body .card-link + .card-link,\n.card .card-body a + a {\n  margin-left: 1.25rem\n}\n.card .image-bottom,\n.card .image-top,\n.card img {\n  border: 0;\n  border-radius: 0\n}\ninput,\nselect,\ntextarea {\n  background: 0 0;\n  border: 2px solid #41403e;\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  color: #41403e;\n  display: block;\n  font-size: 1rem;\n  outline: 0;\n  padding: .5rem\n}\ninput:focus,\nselect:focus,\ntextarea:focus {\n  border: 2px solid #0071de\n}\nselect {\n  height: 2.35rem\n}\n.disabled,\ninput.disabled,\ninput[disabled],\nselect.disabled,\nselect[disabled],\ntextarea.disabled,\ntextarea[disabled] {\n  cursor: not-allowed;\n  opacity: .5\n}\n.form-group {\n  margin-bottom: 1rem\n}\n.form-group > label,\n.form-group legend {\n  display: inline-block;\n  margin-bottom: .5rem\n}\n.form-group .input-block {\n  width: 100%\n}\n.form-group textarea {\n  max-height: 90vh;\n  max-width: 100%\n}\n.form-group textarea.no-resize {\n  resize: none\n}\n.form-group .paper-check,\n.form-group .paper-radio {\n  cursor: pointer;\n  display: block;\n  margin-bottom: .5rem\n}\n.form-group .paper-check input,\n.form-group .paper-radio input {\n  border: 0;\n  height: 1px;\n  margin: -1px;\n  opacity: 0;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px\n}\n.form-group .paper-check input + span,\n.form-group .paper-radio input + span {\n  display: block\n}\n.form-group .paper-check input + span::before,\n.form-group .paper-radio input + span::before {\n  border: 2px solid #41403e;\n  content: '';\n  display: inline-block;\n  height: 1rem;\n  margin-right: .75em;\n  position: relative;\n  vertical-align: -.25em;\n  width: 1rem\n}\n.form-group .paper-check input[type=radio] + span::before,\n.form-group .paper-radio input[type=radio] + span::before {\n  border-bottom-left-radius: .7rem 1rem;\n  border-bottom-right-radius: 1rem .9rem;\n  border-top-left-radius: 1rem 1rem;\n  border-top-right-radius: 1rem .6rem\n}\n.form-group .paper-check input[type=radio]:checked + span::before,\n.form-group .paper-radio input[type=radio]:checked + span::before {\n  background: url(\"data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A//www.w3.org/2000/svg'%20viewBox%3D'0%200%20100%20100'%3E%3Cpath%20fill%3D'%230071de'%20d%3D'M49.346,46.341c-3.79-2.005,3.698-10.294,7.984-8.89%20c8.713,2.852,4.352,20.922-4.901,20.269c-4.684-0.33-12.616-7.405-14.38-11.818c-2.375-5.938,7.208-11.688,11.624-13.837%20c9.078-4.42,18.403-3.503,22.784,6.651c4.049,9.378,6.206,28.09-1.462,36.276c-7.091,7.567-24.673,2.277-32.357-1.079%20c-11.474-5.01-24.54-19.124-21.738-32.758c3.958-19.263,28.856-28.248,46.044-23.244c20.693,6.025,22.012,36.268,16.246,52.826%20c-5.267,15.118-17.03,26.26-33.603,21.938c-11.054-2.883-20.984-10.949-28.809-18.908C9.236,66.096,2.704,57.597,6.01,46.371%20c3.059-10.385,12.719-20.155,20.892-26.604C40.809,8.788,58.615,1.851,75.058,12.031c9.289,5.749,16.787,16.361,18.284,27.262%20c0.643,4.698,0.646,10.775-3.811,13.746'%3E%3C/path%3E%3C/svg%3E\") left center no-repeat\n}\n.form-group .paper-check input[type=checkbox] + span::before,\n.form-group .paper-radio input[type=checkbox] + span::before {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px\n}\n.form-group .paper-check input[type=checkbox]:checked + span::before,\n.form-group .paper-radio input[type=checkbox]:checked + span::before {\n  background: url(\"data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A//www.w3.org/2000/svg'%20viewBox%3D'0%200%20100%20100'%3E%3Cpath%20stroke%3D'%230071de'%20fill-opacity%3D'0'%20stroke-width%3D'16'%20d%3D'm13,62c0.61067,1.6%201.3045,2.3045%201.75717,2.75716c0.72683,0.72684%201.24283,1.24284%202.07617,2.07617c0.54133,0.54133%201.04116,1.06035%201.82833,1.82383c0.5781,0.5607%201.00502,0.96983%202.02633,1.74417c0.55877,0.42365%201.191,0.84034%201.884,1.284c1.16491,0.74577%201.59777,1.00147%202.5,1.55067c0.4692,0.28561%201.43689,0.86868%201.93067,1.16534c0.99711,0.59904%201.99667,1.19755%202.49283,1.49866c0.98501,0.59779%201.47073,0.89648%201.94733,1.2c1.3971,0.88972%201.83738,1.19736%202.7,1.7955c0.42201,0.29262%201.24022,0.87785%202.05583,1.41917c0.79531,0.52785%201.59376,1.0075%202.38,1.43867c0.74477,0.40842%201.45167,0.75802%202.37817,1.22517c0.76133,0.38387%201.54947,0.82848%202.40717,1.41084c0.7312,0.49647%201.49563,1.08231%202.27884,1.258c0.35564,0.07978%200.14721,-0.95518%200.35733,-1.86867c0.18092,-0.78651%200.98183,-1.2141%200.99983,-2.07867c0.02073,-0.99529%200.07916,-1.79945%200.42533,-2.56133c0.43607,-0.95973%200.53956,-1.66774%200.79617,-2.68183c0.18888,-0.74645%200.39764,-1.31168%200.7785,-2.6235c0.20865,-0.71867%200.41483,-1.48614%200.708,-2.28c0.15452,-0.41843%200.77356,-1.73138%201.348,-2.64133c0.30581,-0.48443%200.65045,-0.97043%201.0065,-1.4745c0.74776,-1.05863%201.1531,-1.60163%201.9375,-2.77084c0.40621,-0.60548%200.80272,-1.23513%201.2045,-1.8765c0.40757,-0.65062%200.81464,-1.31206%201.2315,-1.9755c0.41946,-0.66757%200.83374,-1.34258%201.73067,-2.648c0.44696,-0.65053%200.91436,-1.28356%201.386,-1.9095c0.46972,-0.6234%200.94725,-1.2364%201.422,-1.8465c0.94116,-1.20947%201.86168,-2.40844%202.30367,-3.0105c0.438,-0.59664%200.86246,-1.19396%201.27501,-1.7895c0.40743,-0.58816%200.80352,-1.17234%201.185,-1.7535c1.10526,-1.68381%201.44079,-2.23511%201.77633,-2.7705c0.32878,-0.52461%200.96306,-1.5459%201.27467,-2.04c0.60654,-0.96177%201.20782,-1.88193%201.51051,-2.325c0.59013,-0.86381%201.17888,-1.68032%201.46416,-2.075c0.5498,-0.76063%201.31747,-1.8231%201.77883,-2.4895c0.43918,-0.63437%200.85266,-1.25267%201.45717,-2.15717c0.59549,-0.891%200.96531,-1.46814%201.51466,-2.22933c0.58413,-0.80936%201.12566,-1.40253%201.83801,-2.12333c0.61304,-0.62031%200.45171,-1.48306%200.7045,-2.34733c0.25668,-0.87762%200.75447,-1.62502%201,-2.40983c0.25128,-0.8032%200.7633,-1.39453%201.33217,-2.25417c0.54528,-0.82398%200.73415,-1.6714%201.31516,-2.336c0.55639,-0.63644%201.38658,-1.22588%201.8595,-1.9c0.5082,-0.72441%200.78867,-1.4%201.60266,-1.56667l0.71184,-0.4905'%3E%3C/path%3E%3C/svg%3E\") left center no-repeat\n}\nfieldset.form-group {\n  border: 0;\n  padding: 0\n}\n.modal {\n  transition: opacity 235ms ease-in-out 0s;\n  background: rgba(0,0,0,.6);\n  bottom: 0;\n  flex: 1 1 auto;\n  left: 0;\n  opacity: 0;\n  position: fixed;\n  right: 0;\n  text-align: left;\n  top: 0;\n  visibility: hidden;\n  word-wrap: break-word;\n  z-index: 12\n}\n.modal-bg {\n  bottom: 0;\n  cursor: pointer;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0\n}\n.modal .modal-body {\n  transition: all 235ms ease-in-out 0s;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  background: #fff;\n  border: 2px solid #e6e7e9;\n  left: 50%;\n  padding: 1.25rem;\n  position: absolute;\n  top: 0;\n  transform: translate(-50%,-50%)\n}\n@media only screen and (max-width:768px) {\n  .modal .modal-body {\n    box-sizing: border-box;\n    width: 90%\n  }\n}\n.modal .btn-close {\n  transition: all 235ms ease-in-out 0s;\n  color: #c1c0bd;\n  cursor: pointer;\n  font-size: 30px;\n  height: 1.1rem;\n  position: absolute;\n  right: 1rem;\n  text-decoration: none;\n  top: 1rem;\n  width: 1.1rem\n}\n.modal .btn-close:active,\n.modal .btn-close:focus,\n.modal .btn-close:hover {\n  color: #41403e\n}\n.modal .modal-title,\n.modal h4 {\n  margin-bottom: .5rem;\n  margin-top: 0\n}\n.modal .modal-subtitle,\n.modal h5 {\n  color: #0071de;\n  margin-bottom: .5rem;\n  margin-top: 0\n}\n.modal .modal-text,\n.modal p {\n  margin-bottom: 1rem;\n  margin-top: 0\n}\n.modal .modal-link + .modal-link,\n.modal a + a {\n  margin-left: 1.25rem\n}\n.modal .paper-btn {\n  background: #fff;\n  display: inline-block;\n  text-decoration: none\n}\n.modal .modal-link,\n.modal a {\n  background-image: linear-gradient(5deg,transparent 65%,#0071de 80%,transparent 90%),linear-gradient(165deg,transparent 5%,#0071de 15%,transparent 25%),linear-gradient(165deg,transparent 45%,#0071de 55%,transparent 65%),linear-gradient(15deg,transparent 25%,#0071de 35%,transparent 50%);\n  background-position: 0 90%;\n  background-repeat: repeat-x;\n  background-size: 4px 3px;\n  cursor: pointer;\n  text-decoration: none\n}\n.modal .modal-link:focus,\n.modal .modal-link:hover,\n.modal .modal-link:visited,\n.modal a:focus,\n.modal a:hover,\n.modal a:visited {\n  color: #41403e;\n  text-decoration: none\n}\n.modal-state {\n  display: none\n}\n.modal-state:checked + .modal {\n  opacity: 1;\n  visibility: visible\n}\n.modal-state:checked + .modal .modal-body {\n  top: 50%\n}\n[popover-bottom],\n[popover-left],\n[popover-right],\n[popover-top] {\n  margin: 24px;\n  position: relative\n}\n[popover-bottom]:hover::after,\n[popover-left]:hover::after,\n[popover-right]:hover::after,\n[popover-top]:hover::after {\n  opacity: 1;\n  transition: opacity .2s ease-out\n}\n[popover-bottom]::after,\n[popover-left]::after,\n[popover-right]::after,\n[popover-top]::after {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  transition: opacity 235ms ease-in-out 0s;\n  background: rgba(0,0,0,.7);\n  border: 2px solid #41403e;\n  color: #fff;\n  font-size: .7em;\n  left: 50%;\n  min-width: 80px;\n  opacity: 0;\n  padding: 4px 2px;\n  position: absolute;\n  text-align: center;\n  top: -6px;\n  transform: translateX(-50%) translateY(-100%)\n}\n[popover-left]::before {\n  left: 0;\n  margin-left: -12px;\n  top: 50%;\n  transform: translateY(-50%) rotate(-90deg)\n}\n[popover-left]::after {\n  content: attr(popover-left);\n  left: 0;\n  margin-left: -8px;\n  top: 50%;\n  transform: translateX(-100%) translateY(-50%)\n}\n[popover-right]::before {\n  left: 100%;\n  margin-left: 1px;\n  top: 50%;\n  transform: translatey(-50%) rotate(90deg)\n}\n[popover-right]::after {\n  content: attr(popover-right);\n  left: 100%;\n  margin-left: 8px;\n  top: 50%;\n  transform: translateX(0) translateY(-50%)\n}\n[popover-top]::before {\n  left: 50%\n}\n[popover-top]::after {\n  content: attr(popover-top);\n  left: 50%\n}\n[popover-bottom]::before {\n  margin-top: 8px;\n  top: 100%;\n  transform: translateX(-50%) translatey(-100%) rotate(-180deg)\n}\n[popover-bottom]::after {\n  content: attr(popover-bottom);\n  margin-top: 8px;\n  top: 100%;\n  transform: translateX(-50%) translateY(0)\n}\n.progress {\n  border-bottom-left-radius: 20px 115px;\n  border-bottom-right-radius: 15px 105px;\n  border-top-left-radius: 250px 15px;\n  border-top-right-radius: 25px 80px;\n  border: 2px solid #41403e;\n  box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3);\n  height: 1.2rem;\n  overflow: hidden;\n  width: 100%\n}\n.progress .bar {\n  border-bottom-left-radius: 20px 115px;\n  border-bottom-right-radius: 15px 105px;\n  border-top-left-radius: 250px 15px;\n  border-top-right-radius: 25px 80px;\n  transition: all 235ms ease-in-out 0s;\n  background-color: #c1c0bd;\n  border-right: 2px solid #41403e;\n  display: flex;\n  flex-direction: column;\n  font-size: .6rem;\n  height: 100%;\n  justify-content: center;\n  text-align: center;\n  width: 0%\n}\n.progress .bar.striped {\n  background: repeating-linear-gradient(45deg,#c1c0bd,#c1c0bd .25rem,#a8a6a3 .25rem,#a8a6a3 .5rem)\n}\n.progress .bar.primary {\n  background-color: #c1c0bd\n}\n.progress .bar.primary.striped {\n  background: repeating-linear-gradient(45deg,#c1c0bd,#c1c0bd .25rem,#a8a6a3 .25rem,#a8a6a3 .5rem)\n}\n.progress .bar.secondary {\n  background-color: #deefff\n}\n.progress .bar.secondary.striped {\n  background: repeating-linear-gradient(45deg,#deefff,#deefff .25rem,#abd6ff .25rem,#abd6ff .5rem)\n}\n.progress .bar.success {\n  background-color: #d0dbc2\n}\n.progress .bar.success.striped {\n  background: repeating-linear-gradient(45deg,#d0dbc2,#d0dbc2 .25rem,#b7c9a1 .25rem,#b7c9a1 .5rem)\n}\n.progress .bar.warning {\n  background-color: #f5f0c6\n}\n.progress .bar.warning.striped {\n  background: repeating-linear-gradient(45deg,#f5f0c6,#f5f0c6 .25rem,#ede49b .25rem,#ede49b .5rem)\n}\n.progress .bar.danger {\n  background-color: #f0cbc9\n}\n.progress .bar.danger.striped {\n  background: repeating-linear-gradient(45deg,#f0cbc9,#f0cbc9 .25rem,#e6a5a1 .25rem,#e6a5a1 .5rem)\n}\n.progress .bar.muted {\n  background-color: #e6e7e9\n}\n.progress .bar.muted.striped {\n  background: repeating-linear-gradient(45deg,#e6e7e9,#e6e7e9 .25rem,#caced1 .25rem,#caced1 .5rem)\n}\n.progress .bar.w-0 {\n  width: 0%\n}\n.progress .bar.w-1 {\n  width: 1%\n}\n.progress .bar.w-2 {\n  width: 2%\n}\n.progress .bar.w-3 {\n  width: 3%\n}\n.progress .bar.w-4 {\n  width: 4%\n}\n.progress .bar.w-5 {\n  width: 5%\n}\n.progress .bar.w-6 {\n  width: 6%\n}\n.progress .bar.w-7 {\n  width: 7%\n}\n.progress .bar.w-8 {\n  width: 8%\n}\n.progress .bar.w-9 {\n  width: 9%\n}\n.progress .bar.w-10 {\n  width: 10%\n}\n.progress .bar.w-11 {\n  width: 11%\n}\n.progress .bar.w-12 {\n  width: 12%\n}\n.progress .bar.w-13 {\n  width: 13%\n}\n.progress .bar.w-14 {\n  width: 14%\n}\n.progress .bar.w-15 {\n  width: 15%\n}\n.progress .bar.w-16 {\n  width: 16%\n}\n.progress .bar.w-17 {\n  width: 17%\n}\n.progress .bar.w-18 {\n  width: 18%\n}\n.progress .bar.w-19 {\n  width: 19%\n}\n.progress .bar.w-20 {\n  width: 20%\n}\n.progress .bar.w-21 {\n  width: 21%\n}\n.progress .bar.w-22 {\n  width: 22%\n}\n.progress .bar.w-23 {\n  width: 23%\n}\n.progress .bar.w-24 {\n  width: 24%\n}\n.progress .bar.w-25 {\n  width: 25%\n}\n.progress .bar.w-26 {\n  width: 26%\n}\n.progress .bar.w-27 {\n  width: 27%\n}\n.progress .bar.w-28 {\n  width: 28%\n}\n.progress .bar.w-29 {\n  width: 29%\n}\n.progress .bar.w-30 {\n  width: 30%\n}\n.progress .bar.w-31 {\n  width: 31%\n}\n.progress .bar.w-32 {\n  width: 32%\n}\n.progress .bar.w-33 {\n  width: 33%\n}\n.progress .bar.w-34 {\n  width: 34%\n}\n.progress .bar.w-35 {\n  width: 35%\n}\n.progress .bar.w-36 {\n  width: 36%\n}\n.progress .bar.w-37 {\n  width: 37%\n}\n.progress .bar.w-38 {\n  width: 38%\n}\n.progress .bar.w-39 {\n  width: 39%\n}\n.progress .bar.w-40 {\n  width: 40%\n}\n.progress .bar.w-41 {\n  width: 41%\n}\n.progress .bar.w-42 {\n  width: 42%\n}\n.progress .bar.w-43 {\n  width: 43%\n}\n.progress .bar.w-44 {\n  width: 44%\n}\n.progress .bar.w-45 {\n  width: 45%\n}\n.progress .bar.w-46 {\n  width: 46%\n}\n.progress .bar.w-47 {\n  width: 47%\n}\n.progress .bar.w-48 {\n  width: 48%\n}\n.progress .bar.w-49 {\n  width: 49%\n}\n.progress .bar.w-50 {\n  width: 50%\n}\n.progress .bar.w-51 {\n  width: 51%\n}\n.progress .bar.w-52 {\n  width: 52%\n}\n.progress .bar.w-53 {\n  width: 53%\n}\n.progress .bar.w-54 {\n  width: 54%\n}\n.progress .bar.w-55 {\n  width: 55%\n}\n.progress .bar.w-56 {\n  width: 56%\n}\n.progress .bar.w-57 {\n  width: 57%\n}\n.progress .bar.w-58 {\n  width: 58%\n}\n.progress .bar.w-59 {\n  width: 59%\n}\n.progress .bar.w-60 {\n  width: 60%\n}\n.progress .bar.w-61 {\n  width: 61%\n}\n.progress .bar.w-62 {\n  width: 62%\n}\n.progress .bar.w-63 {\n  width: 63%\n}\n.progress .bar.w-64 {\n  width: 64%\n}\n.progress .bar.w-65 {\n  width: 65%\n}\n.progress .bar.w-66 {\n  width: 66%\n}\n.progress .bar.w-67 {\n  width: 67%\n}\n.progress .bar.w-68 {\n  width: 68%\n}\n.progress .bar.w-69 {\n  width: 69%\n}\n.progress .bar.w-70 {\n  width: 70%\n}\n.progress .bar.w-71 {\n  width: 71%\n}\n.progress .bar.w-72 {\n  width: 72%\n}\n.progress .bar.w-73 {\n  width: 73%\n}\n.progress .bar.w-74 {\n  width: 74%\n}\n.progress .bar.w-75 {\n  width: 75%\n}\n.progress .bar.w-76 {\n  width: 76%\n}\n.progress .bar.w-77 {\n  width: 77%\n}\n.progress .bar.w-78 {\n  width: 78%\n}\n.progress .bar.w-79 {\n  width: 79%\n}\n.progress .bar.w-80 {\n  width: 80%\n}\n.progress .bar.w-81 {\n  width: 81%\n}\n.progress .bar.w-82 {\n  width: 82%\n}\n.progress .bar.w-83 {\n  width: 83%\n}\n.progress .bar.w-84 {\n  width: 84%\n}\n.progress .bar.w-85 {\n  width: 85%\n}\n.progress .bar.w-86 {\n  width: 86%\n}\n.progress .bar.w-87 {\n  width: 87%\n}\n.progress .bar.w-88 {\n  width: 88%\n}\n.progress .bar.w-89 {\n  width: 89%\n}\n.progress .bar.w-90 {\n  width: 90%\n}\n.progress .bar.w-91 {\n  width: 91%\n}\n.progress .bar.w-92 {\n  width: 92%\n}\n.progress .bar.w-93 {\n  width: 93%\n}\n.progress .bar.w-94 {\n  width: 94%\n}\n.progress .bar.w-95 {\n  width: 95%\n}\n.progress .bar.w-96 {\n  width: 96%\n}\n.progress .bar.w-97 {\n  width: 97%\n}\n.progress .bar.w-98 {\n  width: 98%\n}\n.progress .bar.w-99 {\n  width: 99%\n}\n.progress .bar.w-100 {\n  width: 100%\n}\n.progress .bar.w-0,\n.progress .bar.w-100 {\n  border-right: 0\n}\n.tabs .content {\n  display: none;\n  padding: .75rem 0 0\n}\n.tabs input {\n  display: none\n}\n.tabs input:checked + label {\n  border-bottom: solid 3px #0071de;\n  color: #41403e\n}\n.tabs input[id=tab1]:checked ~ div[id=content1] {\n  display: block\n}\n.tabs input[id=tab2]:checked ~ div[id=content2] {\n  display: block\n}\n.tabs input[id=tab3]:checked ~ div[id=content3] {\n  display: block\n}\n.tabs input[id=tab4]:checked ~ div[id=content4] {\n  display: block\n}\n.tabs input[id=tab5]:checked ~ div[id=content5] {\n  display: block\n}\n.tabs label {\n  color: #c1c0bd;\n  display: inline-block;\n  font-weight: 600;\n  margin: 0 0 -1px;\n  padding: .75rem;\n  text-align: center\n}\n.tabs label:hover {\n  color: #868e96;\n  cursor: pointer\n}\n.margin {\n  margin: 1rem\n}\n.margin-top {\n  margin-top: 1rem\n}\n.margin-top-large {\n  margin-top: 2rem\n}\n.margin-top-small {\n  margin-top: .5rem\n}\n.margin-top-none {\n  margin-top: 0\n}\n.margin-right {\n  margin-right: 1rem\n}\n.margin-right-large {\n  margin-right: 2rem\n}\n.margin-right-small {\n  margin-right: .5rem\n}\n.margin-right-none {\n  margin-right: 0\n}\n.margin-bottom {\n  margin-bottom: 1rem\n}\n.margin-bottom-large {\n  margin-bottom: 2rem\n}\n.margin-bottom-small {\n  margin-bottom: .5rem\n}\n.margin-bottom-none {\n  margin-bottom: 0\n}\n.margin-left {\n  margin-left: 1rem\n}\n.margin-left-large {\n  margin-left: 2rem\n}\n.margin-left-small {\n  margin-left: .5rem\n}\n.margin-left-none {\n  margin-left: 0\n}\n.margin-large {\n  margin: 2rem\n}\n.margin-small {\n  margin: .5rem\n}\n.margin-none {\n  margin: 0\n}\n.padding {\n  padding: 1rem\n}\n.padding-top {\n  padding-top: 1rem\n}\n.padding-top-large {\n  padding-top: 2rem\n}\n.padding-top-small {\n  padding-top: .5rem\n}\n.padding-top-none {\n  padding-top: 0\n}\n.padding-right {\n  padding-right: 1rem\n}\n.padding-right-large {\n  padding-right: 2rem\n}\n.padding-right-small {\n  padding-right: .5rem\n}\n.padding-right-none {\n  padding-right: 0\n}\n.padding-bottom {\n  padding-bottom: 1rem\n}\n.padding-bottom-large {\n  padding-bottom: 2rem\n}\n.padding-bottom-small {\n  padding-bottom: .5rem\n}\n.padding-bottom-none {\n  padding-bottom: 0\n}\n.padding-left {\n  padding-left: 1rem\n}\n.padding-left-large {\n  padding-left: 2rem\n}\n.padding-left-small {\n  padding-left: .5rem\n}\n.padding-left-none {\n  padding-left: 0\n}\n.padding-large {\n  padding: 2rem\n}\n.padding-small {\n  padding: .5rem\n}\n.padding-none {\n  padding: 0\n}\nnav {\n  background-color: #fff;\n  display: flex;\n  padding: .3rem;\n  position: relative;\n  width: 100%;\n  z-index: 100\n}\n@media only screen and (max-width:768px) {\n  nav {\n    display: block\n  }\n}\nnav .bar1,\nnav .bar2,\nnav .bar3 {\n  background-color: #41403e;\n  border-bottom: 5px solid #41403e;\n  border-bottom-left-radius: 15px 5px;\n  border-bottom-right-radius: 15px 3px;\n  color: #41403e;\n  margin: 6px 0;\n  transition: .4s;\n  width: 2rem\n}\nnav .collapsible input[id^=collapsible]:checked + button .bar1 {\n  transform: rotate(-45deg) translate(-9px,7px)\n}\nnav .collapsible input[id^=collapsible]:checked + button .bar2 {\n  opacity: 0\n}\nnav .collapsible input[id^=collapsible]:checked + button .bar3 {\n  transform: rotate(45deg) translate(-8px,-9px)\n}\nnav.split-nav {\n  justify-content: space-between\n}\nnav.fixed {\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0\n}\nnav div {\n  margin: 0 1rem\n}\nnav ul.inline {\n  margin-bottom: 0;\n  margin-top: 10px;\n  padding: 0\n}\nnav ul.inline li {\n  display: inline-block;\n  margin: 0 .5rem\n}\n@media only screen and (max-width:768px) {\n  nav ul.inline li {\n    display: block;\n    margin: 1rem 0\n  }\n}\nnav a {\n  background-image: none;\n  border-bottom: 5px solid #41403e;\n  border-bottom-left-radius: 15px 3px;\n  border-bottom-right-radius: 15px 5px;\n  color: #41403e;\n  padding-bottom: .1rem\n}\nnav a:hover {\n  border-bottom: 5px solid #c1c0bd\n}\nnav ul.inline li a {\n  font-size: 1.3rem\n}\nnav ul.inline li::before {\n  content: ''\n}\n@media only screen and (max-width:992px) {\n  nav ul {\n    text-align: center\n  }\n}\nnav .nav-brand h1,\nnav .nav-brand h2,\nnav .nav-brand h3,\nnav .nav-brand h4,\nnav .nav-brand h5,\nnav .nav-brand h6 {\n  margin: 0;\n  margin-bottom: .2rem\n}\nnav .collapsible input[id^=collapsible]:checked ~ div.collapsible-body {\n  margin: 0;\n  max-height: 960px;\n  opacity: 1;\n  padding: 0\n}\nnav .collapsible .collapsible-body,\nnav .collapsible:nth-of-type(1) {\n  border: 0\n}\n@media only screen and (min-width:769px) {\n  nav .collapsible .collapsible-body,\n  nav .collapsible:nth-of-type(1) {\n    display: contents\n  }\n}\nnav div.collapsible-body {\n  padding: none\n}\nnav .collapsible label {\n  border-bottom: 0;\n  padding: 0\n}\nnav .collapsible > button {\n  background-color: #fff;\n  display: none;\n  font-size: .5rem;\n  margin-right: 1rem;\n  padding: .25rem;\n  position: absolute;\n  right: 0;\n  top: .2rem\n}\n@media only screen and (max-width:768px) {\n  nav .collapsible > button {\n    display: block\n  }\n}", "",{"version":3,"sources":["/Users/Jo/workspaces/projects/personal-website/node_modules/papercss/dist/paper.css"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA,2EAA2E;AAC3E;EACE,iBAAiB;EACjB,0BAA0B;EAC1B;AACF;AACA;EACE;AACF;AACA;;;;;;EAME;AACF;AACA;EACE,cAAc;EACd;AACF;AACA;;;EAGE;AACF;AACA;EACE;AACF;AACA;EACE,uBAAuB;EACvB,SAAS;EACT;AACF;AACA;EACE,gCAAgC;EAChC;AACF;AACA;EACE,6BAA6B;EAC7B;AACF;AACA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,yCAAyC;EACzC;AACF;AACA;;EAEE;AACF;AACA;;EAEE;AACF;AACA;;;EAGE,gCAAgC;EAChC;AACF;AACA;EACE;AACF;AACA;EACE,sBAAsB;EACtB;AACF;AACA;EACE;AACF;AACA;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;;EAEE;AACF;AACA;EACE,aAAa;EACb;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;;;;;EAKE,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB;AACF;AACA;;EAEE;AACF;AACA;;EAEE;AACF;AACA;;;;EAIE;AACF;AACA;;;;EAIE,kBAAkB;EAClB;AACF;AACA;;;;EAIE;AACF;AACA;EACE;AACF;AACA;EACE,sBAAsB;EACtB,cAAc;EACd,cAAc;EACd,eAAe;EACf,UAAU;EACV;AACF;AACA;EACE,qBAAqB;EACrB;AACF;AACA;EACE;AACF;AACA;;EAEE,sBAAsB;EACtB;AACF;AACA;;EAEE;AACF;AACA;EACE,6BAA6B;EAC7B;AACF;AACA;;EAEE;AACF;AACA;EACE,0BAA0B;EAC1B;AACF;AACA;;EAEE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;;;EAGE;AACF;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB;AACF;AACA;EACE;IACE;EACF;AACF;AACA;EACE;IACE;EACF;AACF;AACA;EACE,mBAAmB;EACnB,gBAAgB;EAChB;AACF;AACA;EACE,cAAc;EACd,cAAc;EACd,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB;AACF;AACA;EACE;AACF;AACA;EACE,cAAc;EACd,cAAc;EACd,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB;AACF;AACA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,6CAA6C;EAC7C,mBAAmB;EACnB,gBAAgB;EAChB;AACF;AACA;EACE;IACE,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb;EACF;AACF;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;IACE,cAAc;IACd;EACF;AACF;AACA;EACE,SAAW;EACX;AACF;AACA;EACE;IACE,kBAAkB;IAClB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,cAAc;IACd;EACF;AACF;AACA;EACE;IACE,kBAAkB;IAClB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,cAAc;IACd;EACF;AACF;AACA;EACE;IACE,kBAAkB;IAClB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,cAAc;IACd;EACF;AACF;AACA;EACE;IACE,kBAAkB;IAClB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,cAAc;IACd;EACF;AACF;AACA;EACE;IACE,kBAAkB;IAClB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,aAAa;IACb;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,mBAAmB;IACnB;EACF;EACA;IACE,cAAc;IACd;EACF;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB;AACF;AACA;EACE;IACE;EACF;AACF;AACA;EACE;IACE;EACF;AACF;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,cAAc;EACd;AACF;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,cAAc;EACd;AACF;AACA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,cAAc;EACd,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB;AACF;AACA;EACE,eAAe;EACf,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,UAAgB;EAAhB,gBAAgB;EAChB;AACF;AACA;EACE,cAAc;EACd,8BAA8B;EAC9B;AACF;AACA;;;;;;;;;;;;;EAaE;AACF;AACA;;;;;;EAME,yCAAyC;EACzC;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC,mCAAmC;EACnC,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ;AACF;AACA;EACE,WAAW;EACX;AACF;AACA;EACE,YAAY;EACZ;AACF;AACA;EACE,eAAgB;EAAhB,gBAAgB;EAChB,YAAe;EAAf,eAAe;EACf,eAAiB;EAAjB;AACF;AACA;EACE,SAAS;EACT;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,gBAAgB;EAChB;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;;;;;EAKE;AACF;AACA;EACE,UAAU;EACV;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,eAAe;EACf;AACF;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB;AACF;AACA;EACE;IACE;EACF;EACA;IACE;EACF;AACF;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB;AACF;AACA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,YAAY;EACZ;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;;;EAGE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC;AACF;AACA;;EAEE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC;AACF;AACA;;EAEE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC;AACF;AACA;;EAEE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC;AACF;AACA;;EAEE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC;AACF;AACA;;EAEE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,6BAA6B;EAC7B;AACF;AACA;EACE,6BAA6B;EAC7B;AACF;AACA;EACE,6BAA6B;EAC7B;AACF;AACA;EACE,+BAA+B;EAC/B;AACF;AACA;EACE,6BAA6B;EAC7B;AACF;AACA;EACE,6BAA6B;EAC7B;AACF;AACA;EACE,+BAA+B;EAC/B;AACF;AACA;EACE,aAAa;EACb;AACF;AACA;EACE;AACF;AACA;EACE,oCAAoC;EACpC,uCAAuC;EACvC,gCAAgC;EAChC,SAAS;EACT,aAAa;EACb,UAAU;EACV,gBAAgB;EAChB;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,SAAS;EACT,iBAAiB;EACjB,UAAU;EACV;AACF;AACA;EACE,gCAAgC;EAChC,cAAc;EACd,qBAAqB;EACrB,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf;AACF;AACA;EACE,cAAc;EACd;AACF;AACA;EACE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC,mCAAmC;EACnC,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb;AACF;AACA;EACE,oCAAoC;EACpC,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB;AACF;AACA;EACE,oCAAoC;EACpC,cAAc;EACd,eAAe;EACf;AACF;AACA;;;EAGE;AACF;AACA;EACE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;EACE;AACF;AACA;;;EAGE;AACF;AACA;EACE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;EACE;AACF;AACA;;;EAGE;AACF;AACA;EACE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;EACE;AACF;AACA;;;EAGE;AACF;AACA;EACE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;EACE;AACF;AACA;;;EAGE;AACF;AACA;EACE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;EACE;AACF;AACA;;;EAGE;AACF;AACA;EACE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;EACE;AACF;AACA;;;EAGE;AACF;AACA;EACE;AACF;AACA;EACE,eAAe;EACf,SAAS;EACT,aAAa;EACb,UAAU;EACV,iBAAiB;EACjB;AACF;AACA;EACE;AACF;AACA;EACE,cAAc;EACd;AACF;AACA;EACE,sBAAsB;EACtB;AACF;AACA;EACE;AACF;AACA;EACE,eAAe;EACf,gBAAgB;EAChB;AACF;AACA;EACE;AACF;AACA;EACE;IACE;EACF;AACF;AACA;EACE;AACF;AACA;EACE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC,mCAAmC;EACnC,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,WAAW;EACX,qBAAqB;EACrB,cAAc;EACd,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,kBAAkB;EAClB,wBAAwB;EACxB;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;;;EAGE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC,mCAAmC;EACnC,6BAA6B;EAC7B,+CAA+C;EAC/C,oCAAoC;EACpC,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,UAAU;EACV;AACF;AACA;EACE;;;IAGE,qBAAqB;IACrB,cAAc;IACd,mBAAmB;IACnB;EACF;AACF;AACA;;;EAGE,6BAA6B;EAC7B,+CAA+C;EAC/C,eAAe;EACf;AACF;AACA;;;EAGE,6BAA6B;EAC7B,+CAA+C;EAC/C,iBAAiB;EACjB;AACF;AACA;;;EAGE,cAAc;EACd;AACF;AACA;;;EAGE,+BAA+B;EAC/B;AACF;AACA;;;EAGE,yBAAyB;EACzB;AACF;AACA;;;EAGE,4BAA4B;EAC5B;AACF;AACA;;;;;;;;;;;;EAYE,mBAAmB;EACnB;AACF;AACA;EACE,6RAA6R;EAC7R,0BAA0B;EAC1B,2BAA2B;EAC3B,wBAAwB;EACxB;AACF;AACA;EACE,cAAc;EACd;AACF;AACA;EACE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;;;EAGE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;;;EAGE;AACF;AACA;EACE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;;;EAGE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;;;EAGE;AACF;AACA;EACE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;;;EAGE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;;;EAGE;AACF;AACA;EACE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;;;EAGE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;;;EAGE;AACF;AACA;EACE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;;;EAGE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;;;EAGE;AACF;AACA;EACE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;;;EAGE,yBAAyB;EACzB,qBAAqB;EACrB;AACF;AACA;;;EAGE;AACF;AACA;EACE,6BAA6B;EAC7B,+CAA+C;EAC/C,mCAAmC;EACnC,2BAA2B;EAC3B,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB;AACF;AACA;EACE,+BAA+B;EAC/B;AACF;AACA;;EAEE,iCAAiC;EACjC;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,cAAc;EACd;AACF;AACA;;EAEE,oBAAoB;EACpB;AACF;AACA;;EAEE,cAAc;EACd,oBAAoB;EACpB;AACF;AACA;;EAEE,mBAAmB;EACnB;AACF;AACA;;EAEE;AACF;AACA;;;EAGE,SAAS;EACT;AACF;AACA;;;EAGE,eAAe;EACf,yBAAyB;EACzB,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC,mCAAmC;EACnC,cAAc;EACd,cAAc;EACd,eAAe;EACf,UAAU;EACV;AACF;AACA;;;EAGE;AACF;AACA;EACE;AACF;AACA;;;;;;;EAOE,mBAAmB;EACnB;AACF;AACA;EACE;AACF;AACA;;EAEE,qBAAqB;EACrB;AACF;AACA;EACE;AACF;AACA;EACE,gBAAgB;EAChB;AACF;AACA;EACE;AACF;AACA;;EAEE,eAAe;EACf,cAAc;EACd;AACF;AACA;;EAEE,SAAS;EACT,WAAW;EACX,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,UAAU;EACV,kBAAkB;EAClB;AACF;AACA;;EAEE;AACF;AACA;;EAEE,yBAAyB;EACzB,WAAW;EACX,qBAAqB;EACrB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB;AACF;AACA;;EAEE,qCAAqC;EACrC,sCAAsC;EACtC,iCAAiC;EACjC;AACF;AACA;;EAEE;AACF;AACA;;EAEE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC;AACF;AACA;;EAEE;AACF;AACA;EACE,SAAS;EACT;AACF;AACA;EACE,wCAAwC;EACxC,0BAA0B;EAC1B,SAAS;EACT,cAAc;EACd,OAAO;EACP,UAAU;EACV,eAAe;EACf,QAAQ;EACR,gBAAgB;EAChB,MAAM;EACN,kBAAkB;EAClB,qBAAqB;EACrB;AACF;AACA;EACE,SAAS;EACT,eAAe;EACf,OAAO;EACP,kBAAkB;EAClB,QAAQ;EACR;AACF;AACA;EACE,oCAAoC;EACpC,mCAAmC;EACnC,2BAA2B;EAC3B,gBAAgB;EAChB,yBAAyB;EACzB,SAAS;EACT,gBAAgB;EAChB,kBAAkB;EAClB,MAAM;EACN;AACF;AACA;EACE;IACE,sBAAsB;IACtB;EACF;AACF;AACA;EACE,oCAAoC;EACpC,cAAc;EACd,eAAe;EACf,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,qBAAqB;EACrB,SAAS;EACT;AACF;AACA;;;EAGE;AACF;AACA;;EAEE,oBAAoB;EACpB;AACF;AACA;;EAEE,cAAc;EACd,oBAAoB;EACpB;AACF;AACA;;EAEE,mBAAmB;EACnB;AACF;AACA;;EAEE;AACF;AACA;EACE,gBAAgB;EAChB,qBAAqB;EACrB;AACF;AACA;;EAEE,6RAA6R;EAC7R,0BAA0B;EAC1B,2BAA2B;EAC3B,wBAAwB;EACxB,eAAe;EACf;AACF;AACA;;;;;;EAME,cAAc;EACd;AACF;AACA;EACE;AACF;AACA;EACE,UAAU;EACV;AACF;AACA;EACE;AACF;AACA;;;;EAIE,YAAY;EACZ;AACF;AACA;;;;EAIE,UAAU;EACV;AACF;AACA;;;;EAIE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC,mCAAmC;EACnC,wCAAwC;EACxC,0BAA0B;EAC1B,yBAAyB;EACzB,WAAW;EACX,eAAe;EACf,SAAS;EACT,eAAe;EACf,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT;AACF;AACA;EACE,OAAO;EACP,kBAAkB;EAClB,QAAQ;EACR;AACF;AACA;EACE,2BAA2B;EAC3B,OAAO;EACP,iBAAiB;EACjB,QAAQ;EACR;AACF;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,QAAQ;EACR;AACF;AACA;EACE,4BAA4B;EAC5B,UAAU;EACV,gBAAgB;EAChB,QAAQ;EACR;AACF;AACA;EACE;AACF;AACA;EACE,0BAA0B;EAC1B;AACF;AACA;EACE,eAAe;EACf,SAAS;EACT;AACF;AACA;EACE,6BAA6B;EAC7B,eAAe;EACf,SAAS;EACT;AACF;AACA;EACE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC,kCAAkC;EAClC,yBAAyB;EACzB,2CAA2C;EAC3C,cAAc;EACd,gBAAgB;EAChB;AACF;AACA;EACE,qCAAqC;EACrC,sCAAsC;EACtC,kCAAkC;EAClC,kCAAkC;EAClC,oCAAoC;EACpC,yBAAyB;EACzB,+BAA+B;EAC/B,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;;EAEE;AACF;AACA;EACE,aAAa;EACb;AACF;AACA;EACE;AACF;AACA;EACE,gCAAgC;EAChC;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,cAAc;EACd,qBAAqB;EACrB,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf;AACF;AACA;EACE,cAAc;EACd;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX;AACF;AACA;EACE;IACE;EACF;AACF;AACA;;;EAGE,yBAAyB;EACzB,gCAAgC;EAChC,mCAAmC;EACnC,oCAAoC;EACpC,cAAc;EACd,aAAa;EACb,eAAe;EACf;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,OAAO;EACP,eAAe;EACf,QAAQ;EACR;AACF;AACA;EACE;AACF;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB;AACF;AACA;EACE,qBAAqB;EACrB;AACF;AACA;EACE;IACE,cAAc;IACd;EACF;AACF;AACA;EACE,sBAAsB;EACtB,gCAAgC;EAChC,mCAAmC;EACnC,oCAAoC;EACpC,cAAc;EACd;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;IACE;EACF;AACF;AACA;;;;;;EAME,SAAS;EACT;AACF;AACA;EACE,SAAS;EACT,iBAAiB;EACjB,UAAU;EACV;AACF;AACA;;EAEE;AACF;AACA;EACE;;IAEE;EACF;AACF;AACA;EACE;AACF;AACA;EACE,gBAAgB;EAChB;AACF;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,QAAQ;EACR;AACF;AACA;EACE;IACE;EACF;AACF","file":"paper.css","sourcesContent":["@charset \"UTF-8\";\n@import url(https://fonts.googleapis.com/css?family=Neucha|Patrick+Hand+SC);\n.text-primary {\n  color: #41403e\n}\n.background-primary {\n  background-color: #c1c0bd\n}\n.text-secondary {\n  color: #0071de\n}\n.background-secondary {\n  background-color: #deefff\n}\n.text-success {\n  color: #86a361\n}\n.background-success {\n  background-color: #d0dbc2\n}\n.text-warning {\n  color: #ddcd45\n}\n.background-warning {\n  background-color: #f5f0c6\n}\n.text-danger {\n  color: #a7342d\n}\n.background-danger {\n  background-color: #f0cbc9\n}\n.text-muted {\n  color: #868e96\n}\n.background-muted {\n  background-color: #e6e7e9\n}\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  line-height: 1.15;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%\n}\nbody {\n  margin: 0\n}\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block\n}\nh1 {\n  font-size: 2em;\n  margin: .67em 0\n}\nfigcaption,\nfigure,\nmain {\n  display: block\n}\nfigure {\n  margin: 1em 40px\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible\n}\npre {\n  font-family: monospace,monospace;\n  font-size: 1em\n}\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects\n}\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted\n}\nb,\nstrong {\n  font-weight: inherit\n}\nb,\nstrong {\n  font-weight: bolder\n}\ncode,\nkbd,\nsamp {\n  font-family: monospace,monospace;\n  font-size: 1em\n}\ndfn {\n  font-style: italic\n}\nmark {\n  background-color: #ff0;\n  color: #000\n}\nsmall {\n  font-size: 80%\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline\n}\nsub {\n  bottom: -.25em\n}\nsup {\n  top: -.5em\n}\naudio,\nvideo {\n  display: inline-block\n}\naudio:not([controls]) {\n  display: none;\n  height: 0\n}\nimg {\n  border-style: none\n}\nsvg:not(:root) {\n  overflow: hidden\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0\n}\nbutton,\ninput {\n  overflow: visible\n}\nbutton,\nselect {\n  text-transform: none\n}\n[type=reset],\n[type=submit],\nbutton,\nhtml [type=button] {\n  -webkit-appearance: button\n}\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner,\nbutton::-moz-focus-inner {\n  border-style: none;\n  padding: 0\n}\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring,\nbutton:-moz-focusring {\n  outline: 1px dotted ButtonText\n}\nfieldset {\n  padding: .35em .75em .625em\n}\nlegend {\n  box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal\n}\nprogress {\n  display: inline-block;\n  vertical-align: baseline\n}\ntextarea {\n  overflow: auto\n}\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  padding: 0\n}\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px\n}\n[type=search]::-webkit-search-cancel-button,\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit\n}\ndetails,\nmenu {\n  display: block\n}\nsummary {\n  display: list-item\n}\ncanvas {\n  display: inline-block\n}\ntemplate {\n  display: none\n}\n[hidden] {\n  display: none\n}\nhtml {\n  box-sizing: border-box\n}\n*,\n:after,\n:before {\n  box-sizing: inherit\n}\n.container {\n  margin: 0 auto;\n  max-width: 960px;\n  position: relative;\n  width: 100%\n}\n@media only screen and (max-width:992px) {\n  .container {\n    width: 85%\n  }\n}\n@media only screen and (max-width:480px) {\n  .container {\n    width: 90%\n  }\n}\n.section {\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n  word-wrap: break-word\n}\n.section::after {\n  color: #8f8d89;\n  content: '~~~';\n  display: block;\n  font-size: 1.5rem;\n  position: relative;\n  text-align: center\n}\nhr {\n  border: 0\n}\nhr::after {\n  color: #8f8d89;\n  content: '~~~';\n  display: block;\n  font-size: 1.5rem;\n  position: relative;\n  text-align: center;\n  top: -.75rem\n}\n.paper {\n  background-color: #fff;\n  border: 1px solid #c1c0bd;\n  box-shadow: -1px 5px 35px -9px rgba(0,0,0,.2);\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  padding: 2rem\n}\n@media only screen and (max-width:480px) {\n  .paper {\n    margin-bottom: 0;\n    margin-top: 0;\n    padding: 1rem;\n    width: 100%\n  }\n}\n.row {\n  display: flex;\n  flex-flow: row wrap;\n  margin-bottom: 1rem;\n  margin-left: auto;\n  margin-right: auto\n}\n.row.flex-right {\n  justify-content: flex-end\n}\n.row.flex-center {\n  justify-content: center\n}\n.row.flex-edges {\n  justify-content: space-between\n}\n.row.flex-spaces {\n  justify-content: space-around\n}\n.row.flex-top {\n  align-items: flex-start\n}\n.row.flex-middle {\n  align-items: center\n}\n.row.flex-bottom {\n  align-items: flex-end\n}\n.col {\n  padding: 1rem\n}\n@media only screen and (max-width:768px) {\n  .col {\n    flex: 0 0 100%;\n    max-width: 100%\n  }\n}\n.col-fill {\n  flex: 1 1 0;\n  width: auto\n}\n@media only screen and (min-width:0) {\n  .col-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%\n  }\n  .col-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%\n  }\n  .col-3 {\n    flex: 0 0 25%;\n    max-width: 25%\n  }\n  .col-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%\n  }\n  .col-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%\n  }\n  .col-6 {\n    flex: 0 0 50%;\n    max-width: 50%\n  }\n  .col-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%\n  }\n  .col-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%\n  }\n  .col-9 {\n    flex: 0 0 75%;\n    max-width: 75%\n  }\n  .col-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%\n  }\n  .col-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%\n  }\n  .col-12 {\n    flex: 0 0 100%;\n    max-width: 100%\n  }\n}\n@media only screen and (min-width:480px) {\n  .xs-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%\n  }\n  .xs-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%\n  }\n  .xs-3 {\n    flex: 0 0 25%;\n    max-width: 25%\n  }\n  .xs-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%\n  }\n  .xs-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%\n  }\n  .xs-6 {\n    flex: 0 0 50%;\n    max-width: 50%\n  }\n  .xs-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%\n  }\n  .xs-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%\n  }\n  .xs-9 {\n    flex: 0 0 75%;\n    max-width: 75%\n  }\n  .xs-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%\n  }\n  .xs-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%\n  }\n  .xs-12 {\n    flex: 0 0 100%;\n    max-width: 100%\n  }\n}\n@media only screen and (min-width:768px) {\n  .sm-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%\n  }\n  .sm-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%\n  }\n  .sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%\n  }\n  .sm-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%\n  }\n  .sm-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%\n  }\n  .sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%\n  }\n  .sm-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%\n  }\n  .sm-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%\n  }\n  .sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%\n  }\n  .sm-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%\n  }\n  .sm-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%\n  }\n  .sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%\n  }\n}\n@media only screen and (min-width:992px) {\n  .md-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%\n  }\n  .md-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%\n  }\n  .md-3 {\n    flex: 0 0 25%;\n    max-width: 25%\n  }\n  .md-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%\n  }\n  .md-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%\n  }\n  .md-6 {\n    flex: 0 0 50%;\n    max-width: 50%\n  }\n  .md-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%\n  }\n  .md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%\n  }\n  .md-9 {\n    flex: 0 0 75%;\n    max-width: 75%\n  }\n  .md-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%\n  }\n  .md-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%\n  }\n  .md-12 {\n    flex: 0 0 100%;\n    max-width: 100%\n  }\n}\n@media only screen and (min-width:1200px) {\n  .lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%\n  }\n  .lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%\n  }\n  .lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%\n  }\n  .lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%\n  }\n  .lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%\n  }\n  .lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%\n  }\n  .lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%\n  }\n  .lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%\n  }\n  .lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%\n  }\n  .lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%\n  }\n  .lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%\n  }\n  .lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%\n  }\n}\n.align-top {\n  align-self: flex-start\n}\n.align-middle {\n  align-self: center\n}\n.align-bottom {\n  align-self: flex-end\n}\n.container {\n  margin: 0 auto;\n  max-width: 960px;\n  position: relative;\n  width: 100%\n}\n@media only screen and (max-width:992px) {\n  .container {\n    width: 85%\n  }\n}\n@media only screen and (max-width:480px) {\n  .container {\n    width: 90%\n  }\n}\ncode {\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  color: #0071de;\n  font-size: 80%;\n  padding: 2px 4px\n}\nkbd {\n  background-color: #41403e;\n  border-radius: 3px;\n  color: #fff;\n  font-size: 80%;\n  padding: 2px 4px\n}\npre {\n  background-color: #fafafa;\n  border: 1px solid #c1c0bd;\n  border-radius: 3px;\n  color: #41403e;\n  display: block;\n  font-size: 80%;\n  line-height: 1.5;\n  overflow-x: auto;\n  padding: 1em;\n  white-space: pre;\n  word-break: break-all;\n  word-wrap: break-word\n}\npre code {\n  background: 0 0;\n  color: inherit;\n  display: block;\n  font-size: inherit;\n  padding: initial;\n  white-space: pre\n}\nhtml {\n  color: #41403e;\n  font-family: Neucha,sans-serif;\n  font-size: 20px\n}\na,\nbutton,\ninput,\noption,\np,\nselect,\ntable,\ntbody,\ntd,\ntextarea,\nth,\nthead,\ntr {\n  font-family: Neucha,sans-serif\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Patrick Hand SC\",sans-serif;\n  font-weight: 400\n}\nh1 {\n  font-size: 4rem\n}\nh2 {\n  font-size: 3rem\n}\nh3 {\n  font-size: 2rem\n}\nh4 {\n  font-size: 1.5rem\n}\nh5 {\n  font-size: 1rem\n}\nh6 {\n  font-size: .8rem\n}\n.text-left {\n  text-align: left\n}\n.text-center {\n  text-align: center\n}\n.text-right {\n  text-align: right\n}\nimg {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  border: 2px solid #41403e;\n  display: block;\n  height: auto;\n  max-width: 100%\n}\nimg.float-left {\n  float: left;\n  margin: 1rem 1rem 1rem 0\n}\nimg.float-right {\n  float: right;\n  margin: 1rem 0 1rem 1rem\n}\nimg.no-responsive {\n  display: initial;\n  height: initial;\n  max-width: initial\n}\nimg.no-border {\n  border: 0;\n  border-radius: 0\n}\nol {\n  list-style-type: decimal\n}\nol ol {\n  list-style-type: upper-alpha\n}\nol ol ol {\n  list-style-type: upper-roman\n}\nol ol ol ol {\n  list-style-type: lower-alpha\n}\nol ol ol ol ol {\n  list-style-type: lower-roman\n}\nul {\n  list-style: none;\n  margin-left: 0\n}\nul li::before {\n  content: \"-\"\n}\nul li {\n  text-indent: -7px\n}\nul li .badge,\nul li [popover-bottom]::after,\nul li [popover-left]::after,\nul li [popover-right]::after,\nul li [popover-top]::after {\n  text-indent: 0\n}\nul li::before {\n  left: -7px;\n  position: relative\n}\nul ul li::before {\n  content: \"+\"\n}\nul ul ul li::before {\n  content: \"~\"\n}\nul ul ul ul li::before {\n  content: \"⤍\"\n}\nul ul ul ul ul li::before {\n  content: \"⁎\"\n}\nul.inline li {\n  display: inline;\n  margin-left: 5px\n}\ntable {\n  box-sizing: border-box;\n  max-width: 100%;\n  overflow-x: auto;\n  width: 100%\n}\n@media only screen and (max-width:480px) {\n  table thead tr th {\n    padding: 2%\n  }\n  table tbody tr td {\n    padding: 2%\n  }\n}\ntable thead tr th {\n  line-height: 1.5;\n  padding: 8px;\n  text-align: left;\n  vertical-align: bottom\n}\ntable tbody tr td {\n  border-top: 1px dashed #d9d9d8;\n  line-height: 1.5;\n  padding: 8px;\n  vertical-align: top\n}\ntable.table-hover tbody tr:hover {\n  color: #0071de\n}\ntable.table-alternating tbody tr:nth-of-type(even) {\n  color: #82807c\n}\n.border {\n  border: 2px solid #41403e\n}\n.border,\n.border-1,\n.child-borders > :nth-child(6n+1) {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px\n}\n.border-2,\n.child-borders > :nth-child(6n+2) {\n  border-bottom-left-radius: 185px 25px;\n  border-bottom-right-radius: 20px 205px;\n  border-top-left-radius: 125px 25px;\n  border-top-right-radius: 10px 205px\n}\n.border-3,\n.child-borders > :nth-child(6n+3) {\n  border-bottom-left-radius: 225px 15px;\n  border-bottom-right-radius: 15px 255px;\n  border-top-left-radius: 15px 225px;\n  border-top-right-radius: 255px 15px\n}\n.border-4,\n.child-borders > :nth-child(6n+4) {\n  border-bottom-left-radius: 25px 115px;\n  border-bottom-right-radius: 155px 25px;\n  border-top-left-radius: 15px 225px;\n  border-top-right-radius: 25px 150px\n}\n.border-5,\n.child-borders > :nth-child(6n+5) {\n  border-bottom-left-radius: 20px 115px;\n  border-bottom-right-radius: 15px 105px;\n  border-top-left-radius: 250px 15px;\n  border-top-right-radius: 25px 80px\n}\n.border-6,\n.child-borders > :nth-child(6n+6) {\n  border-bottom-left-radius: 15px 225px;\n  border-bottom-right-radius: 20px 205px;\n  border-top-left-radius: 28px 125px;\n  border-top-right-radius: 100px 30px\n}\n.child-borders > * {\n  border: 2px solid #41403e\n}\n.border-white {\n  border-color: #fff\n}\n.border-dotted {\n  border-style: dotted\n}\n.border-dashed {\n  border-style: dashed\n}\n.border-thick {\n  border-width: 5px\n}\n.border-primary {\n  border-color: #41403e\n}\n.border-secondary {\n  border-color: #0071de\n}\n.border-success {\n  border-color: #86a361\n}\n.border-warning {\n  border-color: #ddcd45\n}\n.border-danger {\n  border-color: #a7342d\n}\n.border-muted {\n  border-color: #868e96\n}\n.shadow {\n  transition: all 235ms ease 0s;\n  box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2)\n}\n.shadow.shadow-large {\n  transition: all 235ms ease 0s;\n  box-shadow: 20px 38px 34px -26px rgba(0,0,0,.2)\n}\n.shadow.shadow-small {\n  transition: all 235ms ease 0s;\n  box-shadow: 10px 19px 17px -13px rgba(0,0,0,.2)\n}\n.shadow.shadow-hover:hover {\n  transform: translate3d(0,2px,0);\n  box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3)\n}\n.child-shadows > * {\n  transition: all 235ms ease 0s;\n  box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2)\n}\n.child-shadows-hover > * {\n  transition: all 235ms ease 0s;\n  box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2)\n}\n.child-shadows-hover > :hover {\n  transform: translate3d(0,2px,0);\n  box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3)\n}\n.collapsible {\n  display: flex;\n  flex-direction: column\n}\n.collapsible:nth-of-type(1) {\n  border-top: 1px solid #e6e7e9\n}\n.collapsible .collapsible-body {\n  transition: all 235ms ease-in-out 0s;\n  background-color: rgba(204,204,204,.03);\n  border-bottom: 1px solid #e6e7e9;\n  margin: 0;\n  max-height: 0;\n  opacity: 0;\n  overflow: hidden;\n  padding: 0 .75rem\n}\n.collapsible input {\n  display: none\n}\n.collapsible input:checked + label {\n  color: #41403e\n}\n.collapsible input[id^=collapsible]:checked ~ div.collapsible-body {\n  margin: 0;\n  max-height: 960px;\n  opacity: 1;\n  padding: .75rem\n}\n.collapsible label {\n  border-bottom: 1px solid #e6e7e9;\n  color: #41403e;\n  display: inline-block;\n  font-weight: 600;\n  margin: 0 0 -1px;\n  padding: .75rem;\n  text-align: center\n}\n.collapsible label:hover {\n  color: #868e96;\n  cursor: pointer\n}\n.alert {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  border: 2px solid #41403e;\n  margin-bottom: 20px;\n  padding: 15px;\n  width: 100%\n}\n.alert.dismissible {\n  transition: all 235ms ease-in-out 0s;\n  display: flex;\n  justify-content: space-between;\n  max-height: 48rem;\n  overflow: hidden\n}\n.alert .btn-close {\n  transition: all 235ms ease-in-out 0s;\n  color: #5b5a57;\n  cursor: pointer;\n  margin-left: .75rem\n}\n.alert .btn-close:active,\n.alert .btn-close:focus,\n.alert .btn-close:hover {\n  color: #272625\n}\n.alert-primary {\n  background-color: #c1c0bd;\n  border-color: #41403e;\n  color: #41403e\n}\n.alert-primary .btn-close {\n  color: #5b5a57\n}\n.alert-primary .btn-close:active,\n.alert-primary .btn-close:focus,\n.alert-primary .btn-close:hover {\n  color: #272625\n}\n.alert-secondary {\n  background-color: #deefff;\n  border-color: #0071de;\n  color: #0071de\n}\n.alert-secondary .btn-close {\n  color: #128bff\n}\n.alert-secondary .btn-close:active,\n.alert-secondary .btn-close:focus,\n.alert-secondary .btn-close:hover {\n  color: #0057ab\n}\n.alert-success {\n  background-color: #d0dbc2;\n  border-color: #86a361;\n  color: #86a361\n}\n.alert-success .btn-close {\n  color: #9fb681\n}\n.alert-success .btn-close:active,\n.alert-success .btn-close:focus,\n.alert-success .btn-close:hover {\n  color: #6c844d\n}\n.alert-warning {\n  background-color: #f5f0c6;\n  border-color: #ddcd45;\n  color: #ddcd45\n}\n.alert-warning .btn-close {\n  color: #e5d970\n}\n.alert-warning .btn-close:active,\n.alert-warning .btn-close:focus,\n.alert-warning .btn-close:hover {\n  color: #cab925\n}\n.alert-danger {\n  background-color: #f0cbc9;\n  border-color: #a7342d;\n  color: #a7342d\n}\n.alert-danger .btn-close {\n  color: #cb453c\n}\n.alert-danger .btn-close:active,\n.alert-danger .btn-close:focus,\n.alert-danger .btn-close:hover {\n  color: #7f2722\n}\n.alert-muted {\n  background-color: #e6e7e9;\n  border-color: #868e96;\n  color: #868e96\n}\n.alert-muted .btn-close {\n  color: #a1a8ae\n}\n.alert-muted .btn-close:active,\n.alert-muted .btn-close:focus,\n.alert-muted .btn-close:hover {\n  color: #6c757d\n}\n.alert-state {\n  display: none\n}\n.alert-state:checked + .dismissible {\n  border-width: 0;\n  margin: 0;\n  max-height: 0;\n  opacity: 0;\n  padding-bottom: 0;\n  padding-top: 0\n}\narticle .article-title {\n  font-size: 3rem\n}\narticle .article-meta {\n  color: #868e96;\n  font-size: 15px\n}\narticle .article-meta a {\n  background-image: none;\n  color: #41403e\n}\narticle .article-meta a:hover {\n  color: rgba(0,0,0,.7)\n}\narticle .text-lead {\n  font-size: 30px;\n  line-height: 1.3;\n  margin: 35px\n}\narticle button:not(:first-of-type) {\n  margin-left: 2rem\n}\n@media only screen and (max-width:480px) {\n  article button:not(:first-of-type) {\n    margin-left: 0\n  }\n}\narticle p {\n  line-height: 1.6\n}\n.badge {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  background-color: #868e96;\n  border: 2px solid #41403e;\n  border-color: transparent;\n  color: #fff;\n  display: inline-block;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  padding: .25em .4em;\n  text-align: center;\n  vertical-align: baseline;\n  white-space: nowrap\n}\n.badge.primary {\n  background-color: #41403e\n}\n.badge.secondary {\n  background-color: #0071de\n}\n.badge.success {\n  background-color: #86a361\n}\n.badge.warning {\n  background-color: #ddcd45\n}\n.badge.danger {\n  background-color: #a7342d\n}\n.badge.muted {\n  background-color: #868e96\n}\n.paper-btn,\n[type=button],\nbutton {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  transition: all 235ms ease 0s;\n  box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2);\n  transition: all 235ms ease-in-out 0s;\n  align-self: center;\n  background: 0 0;\n  border: 2px solid #41403e;\n  color: #41403e;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1rem;\n  outline: 0;\n  padding: .75rem\n}\n@media only screen and (max-width:520px) {\n  .paper-btn,\n  [type=button],\n  button {\n    display: inline-block;\n    margin: 0 auto;\n    margin-bottom: 1rem;\n    text-align: center\n  }\n}\n.paper-btn.btn-large,\n[type=button].btn-large,\nbutton.btn-large {\n  transition: all 235ms ease 0s;\n  box-shadow: 20px 38px 34px -26px rgba(0,0,0,.2);\n  font-size: 2rem;\n  padding: 1rem\n}\n.paper-btn.btn-small,\n[type=button].btn-small,\nbutton.btn-small {\n  transition: all 235ms ease 0s;\n  box-shadow: 10px 19px 17px -13px rgba(0,0,0,.2);\n  font-size: .75rem;\n  padding: .5rem\n}\n.paper-btn.btn-block,\n[type=button].btn-block,\nbutton.btn-block {\n  display: block;\n  width: 100%\n}\n.paper-btn:hover,\n[type=button]:hover,\nbutton:hover {\n  transform: translate3d(0,2px,0);\n  box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3)\n}\n.paper-btn:focus,\n[type=button]:focus,\nbutton:focus {\n  border: 2px solid #0071de;\n  box-shadow: 2px 8px 4px -6px rgba(0,0,0,.3)\n}\n.paper-btn:active,\n[type=button]:active,\nbutton:active {\n  border-color: rgba(0,0,0,.2);\n  transition: none\n}\n.paper-btn.disabled,\n.paper-btn[disabled],\n[type=button].disabled,\n[type=button][disabled],\nbutton.disabled,\nbutton[disabled],\ninput.paper-btn[disabled],\ninput[type=button][disabled],\nselect.paper-btn[disabled],\nselect[type=button][disabled],\ntextarea.paper-btn[disabled],\ntextarea[type=button][disabled] {\n  cursor: not-allowed;\n  opacity: .5\n}\na {\n  background-image: linear-gradient(5deg,transparent 65%,#0071de 80%,transparent 90%),linear-gradient(165deg,transparent 5%,#0071de 15%,transparent 25%),linear-gradient(165deg,transparent 45%,#0071de 55%,transparent 65%),linear-gradient(15deg,transparent 25%,#0071de 35%,transparent 50%);\n  background-position: 0 90%;\n  background-repeat: repeat-x;\n  background-size: 4px 3px;\n  text-decoration: none\n}\na:visited {\n  color: #41403e;\n  text-decoration: none\n}\n.alert-primary {\n  background-color: #c1c0bd;\n  border-color: #41403e;\n  color: #41403e\n}\n.paper-btn.btn-primary,\n[type=button].btn-primary,\nbutton.btn-primary {\n  background-color: #c1c0bd;\n  border-color: #41403e;\n  color: #fff\n}\n.paper-btn.btn-primary:hover:active,\n[type=button].btn-primary:hover:active,\nbutton.btn-primary:hover:active {\n  background-color: #a8a6a3\n}\n.alert-secondary {\n  background-color: #deefff;\n  border-color: #0071de;\n  color: #0071de\n}\n.paper-btn.btn-secondary,\n[type=button].btn-secondary,\nbutton.btn-secondary {\n  background-color: #deefff;\n  border-color: #0071de;\n  color: #41403e\n}\n.paper-btn.btn-secondary:hover:active,\n[type=button].btn-secondary:hover:active,\nbutton.btn-secondary:hover:active {\n  background-color: #abd6ff\n}\n.alert-success {\n  background-color: #d0dbc2;\n  border-color: #86a361;\n  color: #86a361\n}\n.paper-btn.btn-success,\n[type=button].btn-success,\nbutton.btn-success {\n  background-color: #d0dbc2;\n  border-color: #86a361;\n  color: #41403e\n}\n.paper-btn.btn-success:hover:active,\n[type=button].btn-success:hover:active,\nbutton.btn-success:hover:active {\n  background-color: #b7c9a1\n}\n.alert-warning {\n  background-color: #f5f0c6;\n  border-color: #ddcd45;\n  color: #ddcd45\n}\n.paper-btn.btn-warning,\n[type=button].btn-warning,\nbutton.btn-warning {\n  background-color: #f5f0c6;\n  border-color: #ddcd45;\n  color: #41403e\n}\n.paper-btn.btn-warning:hover:active,\n[type=button].btn-warning:hover:active,\nbutton.btn-warning:hover:active {\n  background-color: #ede49b\n}\n.alert-danger {\n  background-color: #f0cbc9;\n  border-color: #a7342d;\n  color: #a7342d\n}\n.paper-btn.btn-danger,\n[type=button].btn-danger,\nbutton.btn-danger {\n  background-color: #f0cbc9;\n  border-color: #a7342d;\n  color: #41403e\n}\n.paper-btn.btn-danger:hover:active,\n[type=button].btn-danger:hover:active,\nbutton.btn-danger:hover:active {\n  background-color: #e6a5a1\n}\n.alert-muted {\n  background-color: #e6e7e9;\n  border-color: #868e96;\n  color: #868e96\n}\n.paper-btn.btn-muted,\n[type=button].btn-muted,\nbutton.btn-muted {\n  background-color: #e6e7e9;\n  border-color: #868e96;\n  color: #41403e\n}\n.paper-btn.btn-muted:hover:active,\n[type=button].btn-muted:hover:active,\nbutton.btn-muted:hover:active {\n  background-color: #caced1\n}\n.card {\n  transition: all 235ms ease 0s;\n  box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border: 2px solid #e6e7e9;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  will-change: transform;\n  word-wrap: break-word\n}\n.card:hover {\n  transform: translate3d(0,2px,0);\n  box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3)\n}\n.card .card-footer,\n.card .card-header {\n  background-color: rgba(0,0,0,.03);\n  padding: .75rem 1.25rem\n}\n.card .card-header {\n  border-bottom: 2px solid #e6e7e9\n}\n.card .card-footer {\n  border-top: 2px solid #e6e7e9\n}\n.card .card-body {\n  flex: 1 1 auto;\n  padding: 1.25rem\n}\n.card .card-body .card-title,\n.card .card-body h4 {\n  margin-bottom: .5rem;\n  margin-top: 0\n}\n.card .card-body .card-subtitle,\n.card .card-body h5 {\n  color: #0071de;\n  margin-bottom: .5rem;\n  margin-top: 0\n}\n.card .card-body .card-text,\n.card .card-body p {\n  margin-bottom: 1rem;\n  margin-top: 0\n}\n.card .card-body .card-link + .card-link,\n.card .card-body a + a {\n  margin-left: 1.25rem\n}\n.card .image-bottom,\n.card .image-top,\n.card img {\n  border: 0;\n  border-radius: 0\n}\ninput,\nselect,\ntextarea {\n  background: 0 0;\n  border: 2px solid #41403e;\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  color: #41403e;\n  display: block;\n  font-size: 1rem;\n  outline: 0;\n  padding: .5rem\n}\ninput:focus,\nselect:focus,\ntextarea:focus {\n  border: 2px solid #0071de\n}\nselect {\n  height: 2.35rem\n}\n.disabled,\ninput.disabled,\ninput[disabled],\nselect.disabled,\nselect[disabled],\ntextarea.disabled,\ntextarea[disabled] {\n  cursor: not-allowed;\n  opacity: .5\n}\n.form-group {\n  margin-bottom: 1rem\n}\n.form-group > label,\n.form-group legend {\n  display: inline-block;\n  margin-bottom: .5rem\n}\n.form-group .input-block {\n  width: 100%\n}\n.form-group textarea {\n  max-height: 90vh;\n  max-width: 100%\n}\n.form-group textarea.no-resize {\n  resize: none\n}\n.form-group .paper-check,\n.form-group .paper-radio {\n  cursor: pointer;\n  display: block;\n  margin-bottom: .5rem\n}\n.form-group .paper-check input,\n.form-group .paper-radio input {\n  border: 0;\n  height: 1px;\n  margin: -1px;\n  opacity: 0;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px\n}\n.form-group .paper-check input + span,\n.form-group .paper-radio input + span {\n  display: block\n}\n.form-group .paper-check input + span::before,\n.form-group .paper-radio input + span::before {\n  border: 2px solid #41403e;\n  content: '';\n  display: inline-block;\n  height: 1rem;\n  margin-right: .75em;\n  position: relative;\n  vertical-align: -.25em;\n  width: 1rem\n}\n.form-group .paper-check input[type=radio] + span::before,\n.form-group .paper-radio input[type=radio] + span::before {\n  border-bottom-left-radius: .7rem 1rem;\n  border-bottom-right-radius: 1rem .9rem;\n  border-top-left-radius: 1rem 1rem;\n  border-top-right-radius: 1rem .6rem\n}\n.form-group .paper-check input[type=radio]:checked + span::before,\n.form-group .paper-radio input[type=radio]:checked + span::before {\n  background: url(\"data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A//www.w3.org/2000/svg'%20viewBox%3D'0%200%20100%20100'%3E%3Cpath%20fill%3D'%230071de'%20d%3D'M49.346,46.341c-3.79-2.005,3.698-10.294,7.984-8.89%20c8.713,2.852,4.352,20.922-4.901,20.269c-4.684-0.33-12.616-7.405-14.38-11.818c-2.375-5.938,7.208-11.688,11.624-13.837%20c9.078-4.42,18.403-3.503,22.784,6.651c4.049,9.378,6.206,28.09-1.462,36.276c-7.091,7.567-24.673,2.277-32.357-1.079%20c-11.474-5.01-24.54-19.124-21.738-32.758c3.958-19.263,28.856-28.248,46.044-23.244c20.693,6.025,22.012,36.268,16.246,52.826%20c-5.267,15.118-17.03,26.26-33.603,21.938c-11.054-2.883-20.984-10.949-28.809-18.908C9.236,66.096,2.704,57.597,6.01,46.371%20c3.059-10.385,12.719-20.155,20.892-26.604C40.809,8.788,58.615,1.851,75.058,12.031c9.289,5.749,16.787,16.361,18.284,27.262%20c0.643,4.698,0.646,10.775-3.811,13.746'%3E%3C/path%3E%3C/svg%3E\") left center no-repeat\n}\n.form-group .paper-check input[type=checkbox] + span::before,\n.form-group .paper-radio input[type=checkbox] + span::before {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px\n}\n.form-group .paper-check input[type=checkbox]:checked + span::before,\n.form-group .paper-radio input[type=checkbox]:checked + span::before {\n  background: url(\"data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A//www.w3.org/2000/svg'%20viewBox%3D'0%200%20100%20100'%3E%3Cpath%20stroke%3D'%230071de'%20fill-opacity%3D'0'%20stroke-width%3D'16'%20d%3D'm13,62c0.61067,1.6%201.3045,2.3045%201.75717,2.75716c0.72683,0.72684%201.24283,1.24284%202.07617,2.07617c0.54133,0.54133%201.04116,1.06035%201.82833,1.82383c0.5781,0.5607%201.00502,0.96983%202.02633,1.74417c0.55877,0.42365%201.191,0.84034%201.884,1.284c1.16491,0.74577%201.59777,1.00147%202.5,1.55067c0.4692,0.28561%201.43689,0.86868%201.93067,1.16534c0.99711,0.59904%201.99667,1.19755%202.49283,1.49866c0.98501,0.59779%201.47073,0.89648%201.94733,1.2c1.3971,0.88972%201.83738,1.19736%202.7,1.7955c0.42201,0.29262%201.24022,0.87785%202.05583,1.41917c0.79531,0.52785%201.59376,1.0075%202.38,1.43867c0.74477,0.40842%201.45167,0.75802%202.37817,1.22517c0.76133,0.38387%201.54947,0.82848%202.40717,1.41084c0.7312,0.49647%201.49563,1.08231%202.27884,1.258c0.35564,0.07978%200.14721,-0.95518%200.35733,-1.86867c0.18092,-0.78651%200.98183,-1.2141%200.99983,-2.07867c0.02073,-0.99529%200.07916,-1.79945%200.42533,-2.56133c0.43607,-0.95973%200.53956,-1.66774%200.79617,-2.68183c0.18888,-0.74645%200.39764,-1.31168%200.7785,-2.6235c0.20865,-0.71867%200.41483,-1.48614%200.708,-2.28c0.15452,-0.41843%200.77356,-1.73138%201.348,-2.64133c0.30581,-0.48443%200.65045,-0.97043%201.0065,-1.4745c0.74776,-1.05863%201.1531,-1.60163%201.9375,-2.77084c0.40621,-0.60548%200.80272,-1.23513%201.2045,-1.8765c0.40757,-0.65062%200.81464,-1.31206%201.2315,-1.9755c0.41946,-0.66757%200.83374,-1.34258%201.73067,-2.648c0.44696,-0.65053%200.91436,-1.28356%201.386,-1.9095c0.46972,-0.6234%200.94725,-1.2364%201.422,-1.8465c0.94116,-1.20947%201.86168,-2.40844%202.30367,-3.0105c0.438,-0.59664%200.86246,-1.19396%201.27501,-1.7895c0.40743,-0.58816%200.80352,-1.17234%201.185,-1.7535c1.10526,-1.68381%201.44079,-2.23511%201.77633,-2.7705c0.32878,-0.52461%200.96306,-1.5459%201.27467,-2.04c0.60654,-0.96177%201.20782,-1.88193%201.51051,-2.325c0.59013,-0.86381%201.17888,-1.68032%201.46416,-2.075c0.5498,-0.76063%201.31747,-1.8231%201.77883,-2.4895c0.43918,-0.63437%200.85266,-1.25267%201.45717,-2.15717c0.59549,-0.891%200.96531,-1.46814%201.51466,-2.22933c0.58413,-0.80936%201.12566,-1.40253%201.83801,-2.12333c0.61304,-0.62031%200.45171,-1.48306%200.7045,-2.34733c0.25668,-0.87762%200.75447,-1.62502%201,-2.40983c0.25128,-0.8032%200.7633,-1.39453%201.33217,-2.25417c0.54528,-0.82398%200.73415,-1.6714%201.31516,-2.336c0.55639,-0.63644%201.38658,-1.22588%201.8595,-1.9c0.5082,-0.72441%200.78867,-1.4%201.60266,-1.56667l0.71184,-0.4905'%3E%3C/path%3E%3C/svg%3E\") left center no-repeat\n}\nfieldset.form-group {\n  border: 0;\n  padding: 0\n}\n.modal {\n  transition: opacity 235ms ease-in-out 0s;\n  background: rgba(0,0,0,.6);\n  bottom: 0;\n  flex: 1 1 auto;\n  left: 0;\n  opacity: 0;\n  position: fixed;\n  right: 0;\n  text-align: left;\n  top: 0;\n  visibility: hidden;\n  word-wrap: break-word;\n  z-index: 12\n}\n.modal-bg {\n  bottom: 0;\n  cursor: pointer;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0\n}\n.modal .modal-body {\n  transition: all 235ms ease-in-out 0s;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  background: #fff;\n  border: 2px solid #e6e7e9;\n  left: 50%;\n  padding: 1.25rem;\n  position: absolute;\n  top: 0;\n  transform: translate(-50%,-50%)\n}\n@media only screen and (max-width:768px) {\n  .modal .modal-body {\n    box-sizing: border-box;\n    width: 90%\n  }\n}\n.modal .btn-close {\n  transition: all 235ms ease-in-out 0s;\n  color: #c1c0bd;\n  cursor: pointer;\n  font-size: 30px;\n  height: 1.1rem;\n  position: absolute;\n  right: 1rem;\n  text-decoration: none;\n  top: 1rem;\n  width: 1.1rem\n}\n.modal .btn-close:active,\n.modal .btn-close:focus,\n.modal .btn-close:hover {\n  color: #41403e\n}\n.modal .modal-title,\n.modal h4 {\n  margin-bottom: .5rem;\n  margin-top: 0\n}\n.modal .modal-subtitle,\n.modal h5 {\n  color: #0071de;\n  margin-bottom: .5rem;\n  margin-top: 0\n}\n.modal .modal-text,\n.modal p {\n  margin-bottom: 1rem;\n  margin-top: 0\n}\n.modal .modal-link + .modal-link,\n.modal a + a {\n  margin-left: 1.25rem\n}\n.modal .paper-btn {\n  background: #fff;\n  display: inline-block;\n  text-decoration: none\n}\n.modal .modal-link,\n.modal a {\n  background-image: linear-gradient(5deg,transparent 65%,#0071de 80%,transparent 90%),linear-gradient(165deg,transparent 5%,#0071de 15%,transparent 25%),linear-gradient(165deg,transparent 45%,#0071de 55%,transparent 65%),linear-gradient(15deg,transparent 25%,#0071de 35%,transparent 50%);\n  background-position: 0 90%;\n  background-repeat: repeat-x;\n  background-size: 4px 3px;\n  cursor: pointer;\n  text-decoration: none\n}\n.modal .modal-link:focus,\n.modal .modal-link:hover,\n.modal .modal-link:visited,\n.modal a:focus,\n.modal a:hover,\n.modal a:visited {\n  color: #41403e;\n  text-decoration: none\n}\n.modal-state {\n  display: none\n}\n.modal-state:checked + .modal {\n  opacity: 1;\n  visibility: visible\n}\n.modal-state:checked + .modal .modal-body {\n  top: 50%\n}\n[popover-bottom],\n[popover-left],\n[popover-right],\n[popover-top] {\n  margin: 24px;\n  position: relative\n}\n[popover-bottom]:hover::after,\n[popover-left]:hover::after,\n[popover-right]:hover::after,\n[popover-top]:hover::after {\n  opacity: 1;\n  transition: opacity .2s ease-out\n}\n[popover-bottom]::after,\n[popover-left]::after,\n[popover-right]::after,\n[popover-top]::after {\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  transition: opacity 235ms ease-in-out 0s;\n  background: rgba(0,0,0,.7);\n  border: 2px solid #41403e;\n  color: #fff;\n  font-size: .7em;\n  left: 50%;\n  min-width: 80px;\n  opacity: 0;\n  padding: 4px 2px;\n  position: absolute;\n  text-align: center;\n  top: -6px;\n  transform: translateX(-50%) translateY(-100%)\n}\n[popover-left]::before {\n  left: 0;\n  margin-left: -12px;\n  top: 50%;\n  transform: translateY(-50%) rotate(-90deg)\n}\n[popover-left]::after {\n  content: attr(popover-left);\n  left: 0;\n  margin-left: -8px;\n  top: 50%;\n  transform: translateX(-100%) translateY(-50%)\n}\n[popover-right]::before {\n  left: 100%;\n  margin-left: 1px;\n  top: 50%;\n  transform: translatey(-50%) rotate(90deg)\n}\n[popover-right]::after {\n  content: attr(popover-right);\n  left: 100%;\n  margin-left: 8px;\n  top: 50%;\n  transform: translateX(0) translateY(-50%)\n}\n[popover-top]::before {\n  left: 50%\n}\n[popover-top]::after {\n  content: attr(popover-top);\n  left: 50%\n}\n[popover-bottom]::before {\n  margin-top: 8px;\n  top: 100%;\n  transform: translateX(-50%) translatey(-100%) rotate(-180deg)\n}\n[popover-bottom]::after {\n  content: attr(popover-bottom);\n  margin-top: 8px;\n  top: 100%;\n  transform: translateX(-50%) translateY(0)\n}\n.progress {\n  border-bottom-left-radius: 20px 115px;\n  border-bottom-right-radius: 15px 105px;\n  border-top-left-radius: 250px 15px;\n  border-top-right-radius: 25px 80px;\n  border: 2px solid #41403e;\n  box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3);\n  height: 1.2rem;\n  overflow: hidden;\n  width: 100%\n}\n.progress .bar {\n  border-bottom-left-radius: 20px 115px;\n  border-bottom-right-radius: 15px 105px;\n  border-top-left-radius: 250px 15px;\n  border-top-right-radius: 25px 80px;\n  transition: all 235ms ease-in-out 0s;\n  background-color: #c1c0bd;\n  border-right: 2px solid #41403e;\n  display: flex;\n  flex-direction: column;\n  font-size: .6rem;\n  height: 100%;\n  justify-content: center;\n  text-align: center;\n  width: 0%\n}\n.progress .bar.striped {\n  background: repeating-linear-gradient(45deg,#c1c0bd,#c1c0bd .25rem,#a8a6a3 .25rem,#a8a6a3 .5rem)\n}\n.progress .bar.primary {\n  background-color: #c1c0bd\n}\n.progress .bar.primary.striped {\n  background: repeating-linear-gradient(45deg,#c1c0bd,#c1c0bd .25rem,#a8a6a3 .25rem,#a8a6a3 .5rem)\n}\n.progress .bar.secondary {\n  background-color: #deefff\n}\n.progress .bar.secondary.striped {\n  background: repeating-linear-gradient(45deg,#deefff,#deefff .25rem,#abd6ff .25rem,#abd6ff .5rem)\n}\n.progress .bar.success {\n  background-color: #d0dbc2\n}\n.progress .bar.success.striped {\n  background: repeating-linear-gradient(45deg,#d0dbc2,#d0dbc2 .25rem,#b7c9a1 .25rem,#b7c9a1 .5rem)\n}\n.progress .bar.warning {\n  background-color: #f5f0c6\n}\n.progress .bar.warning.striped {\n  background: repeating-linear-gradient(45deg,#f5f0c6,#f5f0c6 .25rem,#ede49b .25rem,#ede49b .5rem)\n}\n.progress .bar.danger {\n  background-color: #f0cbc9\n}\n.progress .bar.danger.striped {\n  background: repeating-linear-gradient(45deg,#f0cbc9,#f0cbc9 .25rem,#e6a5a1 .25rem,#e6a5a1 .5rem)\n}\n.progress .bar.muted {\n  background-color: #e6e7e9\n}\n.progress .bar.muted.striped {\n  background: repeating-linear-gradient(45deg,#e6e7e9,#e6e7e9 .25rem,#caced1 .25rem,#caced1 .5rem)\n}\n.progress .bar.w-0 {\n  width: 0%\n}\n.progress .bar.w-1 {\n  width: 1%\n}\n.progress .bar.w-2 {\n  width: 2%\n}\n.progress .bar.w-3 {\n  width: 3%\n}\n.progress .bar.w-4 {\n  width: 4%\n}\n.progress .bar.w-5 {\n  width: 5%\n}\n.progress .bar.w-6 {\n  width: 6%\n}\n.progress .bar.w-7 {\n  width: 7%\n}\n.progress .bar.w-8 {\n  width: 8%\n}\n.progress .bar.w-9 {\n  width: 9%\n}\n.progress .bar.w-10 {\n  width: 10%\n}\n.progress .bar.w-11 {\n  width: 11%\n}\n.progress .bar.w-12 {\n  width: 12%\n}\n.progress .bar.w-13 {\n  width: 13%\n}\n.progress .bar.w-14 {\n  width: 14%\n}\n.progress .bar.w-15 {\n  width: 15%\n}\n.progress .bar.w-16 {\n  width: 16%\n}\n.progress .bar.w-17 {\n  width: 17%\n}\n.progress .bar.w-18 {\n  width: 18%\n}\n.progress .bar.w-19 {\n  width: 19%\n}\n.progress .bar.w-20 {\n  width: 20%\n}\n.progress .bar.w-21 {\n  width: 21%\n}\n.progress .bar.w-22 {\n  width: 22%\n}\n.progress .bar.w-23 {\n  width: 23%\n}\n.progress .bar.w-24 {\n  width: 24%\n}\n.progress .bar.w-25 {\n  width: 25%\n}\n.progress .bar.w-26 {\n  width: 26%\n}\n.progress .bar.w-27 {\n  width: 27%\n}\n.progress .bar.w-28 {\n  width: 28%\n}\n.progress .bar.w-29 {\n  width: 29%\n}\n.progress .bar.w-30 {\n  width: 30%\n}\n.progress .bar.w-31 {\n  width: 31%\n}\n.progress .bar.w-32 {\n  width: 32%\n}\n.progress .bar.w-33 {\n  width: 33%\n}\n.progress .bar.w-34 {\n  width: 34%\n}\n.progress .bar.w-35 {\n  width: 35%\n}\n.progress .bar.w-36 {\n  width: 36%\n}\n.progress .bar.w-37 {\n  width: 37%\n}\n.progress .bar.w-38 {\n  width: 38%\n}\n.progress .bar.w-39 {\n  width: 39%\n}\n.progress .bar.w-40 {\n  width: 40%\n}\n.progress .bar.w-41 {\n  width: 41%\n}\n.progress .bar.w-42 {\n  width: 42%\n}\n.progress .bar.w-43 {\n  width: 43%\n}\n.progress .bar.w-44 {\n  width: 44%\n}\n.progress .bar.w-45 {\n  width: 45%\n}\n.progress .bar.w-46 {\n  width: 46%\n}\n.progress .bar.w-47 {\n  width: 47%\n}\n.progress .bar.w-48 {\n  width: 48%\n}\n.progress .bar.w-49 {\n  width: 49%\n}\n.progress .bar.w-50 {\n  width: 50%\n}\n.progress .bar.w-51 {\n  width: 51%\n}\n.progress .bar.w-52 {\n  width: 52%\n}\n.progress .bar.w-53 {\n  width: 53%\n}\n.progress .bar.w-54 {\n  width: 54%\n}\n.progress .bar.w-55 {\n  width: 55%\n}\n.progress .bar.w-56 {\n  width: 56%\n}\n.progress .bar.w-57 {\n  width: 57%\n}\n.progress .bar.w-58 {\n  width: 58%\n}\n.progress .bar.w-59 {\n  width: 59%\n}\n.progress .bar.w-60 {\n  width: 60%\n}\n.progress .bar.w-61 {\n  width: 61%\n}\n.progress .bar.w-62 {\n  width: 62%\n}\n.progress .bar.w-63 {\n  width: 63%\n}\n.progress .bar.w-64 {\n  width: 64%\n}\n.progress .bar.w-65 {\n  width: 65%\n}\n.progress .bar.w-66 {\n  width: 66%\n}\n.progress .bar.w-67 {\n  width: 67%\n}\n.progress .bar.w-68 {\n  width: 68%\n}\n.progress .bar.w-69 {\n  width: 69%\n}\n.progress .bar.w-70 {\n  width: 70%\n}\n.progress .bar.w-71 {\n  width: 71%\n}\n.progress .bar.w-72 {\n  width: 72%\n}\n.progress .bar.w-73 {\n  width: 73%\n}\n.progress .bar.w-74 {\n  width: 74%\n}\n.progress .bar.w-75 {\n  width: 75%\n}\n.progress .bar.w-76 {\n  width: 76%\n}\n.progress .bar.w-77 {\n  width: 77%\n}\n.progress .bar.w-78 {\n  width: 78%\n}\n.progress .bar.w-79 {\n  width: 79%\n}\n.progress .bar.w-80 {\n  width: 80%\n}\n.progress .bar.w-81 {\n  width: 81%\n}\n.progress .bar.w-82 {\n  width: 82%\n}\n.progress .bar.w-83 {\n  width: 83%\n}\n.progress .bar.w-84 {\n  width: 84%\n}\n.progress .bar.w-85 {\n  width: 85%\n}\n.progress .bar.w-86 {\n  width: 86%\n}\n.progress .bar.w-87 {\n  width: 87%\n}\n.progress .bar.w-88 {\n  width: 88%\n}\n.progress .bar.w-89 {\n  width: 89%\n}\n.progress .bar.w-90 {\n  width: 90%\n}\n.progress .bar.w-91 {\n  width: 91%\n}\n.progress .bar.w-92 {\n  width: 92%\n}\n.progress .bar.w-93 {\n  width: 93%\n}\n.progress .bar.w-94 {\n  width: 94%\n}\n.progress .bar.w-95 {\n  width: 95%\n}\n.progress .bar.w-96 {\n  width: 96%\n}\n.progress .bar.w-97 {\n  width: 97%\n}\n.progress .bar.w-98 {\n  width: 98%\n}\n.progress .bar.w-99 {\n  width: 99%\n}\n.progress .bar.w-100 {\n  width: 100%\n}\n.progress .bar.w-0,\n.progress .bar.w-100 {\n  border-right: 0\n}\n.tabs .content {\n  display: none;\n  padding: .75rem 0 0\n}\n.tabs input {\n  display: none\n}\n.tabs input:checked + label {\n  border-bottom: solid 3px #0071de;\n  color: #41403e\n}\n.tabs input[id=tab1]:checked ~ div[id=content1] {\n  display: block\n}\n.tabs input[id=tab2]:checked ~ div[id=content2] {\n  display: block\n}\n.tabs input[id=tab3]:checked ~ div[id=content3] {\n  display: block\n}\n.tabs input[id=tab4]:checked ~ div[id=content4] {\n  display: block\n}\n.tabs input[id=tab5]:checked ~ div[id=content5] {\n  display: block\n}\n.tabs label {\n  color: #c1c0bd;\n  display: inline-block;\n  font-weight: 600;\n  margin: 0 0 -1px;\n  padding: .75rem;\n  text-align: center\n}\n.tabs label:hover {\n  color: #868e96;\n  cursor: pointer\n}\n.margin {\n  margin: 1rem\n}\n.margin-top {\n  margin-top: 1rem\n}\n.margin-top-large {\n  margin-top: 2rem\n}\n.margin-top-small {\n  margin-top: .5rem\n}\n.margin-top-none {\n  margin-top: 0\n}\n.margin-right {\n  margin-right: 1rem\n}\n.margin-right-large {\n  margin-right: 2rem\n}\n.margin-right-small {\n  margin-right: .5rem\n}\n.margin-right-none {\n  margin-right: 0\n}\n.margin-bottom {\n  margin-bottom: 1rem\n}\n.margin-bottom-large {\n  margin-bottom: 2rem\n}\n.margin-bottom-small {\n  margin-bottom: .5rem\n}\n.margin-bottom-none {\n  margin-bottom: 0\n}\n.margin-left {\n  margin-left: 1rem\n}\n.margin-left-large {\n  margin-left: 2rem\n}\n.margin-left-small {\n  margin-left: .5rem\n}\n.margin-left-none {\n  margin-left: 0\n}\n.margin-large {\n  margin: 2rem\n}\n.margin-small {\n  margin: .5rem\n}\n.margin-none {\n  margin: 0\n}\n.padding {\n  padding: 1rem\n}\n.padding-top {\n  padding-top: 1rem\n}\n.padding-top-large {\n  padding-top: 2rem\n}\n.padding-top-small {\n  padding-top: .5rem\n}\n.padding-top-none {\n  padding-top: 0\n}\n.padding-right {\n  padding-right: 1rem\n}\n.padding-right-large {\n  padding-right: 2rem\n}\n.padding-right-small {\n  padding-right: .5rem\n}\n.padding-right-none {\n  padding-right: 0\n}\n.padding-bottom {\n  padding-bottom: 1rem\n}\n.padding-bottom-large {\n  padding-bottom: 2rem\n}\n.padding-bottom-small {\n  padding-bottom: .5rem\n}\n.padding-bottom-none {\n  padding-bottom: 0\n}\n.padding-left {\n  padding-left: 1rem\n}\n.padding-left-large {\n  padding-left: 2rem\n}\n.padding-left-small {\n  padding-left: .5rem\n}\n.padding-left-none {\n  padding-left: 0\n}\n.padding-large {\n  padding: 2rem\n}\n.padding-small {\n  padding: .5rem\n}\n.padding-none {\n  padding: 0\n}\nnav {\n  background-color: #fff;\n  display: flex;\n  padding: .3rem;\n  position: relative;\n  width: 100%;\n  z-index: 100\n}\n@media only screen and (max-width:768px) {\n  nav {\n    display: block\n  }\n}\nnav .bar1,\nnav .bar2,\nnav .bar3 {\n  background-color: #41403e;\n  border-bottom: 5px solid #41403e;\n  border-bottom-left-radius: 15px 5px;\n  border-bottom-right-radius: 15px 3px;\n  color: #41403e;\n  margin: 6px 0;\n  transition: .4s;\n  width: 2rem\n}\nnav .collapsible input[id^=collapsible]:checked + button .bar1 {\n  transform: rotate(-45deg) translate(-9px,7px)\n}\nnav .collapsible input[id^=collapsible]:checked + button .bar2 {\n  opacity: 0\n}\nnav .collapsible input[id^=collapsible]:checked + button .bar3 {\n  transform: rotate(45deg) translate(-8px,-9px)\n}\nnav.split-nav {\n  justify-content: space-between\n}\nnav.fixed {\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0\n}\nnav div {\n  margin: 0 1rem\n}\nnav ul.inline {\n  margin-bottom: 0;\n  margin-top: 10px;\n  padding: 0\n}\nnav ul.inline li {\n  display: inline-block;\n  margin: 0 .5rem\n}\n@media only screen and (max-width:768px) {\n  nav ul.inline li {\n    display: block;\n    margin: 1rem 0\n  }\n}\nnav a {\n  background-image: none;\n  border-bottom: 5px solid #41403e;\n  border-bottom-left-radius: 15px 3px;\n  border-bottom-right-radius: 15px 5px;\n  color: #41403e;\n  padding-bottom: .1rem\n}\nnav a:hover {\n  border-bottom: 5px solid #c1c0bd\n}\nnav ul.inline li a {\n  font-size: 1.3rem\n}\nnav ul.inline li::before {\n  content: ''\n}\n@media only screen and (max-width:992px) {\n  nav ul {\n    text-align: center\n  }\n}\nnav .nav-brand h1,\nnav .nav-brand h2,\nnav .nav-brand h3,\nnav .nav-brand h4,\nnav .nav-brand h5,\nnav .nav-brand h6 {\n  margin: 0;\n  margin-bottom: .2rem\n}\nnav .collapsible input[id^=collapsible]:checked ~ div.collapsible-body {\n  margin: 0;\n  max-height: 960px;\n  opacity: 1;\n  padding: 0\n}\nnav .collapsible .collapsible-body,\nnav .collapsible:nth-of-type(1) {\n  border: 0\n}\n@media only screen and (min-width:769px) {\n  nav .collapsible .collapsible-body,\n  nav .collapsible:nth-of-type(1) {\n    display: contents\n  }\n}\nnav div.collapsible-body {\n  padding: none\n}\nnav .collapsible label {\n  border-bottom: 0;\n  padding: 0\n}\nnav .collapsible > button {\n  background-color: #fff;\n  display: none;\n  font-size: .5rem;\n  margin-right: 1rem;\n  padding: .25rem;\n  position: absolute;\n  right: 0;\n  top: .2rem\n}\n@media only screen and (max-width:768px) {\n  nav .collapsible > button {\n    display: block\n  }\n}"]}]);


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/global.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./pages/global.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "html {\n  /* height: 90vh; */\n}\nbody {\n  margin: 0px;\n  background-color: #f9fafb;\n}\n", "",{"version":3,"sources":["/Users/Jo/workspaces/projects/personal-website/pages/global.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,yBAAyB;AAC3B","file":"global.css","sourcesContent":["html {\n  /* height: 90vh; */\n}\nbody {\n  margin: 0px;\n  background-color: #f9fafb;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/papercss/dist/paper.css":
/*!**********************************************!*\
  !*** ./node_modules/papercss/dist/paper.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./paper.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/papercss/dist/paper.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./paper.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/papercss/dist/paper.css",
      function () {
        var newContent = __webpack_require__(/*! !../../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./paper.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/papercss/dist/paper.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_templates_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/templates/Layout/Layout */ "./components/templates/Layout/Layout.js");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global.css */ "./pages/global.css");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var papercss_dist_paper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! papercss/dist/paper.css */ "./node_modules/papercss/dist/paper.css");
/* harmony import */ var papercss_dist_paper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(papercss_dist_paper_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_atom_Meta_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/atom/Meta/Meta */ "./components/atom/Meta/Meta.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/Jo/workspaces/projects/personal-website/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





 // Import the CSS

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["config"].autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_atom_Meta_Meta__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_components_templates_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }))));
}

/***/ }),

/***/ "./pages/global.css":
/*!**************************!*\
  !*** ./pages/global.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./global.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/global.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./global.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/global.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./global.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/global.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! /Users/Jo/workspaces/projects/personal-website/node_modules/next/dist/client/router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map