define(function(){return function(u){function e(e){var n=e[0];var r=e[1];var t=e[2];var o,i,a=0,f=[];for(;a<n.length;a++){i=n[a];if(c[i]){f.push(c[i][0])}c[i]=0}for(o in r){if(Object.prototype.hasOwnProperty.call(r,o)){u[o]=r[o]}}if(s)s(e);while(f.length){f.shift()()}d.push.apply(d,t||[]);return l()}function l(){var e;for(var n=0;n<d.length;n++){var r=d[n];var t=true;for(var o=1;o<r.length;o++){var i=r[o];if(c[i]!==0)t=false}if(t){d.splice(n--,1);e=a(a.s=r[0])}}return e}var r={};var c={3:0};var d=[];function a(e){if(r[e]){return r[e].exports}var n=r[e]={i:e,l:false,exports:{}};u[e].call(n.exports,n,n.exports,a);n.l=true;return n.exports}a.m=u;a.c=r;a.d=function(e,n,r){if(!a.o(e,n)){Object.defineProperty(e,n,{enumerable:true,get:r})}};a.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};a.t=function(n,e){if(e&1)n=a(n);if(e&8)return n;if(e&4&&typeof n==="object"&&n&&n.__esModule)return n;var r=Object.create(null);a.r(r);Object.defineProperty(r,"default",{enumerable:true,value:n});if(e&2&&typeof n!="string")for(var t in n)a.d(r,t,function(e){return n[e]}.bind(null,t));return r};a.n=function(n){var e=n&&n.__esModule?function e(){return n["default"]}:function e(){return n};a.d(e,"a",e);return e};a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)};a.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[];var t=n.push.bind(n);n.push=e;n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var s=t;d.push([27,0]);return l()}({27:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;var t=o(r(15));r(49);r(67);r(68);r(50);r(69);r(70);r(71);r(72);r(44);r(73);r(51);r(74);r(75);r(76);r(77);r(33);r(41);function o(e){return e&&e.__esModule?e:{default:e}}var i=t.default;n.default=i},33:function(e,a,f){"use strict";(function(n){var r,t,o;function i(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){i=function e(n){return typeof n}}else{i=function e(n){return n&&typeof Symbol==="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n}}return i(e)}(function(e){if((false?undefined:i(a))=="object"&&(false?undefined:i(n))=="object")e(f(15));else if(true)!(t=[f(15)],r=e,o=typeof r==="function"?r.apply(a,t):r,o!==undefined&&(n.exports=o));else{}})(function(w){"use strict";w.pgadminKeywordRangeFinder=function(e,n,r,t){var o=n.line,i=e.getLine(o);var a=i.length,f,u;for(;a>0;){var l=i.lastIndexOf(r,a);var c=r;var d=t;if(l<n.ch){l=i.lastIndexOf("[",a);if(l<n.ch)break;c="[";d="]"}u=e.getTokenAt(w.Pos(o,l+1)).type;if(!/^(comment|string)/.test(u)){f=l;break}a=l-1}if(f==null||i.lastIndexOf(c)>f)return;var s=1,p=e.lineCount(),v,g;e:for(var y=o+1;y<p;++y){var b=e.getLine(y),h=0;for(;;){var m=b.indexOf(c,h),O=b.indexOf(d,h);if(m<0)m=b.length;if(O<0)O=b.length;h=Math.min(m,O);if(h==b.length)break;if(e.getTokenAt(w.Pos(y,h+1)).type==u){if(h==m)++s;else if(!--s){v=y;g=h;break e}}++h}}if(v==null||v==o+1)return;return{from:w.Pos(o,f+r.length),to:w.Pos(v,g)}};w.pgadminBeginRangeFinder=function(e,n){var r="BEGIN";var t="END;";var o=w.pgadminKeywordRangeFinder(e,n,r,t);return o};w.pgadminIfRangeFinder=function(e,n){var r="IF";var t="END IF";var o=w.pgadminKeywordRangeFinder(e,n,r,t);return o};w.pgadminLoopRangeFinder=function(e,n){var r="LOOP";var t="END LOOP";var o=w.pgadminKeywordRangeFinder(e,n,r,t);return o};w.pgadminCaseRangeFinder=function(e,n){var r="CASE";var t="END CASE";var o=w.pgadminKeywordRangeFinder(e,n,r,t);return o}})}).call(this,f(22)(e))},41:function(e,n,r){"use strict";var t=o(r(15));function o(e){return e&&e.__esModule?e:{default:e}}t.default.defineExtension("centerOnLine",function(e){var n=this.getScrollInfo().clientHeight;var r=this.charCoords({line:e,ch:0},"local");this.scrollTo(null,(r.top+r.bottom-n)/2)})}})["default"]});