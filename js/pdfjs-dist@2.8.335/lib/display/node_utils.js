"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(o){var n=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(o);if(n){var r=_getPrototypeOf(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);var o=r.call(e,t||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.NodeCMapReaderFactory=exports.NodeCanvasFactory=void 0;var _display_utils=require("./display_utils.js"),_is_node=require("../shared/is_node.js"),_util=require("../shared/util.js"),NodeCanvasFactory=_createClass(function e(){_classCallCheck(this,e),(0,_util.unreachable)("Not implemented: NodeCanvasFactory")});exports.NodeCanvasFactory=NodeCanvasFactory;var NodeCMapReaderFactory=_createClass(function e(){_classCallCheck(this,e),(0,_util.unreachable)("Not implemented: NodeCMapReaderFactory")});exports.NodeCMapReaderFactory=NodeCMapReaderFactory,_is_node.isNodeJS&&(exports.NodeCanvasFactory=NodeCanvasFactory=function(e){_inherits(r,_display_utils.BaseCanvasFactory);var t=_createSuper(r);function r(){return _classCallCheck(this,r),t.apply(this,arguments)}return _createClass(r,[{key:"create",value:function(e,t){if(e<=0||t<=0)throw new Error("Invalid canvas size");var r=require("canvas").createCanvas(e,t);return{canvas:r,context:r.getContext("2d")}}}]),r}(),exports.NodeCMapReaderFactory=NodeCMapReaderFactory=function(e){_inherits(r,_display_utils.BaseCMapReaderFactory);var t=_createSuper(r);function r(){return _classCallCheck(this,r),t.apply(this,arguments)}return _createClass(r,[{key:"_fetchData",value:function(e,n){return new Promise(function(r,o){require("fs").readFile(e,function(e,t){!e&&t?r({cMapData:new Uint8Array(t),compressionType:n}):o(new Error(e))})})}}]),r}());