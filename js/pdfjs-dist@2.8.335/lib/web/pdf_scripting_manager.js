"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var a={},e=Object.prototype,l=e.hasOwnProperty,p=Object.defineProperty||function(e,t,r){e[t]=r.value},t="function"==typeof Symbol?Symbol:{},i=t.iterator||"@@iterator",r=t.asyncIterator||"@@asyncIterator",n=t.toStringTag||"@@toStringTag";function o(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(e){o=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o,a,s,u,i=t&&t.prototype instanceof h?t:h,c=Object.create(i.prototype),l=new S(n||[]);return p(c,"_invoke",{value:(o=e,a=r,s=l,u="suspendedStart",function(e,t){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===e)throw t;return E()}for(s.method=e,s.arg=t;;){var r=s.delegate;if(r){var n=w(r,s);if(n){if(n===d)continue;return n}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===u)throw u="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);u="executing";var i=f(o,a,s);if("normal"===i.type){if(u=s.done?"completed":"suspendedYield",i.arg===d)continue;return{value:i.arg,done:s.done}}"throw"===i.type&&(u="completed",s.method="throw",s.arg=i.arg)}})}),c}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}a.wrap=s;var d={};function h(){}function u(){}function c(){}var y={};o(y,i,function(){return this});var v=Object.getPrototypeOf,_=v&&v(v(k([])));_&&_!==e&&l.call(_,i)&&(y=_);var g=c.prototype=h.prototype=Object.create(y);function m(e){["next","throw","return"].forEach(function(t){o(e,t,function(e){return this._invoke(t,e)})})}function b(u,c){var t;p(this,"_invoke",{value:function(r,n){function e(){return new c(function(e,t){!function t(e,r,n,i){var o=f(u[e],u,r);if("throw"!==o.type){var a=o.arg,s=a.value;return s&&"object"==_typeof(s)&&l.call(s,"__await")?c.resolve(s.__await).then(function(e){t("next",e,n,i)},function(e){t("throw",e,n,i)}):c.resolve(s).then(function(e){a.value=e,n(a)},function(e){return t("throw",e,n,i)})}i(o.arg)}(r,n,e,t)})}return t=t?t.then(e,e):e()}})}function w(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var i=f(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,d;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(l.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return p(g,"constructor",{value:u.prototype=c,configurable:!0}),p(c,"constructor",{value:u,configurable:!0}),u.displayName=o(c,n,"GeneratorFunction"),a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,o(e,n,"GeneratorFunction")),e.prototype=Object.create(g),e},a.awrap=function(e){return{__await:e}},m(b.prototype),o(b.prototype,r,function(){return this}),a.AsyncIterator=b,a.async=function(e,t,r,n,i){void 0===i&&(i=Promise);var o=new b(s(e,t,r,n),i);return a.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},m(g),o(g,n,"Generator"),o(g,i,function(){return this}),o(g,"toString",function(){return"[object Generator]"}),a.keys=function(e){var r=Object(e),n=[];for(var t in r)n.push(t);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=k,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return o.type="throw",o.arg=r,n.next=e,t&&(n.method="next",n.arg=void 0),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var i=this.tryEntries[t],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=l.call(i,"catchLoc"),s=l.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},a}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,s=[],u=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function asyncGeneratorStep(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}function _asyncToGenerator(s){return function(){var e=this,a=arguments;return new Promise(function(t,r){var n=s.apply(e,a);function i(e){asyncGeneratorStep(n,t,r,i,o,"next",e)}function o(e){asyncGeneratorStep(n,t,r,i,o,"throw",e)}i(void 0)})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);var n=r.call(e,t||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.PDFScriptingManager=void 0;var _pdf=require("../pdf"),_ui_utils=require("./ui_utils.js"),_pdf_rendering_queue=require("./pdf_rendering_queue.js"),PDFScriptingManager=function(){function u(e){var t=e.eventBus,r=e.sandboxBundleSrc,n=void 0===r?null:r,i=e.scriptingFactory,o=void 0===i?null:i,a=e.docPropertiesLookup,s=void 0===a?null:a;_classCallCheck(this,u),this._pdfDocument=null,this._pdfViewer=null,this._closeCapability=null,this._destroyCapability=null,this._scripting=null,this._mouseState=Object.create(null),this._pageEventsReady=!1,this._ready=!1,this._eventBus=t,this._sandboxBundleSrc=n,this._scriptingFactory=o,this._docPropertiesLookup=s}var e,t,r,n,i,o,a,s,c,l;return _createClass(u,[{key:"setViewer",value:function(e){this._pdfViewer=e}},{key:"setDocument",value:(l=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var r,n,i,o,a,s,u,c,l,p,f,d,h,y,v,_,g,m=this;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this._pdfDocument)return e.next=3,this._destroyScripting();e.next=3;break;case 3:if(this._pdfDocument=t){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,Promise.all([t.getFieldObjects(),t.getCalculationOrderIds(),t.getJSActions()]);case 8:if(n=e.sent,i=_slicedToArray(n,3),o=i[0],a=i[1],s=i[2],o||s){e.next=17;break}return e.next=16,this._destroyScripting();case 16:return e.abrupt("return");case 17:if(t!==this._pdfDocument)return e.abrupt("return");e.next=19;break;case 19:this._scripting=this._createScripting(),this._internalEvents.set("updatefromsandbox",function(e){(null==e?void 0:e.source)===window&&m._updateFromSandbox(e.detail)}),this._internalEvents.set("dispatcheventinsandbox",function(e){var t;null===(t=m._scripting)||void 0===t||t.dispatchEventInSandbox(e.detail)}),this._internalEvents.set("pagechanging",function(e){var t=e.pageNumber,r=e.previous;t!==r&&(m._dispatchPageClose(r),m._dispatchPageOpen(t))}),this._internalEvents.set("pagerendered",function(e){var t=e.pageNumber;m._pageOpenPending.has(t)&&t===m._pdfViewer.currentPageNumber&&m._dispatchPageOpen(t)}),this._internalEvents.set("pagesdestroy",function(){var t=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var r,n;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m._dispatchPageClose(m._pdfViewer.currentPageNumber);case 2:return e.next=4,null===(r=m._scripting)||void 0===r?void 0:r.dispatchEventInSandbox({id:"doc",name:"WillClose"});case 4:null===(n=m._closeCapability)||void 0===n||n.resolve();case 5:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}()),this._domEvents.set("mousedown",function(e){m._mouseState.isDown=!0}),this._domEvents.set("mouseup",function(e){m._mouseState.isDown=!1}),u=_createForOfIteratorHelper(this._internalEvents);try{for(u.s();!(c=u.n()).done;)l=_slicedToArray(c.value,2),p=l[0],f=l[1],this._eventBus._on(p,f)}catch(e){u.e(e)}finally{u.f()}d=_createForOfIteratorHelper(this._domEvents);try{for(d.s();!(h=d.n()).done;)y=_slicedToArray(h.value,2),v=y[0],_=y[1],window.addEventListener(v,_)}catch(e){d.e(e)}finally{d.f()}return e.prev=31,e.next=34,this._getDocProperties();case 34:if(g=e.sent,t!==this._pdfDocument)return e.abrupt("return");e.next=37;break;case 37:return e.next=39,this._scripting.createSandbox({objects:o,calculationOrder:a,appInfo:{platform:navigator.platform,language:navigator.language},docInfo:_objectSpread(_objectSpread({},g),{},{actions:s})});case 39:this._eventBus.dispatch("sandboxcreated",{source:this}),e.next=48;break;case 42:return e.prev=42,e.t0=e.catch(31),console.error('PDFScriptingManager.setDocument: "'.concat(null===e.t0||void 0===e.t0?void 0:e.t0.message,'".')),e.next=47,this._destroyScripting();case 47:return e.abrupt("return");case 48:return e.next=50,null===(r=this._scripting)||void 0===r?void 0:r.dispatchEventInSandbox({id:"doc",name:"Open"});case 50:return e.next=52,this._dispatchPageOpen(this._pdfViewer.currentPageNumber,!0);case 52:Promise.resolve().then(function(){t===m._pdfDocument&&(m._ready=!0)});case 53:case"end":return e.stop()}},e,this,[[31,42]])})),function(e){return l.apply(this,arguments)})},{key:"dispatchWillSave",value:(c=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var r;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null===(r=this._scripting)||void 0===r?void 0:r.dispatchEventInSandbox({id:"doc",name:"WillSave"}));case 1:case"end":return e.stop()}},e,this)})),function(e){return c.apply(this,arguments)})},{key:"dispatchDidSave",value:(s=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var r;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null===(r=this._scripting)||void 0===r?void 0:r.dispatchEventInSandbox({id:"doc",name:"DidSave"}));case 1:case"end":return e.stop()}},e,this)})),function(e){return s.apply(this,arguments)})},{key:"dispatchWillPrint",value:(a=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var r;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null===(r=this._scripting)||void 0===r?void 0:r.dispatchEventInSandbox({id:"doc",name:"WillPrint"}));case 1:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)})},{key:"dispatchDidPrint",value:(o=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var r;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null===(r=this._scripting)||void 0===r?void 0:r.dispatchEventInSandbox({id:"doc",name:"DidPrint"}));case 1:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)})},{key:"mouseState",get:function(){return this._mouseState}},{key:"destroyPromise",get:function(){var e;return(null===(e=this._destroyCapability)||void 0===e?void 0:e.promise)||null}},{key:"ready",get:function(){return this._ready}},{key:"_internalEvents",get:function(){return(0,_pdf.shadow)(this,"_internalEvents",new Map)}},{key:"_domEvents",get:function(){return(0,_pdf.shadow)(this,"_domEvents",new Map)}},{key:"_pageOpenPending",get:function(){return(0,_pdf.shadow)(this,"_pageOpenPending",new Set)}},{key:"_visitedPages",get:function(){return(0,_pdf.shadow)(this,"_visitedPages",new Map)}},{key:"_updateFromSandbox",value:(i=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var r,n,i,o,a,s;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this._pdfViewer.isInPresentationMode||this._pdfViewer.isChangingPresentationMode,n=t.id,i=t.command,o=t.value,n){e.next=25;break}e.t0=i,e.next="clear"===e.t0?6:"error"===e.t0?8:"layout"===e.t0?10:"page-num"===e.t0?12:"print"===e.t0?14:"println"===e.t0?18:"zoom"===e.t0?20:24;break;case 6:return console.clear(),e.abrupt("break",24);case 8:return console.error(o),e.abrupt("break",24);case 10:return this._pdfViewer.spreadMode=(0,_ui_utils.apiPageLayoutToSpreadMode)(o),e.abrupt("break",24);case 12:return this._pdfViewer.currentPageNumber=o+1,e.abrupt("break",24);case 14:return e.next=16,this._pdfViewer.pagesPromise;case 16:return this._eventBus.dispatch("print",{source:this}),e.abrupt("break",24);case 18:return console.log(o),e.abrupt("break",24);case 20:if(r)return e.abrupt("return");e.next=22;break;case 22:return this._pdfViewer.currentScaleValue=o,e.abrupt("break",24);case 24:return e.abrupt("return");case 25:if(!r){e.next=28;break}if(t.focus)return e.abrupt("return");e.next=28;break;case 28:(a=document.getElementById(n))?a.dispatchEvent(new CustomEvent("updatefromsandbox",{detail:t})):(delete t.id,null===(s=this._pdfDocument)||void 0===s||s.annotationStorage.setValue(n,t));case 30:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)})},{key:"_dispatchPageOpen",value:(n=_asyncToGenerator(_regeneratorRuntime().mark(function e(i){var t,o,a,s,r,u=this,n=arguments;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=1<n.length&&void 0!==n[1]&&n[1],o=this._pdfDocument,a=this._visitedPages,t&&(this._closeCapability=(0,_pdf.createPromiseCapability)(),this._pageEventsReady=!0),this._pageEventsReady){e.next=5;break}return e.abrupt("return");case 5:if((null==(s=this._pdfViewer.getPageView(i-1))?void 0:s.renderingState)!==_pdf_rendering_queue.RenderingStates.FINISHED)return this._pageOpenPending.add(i),e.abrupt("return");e.next=9;break;case 9:this._pageOpenPending.delete(i),r=_asyncToGenerator(_regeneratorRuntime().mark(function e(){var t,r,n;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.has(i)?null:null===(t=s.pdfPage)||void 0===t?void 0:t.getJSActions();case 2:if(n=e.sent,o!==u._pdfDocument)return e.abrupt("return");e.next=5;break;case 5:return e.next=7,null===(r=u._scripting)||void 0===r?void 0:r.dispatchEventInSandbox({id:"page",name:"PageOpen",pageNumber:i,actions:n});case 7:case"end":return e.stop()}},e)}))(),a.set(i,r);case 12:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"_dispatchPageClose",value:(r=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var r,n,i,o;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this._pdfDocument,i=this._visitedPages,this._pageEventsReady){e.next=3;break}return e.abrupt("return");case 3:if(this._pageOpenPending.has(t))return e.abrupt("return");e.next=5;break;case 5:if(o=i.get(t)){e.next=8;break}return e.abrupt("return");case 8:return i.set(t,null),e.next=11,o;case 11:if(n!==this._pdfDocument)return e.abrupt("return");e.next=13;break;case 13:return e.next=15,null===(r=this._scripting)||void 0===r?void 0:r.dispatchEventInSandbox({id:"page",name:"PageClose",pageNumber:t});case 15:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},{key:"_getDocProperties",value:(t=_asyncToGenerator(_regeneratorRuntime().mark(function e(){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this._docPropertiesLookup)return e.abrupt("return",this._docPropertiesLookup(this._pdfDocument));e.next=2;break;case 2:throw new Error("_getDocProperties: Unable to lookup properties.");case 3:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{key:"_createScripting",value:function(){if(this._destroyCapability=(0,_pdf.createPromiseCapability)(),this._scripting)throw new Error("_createScripting: Scripting already exists.");if(this._scriptingFactory)return this._scriptingFactory.createScripting({sandboxBundleSrc:this._sandboxBundleSrc});throw new Error("_createScripting: Cannot create scripting.")}},{key:"_destroyScripting",value:(e=_asyncToGenerator(_regeneratorRuntime().mark(function e(){var t,r,n,i,o,a,s,u,c,l,p,f;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this._scripting){e.next=4;break}return(this._pdfDocument=null)===(r=this._destroyCapability)||void 0===r||r.resolve(),e.abrupt("return");case 4:if(this._closeCapability)return e.next=7,Promise.race([this._closeCapability.promise,new Promise(function(e){setTimeout(e,1e3)})]).catch(function(e){});e.next=8;break;case 7:this._closeCapability=null;case 8:return this._pdfDocument=null,e.prev=9,e.next=12,this._scripting.destroySandbox();case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:n=_createForOfIteratorHelper(this._internalEvents);try{for(n.s();!(i=n.n()).done;)o=_slicedToArray(i.value,2),a=o[0],s=o[1],this._eventBus._off(a,s)}catch(e){n.e(e)}finally{n.f()}this._internalEvents.clear(),u=_createForOfIteratorHelper(this._domEvents);try{for(u.s();!(c=u.n()).done;)l=_slicedToArray(c.value,2),p=l[0],f=l[1],window.removeEventListener(p,f)}catch(e){u.e(e)}finally{u.f()}this._domEvents.clear(),this._pageOpenPending.clear(),this._visitedPages.clear(),this._scripting=null,delete this._mouseState.isDown,this._pageEventsReady=!1,this._ready=!1,null===(t=this._destroyCapability)||void 0===t||t.resolve();case 29:case"end":return e.stop()}},e,this,[[9,14]])})),function(){return e.apply(this,arguments)})}]),u}();exports.PDFScriptingManager=PDFScriptingManager;