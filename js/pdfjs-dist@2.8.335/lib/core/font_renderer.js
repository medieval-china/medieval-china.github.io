"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(s){var i=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(s);if(i){var r=_getPrototypeOf(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var s=e[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,_toPropertyKey(s.key),s)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);var s=r.call(t,e||"default");if("object"!==_typeof(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.FontRendererFactory=void 0;var _util=require("../shared/util.js"),_cff_parser=require("./cff_parser.js"),_glyphlist=require("./glyphlist.js"),_encodings=require("./encodings.js"),_stream=require("./stream.js"),FontRendererFactory=function(){function C(t,e){return t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}function k(t,e){return t[e]<<8|t[e+1]}function D(t){var e=t.length,r=32768;return e<1240?r=107:e<33900&&(r=1131),r}function I(t,e,r){var s,i,n,o=1===k(t,e+2)?C(t,e+8):C(t,e+16),a=k(t,e+o);if(4===a){k(t,e+o+2);var f=k(t,e+o+6)>>1;for(i=e+o+14,s=[],n=0;n<f;n++,i+=2)s[n]={end:k(t,i)};for(i+=2,n=0;n<f;n++,i+=2)s[n].start=k(t,i);for(n=0;n<f;n++,i+=2)s[n].idDelta=k(t,i);for(n=0;n<f;n++,i+=2){var h=k(t,i);if(0!==h){s[n].ids=[];for(var c=0,l=s[n].end-s[n].start+1;c<l;c++)s[n].ids[c]=k(t,i+h),h+=2}}return s}if(12!==a)throw new _util.FormatError("unsupported cmap: ".concat(a));C(t,e+o+4);var u=C(t,e+o+12);for(i=e+o+16,s=[],n=0;n<u;n++)s.push({start:C(t,i),end:C(t,i+4),idDelta:C(t,i+8)-C(t,i)}),i+=12;return s}function T(t,e){for(var r=e.codePointAt(0),s=0,i=0,n=t.length-1;i<n;){var o=i+n+1>>1;r<t[o].start?n=o-1:i=o}return t[i].start<=r&&r<=t[i].end&&(s=t[i].idDelta+(t[i].ids?t[i].ids[r-t[i].start]:r)&65535),{charCode:r,glyphId:s}}function G(t,C,k,I){function F(t,e){C.push({cmd:"moveTo",args:[t,e]})}function w(t,e){C.push({cmd:"lineTo",args:[t,e]})}function x(t,e,r,s,i,n){C.push({cmd:"bezierCurveTo",args:[t,e,r,s,i,n]})}var P=[],S=0,O=0,j=0;!function t(e){for(var r=0;r<e.length;){var s=!1,i=e[r++],n=void 0,o=void 0,a=void 0,f=void 0,h=void 0,c=void 0,l=void 0,u=void 0;switch(i){case 1:case 3:j+=P.length>>1,s=!0;break;case 4:O+=P.pop(),F(S,O),s=!0;break;case 5:for(;0<P.length;)S+=P.shift(),O+=P.shift(),w(S,O);break;case 6:for(;0<P.length&&(w(S+=P.shift(),O),0!==P.length);)O+=P.shift(),w(S,O);break;case 7:for(;0<P.length&&(O+=P.shift(),w(S,O),0!==P.length);)w(S+=P.shift(),O);break;case 8:for(;0<P.length;)n=S+P.shift(),a=O+P.shift(),o=n+P.shift(),f=a+P.shift(),S=o+P.shift(),O=f+P.shift(),x(n,a,o,f,S,O);break;case 10:if(l=P.pop(),u=null,k.isCFFCIDFont){var p=k.fdSelect.getFDIndex(I);if(0<=p&&p<k.fdArray.length){var d=k.fdArray[p],y=void 0;d.privateDict&&d.privateDict.subrsIndex&&(y=d.privateDict.subrsIndex.objects),y&&(u=y[l+=D(y)])}else(0,_util.warn)("Invalid fd index for glyph index.")}else u=k.subrs[l+k.subrsBias];u&&t(u);break;case 11:return;case 12:switch(i=e[r++]){case 34:o=(n=S+P.shift())+P.shift(),h=O+P.shift(),S=o+P.shift(),x(n,O,o,h,S,h),o=(n=S+P.shift())+P.shift(),S=o+P.shift(),x(n,h,o,O,S,O);break;case 35:n=S+P.shift(),a=O+P.shift(),o=n+P.shift(),f=a+P.shift(),S=o+P.shift(),O=f+P.shift(),x(n,a,o,f,S,O),n=S+P.shift(),a=O+P.shift(),o=n+P.shift(),f=a+P.shift(),S=o+P.shift(),O=f+P.shift(),x(n,a,o,f,S,O),P.pop();break;case 36:x(n=S+P.shift(),h=O+P.shift(),o=n+P.shift(),c=h+P.shift(),S=o+P.shift(),c),x(n=S+P.shift(),c,o=n+P.shift(),c+P.shift(),S=o+P.shift(),O);break;case 37:var g=S,b=O;n=S+P.shift(),a=O+P.shift(),o=n+P.shift(),f=a+P.shift(),S=o+P.shift(),O=f+P.shift(),x(n,a,o,f,S,O),n=S+P.shift(),a=O+P.shift(),o=n+P.shift(),f=a+P.shift(),S=o,O=f,Math.abs(S-g)>Math.abs(O-b)?S+=P.shift():O+=P.shift(),x(n,a,o,f,S,O);break;default:throw new _util.FormatError("unknown operator: 12 ".concat(i))}break;case 14:if(4<=P.length){var v=P.pop(),m=P.pop();O=P.pop(),S=P.pop(),C.push({cmd:"save"}),C.push({cmd:"translate",args:[S,O]});var _=T(k.cmap,String.fromCharCode(k.glyphNameMap[_encodings.StandardEncoding[v]]));G(k.glyphs[_.glyphId],C,k,_.glyphId),C.push({cmd:"restore"}),_=T(k.cmap,String.fromCharCode(k.glyphNameMap[_encodings.StandardEncoding[m]])),G(k.glyphs[_.glyphId],C,k,_.glyphId)}return;case 18:j+=P.length>>1,s=!0;break;case 19:case 20:r+=(j+=P.length>>1)+7>>3,s=!0;break;case 21:O+=P.pop(),F(S+=P.pop(),O),s=!0;break;case 22:F(S+=P.pop(),O),s=!0;break;case 23:j+=P.length>>1,s=!0;break;case 24:for(;2<P.length;)n=S+P.shift(),a=O+P.shift(),o=n+P.shift(),f=a+P.shift(),S=o+P.shift(),O=f+P.shift(),x(n,a,o,f,S,O);S+=P.shift(),O+=P.shift(),w(S,O);break;case 25:for(;6<P.length;)S+=P.shift(),O+=P.shift(),w(S,O);n=S+P.shift(),a=O+P.shift(),o=n+P.shift(),f=a+P.shift(),S=o+P.shift(),O=f+P.shift(),x(n,a,o,f,S,O);break;case 26:for(P.length%2&&(S+=P.shift());0<P.length;)n=S,a=O+P.shift(),o=n+P.shift(),f=a+P.shift(),S=o,O=f+P.shift(),x(n,a,o,f,S,O);break;case 27:for(P.length%2&&(O+=P.shift());0<P.length;)n=S+P.shift(),a=O,o=n+P.shift(),f=a+P.shift(),S=o+P.shift(),x(n,a,o,O=f,S,O);break;case 28:P.push((e[r]<<24|e[r+1]<<16)>>16),r+=2;break;case 29:l=P.pop()+k.gsubrsBias,(u=k.gsubrs[l])&&t(u);break;case 30:for(;0<P.length&&(n=S,a=O+P.shift(),o=n+P.shift(),f=a+P.shift(),S=o+P.shift(),O=f+(1===P.length?P.shift():0),x(n,a,o,f,S,O),0!==P.length);)n=S+P.shift(),a=O,o=n+P.shift(),f=a+P.shift(),O=f+P.shift(),x(n,a,o,f,S=o+(1===P.length?P.shift():0),O);break;case 31:for(;0<P.length&&(n=S+P.shift(),a=O,o=n+P.shift(),f=a+P.shift(),O=f+P.shift(),x(n,a,o,f,S=o+(1===P.length?P.shift():0),O),0!==P.length);)n=S,a=O+P.shift(),o=n+P.shift(),f=a+P.shift(),S=o+P.shift(),O=f+(1===P.length?P.shift():0),x(n,a,o,f,S,O);break;default:if(i<32)throw new _util.FormatError("unknown operator: ".concat(i));i<247?P.push(i-139):i<251?P.push(256*(i-247)+e[r++]+108):i<255?P.push(256*-(i-251)-e[r++]-108):(P.push((e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3])/65536),r+=4)}s&&(P.length=0)}}(t)}var n=[],e=function(){function e(t){_classCallCheck(this,e),this.constructor===e&&(0,_util.unreachable)("Cannot initialize CompiledFont."),this.fontMatrix=t,this.compiledGlyphs=Object.create(null),this.compiledCharCodeToGlyphId=Object.create(null)}return _createClass(e,[{key:"getPathJs",value:function(t){var e=T(this.cmap,t),r=this.compiledGlyphs[e.glyphId];return r||(r=this.compileGlyph(this.glyphs[e.glyphId],e.glyphId),this.compiledGlyphs[e.glyphId]=r),void 0===this.compiledCharCodeToGlyphId[e.charCode]&&(this.compiledCharCodeToGlyphId[e.charCode]=e.glyphId),r}},{key:"compileGlyph",value:function(t,e){if(!t||0===t.length||14===t[0])return n;var r=this.fontMatrix;if(this.isCFFCIDFont){var s=this.fdSelect.getFDIndex(e);if(0<=s&&s<this.fdArray.length)r=this.fdArray[s].getByName("FontMatrix")||_util.FONT_IDENTITY_MATRIX;else(0,_util.warn)("Invalid fd index for glyph index.")}var i=[];return i.push({cmd:"save"}),i.push({cmd:"transform",args:r.slice()}),i.push({cmd:"scale",args:["size","-size"]}),this.compileGlyphImpl(t,i,e),i.push({cmd:"restore"}),i}},{key:"compileGlyphImpl",value:function(){(0,_util.unreachable)("Children classes should implement this.")}},{key:"hasBuiltPath",value:function(t){var e=T(this.cmap,t);return void 0!==this.compiledGlyphs[e.glyphId]&&void 0!==this.compiledCharCodeToGlyphId[e.charCode]}}]),e}(),F=function(t){_inherits(n,e);var i=_createSuper(n);function n(t,e,r){var s;return _classCallCheck(this,n),(s=i.call(this,r||[488e-6,0,0,488e-6,0,0])).glyphs=t,s.cmap=e,s}return _createClass(n,[{key:"compileGlyphImpl",value:function(t,e){!function t(e,i,r){function s(t,e,r,s){i.push({cmd:"quadraticCurveTo",args:[t,e,r,s]})}var n,o,a,f,h,c=0,l=(e[c]<<24|e[c+1]<<16)>>16,u=0,p=0;if(c+=10,l<0)do{n=e[c]<<8|e[c+1];var d=e[c+2]<<8|e[c+3];c+=4;var y=void 0,g=void 0;1&n?(y=(e[c]<<24|e[c+1]<<16)>>16,g=(e[c+2]<<24|e[c+3]<<16)>>16,c+=4):(y=e[c++],g=e[c++]),p=2&n?(u=y,g):u=0;var b=1,v=1,m=0,_=0;8&n?(b=v=(e[c]<<24|e[c+1]<<16)/1073741824,c+=2):64&n?(b=(e[c]<<24|e[c+1]<<16)/1073741824,v=(e[c+2]<<24|e[c+3]<<16)/1073741824,c+=4):128&n&&(b=(e[c]<<24|e[c+1]<<16)/1073741824,m=(e[c+2]<<24|e[c+3]<<16)/1073741824,_=(e[c+4]<<24|e[c+5]<<16)/1073741824,v=(e[c+6]<<24|e[c+7]<<16)/1073741824,c+=8);var C=r.glyphs[d];C&&(i.push({cmd:"save"}),i.push({cmd:"transform",args:[b,m,_,v,u,p]}),t(C,i,r),i.push({cmd:"restore"}))}while(32&n);else{var k,I,F=[];for(k=0;k<l;k++)F.push(e[c]<<8|e[c+1]),c+=2;c+=2+(e[c]<<8|e[c+1]);for(var w=F[F.length-1]+1,x=[];x.length<w;){var P=1;for(8&(n=e[c++])&&(P+=e[c++]);0<P--;)x.push({flags:n})}for(k=0;k<w;k++){switch(18&x[k].flags){case 0:u+=(e[c]<<24|e[c+1]<<16)>>16,c+=2;break;case 2:u-=e[c++];break;case 18:u+=e[c++]}x[k].x=u}for(k=0;k<w;k++){switch(36&x[k].flags){case 0:p+=(e[c]<<24|e[c+1]<<16)>>16,c+=2;break;case 4:p-=e[c++];break;case 36:p+=e[c++]}x[k].y=p}var S=0;for(c=0;c<l;c++){var O=F[c],j=x.slice(S,O+1);if(1&j[0].flags)j.push(j[0]);else if(1&j[j.length-1].flags)j.unshift(j[j.length-1]);else{var D={flags:1,x:(j[0].x+j[j.length-1].x)/2,y:(j[0].y+j[j.length-1].y)/2};j.unshift(D),j.push(D)}for(f=j[0].x,h=j[0].y,i.push({cmd:"moveTo",args:[f,h]}),k=1,I=j.length;k<I;k++)1&j[k].flags?(o=j[k].x,a=j[k].y,i.push({cmd:"lineTo",args:[o,a]})):1&j[k+1].flags?(s(j[k].x,j[k].y,j[k+1].x,j[k+1].y),k++):s(j[k].x,j[k].y,(j[k].x+j[k+1].x)/2,(j[k].y+j[k+1].y)/2);S=O+1}}}(t,e,this)}}]),n}(),w=function(t){_inherits(o,e);var n=_createSuper(o);function o(t,e,r,s){var i;return _classCallCheck(this,o),(i=n.call(this,r||[.001,0,0,.001,0,0])).glyphs=t.glyphs,i.gsubrs=t.gsubrs||[],i.subrs=t.subrs||[],i.cmap=e,i.glyphNameMap=s||(0,_glyphlist.getGlyphsUnicode)(),i.gsubrsBias=D(i.gsubrs),i.subrsBias=D(i.subrs),i.isCFFCIDFont=t.isCFFCIDFont,i.fdSelect=t.fdSelect,i.fdArray=t.fdArray,i}return _createClass(o,[{key:"compileGlyphImpl",value:function(t,e,r){G(t,e,this,r)}}]),o}();return{create:function(t,e){for(var r,s,i,n,o,a,f,h,c,l,u,p=new Uint8Array(t.data),d=k(p,4),y=0,g=12;y<d;y++,g+=16){var b=(0,_util.bytesToString)(p.subarray(g,g+4)),v=C(p,g+8),m=C(p,g+12);switch(b){case"cmap":r=I(p,v);break;case"glyf":s=p.subarray(v,v+m);break;case"loca":i=p.subarray(v,v+m);break;case"head":a=k(p,v+18),o=k(p,v+50);break;case"CFF ":f=p,c=(h=v)+m,l=e,void 0,n={glyphs:(u=new _cff_parser.CFFParser(new _stream.Stream(f,h,c-h),{},l).parse()).charStrings.objects,subrs:u.topDict.privateDict&&u.topDict.privateDict.subrsIndex&&u.topDict.privateDict.subrsIndex.objects,gsubrs:u.globalSubrIndex&&u.globalSubrIndex.objects,isCFFCIDFont:u.isCIDFont,fdSelect:u.fdSelect,fdArray:u.fdArray}}}if(s){var _=a?[1/a,0,0,1/a,0,0]:t.fontMatrix;return new F(function(t,e,r){for(var s,i,n=[],o=(i=r?(s=4,function(t,e){return t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}):(s=2,function(t,e){return t[e]<<9|t[e+1]<<1}))(e,0),a=s;a<e.length;a+=s){var f=i(e,a);n.push(t.subarray(o,f)),o=f}return n}(s,i,o),r,_)}return new w(n,r,t.fontMatrix,t.glyphNameMap)}}}();exports.FontRendererFactory=FontRendererFactory;