"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.JpxStream=void 0;var _stream=require("./stream.js"),_jpx=require("./jpx.js"),_util=require("../shared/util.js"),JpxStream=function(){function e(e,t,r,s){this.stream=e,this.maybeLength=t,this.dict=r,this.params=s,_stream.DecodeStream.call(this,t)}return e.prototype=Object.create(_stream.DecodeStream.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return(0,_util.shadow)(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){},e.prototype.readBlock=function(){if(!this.eof){var e=new _jpx.JpxImage;e.parse(this.bytes);var t=e.width,r=e.height,s=e.componentsCount,i=e.tiles.length;if(1===i)this.buffer=e.tiles[0].items;else{for(var a=new Uint8ClampedArray(t*r*s),o=0;o<i;o++)for(var h=e.tiles[o],p=h.width,n=h.height,f=h.left,u=h.top,m=h.items,c=0,l=(t*u+f)*s,y=t*s,b=p*s,d=0;d<n;d++){var g=m.subarray(c,c+b);a.set(g,l),c+=b,l+=y}this.buffer=a}this.bufferLength=this.buffer.length,this.eof=!0}},e}();exports.JpxStream=JpxStream;