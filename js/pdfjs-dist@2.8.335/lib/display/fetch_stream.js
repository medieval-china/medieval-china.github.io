"use strict";function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var a={},e=Object.prototype,c=e.hasOwnProperty,h=Object.defineProperty||function(e,t,r){e[t]=r.value},t="function"==typeof Symbol?Symbol:{},i=t.iterator||"@@iterator",r=t.asyncIterator||"@@asyncIterator",n=t.toStringTag||"@@toStringTag";function o(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(e){o=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o,a,s,u,i=t&&t.prototype instanceof p?t:p,l=Object.create(i.prototype),c=new C(n||[]);return h(l,"_invoke",{value:(o=e,a=r,s=c,u="suspendedStart",function(e,t){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===e)throw t;return x()}for(s.method=e,s.arg=t;;){var r=s.delegate;if(r){var n=w(r,s);if(n){if(n===d)continue;return n}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===u)throw u="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);u="executing";var i=f(o,a,s);if("normal"===i.type){if(u=s.done?"completed":"suspendedYield",i.arg===d)continue;return{value:i.arg,done:s.done}}"throw"===i.type&&(u="completed",s.method="throw",s.arg=i.arg)}})}),l}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}a.wrap=s;var d={};function p(){}function u(){}function l(){}var y={};o(y,i,function(){return this});var v=Object.getPrototypeOf,_=v&&v(v(k([])));_&&_!==e&&c.call(_,i)&&(y=_);var g=l.prototype=p.prototype=Object.create(y);function m(e){["next","throw","return"].forEach(function(t){o(e,t,function(e){return this._invoke(t,e)})})}function b(u,l){var t;h(this,"_invoke",{value:function(r,n){function e(){return new l(function(e,t){!function t(e,r,n,i){var o=f(u[e],u,r);if("throw"!==o.type){var a=o.arg,s=a.value;return s&&"object"==_typeof(s)&&c.call(s,"__await")?l.resolve(s.__await).then(function(e){t("next",e,n,i)},function(e){t("throw",e,n,i)}):l.resolve(s).then(function(e){a.value=e,n(a)},function(e){return t("throw",e,n,i)})}i(o.arg)}(r,n,e,t)})}return t=t?t.then(e,e):e()}})}function w(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var i=f(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,d;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(c.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:x}}function x(){return{value:void 0,done:!0}}return h(g,"constructor",{value:u.prototype=l,configurable:!0}),h(l,"constructor",{value:u,configurable:!0}),u.displayName=o(l,n,"GeneratorFunction"),a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,o(e,n,"GeneratorFunction")),e.prototype=Object.create(g),e},a.awrap=function(e){return{__await:e}},m(b.prototype),o(b.prototype,r,function(){return this}),a.AsyncIterator=b,a.async=function(e,t,r,n,i){void 0===i&&(i=Promise);var o=new b(s(e,t,r,n),i);return a.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},m(g),o(g,n,"Generator"),o(g,i,function(){return this}),o(g,"toString",function(){return"[object Generator]"}),a.keys=function(e){var r=Object(e),n=[];for(var t in r)n.push(t);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=k,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&c.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return o.type="throw",o.arg=r,n.next=e,t&&(n.method="next",n.arg=void 0),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var i=this.tryEntries[t],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=c.call(i,"catchLoc"),s=c.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&c.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},a}function asyncGeneratorStep(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}function _asyncToGenerator(s){return function(){var e=this,a=arguments;return new Promise(function(t,r){var n=s.apply(e,a);function i(e){asyncGeneratorStep(n,t,r,i,o,"next",e)}function o(e){asyncGeneratorStep(n,t,r,i,o,"throw",e)}i(void 0)})}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);var n=r.call(e,t||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.PDFFetchStream=void 0;var _util=require("../shared/util.js"),_network_utils=require("./network_utils.js");function createFetchOptions(e,t,r){return{method:"GET",headers:e,signal:null==r?void 0:r.signal,mode:"cors",credentials:t?"include":"same-origin",redirect:"follow"}}function createHeaders(e){var t=new Headers;for(var r in e){var n=e[r];void 0!==n&&t.append(r,n)}return t}var PDFFetchStream=function(){function t(e){_classCallCheck(this,t),this.source=e,this.isHttp=/^https?:/i.test(e.url),this.httpHeaders=this.isHttp&&e.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}return _createClass(t,[{key:"_progressiveDataLength",get:function(){var e,t;return null!==(e=null===(t=this._fullRequestReader)||void 0===t?void 0:t._loaded)&&void 0!==e?e:0}},{key:"getFullReader",value:function(){return(0,_util.assert)(!this._fullRequestReader,"PDFFetchStream.getFullReader can only be called once."),this._fullRequestReader=new PDFFetchStreamReader(this),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null;var r=new PDFFetchStreamRangeReader(this,e,t);return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(t){this._fullRequestReader&&this._fullRequestReader.cancel(t),this._rangeRequestReaders.slice(0).forEach(function(e){e.cancel(t)})}}]),t}();exports.PDFFetchStream=PDFFetchStream;var PDFFetchStreamReader=function(){function r(e){var o=this;_classCallCheck(this,r),this._stream=e,this._reader=null,this._loaded=0,this._filename=null;var t=e.source;this._withCredentials=t.withCredentials||!1,this._contentLength=t.length,this._headersCapability=(0,_util.createPromiseCapability)(),this._disableRange=t.disableRange||!1,this._rangeChunkSize=t.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),"undefined"!=typeof AbortController&&(this._abortController=new AbortController),this._isStreamingSupported=!t.disableStream,this._isRangeSupported=!t.disableRange,this._headers=createHeaders(this._stream.httpHeaders);var a=t.url;fetch(a,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then(function(t){if(!(0,_network_utils.validateResponseStatus)(t.status))throw(0,_network_utils.createResponseStatusError)(t.status,a);o._reader=t.body.getReader(),o._headersCapability.resolve();var e=function(e){return t.headers.get(e)},r=(0,_network_utils.validateRangeRequestCapabilities)({getResponseHeader:e,isHttp:o._stream.isHttp,rangeChunkSize:o._rangeChunkSize,disableRange:o._disableRange}),n=r.allowRangeRequests,i=r.suggestedLength;o._isRangeSupported=n,o._contentLength=i||o._contentLength,o._filename=(0,_network_utils.extractFilenameFromHeader)(e),!o._isStreamingSupported&&o._isRangeSupported&&o.cancel(new _util.AbortException("Streaming is disabled."))}).catch(this._headersCapability.reject),this.onProgress=null}var e;return _createClass(r,[{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"filename",get:function(){return this._filename}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}},{key:"read",value:(e=_asyncToGenerator(_regeneratorRuntime().mark(function e(){var t,r,n,i;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._headersCapability.promise;case 2:return e.next=4,this._reader.read();case 4:if(t=e.sent,r=t.value,n=t.done)return e.abrupt("return",{value:r,done:n});e.next=9;break;case 9:return this._loaded+=r.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength}),i=new Uint8Array(r).buffer,e.abrupt("return",{value:i,done:!1});case 13:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e),this._abortController&&this._abortController.abort()}}]),r}(),PDFFetchStreamRangeReader=function(){function a(e,t,r){var n=this;_classCallCheck(this,a),this._stream=e,this._reader=null,this._loaded=0;var i=e.source;this._withCredentials=i.withCredentials||!1,this._readCapability=(0,_util.createPromiseCapability)(),this._isStreamingSupported=!i.disableStream,"undefined"!=typeof AbortController&&(this._abortController=new AbortController),this._headers=createHeaders(this._stream.httpHeaders),this._headers.append("Range","bytes=".concat(t,"-").concat(r-1));var o=i.url;fetch(o,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then(function(e){if(!(0,_network_utils.validateResponseStatus)(e.status))throw(0,_network_utils.createResponseStatusError)(e.status,o);n._readCapability.resolve(),n._reader=e.body.getReader()}).catch(function(e){if("AbortError"!==(null==e?void 0:e.name))throw e}),this.onProgress=null}var e;return _createClass(a,[{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}},{key:"read",value:(e=_asyncToGenerator(_regeneratorRuntime().mark(function e(){var t,r,n,i;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise;case 2:return e.next=4,this._reader.read();case 4:if(t=e.sent,r=t.value,n=t.done)return e.abrupt("return",{value:r,done:n});e.next=9;break;case 9:return this._loaded+=r.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded}),i=new Uint8Array(r).buffer,e.abrupt("return",{value:i,done:!1});case 13:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e),this._abortController&&this._abortController.abort()}}]),a}();