"use strict";!function(c){c.fn.qrcode=function(h){var r;function e(t){this.mode=r,this.data=t}function l(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function g(t,e){if(null==t.length)throw Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function f(t,e){this.totalCount=t,this.dataCount=e}function s(){this.buffer=[],this.length=0}e.prototype={getLength:function(){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},l.prototype={addData:function(t){this.dataList.push(new e(t)),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=f.getRSBlocks(t,this.errorCorrectLevel),r=new s,o=0,n=0;n<e.length;n++)o+=e[n].dataCount;for(n=0;n<this.dataList.length;n++)e=this.dataList[n],r.put(e.mode,4),r.put(e.getLength(),d.getLengthInBits(e.mode,t)),e.write(r);if(r.getLengthInBits()<=8*o)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),7<=this.typeNumber&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=l.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=d.getLostPoint(this);(0==r||o<t)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){for(t=t.createEmptyMovieClip(e,r),this.make(),e=0;e<this.modules.length;e++){r=1*e;for(var o=0;o<this.modules[e].length;o++){var n=1*o;this.modules[e][o]&&(t.beginFill(0,100),t.moveTo(n,r),t.lineTo(n+1,r),t.lineTo(n+1,r+1),t.lineTo(n,r+1),t.endFill())}}return t},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=0==t%2);for(t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=0==t%2)},setupPositionAdjustPattern:function(){for(var t=d.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;i<=2;i++)for(var s=-2;s<=2;s++)this.modules[o+i][n+s]=-2==i||2==i||-2==s||2==s||0==i&&0==s}},setupTypeNumber:function(t){for(var e=d.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;r<18;r++)o=!t&&1==(e>>r&1),this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o},setupTypeInfo:function(t,e){for(var r=d.getBCHTypeInfo(this.errorCorrectLevel<<3|e),o=0;o<15;o++){var n=!t&&1==(r>>o&1);o<6?this.modules[o][8]=n:o<8?this.modules[o+1][8]=n:this.modules[this.moduleCount-15+o][8]=n}for(o=0;o<15;o++)n=!t&&1==(r>>o&1),o<8?this.modules[8][this.moduleCount-o-1]=n:o<9?this.modules[8][15-o-1+1]=n:this.modules[8][15-o-1]=n;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,s=this.moduleCount-1;0<s;s-=2)for(6==s&&s--;;){for(var u=0;u<2;u++)if(null==this.modules[o][s-u]){var a=!1;i<t.length&&(a=1==(t[i]>>>n&1)),d.getMask(e,o,s-u)&&(a=!a),this.modules[o][s-u]=a,-1==--n&&(i++,n=7)}if((o+=r)<0||this.moduleCount<=o){o-=r,r=-r;break}}}},l.PAD0=236,l.PAD1=17,l.createData=function(t,e,r){e=f.getRSBlocks(t,e);for(var o=new s,n=0;n<r.length;n++){var i=r[n];o.put(i.mode,4),o.put(i.getLength(),d.getLengthInBits(i.mode,t)),i.write(o)}for(n=t=0;n<e.length;n++)t+=e[n].dataCount;if(o.getLengthInBits()>8*t)throw Error("code length overflow. ("+o.getLengthInBits()+">"+8*t+")");for(o.getLengthInBits()+4<=8*t&&o.put(0,4);0!=o.getLengthInBits()%8;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*t)&&(o.put(l.PAD0,8),!(o.getLengthInBits()>=8*t));)o.put(l.PAD1,8);return l.createBytes(o,e)},l.createBytes=function(t,e){for(var r=0,o=0,n=0,i=Array(e.length),s=Array(e.length),u=0;u<e.length;u++){var a=e[u].dataCount,h=e[u].totalCount-a;o=Math.max(o,a),n=Math.max(n,h);i[u]=Array(a);for(var l=0;l<i[u].length;l++)i[u][l]=255&t.buffer[l+r];for(r+=a,l=d.getErrorCorrectPolynomial(h),a=new g(i[u],l.getLength()-1).mod(l),s[u]=Array(l.getLength()-1),l=0;l<s[u].length;l++)h=l+a.getLength()-s[u].length,s[u][l]=0<=h?a.get(h):0}for(l=u=0;l<e.length;l++)u+=e[l].totalCount;for(r=Array(u),l=a=0;l<o;l++)for(u=0;u<e.length;u++)l<i[u].length&&(r[a++]=i[u][l]);for(l=0;l<n;l++)for(u=0;u<e.length;u++)l<s[u].length&&(r[a++]=s[u][l]);return r},r=4;for(var d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;0<=d.getBCHDigit(e)-d.getBCHDigit(d.G15);)e^=d.G15<<d.getBCHDigit(e)-d.getBCHDigit(d.G15);return(t<<10|e)^d.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;0<=d.getBCHDigit(e)-d.getBCHDigit(d.G18);)e^=d.G18<<d.getBCHDigit(e)-d.getBCHDigit(d.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return d.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case 0:return 0==(e+r)%2;case 1:return 0==e%2;case 2:return 0==r%3;case 3:return 0==(e+r)%3;case 4:return 0==(Math.floor(e/2)+Math.floor(r/3))%2;case 5:return 0==e*r%2+e*r%3;case 6:return 0==(e*r%2+e*r%3)%2;case 7:return 0==(e*r%3+(e+r)%2)%2;default:throw Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new g([1],0),r=0;r<t;r++)e=e.multiply(new g([1,n.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case 1:return 10;case 2:return 9;case r:case 8:return 8;default:throw Error("mode:"+t)}else if(e<27)switch(t){case 1:return 12;case 2:return 11;case r:return 16;case 8:return 10;default:throw Error("mode:"+t)}else{if(!(e<41))throw Error("type:"+e);switch(t){case 1:return 14;case 2:return 13;case r:return 16;case 8:return 12;default:throw Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,s=t.isDark(o,n),u=-1;u<=1;u++)if(!(o+u<0||e<=o+u))for(var a=-1;a<=1;a++)n+a<0||e<=n+a||0==u&&0==a||s==t.isDark(o+u,n+a)&&i++;5<i&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++)i=0,t.isDark(o,n)&&i++,t.isDark(o+1,n)&&i++,t.isDark(o,n+1)&&i++,t.isDark(o+1,n+1)&&i++,(0==i||4==i)&&(r+=3);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);for(n=i=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&i++;return r+10*(t=Math.abs(100*i/e/e-50)/5)}},n={glog:function(t){if(t<1)throw Error("glog("+t+")");return n.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;256<=t;)t-=255;return n.EXP_TABLE[t]},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},t=0;t<8;t++)n.EXP_TABLE[t]=1<<t;for(t=8;t<256;t++)n.EXP_TABLE[t]=n.EXP_TABLE[t-4]^n.EXP_TABLE[t-5]^n.EXP_TABLE[t-6]^n.EXP_TABLE[t-8];for(t=0;t<255;t++)n.LOG_TABLE[n.EXP_TABLE[t]]=t;return g.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=n.gexp(n.glog(this.get(r))+n.glog(t.get(o)));return new g(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=n.glog(this.get(0))-n.glog(t.get(0)),r=Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=n.gexp(n.glog(t.get(o))+e);return new g(r,0).mod(t)}},f.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f.getRSBlocks=function(t,e){var r=f.getRsBlockTable(t,e);if(null==r)throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=[],i=0;i<o;i++)for(var s=r[3*i+0],u=r[3*i+1],a=r[3*i+2],h=0;h<s;h++)n.push(new f(u,a));return n},f.getRsBlockTable=function(t,e){switch(e){case 1:return f.RS_BLOCK_TABLE[4*(t-1)+0];case 0:return f.RS_BLOCK_TABLE[4*(t-1)+1];case 3:return f.RS_BLOCK_TABLE[4*(t-1)+2];case 2:return f.RS_BLOCK_TABLE[4*(t-1)+3]}},s.prototype={get:function(t){return 1==(this.buffer[Math.floor(t/8)]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},"string"==typeof h&&(h={text:h}),h=c.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,correctLevel:2,background:"#ffffff",foreground:"#000000"},h),this.each(function(){var t;if("canvas"==h.render){(t=new l(h.typeNumber,h.correctLevel)).addData(h.text),t.make();var e=document.createElement("canvas");e.width=h.width,e.height=h.height;for(var r=e.getContext("2d"),o=h.width/t.getModuleCount(),n=h.height/t.getModuleCount(),i=0;i<t.getModuleCount();i++)for(var s=0;s<t.getModuleCount();s++){r.fillStyle=t.isDark(i,s)?h.foreground:h.background;var u=Math.ceil((s+1)*o)-Math.floor(s*o),a=Math.ceil((i+1)*o)-Math.floor(i*o);r.fillRect(Math.round(s*o),Math.round(i*n),u,a)}}else for((t=new l(h.typeNumber,h.correctLevel)).addData(h.text),t.make(),e=c("<table></table>").css("width",h.width+"px").css("height",h.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",h.background),r=h.width/t.getModuleCount(),o=h.height/t.getModuleCount(),n=0;n<t.getModuleCount();n++)for(i=c("<tr></tr>").css("height",o+"px").appendTo(e),s=0;s<t.getModuleCount();s++)c("<td></td>").css("width",r+"px").css("background-color",t.isDark(n,s)?h.foreground:h.background).appendTo(i);t=e,jQuery(t).appendTo(this)})}}(jQuery);