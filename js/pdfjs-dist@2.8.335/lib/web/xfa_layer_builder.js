"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,_toPropertyKey(i.key),i)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);var i=r.call(e,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.XfaLayerBuilder=exports.DefaultXfaLayerFactory=void 0;var _pdf=require("../pdf"),XfaLayerBuilder=function(){function i(e){var t=e.pageDiv,r=e.pdfPage;_classCallCheck(this,i),this.pageDiv=t,this.pdfPage=r,this.div=null,this._cancelled=!1}return _createClass(i,[{key:"render",value:function(r){var i=this;1<arguments.length&&void 0!==arguments[1]&&arguments[1];return this.pdfPage.getXfa().then(function(e){if(!i._cancelled){var t={viewport:r.clone({dontFlip:!0}),div:i.div,xfa:e,page:i.pdfPage};i.div?_pdf.XfaLayer.update(t):(i.div=document.createElement("div"),i.pageDiv.appendChild(i.div),t.div=i.div,_pdf.XfaLayer.render(t))}})}},{key:"cancel",value:function(){this._cancelled=!0}},{key:"hide",value:function(){this.div&&(this.div.hidden=!0)}}]),i}();exports.XfaLayerBuilder=XfaLayerBuilder;var DefaultXfaLayerFactory=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"createXfaLayerBuilder",value:function(e,t){return new XfaLayerBuilder({pageDiv:e,pdfPage:t})}}]),e}();exports.DefaultXfaLayerFactory=DefaultXfaLayerFactory;