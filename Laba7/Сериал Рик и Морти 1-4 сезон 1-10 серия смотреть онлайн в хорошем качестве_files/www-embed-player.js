(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype}
function oa(){this.o=!1;this.l=null;this.i=void 0;this.h=1;this.u=this.m=0;this.C=this.j=null}
function pa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
oa.prototype.B=function(a){this.i=a};
function qa(a,b){a.j={Ea:b,Fa:!0};a.h=a.m||a.u}
oa.prototype.return=function(a){this.j={return:a};this.h=this.u};
function w(a,b,c){a.h=c;return{value:b}}
oa.prototype.A=function(a){this.h=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.u=c)}
function sa(a){a.m=0;var b=a.j.Ea;a.j=null;return b}
function ta(a){a.C=[a.j];a.m=0;a.u=0}
function ua(a){var b=a.C.splice(0)[0];(b=a.j=a.j||b)?b.Fa?a.h=a.m||a.u:void 0!=b.A&&a.u<b.A?(a.h=b.A,a.j=null):a.h=a.u:a.h=0}
function va(a){this.h=new oa;this.i=a}
function wa(a,b){pa(a.h);var c=a.h.l;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),ya(a)}a.h.l=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Fa)throw b.Ea;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=ya(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l["throw"],b,a.h.B):(qa(a.h,b),b=ya(a));return b};
this.return=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){b=new za(new va(b));na&&a.prototype&&na(b,a.prototype);return b}
r("Reflect",function(a){return a?a:{}});
r("Reflect.construct",function(){return ia});
r("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
r("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Aa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(p){if(p instanceof c)return p;Object.isExtensible(p)&&e(p);return l(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),p=new a([[k,2],[l,3]]);if(2!=p.get(k)||3!=p.get(l))return!1;p.delete(k);p.set(l,4);return!p.has(k)&&4==p.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Aa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Aa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var p=h.i[l];if(p&&Aa(h.i,l))for(h=0;h<p.length;h++){var n=p[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:p,index:h,H:n}}return{id:l,list:p,index:-1,H:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),p=l.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=l.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.H?l.H.value=k:(l.H={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.H),this.h.previous.next=l.H,this.h.previous=l.H,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.H&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.H.previous.next=h.H.next,h.H.next.previous=h.H.previous,h.H.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).H};
e.prototype.get=function(h){return(h=d(this,h).H)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),p;!(p=l.next()).done;)p=p.value,h.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Object.setPrototypeOf",function(a){return a||na});
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Aa(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||Ca});
r("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(p){k||(k=!0,l.call(h,p))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.u)}};
b.prototype.K=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.P(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.m(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.ba(h,g):this.m(g)};
b.prototype.u=function(g){this.B(2,g)};
b.prototype.m=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.L();this.C()};
b.prototype.L=function(){var g=this;e(function(){if(g.F()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.P=function(g){var h=this.l();g.ia(h.resolve,h.reject)};
b.prototype.ba=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,q){return"function"==typeof t?function(B){try{l(t(B))}catch(I){p(I)}}:q}
var l,p,n=new b(function(t,q){l=t;p=q});
this.ia(k(g,l),k(h,p));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ia=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),p=l.next();!p.done;p=l.next())d(p.value).ia(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,p){function n(B){return function(I){t[B]=I;q--;0==q&&l(t)}}
var t=[],q=0;do t.push(void 0),q++,d(k.value).ia(n(t.length-1),p),k=h.next();while(!k.done)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push([d,b[d]]);return c}});
r("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
r("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function A(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ea(){}
function Fa(a){a.va=void 0;a.getInstance=function(){return a.va?a.va:a.va=new a}}
function Ga(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ha(a){var b=Ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ja(a){return Object.prototype.hasOwnProperty.call(a,Ka)&&a[Ka]||(a[Ka]=++La)}
var Ka="closure_uid_"+(1E9*Math.random()>>>0),La=0;function Ma(a,b,c){return a.call.apply(a.bind,arguments)}
function Na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Oa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Oa=Ma:Oa=Na;return Oa.apply(null,arguments)}
function Pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Qa(a,b){z(a,b,void 0)}
function C(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Sk=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ra(a){return a}
;function Sa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Sa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.Qa=b)}
C(Sa,Error);Sa.prototype.name="CustomError";function Ta(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Va(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Xa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ya=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Za=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function $a(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ab(a,b){b=Wa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function bb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function cb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ha(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function db(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function eb(a){var b=fb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function gb(a){for(var b in a)return!1;return!0}
function hb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ib(){var a=E("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function jb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function kb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function lb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=lb(a[c]);return b}
var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ob;function pb(){if(void 0===ob){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ra,createScript:Ra,createScriptURL:Ra})}catch(c){y.console&&y.console.error(c.message)}ob=a}else ob=a}return ob}
;var qb={};function rb(a){this.h=qb===qb?a:"";this.Y=!0}
rb.prototype.X=function(){return this.h.toString()};
rb.prototype.toString=function(){return this.h.toString()};function sb(a,b){this.h=b===tb?a:""}
m=sb.prototype;m.Y=!0;m.X=function(){return this.h.toString()};
m.ta=!0;m.qa=function(){return 1};
m.toString=function(){return this.h+""};
function ub(a){if(a instanceof sb&&a.constructor===sb)return a.h;Ga(a);return"type_error:TrustedResourceUrl"}
var tb={};function vb(a){var b=pb();a=b?b.createScriptURL(a):a;return new sb(a,tb)}
;var wb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function xb(a,b){if(b)a=a.replace(yb,"&amp;").replace(zb,"&lt;").replace(Ab,"&gt;").replace(Bb,"&quot;").replace(Cb,"&#39;").replace(Db,"&#0;");else{if(!Eb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(yb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(zb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ab,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Bb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Cb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Db,"&#0;"))}return a}
var yb=/&/g,zb=/</g,Ab=/>/g,Bb=/"/g,Cb=/'/g,Db=/\x00/g,Eb=/[\x00&<>"']/;function Fb(a,b){this.h=b===Gb?a:""}
m=Fb.prototype;m.Y=!0;m.X=function(){return this.h.toString()};
m.ta=!0;m.qa=function(){return 1};
m.toString=function(){return this.h.toString()};
function Hb(a){if(a instanceof Fb&&a.constructor===Fb)return a.h;Ga(a);return"type_error:SafeUrl"}
var Ib=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Jb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Kb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Lb(a){if(a instanceof Fb)return a;a="object"==typeof a&&a.Y?a.X():String(a);Kb.test(a)||(a="about:invalid#zClosurez");return new Fb(a,Gb)}
var Gb={},Mb=new Fb("about:invalid#zClosurez",Gb);var Nb;a:{var Ob=y.navigator;if(Ob){var Pb=Ob.userAgent;if(Pb){Nb=Pb;break a}}Nb=""}function F(a){return-1!=Nb.indexOf(a)}
;function Qb(a,b,c){this.h=c===Rb?a:"";this.i=b}
m=Qb.prototype;m.ta=!0;m.qa=function(){return this.i};
m.Y=!0;m.X=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Rb={};function Sb(a,b){var c=pb();a=c?c.createHTML(a):a;return new Qb(a,b,Rb)}
;function Tb(a,b){b=b instanceof Fb?b:Lb(b);a.href=Hb(b)}
function Ub(a,b){a.rel="stylesheet";a.href=ub(b).toString();(b=a.ownerDocument&&a.ownerDocument.defaultView)&&b!=y?b=Vb(b.document,"style"):(null===Wb&&(Wb=Vb(y.document,"style")),b=Wb);b&&a.setAttribute("nonce",b)}
function Xb(){null===Yb&&(Yb=Vb(y.document,"script"));return Yb}
var Yb=null,Wb=null,Zb=/^[\w+/_-]+[=]{0,2}$/;function Vb(a,b){if(!a.querySelector)return"";var c=a.querySelector(b+"[nonce]");c||"style"!=b||(c=a.querySelector('link[rel="stylesheet"][nonce]'));return c&&(a=c.nonce||c.getAttribute("nonce"))&&Zb.test(a)?a:""}
;function $b(a){return a=xb(a,void 0)}
function ac(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var bc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function cc(a){return a?decodeURI(a):a}
function dc(a){return cc(a.match(bc)[3]||null)}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function gc(a,b){b=fc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var hc=/#|$/;function G(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function ic(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function jc(a){jc[" "](a);return a}
jc[" "]=Ea;var kc=F("Opera"),lc=F("Trident")||F("MSIE"),mc=F("Edge"),nc=F("Gecko")&&!(-1!=Nb.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),oc=-1!=Nb.toLowerCase().indexOf("webkit")&&!F("Edge");function pc(){var a=y.document;return a?a.documentMode:void 0}
var qc;a:{var rc="",sc=function(){var a=Nb;if(nc)return/rv:([^\);]+)(\)|;)/.exec(a);if(mc)return/Edge\/([\d\.]+)/.exec(a);if(lc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(oc)return/WebKit\/(\S+)/.exec(a);if(kc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
sc&&(rc=sc?sc[1]:"");if(lc){var tc=pc();if(null!=tc&&tc>parseFloat(rc)){qc=String(tc);break a}}qc=rc}var uc=qc,vc;if(y.document&&lc){var wc=pc();vc=wc?wc:parseInt(uc,10)||void 0}else vc=void 0;var xc=vc;var yc=ic()||F("iPod"),zc=F("iPad"),Ac=F("Safari")&&!((F("Chrome")||F("CriOS"))&&!F("Edge")||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(ic()||F("iPad")||F("iPod"));var Bc={},Cc=null;
function Dc(a){var b=3;Ha(a);void 0===b&&(b=0);if(!Cc){Cc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Bc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Cc[h]&&(Cc[h]=g)}}}b=Bc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var H=window;var Ec=!lc||9<=Number(xc);function Fc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Fc.prototype;m.clone=function(){return new Fc(this.x,this.y)};
m.equals=function(a){return a instanceof Fc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Gc(a,b){this.width=a;this.height=b}
m=Gc.prototype;m.clone=function(){return new Gc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Hc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Ic(a,b){db(b,function(c,d){c&&"object"==typeof c&&c.Y&&(c=c.X());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Jc.hasOwnProperty(d)?a.setAttribute(Jc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Jc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Kc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Ec&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',$b(g.name),'"');if(g.type){f.push(' type="',$b(g.type),'"');var h={};nb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Lc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Ic(f,g));2<d.length&&Mc(e,f,d);return f}
function Mc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ha(f)||Ia(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ia(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}D(g?bb(f):f,d)}}}
function Lc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Nc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Oc(a){var b=Pc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Qc(){var a=[];Oc(function(b){a.push(b)});
return a}
var Pc={Ib:"allow-forms",Jb:"allow-modals",Kb:"allow-orientation-lock",Lb:"allow-pointer-lock",Mb:"allow-popups",Nb:"allow-popups-to-escape-sandbox",Ob:"allow-presentation",Pb:"allow-same-origin",Qb:"allow-scripts",Rb:"allow-top-navigation",Sb:"allow-top-navigation-by-user-activation"},Rc=Va(function(){return Qc()});
function Sc(){var a=Lc(document,"IFRAME"),b={};D(Rc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;var Tc=void 0;function Uc(a){var b;return(a=null===(b=a.querySelector)||void 0===b?void 0:b.call(a,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
function Vc(a,b){a.src=ub(b);b=a.ownerDocument&&a.ownerDocument.defaultView;!b||"undefined"!==typeof window&&b===window?(void 0===Tc&&(Tc=Uc(document)),b=Tc):b=Uc(b.document);b&&a.setAttribute("nonce",b)}
;function Wc(a){Xc();return vb(a)}
var Xc=Ea;function Yc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Zc=(new Date).getTime();function $c(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function ad(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(n){for(var t=g,q=0;64>q;q+=4)t[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=t[q-3]^t[q-8]^t[q-14]^t[q-16],t[q]=(n<<1|n>>>31)&4294967295;n=e[0];var B=e[1],I=e[2],J=e[3],U=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var V=J^B&(I^J);var K=1518500249}else V=B^I^J,K=1859775393;else 60>q?(V=B&I|J&(B|I),K=2400959708):(V=B^I^J,K=3395469782);V=((n<<5|n>>>27)&4294967295)+V+U+K+t[q]&4294967295;U=J;J=I;I=(B<<30|B>>>2)&4294967295;B=n;n=V}e[0]=e[0]+n&4294967295;e[1]=e[1]+B&4294967295;e[2]=
e[2]+I&4294967295;e[3]=e[3]+J&4294967295;e[4]=e[4]+U&4294967295}
function c(n,t){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],B=0,I=n.length;B<I;++B)q.push(n.charCodeAt(B));n=q}t||(t=n.length);q=0;if(0==l)for(;q+64<t;)b(n.slice(q,q+64)),q+=64,p+=64;for(;q<t;)if(f[l++]=n[q++],p++,64==l)for(l=0,b(f);q+64<t;)b(n.slice(q,q+64)),q+=64,p+=64}
function d(){var n=[],t=8*p;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=t&255,t>>>=8;b(f);for(q=t=0;5>q;q++)for(var B=24;0<=B;B-=8)n[t++]=e[q]>>B&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,p;a();return{reset:a,update:c,digest:d,Ra:function(){for(var n=d(),t="",q=0;q<n.length;q++)t+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return t}}}
;function bd(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,cd($c(d),a,c||null)].join(" "):null}
function cd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),dd(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=dd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function dd(a){var b=ad();b.update(a);return b.Ra().toLowerCase()}
;var ed={};function fd(a){this.h=a||{cookie:""}}
m=fd.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{wa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Zk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.wa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=wb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{wa:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=wb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var gd=new fd("undefined"==typeof document?null:document);function hd(a){return!!ed.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function id(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;hd(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new fd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");hd(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function jd(a,b,c,d){(a=y[a])||(a=(new fd(document)).get(b));return a?bd(a,c,d):null}
function kd(a){var b=void 0===b?!1:b;var c=$c(String(y.location.href)),d=[];if(id(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new fd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?bd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&hd(b)&&((b=jd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=jd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function ld(){this.h=[];this.i=-1}
ld.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.i=-1)};
ld.prototype.get=function(a){return!!this.h[a]};
function md(a){-1==a.i&&(a.i=Za(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function nd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
nd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function od(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var pd;
function qd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Lc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Oa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ba;c.Ba=null;e()}};
return function(e){d.next={Ba:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function rd(a){y.setTimeout(function(){throw a;},0)}
;function sd(){this.i=this.h=null}
sd.prototype.add=function(a,b){var c=td.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
sd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var td=new nd(function(){return new ud},function(a){return a.reset()});
function ud(){this.next=this.scope=this.h=null}
ud.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
ud.prototype.reset=function(){this.next=this.scope=this.h=null};function vd(a,b){wd||xd();yd||(wd(),yd=!0);zd.add(a,b)}
var wd;function xd(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);wd=function(){a.then(Ad)}}else wd=function(){var b=Ad;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!F("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(pd||(pd=qd()),pd(b)):y.setImmediate(b)}}
var yd=!1,zd=new sd;function Ad(){for(var a;a=zd.remove();){try{a.h.call(a.scope)}catch(b){rd(b)}od(td,a)}yd=!1}
;function Bd(){this.blockSize=-1}
;function Cd(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
C(Cd,Bd);Cd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Dd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Cd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(0==f)for(;d<=c;)Dd(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Dd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Dd(this,e);f=0;break}}this.i=f;this.l+=b}};
Cd.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.u[c]=b&255,b/=256;Dd(this,this.u);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ed(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Fd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Gd[c])c=Gd[c];else{c=String(c);if(!Gd[c]){var f=/function\s+([^\(]+)/m.exec(c);Gd[c]=f?f[1]:"[Anonymous]"}c=Gd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Fd(a,b){b||(b={});b[Hd(a)]=!0;var c=a.stack||"";(a=a.Qa)&&!b[Hd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Fd(a,b));return c}
function Hd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Gd={};function Id(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Jd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ha(d)?Jd.apply(null,d):Id(d)}}
;function L(){this.h=this.h;this.u=this.u}
L.prototype.h=!1;L.prototype.dispose=function(){this.h||(this.h=!0,this.D())};
function Kd(a,b){a.h?b():(a.u||(a.u=[]),a.u.push(b))}
L.prototype.D=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function Ld(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Md(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Nd(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ld(a).match(/\S+/g)||[],b=0<=Wa(a,b));return b}
function Od(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Nd(a,"inverted-hdpi")&&Md(a,Xa(a.classList?a.classList:Ld(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Pd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Qd(){}
Qd.prototype.next=function(){throw Pd;};
Qd.prototype.N=function(){return this};function Rd(a,b){this.i={};this.h=[];this.V=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Rd)for(c=Sd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Sd(a){Td(a);return a.h.concat()}
m=Rd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;b=b||Ud;Td(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Ud(a,b){return a===b}
m.isEmpty=function(){return 0==this.j};
m.clear=function(){this.i={};this.V=this.j=this.h.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.j--,this.V++,this.h.length>2*this.j&&Td(this),!0):!1};
function Td(a){if(a.j!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.j!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.j++,this.h.push(a),this.V++);this.i[a]=b};
m.forEach=function(a,b){for(var c=Sd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Rd(this)};
m.N=function(a){Td(this);var b=0,c=this.V,d=this,e=new Qd;e.next=function(){if(c!=d.V)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Pd;var f=d.h[b++];return a?f:d.i[f]};
return e};var Vd=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ea,b),y.removeEventListener("test",Ea,b)}catch(c){}return a}();function Wd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Wd.prototype.stopPropagation=function(){this.j=!0};
Wd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Xd(a,b){Wd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
C(Xd,Wd);var Yd={2:"touch",3:"pen",4:"mouse"};
Xd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(nc){a:{try{jc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Yd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Xd.M.preventDefault.call(this)};
Xd.prototype.stopPropagation=function(){Xd.M.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Xd.prototype.preventDefault=function(){Xd.M.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Zd="closure_listenable_"+(1E6*Math.random()|0);var $d=0;function ae(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.la=e;this.key=++$d;this.ea=this.ha=!1}
function be(a){a.ea=!0;a.listener=null;a.h=null;a.src=null;a.la=null}
;function ce(a){this.src=a;this.listeners={};this.h=0}
ce.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=de(a,b,d,e);-1<g?(b=a[g],c||(b.ha=!1)):(b=new ae(b,this.src,f,!!d,e),b.ha=c,a.push(b));return b};
ce.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=de(e,b,c,d);return-1<b?(be(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ee(a,b){var c=b.type;c in a.listeners&&ab(a.listeners[c],b)&&(be(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function de(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ea&&f.listener==b&&f.capture==!!c&&f.la==d)return e}return-1}
;var fe="closure_lm_"+(1E6*Math.random()|0),ge={},he=0;function ie(a,b,c,d,e){if(d&&d.once)je(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ie(a,b[f],c,d,e);else c=ke(c),a&&a[Zd]?a.ca(b,c,Ia(d)?!!d.capture:!!d,e):le(a,b,c,!1,d,e)}
function le(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ia(e)?!!e.capture:!!e,h=me(a);h||(a[fe]=h=new ce(a));c=h.add(b,c,d,g,f);if(!c.h){d=ne();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)Vd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(oe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");he++}}
function ne(){function a(c){return b.call(a.src,a.listener,c)}
var b=pe;return a}
function je(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)je(a,b[f],c,d,e);else c=ke(c),a&&a[Zd]?a.j.add(String(b),c,!0,Ia(d)?!!d.capture:!!d,e):le(a,b,c,!0,d,e)}
function qe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)qe(a,b[f],c,d,e);else(d=Ia(d)?!!d.capture:!!d,c=ke(c),a&&a[Zd])?a.j.remove(String(b),c,d,e):a&&(a=me(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=de(b,c,d,e)),(c=-1<a?b[a]:null)&&re(c))}
function re(a){if("number"!==typeof a&&a&&!a.ea){var b=a.src;if(b&&b[Zd])ee(b.j,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(oe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);he--;(c=me(b))?(ee(c,a),0==c.h&&(c.src=null,b[fe]=null)):be(a)}}}
function oe(a){return a in ge?ge[a]:ge[a]="on"+a}
function pe(a,b){if(a.ea)a=!0;else{b=new Xd(b,this);var c=a.listener,d=a.la||a.src;a.ha&&re(a);a=c.call(d,b)}return a}
function me(a){a=a[fe];return a instanceof ce?a:null}
var se="__closure_events_fn_"+(1E9*Math.random()>>>0);function ke(a){if("function"===typeof a)return a;a[se]||(a[se]=function(b){return a.handleEvent(b)});
return a[se]}
;function te(){L.call(this);this.j=new ce(this);this.P=this;this.F=null}
C(te,L);te.prototype[Zd]=!0;te.prototype.addEventListener=function(a,b,c,d){ie(this,a,b,c,d)};
te.prototype.removeEventListener=function(a,b,c,d){qe(this,a,b,c,d)};
function ue(a,b){var c=a.F;if(c){var d=[];for(var e=1;c;c=c.F)d.push(c),++e}a=a.P;c=b.type||b;"string"===typeof b?b=new Wd(b,a):b instanceof Wd?b.target=b.target||a:(e=b,b=new Wd(c,a),nb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=ve(g,c,!0,b)&&e}b.j||(g=b.h=a,e=ve(g,c,!0,b)&&e,b.j||(e=ve(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=ve(g,c,!1,b)&&e}
te.prototype.D=function(){te.M.D.call(this);if(this.j){var a=this.j,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,be(d[e]);delete a.listeners[c];a.h--}}this.F=null};
te.prototype.ca=function(a,b,c,d){return this.j.add(String(a),b,!1,c,d)};
function ve(a,b,c,d){b=a.j.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ea&&g.capture==c){var h=g.listener,k=g.la||g.src;g.ha&&ee(a.j,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function we(a){if(a instanceof xe||a instanceof ye||a instanceof ze)return a;if("function"==typeof a.next)return new xe(function(){return Ae(a)});
if("function"==typeof a[Symbol.iterator])return new xe(function(){return a[Symbol.iterator]()});
if("function"==typeof a.N)return new xe(function(){return Ae(a.N())});
throw Error("Not an iterator or iterable.");}
function Ae(a){if(!(a instanceof Qd))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.next();break}catch(d){if(d!==Pd)throw d;b=!0}return{value:c,done:b}}}}
function xe(a){this.h=a}
xe.prototype.N=function(){return new ye(this.h())};
xe.prototype[Symbol.iterator]=function(){return new ze(this.h())};
xe.prototype.i=function(){return new ze(this.h())};
function ye(a){this.h=a}
v(ye,Qd);ye.prototype.next=function(){var a=this.h.next();if(a.done)throw Pd;return a.value};
ye.prototype[Symbol.iterator]=function(){return new ze(this.h)};
ye.prototype.i=function(){return new ze(this.h)};
function ze(a){xe.call(this,function(){return a});
this.j=a}
v(ze,xe);ze.prototype.next=function(){return this.j.next()};function Be(a){var b=[];Ce(new De,a,b);return b.join("")}
function De(){}
function Ce(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ce(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ee(d,c),c.push(":"),Ce(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ee(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Fe={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ge=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ee(a,b){b.push('"',a.replace(Ge,function(c){var d=Fe[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Fe[c]=d);return d}),'"')}
;function He(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Ie(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.u=this.m=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){Je(b,2,c)},function(c){Je(b,3,c)})}catch(c){Je(this,3,c)}}
function Ke(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Ke.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Le=new nd(function(){return new Ke},function(a){a.reset()});
function Me(a,b,c){var d=Le.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Ne(a){return new Ie(function(b,c){c(a)})}
Ie.prototype.then=function(a,b,c){return Oe(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ie.prototype.$goog_Thenable=!0;function Pe(a,b){return Oe(a,null,b,void 0)}
Ie.prototype.cancel=function(a){if(0==this.h){var b=new Qe(a);vd(function(){Re(this,b)},this)}};
function Re(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Re(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Se(c),Te(c,e,3,b)))}a.j=null}else Je(a,3,b)}
function Ue(a,b){a.i||2!=a.h&&3!=a.h||Ve(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Oe(a,b,c,d){var e=Me(null,null,null);e.h=new Ie(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Qe?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Ue(a,e);return e.h}
Ie.prototype.C=function(a){this.h=0;Je(this,2,a)};
Ie.prototype.F=function(a){this.h=0;Je(this,3,a)};
function Je(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.F;if(d instanceof Ie){Ue(d,Me(e||Ea,f||null,a));var g=!0}else if(He(d))d.then(e,f,a),g=!0;else{if(Ia(d))try{var h=d.then;if("function"===typeof h){We(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.h=b,a.j=null,Ve(a),3!=b||c instanceof Qe||Xe(a,c))}}
function We(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ve(a){a.m||(a.m=!0,vd(a.B,a))}
function Se(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Ie.prototype.B=function(){for(var a;a=Se(this);)Te(this,a,this.h,this.o);this.m=!1};
function Te(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.u;a=a.j)a.u=!1;if(b.h)b.h.j=null,Ye(b,c,d);else try{b.j?b.i.call(b.context):Ye(b,c,d)}catch(e){Ze.call(null,e)}od(Le,b)}
function Ye(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Xe(a,b){a.u=!0;vd(function(){a.u&&Ze.call(null,b)})}
var Ze=rd;function Qe(a){Sa.call(this,a)}
C(Qe,Sa);Qe.prototype.name="cancel";function M(a){L.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.B=!!a}
C(M,L);m=M.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function $e(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=$a(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.da(b)}}
m.da=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ea):(c&&ab(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.W=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];af(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.da(c)}}return 0!=e}return!1};
function af(a,b,c){vd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(D(b,this.da,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.D=function(){M.M.D.call(this);this.clear();this.l.length=0};function bf(a){this.h=a}
bf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Be(b))};
bf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
bf.prototype.remove=function(a){this.h.remove(a)};function cf(a){this.h=a}
C(cf,bf);function df(a){this.data=a}
function ef(a){return void 0===a||a instanceof df?a:new df(a)}
cf.prototype.set=function(a,b){cf.M.set.call(this,a,ef(b))};
cf.prototype.i=function(a){a=cf.M.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
cf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ff(a){this.h=a}
C(ff,cf);ff.prototype.set=function(a,b,c){if(b=ef(b)){if(c){if(c<Date.now()){ff.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}ff.M.set.call(this,a,b)};
ff.prototype.i=function(a){var b=ff.M.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())ff.prototype.remove.call(this,a);else return b}};function gf(){}
;function hf(){}
C(hf,gf);hf.prototype[Symbol.iterator]=function(){return we(this.N(!0)).i()};
hf.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function jf(a){this.h=a}
C(jf,hf);m=jf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.N=function(a){var b=0,c=this.h,d=new Qd;d.next=function(){if(b>=c.length)throw Pd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function kf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
C(kf,jf);function lf(a,b){this.i=a;this.h=null;if(lc&&!(9<=Number(xc))){mf||(mf=new Rd);this.h=mf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),mf.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
C(lf,hf);var nf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},mf=null;function of(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return nf[b]})}
m=lf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(of(a),b);pf(this)};
m.get=function(a){a=this.h.getAttribute(of(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(of(a));pf(this)};
m.N=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Qd;d.next=function(){if(b>=c.length)throw Pd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);pf(this)};
function pf(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function qf(a,b){this.i=a;this.h=b+"::"}
C(qf,hf);qf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
qf.prototype.get=function(a){return this.i.get(this.h+a)};
qf.prototype.remove=function(a){this.i.remove(this.h+a)};
qf.prototype.N=function(a){var b=this.i.N(!0),c=this,d=new Qd;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function rf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var sf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",sf,void 0);function N(a){rf(sf,arguments)}
function E(a,b){return a in sf?sf[a]:b}
;var tf=[];function uf(a){tf.forEach(function(b){return b(a)})}
function vf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){wf(b)}}:a}
function wf(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=E("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),N("ERRORS",b));uf(a)}
function xf(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=E("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),N("ERRORS",b))}
;var yf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",yf,void 0);function zf(a){rf(yf,arguments)}
;function O(a){a=Af(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Bf(a,b){a=Af(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Af(a){var b=E("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:E("EXPERIMENT_FLAGS",{})[a]}
;var Cf=0,Df=oc?"webkit":nc?"moz":lc?"ms":kc?"o":"";z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++Cf},void 0);var Ef={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ff(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Ef||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Gf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Ff.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ff.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ff.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var fb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",fb,void 0);var Hf=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",Hf,void 0);
function If(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return eb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ia(e[4])&&Ia(d)&&jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Jf=Va(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Kf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=If(a,b,c,d);if(e)return e;e=++Hf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Ff(h);if(!Nc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Ff(h);
h.currentTarget=a;return c.call(a,h)};
g=vf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Jf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);fb[e]=[a,b,c,g,d];return e}
function Lf(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in fb){var c=fb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Jf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete fb[b]}}))}
;var Mf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Nf(a,b){"function"===typeof a&&(a=vf(a));return window.setTimeout(a,b)}
function Of(a){window.clearTimeout(a)}
;function Pf(a){this.C=a;this.i=null;this.m=0;this.B=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.J=Kf(window,"mousemove",Oa(this.K,this));a=Oa(this.F,this);"function"===typeof a&&(a=vf(a));this.L=window.setInterval(a,25)}
C(Pf,L);Pf.prototype.K=function(a){void 0===a.h&&Gf(a);var b=a.h;void 0===a.i&&Gf(a);this.i=new Fc(b,a.i)};
Pf.prototype.F=function(){if(this.i){var a=Mf();if(0!=this.m){var b=this.B,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.o=d}this.m=a;this.B=this.i;this.l=(this.l+1)%4}};
Pf.prototype.D=function(){window.clearInterval(this.L);Lf(this.J)};function Qf(){}
function Rf(a,b){return Sf(a,0,b)}
function Tf(a,b){return Sf(a,1,b)}
;function Uf(){Qf.apply(this,arguments)}
v(Uf,Qf);function Sf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Nf(a,c||0)}
function Vf(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):Of(a)}}
Uf.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Uf.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};Uf.h||(Uf.h=new Uf);var Wf={};
function Xf(a){var b=void 0===a?{}:a;a=void 0===b.Wa?!0:b.Wa;b=void 0===b.kb?!1:b.kb;if(null==A("_lact",window)){var c=parseInt(E("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&Yf();Kf(document,"keydown",Yf);Kf(document,"keyup",Yf);Kf(document,"mousedown",Yf);Kf(document,"mouseup",Yf);a&&(b?Kf(window,"touchmove",function(){Zf("touchmove",200)},{passive:!0}):(Kf(window,"resize",function(){Zf("resize",200)}),Kf(window,"scroll",function(){Zf("scroll",200)})));
new Pf(function(){Zf("mouse",100)});
Kf(document,"touchstart",Yf,{passive:!0});Kf(document,"touchend",Yf,{passive:!0})}}
function Zf(a,b){Wf[a]||(Wf[a]=!0,Tf(function(){Yf();Wf[a]=!1},b))}
function Yf(){null==A("_lact",window)&&Xf();var a=Date.now();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function $f(){var a=A("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function ag(){var a=bg;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function cg(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var dg=/^[\w.]*$/,eg={q:!0,search_query:!0};function fg(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=gg(f[0]||""),h=gg(f[1]||"");g in c?Array.isArray(c[g])?cb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],p=String(fg);k.args=[{key:l,value:f[1],query:a,method:hg==p?"unchanged":p}];eg.hasOwnProperty(l)||xf(k)}}return c}
var hg=String(fg);function ig(a){var b=[];db(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function jg(a){"?"==a.charAt(0)&&(a=a.substr(1));return fg(a,"&")}
function kg(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),jg(1<a.length?a[1]:a[0])):{}}
function lg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=jg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return gc(a,e)+d}
function mg(a){if(!b)var b=window.location.href;var c=a.match(bc)[1]||null,d=dc(a);c&&d?(a=a.match(bc),b=b.match(bc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?dc(b)==d&&(Number(b.match(bc)[4]||null)||null)==(Number(a.match(bc)[4]||null)||null):!0;return a}
function gg(a){return a&&a.match(dg)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ng(a){var b=og;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Zc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ua){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?H:g;try{var h=g.history.length}catch(Ua){h=0}e.u_his=h;e.u_java=!!H.navigator&&"unknown"!==typeof H.navigator.javaEnabled&&!!H.navigator.javaEnabled&&H.navigator.javaEnabled();H.screen&&(e.u_h=H.screen.height,e.u_w=H.screen.width,
e.u_ah=H.screen.availHeight,e.u_aw=H.screen.availWidth,e.u_cd=H.screen.colorDepth);H.navigator&&H.navigator.plugins&&(e.u_nplug=H.navigator.plugins.length);H.navigator&&H.navigator.mimeTypes&&(e.u_nmime=H.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(Ua){}try{var p=h.outerWidth;var n=h.outerHeight}catch(Ua){}try{var t=h.innerWidth;var q=h.innerHeight}catch(Ua){}try{var B=h.screenLeft;var I=h.screenTop}catch(Ua){}try{t=h.innerWidth,q=h.innerHeight}catch(Ua){}try{var J=
h.screen.availWidth;var U=h.screen.availTop}catch(Ua){}k=[B,I,k,l,J,U,p,n,t,q];l=b.h.top;try{var V=(l||window).document,K="CSS1Compat"==V.compatMode?V.documentElement:V.body;var T=(new Gc(K.clientWidth,K.clientHeight)).round()}catch(Ua){T=new Gc(-12245933,-12245933)}V=T;T={};K=new ld;y.SVGElement&&y.document.createElementNS&&K.set(0);l=Sc();l["allow-top-navigation-by-user-activation"]&&K.set(1);l["allow-popups-to-escape-sandbox"]&&K.set(2);y.crypto&&y.crypto.subtle&&K.set(3);y.TextDecoder&&y.TextEncoder&&
K.set(4);K=md(K);T.bc=K;T.bih=V.height;T.biw=V.width;T.brdim=k.join();b=b.i;b=(T.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,T.wgl=!!H.WebGLRenderingContext,T);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var og=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return ig(ng(a))},void 0);var pg="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function qg(){if(!pg)return null;var a=pg();return"open"in a?a:null}
function rg(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var sg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
tg="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),ug=!1;
function vg(a,b){b=void 0===b?{}:b;var c=mg(a),d=O("web_ajax_ignore_global_headers_if_set"),e;for(e in sg){var f=E(sg[e]);!f||!c&&dc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!dc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!dc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!dc(a))b["X-YouTube-Ad-Signals"]=ig(ng(void 0));return b}
function wg(a){var b=window.location.search,c=dc(a);O("debug_handle_relative_url_for_query_forward_killswitch")||c||!mg(a)||(c=document.location.hostname);var d=cc(a.match(bc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=jg(b),f={};D(tg,function(g){e[g]&&(f[g]=e[g])});
return lg(a,f||{},!1)}
function xg(a,b){var c=b.format||"JSON";a=yg(a,b);var d=zg(a,b),e=!1,f=Ag(a,function(k){if(!e){e=!0;h&&Of(h);var l=rg(k),p=null,n=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||n||t)p=Bg(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(p&&p.return_code,10);break a;case "RAW":l=!0;break a}l=!!p}p=p||{};n=b.context||y;l?b.onSuccess&&b.onSuccess.call(n,k,p):b.onError&&b.onError.call(n,k,p);b.onFinish&&b.onFinish.call(n,k,p)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Nf(function(){e||(e=!0,f.abort(),Of(h),g.call(b.context||y,f))},b.timeout)}return f}
function yg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=E("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=lg(a,b||{},!0);return a}
function zg(a,b){var c=E("XSRF_FIELD_NAME",void 0),d=E("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=E("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||dc(a)&&!b.withCredentials&&dc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=jg(e),nb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):fc(e));f=e||f&&!gb(f);!ug&&f&&
"POST"!=b.method&&(ug=!0,wf(Error("AJAX request with postData should use POST")));return e}
function Bg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,xf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Cg(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=Dg(g)})}d&&Eg(e);
return e}
function Eg(a){if(Ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Sb(a[b],null);a[c]=d}else Eg(a[b])}}
function Cg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Dg(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ag(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&vf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=qg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;O("debug_forward_web_query_parameters")&&(a=wg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=vg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Fg=yc||zc;function Gg(a){var b=Nb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Hg={},Ig=0;
function Jg(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Gg("cobalt")){if(a){a instanceof Fb||(a="object"==typeof a&&a.Y?a.X():String(a),Kb.test(a)?a=new Fb(a,Gb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Jb))&&Ib.test(b[1])?new Fb(a,Gb):null));a=Hb(a||Mb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Qb)){b="object"==typeof a;var f=null;b&&a.ta&&(f=a.qa());a=Sb(xb(b&&a.Y?a.X():String(a)),f)}a instanceof Qb&&a.constructor===Qb?a=a.h:(Ga(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Be(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Kc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Ag(a,b,"POST",e,d);else if(E("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Ag(a,b,"GET","",d);else{b:{try{var g=new Ta({url:a});if(g.j&&g.i||g.l){var h=cc(a.match(bc)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(hc);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var p=a.charCodeAt(c-1);if(38==p||63==p){var n=a.charCodeAt(c+2);if(!n||61==n||38==n||35==n){var t=c;break d}}c+=3}t=-1}if(0>t)var q=null;else{var B=a.indexOf("&",t);if(0>B||B>l)B=l;t+=3;q=decodeURIComponent(a.substr(t,B-t).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(I){}f=!1}f?Kg(a)?(b&&b(),f=!0):f=!1:f=!1;f||Lg(a,b)}}
function Mg(a,b,c){c=void 0===c?"":c;Kg(a,c)?b&&b():Jg(a,b,void 0,void 0,c)}
function Kg(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Lg(a,b){var c=new Image,d=""+Ig++;Hg[d]=c;c.onload=c.onerror=function(){b&&Hg[d]&&b();delete Hg[d]};
c.src=a}
;var Ng=y.ytPubsubPubsubInstance||new M,Og=y.ytPubsubPubsubSubscribedKeys||{},Pg=y.ytPubsubPubsubTopicToKeys||{},Qg=y.ytPubsubPubsubIsSynchronous||{};function Rg(a,b){var c=Sg();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Og[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Qg[a]?f():Nf(f,0)}catch(g){wf(g)}},void 0);
Og[d]=!0;Pg[a]||(Pg[a]=[]);Pg[a].push(d);return d}return 0}
function Tg(a){var b=Sg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),D(a,function(c){b.unsubscribeByKey(c);delete Og[c]}))}
function Ug(a,b){var c=Sg();c&&c.publish.apply(c,arguments)}
function Vg(a){var b=Sg();if(b)if(b.clear(a),a)Wg(a);else for(var c in Pg)Wg(c)}
function Sg(){return y.ytPubsubPubsubInstance}
function Wg(a){Pg[a]&&(a=Pg[a],D(a,function(b){Og[b]&&delete Og[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.da;M.prototype.publish=M.prototype.W;M.prototype.clear=M.prototype.clear;z("ytPubsubPubsubInstance",Ng,void 0);z("ytPubsubPubsubTopicToKeys",Pg,void 0);z("ytPubsubPubsubIsSynchronous",Qg,void 0);z("ytPubsubPubsubSubscribedKeys",Og,void 0);var Xg=window,P=Xg.ytcsi&&Xg.ytcsi.now?Xg.ytcsi.now:Xg.performance&&Xg.performance.timing&&Xg.performance.now&&Xg.performance.timing.navigationStart?function(){return Xg.performance.timing.navigationStart+Xg.performance.now()}:function(){return(new Date).getTime()};var Yg=Bf("initial_gel_batch_timeout",2E3),Zg=Math.pow(2,16)-1,$g=null,ah=0,bh=void 0,ch=0,dh=0,eh=0,fh=!0,gh=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",gh,void 0);var hh=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",hh,void 0);
function ih(a,b){if("log_event"===a.endpoint){var c="";a.ja?c="visitorOnlyApprovedKey":a.G&&(hh[a.G.token]=jh(a.G),c=a.G.token);var d=gh.get(c)||[];gh.set(c,d);d.push(a.payload);b&&(bh=new b);a=Bf("tvhtml5_logging_max_batch")||Bf("web_logging_max_batch")||100;b=P();d.length>=a?kh({writeThenSend:!0}):10<=b-eh&&(lh(),eh=b)}}
function mh(a,b){if("log_event"===a.endpoint){var c="";a.ja?c="visitorOnlyApprovedKey":a.G&&(hh[a.G.token]=jh(a.G),c=a.G.token);var d=new Map;d.set(c,[a.payload]);b&&(bh=new b);return new Ie(function(e){bh&&bh.isReady()?nh(d,e,{bypassNetworkless:!0}):e()})}}
function kh(a){a=void 0===a?{}:a;new Ie(function(b){Of(ch);Of(dh);dh=0;bh&&bh.isReady()?(nh(gh,b,a),gh.clear()):(lh(),b())})}
function lh(){O("web_gel_timeout_cap")&&!dh&&(dh=Nf(function(){kh({writeThenSend:!0})},6E4));
Of(ch);var a=E("LOGGING_BATCH_TIMEOUT",Bf("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&fh&&(a=Yg);ch=Nf(function(){kh({writeThenSend:!0})},a)}
function nh(a,b,c){var d=bh;c=void 0===c?{}:c;var e=Math.round(P()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=lb({context:oh(d.h||ph())});h.events=k;(k=hh[g])&&qh(h,g,k);delete hh[g];g="visitorOnlyApprovedKey"===g;rh(h,e,g);O("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Mg("/generate_204");sh(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();ah=Math.round(P()-e)},
onError:function(){f--;f||b()},
Ia:c,ja:g});fh=!1}}
function rh(a,b,c){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=E("EVENT_ID",void 0))&&((c=E("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*Zg/2)),c++,c>Zg&&(c=1),N("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,$g&&ah&&O("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:$g,roundtripMs:String(ah)}),$g=b,ah=0)}
function qh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function jh(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var th=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",th,void 0);function uh(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=$f();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&d.U&&(a=e.context,b=d.U,th[b]=b in th?th[b]+1:0,a.sequence={index:th[b],groupKey:b},d.Ua&&delete th[d.U]);(d.al?mh:ih)({endpoint:"log_event",payload:e,G:d.G,ja:d.ja},c)}
;function vh(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function wh(a,b,c,d,e){gd.set(""+a,b,{wa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var xh=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",xh,void 0);function yh(){this.h=E("ALT_PREF_COOKIE_NAME","PREF");this.i=E("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=gd.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(xh[d]=c.toString())}}}
yh.prototype.get=function(a,b){zh(a);Ah(a);a=void 0!==xh[a]?xh[a].toString():null;return null!=a?a:b?b:""};
yh.prototype.set=function(a,b){zh(a);Ah(a);if(null==b)throw Error("ExpectedNotNull");xh[a]=b.toString()};
yh.prototype.remove=function(a){zh(a);Ah(a);delete xh[a]};
yh.prototype.clear=function(){for(var a in xh)delete xh[a]};
function Ah(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function zh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Bh(a){a=void 0!==xh[a]?xh[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Fa(yh);var Ch={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Dh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Eh(){var a=y.navigator;return a?a.connection:void 0}
;function Fh(){return"INNERTUBE_API_KEY"in sf&&"INNERTUBE_API_VERSION"in sf}
function ph(){return{innertubeApiKey:E("INNERTUBE_API_KEY",void 0),innertubeApiVersion:E("INNERTUBE_API_VERSION",void 0),Xa:E("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ya:E("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ab:E("INNERTUBE_CONTEXT_HL",void 0),Za:E("INNERTUBE_CONTEXT_GL",void 0),bb:E("INNERTUBE_HOST_OVERRIDE",void 0)||"",eb:!!E("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),cb:!!E("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:E("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function oh(a){var b={client:{hl:a.ab,gl:a.Za,clientName:a.Ya,clientVersion:a.innertubeContextClientVersion,configInfo:a.Xa}},c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=E("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=E("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=E("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!O("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=vh()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!O("music_web_display_mode_killswitch")){var h;b.client.Ha=null!=(h=b.client.Ha)?h:{};b.client.Ha.webDisplayMode=vh()}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);
E("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:E("DELEGATED_SESSION_ID")});a:{if(h=Eh()){a=Ch[h.type||"unknown"]||"CONN_UNKNOWN";h=Ch[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);O("web_log_effective_connection_type")&&(a=Eh(),a=null!==a&&void 0!==a&&a.effectiveType?Dh.hasOwnProperty(a.effectiveType)?Dh[a.effectiveType]:
"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(jg(E("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function Gh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||E("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Rk||E("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().Qk:b=kd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=E("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=E("DELEGATED_SESSION_ID")));return d}
;function Hh(a){a=Object.assign({},a);delete a.Authorization;var b=kd();if(b){var c=new Cd;c.update(E("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Dc(c.digest())}return a}
;function Ih(a){var b=new kf;(b=b.isAvailable()?a?new qf(b,a):b:null)||(a=new lf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new ff(a):null;this.i=document.domain||window.location.hostname}
Ih.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Be(b))}catch(f){return}else e=escape(b);wh(a,e,c,this.i)};
Ih.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=gd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ih.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;gd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Jh;function Kh(){Jh||(Jh=new Ih("yt.innertube"));return Jh}
function Lh(a,b,c,d){if(d)return null;d=Kh().get("nextId",!0)||1;var e=Kh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Hh(c),requestTime:Math.round(P())};Kh().set("nextId",d+1,86400,!0);Kh().set("requests",e,86400,!0);return d}
function Mh(a){var b=Kh().get("requests",!0)||{};delete b[a];Kh().set("requests",b,86400,!0)}
function Nh(a){var b=Kh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Hh(Gh(!1));jb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),sh(a,d.method,e,{}));delete b[c]}}Kh().set("requests",b,86400,!0)}}
;function Oh(a,b){this.version=a;this.args=b}
;function Ph(a,b){this.topic=a;this.h=b}
Ph.prototype.toString=function(){return this.topic};var Qh=A("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.da;M.prototype.publish=M.prototype.W;M.prototype.clear=M.prototype.clear;z("ytPubsub2Pubsub2Instance",Qh,void 0);var Rh=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Rh,void 0);var Sh=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Sh,void 0);var Th=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Th,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Uh(a,b){var c=Vh();c&&c.publish.call(c,a.toString(),a,b)}
function Wh(a){var b=Xh,c=Vh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Rh[d])try{if(f&&b instanceof Ph&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.V){var l=new h;h.V=l.version}var p=h.V}catch(n){}if(!p||k.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
bb(k.args))}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){wf(n)}},Th[b.toString()]?A("yt.scheduler.instance")?Tf(g):Nf(g,0):g())});
Rh[d]=!0;Sh[b.toString()]||(Sh[b.toString()]=[]);Sh[b.toString()].push(d);return d}
function Yh(){var a=Zh,b=Wh(function(c){a.apply(void 0,arguments);$h(b)});
return b}
function $h(a){var b=Vh();b&&("number"===typeof a&&(a=[a]),D(a,function(c){b.unsubscribeByKey(c);delete Rh[c]}))}
function Vh(){return A("ytPubsub2Pubsub2Instance")}
;function ai(){}
;var bi=function(){var a;return function(){a||(a=new Ih("ytidb"));return a}}();
function ci(){var a;return null===(a=bi())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function di(a){this.h=void 0===a?!1:a;(a=ci())||(a={hasSucceededOnce:this.h});this.i=a;var b,c;O("ytidb_analyze_is_supported")&&(null===(c=bi())||void 0===c?0:c.h)&&(c={hasSucceededOnce:this.i.hasSucceededOnce||this.h},null===(b=bi())||void 0===b?void 0:b.set("LAST_RESULT_ENTRY_KEY",c,2592E3,!0))}
di.prototype.isSupported=function(){return this.h};var ei=[],fi=!1;function gi(a){fi||(ei.push({type:"ERROR",payload:a}),10<ei.length&&ei.shift())}
function hi(a,b){fi||(ei.push({type:"EVENT",eventType:a,payload:b}),10<ei.length&&ei.shift())}
;function ii(){if(void 0!==E("DATASYNC_ID",void 0))return E("DATASYNC_ID",void 0);throw Error("Datasync ID not set");}
;function ji(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(ji,Error);function ki(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function li(a){return a.substr(0,a.indexOf(":"))||a}
;var mi={},ni=(mi.AUTH_INVALID="No user identifier specified.",mi.EXPLICIT_ABORT="Transaction was explicitly aborted.",mi.IDB_NOT_SUPPORTED="IndexedDB is not supported.",mi.MISSING_OBJECT_STORE="Object store not created.",mi.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",mi.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",mi.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",mi.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",mi),oi={},pi=(oi.AUTH_INVALID="ERROR",oi.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",oi.EXPLICIT_ABORT="IGNORED",oi.IDB_NOT_SUPPORTED="ERROR",oi.MISSING_OBJECT_STORE="ERROR",oi.QUOTA_EXCEEDED="WARNING",oi.QUOTA_MAYBE_EXCEEDED="WARNING",oi.UNKNOWN_ABORT="WARNING",oi),qi={},ri=(qi.AUTH_INVALID=!1,qi.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,qi.EXPLICIT_ABORT=!1,qi.IDB_NOT_SUPPORTED=!1,qi.MISSING_OBJECT_STORE=!1,qi.QUOTA_EXCEEDED=!1,qi.QUOTA_MAYBE_EXCEEDED=!0,
qi.UNKNOWN_ABORT=!0,qi);function Q(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ni[a]:c;d=void 0===d?pi[a]:d;e=void 0===e?ri[a]:e;ji.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Q.prototype)}
v(Q,ji);function si(a){Q.call(this,"MISSING_OBJECT_STORE",{Vk:a},ni.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,si.prototype)}
v(si,Q);var ti=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function ui(a,b,c){b=li(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof Q)return d;if("QuotaExceededError"===d.name)return new Q("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(Ac&&"UnknownError"===d.name)return new Q("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&ti.some(function(e){return d.message.includes(e)}))return new Q("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new Q("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",Wk:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function vi(a){if(!a)throw Error();throw a;}
function wi(a){return a}
function R(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
R.all=function(a){return new R(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={aa:0};f.aa<a.length;f={aa:f.aa},++f.aa)xi(R.resolve(a[f.aa]).then(function(g){return function(h){d[g.aa]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
R.resolve=function(a){return new R(function(b,c){a instanceof R?a.then(b,c):b(a)})};
R.reject=function(a){return new R(function(b,c){c(a)})};
R.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:wi,e=null!==b&&void 0!==b?b:vi;return new R(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){yi(c,c,d,f,g)}),c.onRejected.push(function(){zi(c,c,e,f,g)})):"FULFILLED"===c.state.status?yi(c,c,d,f,g):"REJECTED"===c.state.status&&zi(c,c,e,f,g)})};
function xi(a,b){a.then(void 0,b)}
function yi(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof R?Ai(a,b,f,d,e):d(f)}catch(g){e(g)}}
function zi(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof R?Ai(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ai(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof R?Ai(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Bi(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ci(a){return new Promise(function(b,c){Bi(a,b,c)})}
function Di(a){return new R(function(b,c){Bi(a,b,c)})}
;function Ei(a,b){return new R(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Fi(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}
m=Fi.prototype;m.add=function(a,b,c){return Gi(this,[a],{mode:"readwrite",I:!0},function(d){return Hi(d,a).add(b,c)})};
m.clear=function(a){return Gi(this,[a],{mode:"readwrite",I:!0},function(b){return Hi(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Gi(this,[a],{mode:"readonly",I:!0},function(c){return Hi(c,a).count(b)})};
function Ii(a,b,c){a=a.h.createObjectStore(b,c);return new Ji(a)}
m.delete=function(a,b){return Gi(this,[a],{mode:"readwrite",I:!0},function(c){return Hi(c,a).delete(b)})};
m.get=function(a,b){return Gi(this,[a],{mode:"readonly",I:!0},function(c){return Hi(c,a).get(b)})};
function Ki(a,b,c,d){return Gi(a,[b],{mode:"readwrite",I:!0},function(e){e=Hi(e,b);return Di(e.h.put(c,d))})}
function Gi(a,b,c,d){return G(a,function f(){var g=this,h,k,l,p,n,t,q,B,I,J,U,V;return x(f,function(K){switch(K.h){case 1:var T={mode:"readonly",I:!1};"string"===typeof c?T.mode=c:T=c;h=T;g.transactionCount++;k=h.I?Bf("ytidb_transaction_try_count",1):1;l=0;case 2:if(p){K.A(3);break}l++;n=Math.round(P());ra(K,4);t=g.h.transaction(b,h.mode);T=new Li(t);T=Mi(T,d);return w(K,T,6);case 6:return q=K.i,B=Math.round(P()),Ni(g,n,B,l,void 0,b.join(),h),K.return(q);case 4:I=sa(K);J=Math.round(P());U=ui(I,g.h.name,
b.join());if((V=U instanceof Q&&!U.h)||l>=k)Ni(g,n,J,l,U,b.join(),h),p=U;K.A(2);break;case 3:return K.return(Promise.reject(p))}})})}
function Ni(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Q&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&hi("QUOTA_EXCEEDED",{dbName:li(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Q&&"UNKNOWN_ABORT"===e.type&&(hi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.j}),a.i=!0),Oi(a,!1,d,f,b),gi(e)):Oi(a,!0,d,f,b)}
function Oi(a,b,c,d,e){hi("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c})}
function Ji(a){this.h=a}
m=Ji.prototype;m.add=function(a,b){return Di(this.h.add(a,b))};
m.clear=function(){return Di(this.h.clear()).then(function(){})};
m.count=function(a){return Di(this.h.count(a))};
function Pi(a,b){return Qi(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Pi(this,a):Di(this.h.delete(a))};
m.get=function(a){return Di(this.h.get(a))};
m.index=function(a){return new Ri(this.h.index(a))};
m.getName=function(){return this.h.name};
function Qi(a,b,c){a=a.h.openCursor(b.query,b.direction);return Si(a).then(function(d){return Ei(d,c)})}
function Li(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Q;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Mi(a,b){var c=new Promise(function(d,e){xi(b(a).then(function(f){d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Li.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Q("EXPLICIT_ABORT");};
function Hi(a,b){b=a.h.objectStore(b);var c=a.i.get(b);c||(c=new Ji(b),a.i.set(b,c));return c}
function Ri(a){this.h=a}
Ri.prototype.count=function(a){return Di(this.h.count(a))};
Ri.prototype.delete=function(a){return Ti(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
Ri.prototype.get=function(a){return Di(this.h.get(a))};
Ri.prototype.getKey=function(a){return Di(this.h.getKey(a))};
function Ti(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Si(a).then(function(d){return Ei(d,c)})}
function Ui(a,b){this.request=a;this.cursor=b}
function Si(a){return Di(a).then(function(b){return null===b?null:new Ui(a,b)})}
m=Ui.prototype;m.advance=function(a){this.cursor.advance(a);return Si(this.request)};
m.continue=function(a){this.cursor.continue(a);return Si(this.request)};
m.delete=function(){return Di(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Di(this.cursor.update(a))};function Vi(a,b,c){return G(this,function e(){var f,g,h,k,l,p,n,t,q,B;return x(e,function(I){if(1==I.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.vb,p=g.upgrade,n=g.closed,q=function(){t||(t=new Fi(f.result,{closed:n}));return t},f.addEventListener("upgradeneeded",function(J){if(null===J.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");J.dataLoss&&"none"!==J.dataLoss&&hi("IDB_DATA_CORRUPTED",{reason:J.dataLossMessage||"unknown reason",dbName:li(a)});var U=q(),V=new Li(f.transaction);p&&p(U,J.oldVersion,J.newVersion,V)}),h&&f.addEventListener("blocked",function(){h()}),w(I,Ci(f),2);
B=I.i;k&&B.addEventListener("versionchange",function(){k(q())});
B.addEventListener("close",function(){hi("IDB_UNEXPECTEDLY_CLOSED",{dbName:li(a),dbVersion:B.version});l&&l()});
return I.return(q())})})}
function Wi(a,b,c){c=void 0===c?{}:c;return Vi(a,b,c)}
function Xi(a,b){b=void 0===b?{}:b;return G(this,function d(){var e,f,g;return x(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,Ci(e),0)})})}
;function Yi(a,b){this.name=a;this.options=b;this.j=!1}
Yi.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Wi(a,b,c)};
Yi.prototype.delete=function(a){a=void 0===a?{}:a;return Xi(this.name,a)};
Yi.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,vb:c,upgrade:this.options.upgrade},e=function(){return G(a,function g(){var h=this,k,l,p;return x(g,function(n){switch(n.h){case 1:return ra(n,2),w(n,h.i(h.name,h.options.version,d),4);case 4:k=n.i;a:{var t=u(Object.keys(h.options.Ja));for(var q=t.next();!q.done;q=t.next())if(q=q.value,!k.h.objectStoreNames.contains(q)){t=q;break a}t=void 0}l=t;if(void 0===l){n.A(5);break}if(h.j){n.A(6);break}h.j=!0;return w(n,h.delete(),7);case 7:return n.return(e());case 6:throw new si(l);case 5:return n.return(k);
case 2:p=sa(n);if(p instanceof DOMException?"VersionError"===p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"===p.name:p instanceof Object&&"message"in p&&"An attempt was made to open a database using a lower version than the existing version."===p.message)return n.return(h.i(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw p;}})})};
this.h=b=e()}return this.h};var Zi=new Yi("YtIdbMeta",{Ja:{databases:!0},upgrade:function(a,b){1>b&&Ii(a,"databases",{keyPath:"actualName"})}});
function $i(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Zi.open(),2);d=e.i;return e.return(Gi(d,["databases"],{I:!0,mode:"readwrite"},function(f){var g=Hi(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return Di(g.h.put(a,void 0)).then(function(){})})}))})})}
function aj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Zi.open(),2);d=e.i;return e.return(d.delete("databases",a))})})}
function bj(a){return G(this,function c(){var d,e;return x(c,function(f){return 1==f.h?(d=[],w(f,Zi.open(),2)):3!=f.h?(e=f.i,w(f,Gi(e,["databases"],{I:!0,mode:"readonly"},function(g){d.length=0;return Qi(Hi(g,"databases"),{},function(h){a(h.getValue())&&d.push(h.getValue());return h.continue()})}),3)):f.return(d)})})}
function cj(){return bj(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var dj;
function ej(){return G(this,function b(){var c,d,e;return x(b,function(f){switch(f.h){case 1:if(O("ytidb_is_supported_cache_success_result")&&(c=ci(),null===c||void 0===c?0:c.hasSucceededOnce))return f.return(new di(!0));var g;if(g=Fg)g=/WebKit\/([0-9]+)/.exec(Nb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(Nb),g=!(g&&602<=parseInt(g[1],10)));if(g||mc)return f.return(new di(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new di(!1))}catch(h){return f.return(new di(!1))}if(!("IDBTransaction"in self&&
"objectStoreNames"in IDBTransaction.prototype))return f.return(new di(!1));ra(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(f,$i(e),4);case 4:return w(f,aj("yt-idb-test-do-not-use"),5);case 5:return f.return(new di(!0));case 2:return sa(f),f.return(new di(!1))}})})}
function fj(){if(void 0!==dj)return dj;fi=!0;return dj=ej().then(function(a){fi=!1;return a.isSupported()})}
;function gj(a){try{ii();var b=!0}catch(c){b=!1}if(!b)throw a=new Q("AUTH_INVALID"),gi(a),a;b=ii();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function hj(a,b,c,d){var e;return G(this,function g(){var h,k;return x(g,function(l){switch(l.h){case 1:return w(l,ij({caller:"openDbImpl",publicName:a,version:b}),2);case 2:return ki(a),h=c?{actualName:a,publicName:a,userIdentifier:void 0}:gj(a),h.clearDataOnAuthChange=null!==(e=d.clearDataOnAuthChange)&&void 0!==e?e:!1,ra(l,3),w(l,$i(h),5);case 5:return w(l,Wi(h.actualName,b,d),6);case 6:return l.return(l.i);case 3:return k=sa(l),ra(l,7),w(l,aj(h.actualName),9);case 9:l.h=8;l.m=0;break;case 7:sa(l);
case 8:throw k;}})})}
function ij(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,fj(),2);if(!e.i)throw d=new Q("IDB_NOT_SUPPORTED",{context:a}),gi(d),d;e.h=0})})}
function jj(a,b,c){c=void 0===c?{}:c;return hj(a,b,!1,c)}
function kj(a,b,c){c=void 0===c?{}:c;return hj(a,b,!0,c)}
function lj(a,b){b=void 0===b?{}:b;return G(this,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,fj(),2);if(3!=f.h){if(!f.i)return f.return();ki(a);e=gj(a);return w(f,Xi(e.actualName,b),3)}return w(f,aj(e.actualName),0)})})}
function mj(a,b){var c=this;a=a.map(function(d){return G(c,function f(){return x(f,function(g){return 1==g.h?w(g,Xi(d.actualName,b),2):w(g,aj(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function nj(){var a=void 0===a?{}:a;return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,fj(),2);if(3!=e.h){if(!e.i)return e.return();ki("LogsDatabaseV2");return w(e,cj(),3)}d=e.i;return w(e,mj(d,a),0)})})}
function oj(a,b){b=void 0===b?{}:b;return G(this,function d(){return x(d,function(e){if(1==e.h)return w(e,fj(),2);if(3!=e.h){if(!e.i)return e.return();ki(a);return w(e,Xi(a,b),3)}return w(e,aj(a),0)})})}
;function pj(a,b){Yi.call(this,a,b);this.options=b;ki(a)}
v(pj,Yi);pj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ma?kj:jj)(a,b,Object.assign(Object.assign({},c),{clearDataOnAuthChange:this.options.clearDataOnAuthChange}))};
pj.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ma?oj:lj)(this.name,a)};
function qj(a){var b;return function(){b||(b=new pj("LogsDatabaseV2",a));return b}}
;function rj(){R.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
v(rj,R);rj.reject=R.reject;rj.resolve=R.resolve;rj.all=R.all;var sj;function tj(){if(!sj){var a={};sj=qj({Ja:(a.LogsRequestsStore=!0,a.sapisid=!0,a.SWHealthLog=!0,a),Ma:!O("nwl_use_ytidb_partitioning"),upgrade:function(b,c){2>c&&(Ii(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).h.createIndex("newRequest",["status","authHash","interface","timestamp"],{unique:!1}),Ii(b,"sapisid"));3>c&&Ii(b,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:3})}return sj().open()}
function uj(a){return G(this,function c(){var d,e,f,g,h;return x(c,function(k){switch(k.h){case 1:return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(k,vj(),2);case 2:return e=k.i,w(k,tj(),3);case 3:return f=k.i,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:e,interface:E("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(k,Ki(f,"LogsRequestsStore",g),4);case 4:return h=k.i,d.wb=P(),wj(d),k.return(h)}})})}
function xj(a){return G(this,function c(){var d,e,f,g,h,k,l,p;return x(c,function(n){switch(n.h){case 1:return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(n,vj(),2);case 2:return e=n.i,f=E("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,e,f,0],h=[a,e,f,P()],k=IDBKeyRange.bound(g,h),w(n,tj(),3);case 3:return l=n.i,p=void 0,w(n,Gi(l,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(t){return Ti(Hi(t,"LogsRequestsStore").index("newRequest"),{query:k,direction:"prev"},function(q){q.getValue()&&
(p=q.getValue(),"NEW"===a&&(p.status="QUEUED",q.update(p)))})}),4);
case 4:return d.wb=P(),wj(d),n.return(p)}})})}
function yj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,tj(),2);d=e.i;return e.return(Gi(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=Hi(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",Di(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function zj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,tj(),2);d=e.i;return e.return(Gi(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=Hi(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,Di(g.h.put(h,void 0)).then(function(){return h})):rj.resolve(void 0)})}))})})}
function Aj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,tj(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function Bj(){return G(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,tj(),2);c=d.i;return d.return(c.clear("LogsRequestsStore"))})})}
function Cj(){return G(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,tj(),2);c=d.i;return d.return(c.clear("SWHealthLog"))})})}
function Dj(){return G(this,function b(){var c,d;return x(b,function(e){return 1==e.h?w(e,tj(),2):3!=e.h?(c=e.i,d=P()-2592E6,w(e,Gi(c,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){return Qi(Hi(f,"LogsRequestsStore"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),3)):O("web_clean_sw_logs_store")?w(e,Gi(c,["SWHealthLog"],{mode:"readwrite",
I:!0},function(f){return Qi(Hi(f,"SWHealthLog"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0):e.A(0)})})}
function Ej(){return G(this,function b(){return x(b,function(c){return 1==c.h?w(c,nj(),2):w(c,oj("LogsDatabaseV2"),0)})})}
function vj(){return G(this,function b(){var c;return x(b,function(d){if(1==d.h){ai.h||(ai.h=new ai);var e={};var f=kd([]);f&&(e.Authorization=f,f=void 0,void 0===f&&(f=Number(E("SESSION_INDEX",0)),f=isNaN(f)?0:f),e["X-Goog-AuthUser"]=f,"INNERTUBE_HOST_OVERRIDE"in sf||(e["X-Origin"]=window.location.origin),O("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in sf&&(e["X-Goog-PageId"]=E("DELEGATED_SESSION_ID")));e instanceof Ie||(f=new Ie(Ea),Je(f,2,e),e=f);return w(d,e,2)}c=d.i;e=d.return;f=Hh(c);var g=
new Cd;g.update(JSON.stringify(f,Object.keys(f).sort()));f=g.digest();g="";for(var h=0;h<f.length;h++)g+="0123456789ABCDEF".charAt(Math.floor(f[h]/16))+"0123456789ABCDEF".charAt(f[h]%16);return e.call(d,g)})})}
function Fj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,tj(),2);d=e.i;return w(e,Ki(d,"sapisid",a,"sapisid"),0)})})}
function Gj(){return G(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,tj(),2);if(3!=e.h)return c=e.i,w(e,c.get("sapisid","sapisid"),3);d=e.i;return e.return(d||"")})})}
function wj(a){var b=Bf("nwl_latency_sampling_rate",.01);.02<b||Math.random()<=b&&Uh("nwl_transaction_latency_payload",a)}
;var Hj=["__Secure-1PAPISID","SAPISID","__Secure-3PAPISID"];function Ij(){for(var a=u(Hj),b=a.next();!b.done;b=a.next())if(b=gd.get(b.value))return b;return"LOGGED_OUT"}
function Jj(){te.call(this);this.pollingInterval=3E3;this.i=[null,null,null];this.m=!1;Kj(this)}
v(Jj,te);function Lj(){Jj.h||(Jj.h=new Jj);var a=Jj.h;a.m=!0;a.verifyUser();Mj(a)}
Jj.prototype.verifyUser=function(){var a=Kj(this),b=a.gb;if(!a.ub)return Mj(this),!0;ue(this,"ytsessionchange");b&&ue(this,"ytuserinvalid");Mj(this);return!1};
function Kj(a){var b=Hj.map(function(e){var f;return null!==(f=gd.get(e))&&void 0!==f?f:""}),c=b.some(function(e,f){return a.i&&""!==a.i[f]&&""===e}),d=b.some(function(e,f){return a.i&&a.i[f]!==e});
a.i=b;return{gb:c,ub:d}}
function Mj(a){a.m&&(Nj(a),a.l=Rf(function(){a.verifyUser()},a.pollingInterval))}
function Nj(a){a.l&&(Vf(a.l),a.l=void 0)}
;var Oj;function Pj(){Oj||(Oj=new Ih("yt.offline"));return Oj}
function Qj(a){if(O("offline_error_handling")){var b=Pj().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Pj().set("errors",b,2592E3,!0)}}
function Rj(){if(O("offline_error_handling")){var a=Pj().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new ji(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;wf(c)}Pj().set("errors",{},2592E3,!0)}}}
;var Sj=Bf("network_polling_interval",3E4);function S(){te.call(this);this.L=0;this.o=this.l=!1;this.B=0;this.m=this.J=!1;this.i=this.ka();this.m=O("validate_network_status");Tj(this);Uj(this)}
v(S,te);function Vj(){if(!S.h){var a=A("yt.networkStatusManager.instance")||new S;z("yt.networkStatusManager.instance",a,void 0);S.h=a}return S.h}
m=S.prototype;m.O=function(){this.m||this.i===this.ka()||xf(new ji("NetworkStatusManager isOnline does not match window status"));return this.i};
m.hb=function(a){this.l=!0;if(void 0===a?0:a)this.L||Wj(this)};
m.ka=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Sa=function(){this.J=!0};
m.ca=function(a,b){return te.prototype.ca.call(this,a,b)};
function Uj(a){window.addEventListener("online",function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return d.m?w(e,d.T(),2):(d.i=!0,d.l&&ue(d,"ytnetworkstatus-online"),e.A(2));Xj(d);d.J&&Rj();e.h=0})})})}
function Tj(a){window.addEventListener("offline",function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return d.m?w(e,d.T(),2):(d.i=!1,d.l&&ue(d,"ytnetworkstatus-offline"),e.A(2));Xj(d);e.h=0})})})}
function Wj(a){a.L=Rf(function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h){if(O("trigger_nsm_validation_checks_with_nwl")&&!d.i)return w(e,d.T(),3);if(d.ka()){if(!1!==d.i)return e.A(3);d.o=!0;d.B=P();return d.l?d.m?w(e,d.T(),11):(d.i=!0,ue(d,"ytnetworkstatus-online"),e.A(11)):e.A(11)}if(!0!==d.i)return e.A(3);d.o=!0;d.B=P();return d.l?d.m?w(e,d.T(),3):(d.i=!1,ue(d,"ytnetworkstatus-offline"),e.A(3)):e.A(3)}if(3!=e.h)return d.J&&Rj(),e.A(3);Wj(d);e.h=0})})},Sj)}
function Xj(a){a.o&&(xf(new ji("NetworkStatusManager state did not match poll",P()-a.B)),a.o=!1)}
m.T=function(a){var b=this;return this.C?this.C:this.C=new Promise(function(c){return G(b,function e(){var f,g,h,k=this;return x(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,ra(l,2,3),f&&(k.K=Tf(function(){f.abort()},a||2E4)),w(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ta(l);k.C=void 0;k.K&&Vf(k.K);h!==k.i&&(k.i=h,k.i&&k.l?ue(k,"ytnetworkstatus-online"):k.l&&ue(k,"ytnetworkstatus-offline"));c(h);ua(l);break;case 2:sa(l),h=!1,l.A(3)}})})})};
S.prototype.sendNetworkCheckRequest=S.prototype.T;S.prototype.listen=S.prototype.ca;S.prototype.enableErrorFlushing=S.prototype.Sa;S.prototype.getWindowStatus=S.prototype.ka;S.prototype.monitorNetworkStatusChange=S.prototype.hb;S.prototype.isNetworkAvailable=S.prototype.O;S.getInstance=Vj;function Yj(a){a=void 0===a?{}:a;te.call(this);var b=this;this.l=this.o=0;this.i=Vj();var c=A("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.Ta);a.fb&&(c=A("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=A("yt.networkStatusManager.instance.listen").bind(this.i))a.ma?(this.ma=a.ma,c("ytnetworkstatus-online",function(){Zj(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){Zj(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){ue(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){ue(b,"publicytnetworkstatus-offline")}))}
v(Yj,te);Yj.prototype.O=function(){var a=A("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.i);return a?a():!0};
Yj.prototype.T=function(a){return G(this,function c(){var d=this,e;return x(c,function(f){return(e=A("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.i))?f.return(e(a)):f.return(!0)})})};
function Zj(a,b){a.ma?a.l?(Vf(a.o),a.o=Tf(function(){a.m!==b&&(ue(a,b),a.m=b,a.l=P())},a.ma-(P()-a.l))):(ue(a,b),a.m=b,a.l=P()):ue(a,b)}
;var ak=!1,bk=!1,ck=0,dk=0,ek,fk=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:ak,isIdbSupported:bk,potentialEsfErrorCounter:dk};O("export_networkless_options")&&z("ytNetworklessLoggingInitializationOptions",fk,void 0);
function gk(){G(this,function b(){var c,d,e,f;return x(b,function(g){switch(g.h){case 1:return w(g,fj(),2);case 2:(c=g.i)&&(bk=!0);d=O("networkless_logging");if(c&&d)return O("nwl_use_ytidb_partitioning")?w(g,oj("LogsDatabaseV2"),8):w(g,nj(),8);if(!c){g.A(0);break}return w(g,Ej(),0);case 8:return Lj(),document.addEventListener("ytsessionchange",function(){hk()}),w(g,Gj(),11);
case 11:e=g.i;f=Ij();if(e===f){g.A(12);break}hk();return w(g,Fj(f),12);case 12:if(!(O("enable_nwl_cleaning_logic")&&Math.random()<=Bf("nwl_cleaning_rate",.1))){g.A(14);break}return w(g,Dj(),14);case 14:ak=!0;ik();jk().O()&&kk();jk().ca("publicytnetworkstatus-online",kk);jk().ca("publicytnetworkstatus-offline",lk);if(!O("networkless_immediately_drop_sw_health_store")){g.A(16);break}return w(g,mk(),16);case 16:if(!O("networkless_immediately_drop_all_requests")){g.A(18);break}return w(g,Ej(),18);case 18:O("export_networkless_options")&&
(fk.isNwlInitialized=ak,fk.isIdbSupported=bk),g.h=0}})})}
function nk(a,b){function c(d){var e=jk().O();if(!ok()||!d||e&&O("vss_networkless_bypass_write"))pk(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};uj(f).then(function(g){f.id=g;(jk().O()||O("networkless_always_online"))&&qk(f)}).catch(function(g){qk(f);
jk().O()?wf(g):Qj(g)})}}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?fj().then(function(d){c(d)}):c(rk())}
function sk(a,b){function c(d){if(ok()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Aj(e.id):f=!0;g(h,k)};
pk(e.url,e.options);uj(e).then(function(h){e.id=h;f&&Aj(e.id)}).catch(function(h){jk().O()?wf(h):Qj(h)})}else pk(a,b)}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?fj().then(function(d){c(d)}):c(rk())}
function kk(){var a=this;ck||(ck=Tf(function(){return G(a,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,xj("NEW"),2);if(3!=e.h)return d=e.i,d?w(e,qk(d),3):(lk(),e.return());ck=0;kk();e.h=0})})},100))}
function lk(){Vf(ck);ck=0}
function qk(a){return G(this,function c(){var d;return x(c,function(e){switch(e.h){case 1:if(void 0===a.id){e.A(2);break}return w(e,yj(a.id),3);case 3:(d=e.i)?a=d:xf(Error("The request cannot be found in the database."));case 2:if(tk(a,2592E6)){e.A(4);break}xf(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.A(5);break}return w(e,Aj(a.id),5);case 5:return e.return();case 4:var f=a=uk(a),g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||void 0===
g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());(a=f)&&pk(a.url,a.options);e.h=0}})})}
function uk(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return G(b,function h(){return x(h,function(k){switch(k.h){case 1:if(!(O("trigger_nsm_validation_checks_with_nwl")&&(A("ytNetworklessLoggingInitializationOptions")?fk.potentialEsfErrorCounter:dk)<=Bf("potential_esf_error_limit",10))){k.A(2);break}return w(k,jk().T(),3);case 3:if(jk().O())A("ytNetworklessLoggingInitializationOptions")&&fk.potentialEsfErrorCounter++,dk++;else return c(e,f),k.return();case 2:if(void 0===(null===a||void 0===a?void 0:a.id)){k.A(4);break}return 1>
a.sendCount?w(k,zj(a.id),8):w(k,Aj(a.id),4);case 8:Tf(function(){jk().O()&&kk()},5E3);
case 4:c(e,f),k.h=0}})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return G(b,function h(){return x(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?k.A(2):w(k,Aj(a.id),2);d(e,f);k.h=0})})};
return a}
function tk(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function ik(){var a=this;xj("QUEUED").then(function(b){b&&!tk(b,12E4)&&Tf(function(){return G(a,function d(){return x(d,function(e){if(1==e.h)return void 0===b.id?e.A(2):w(e,zj(b.id),2);ik();e.h=0})})})})}
function hk(){Bj().catch(function(a){wf(a)})}
function mk(){return G(this,function b(){return x(b,function(c){return c.return(Cj().catch(function(d){wf(d)}))})})}
function jk(){ek||(ek=new Yj({fb:!0,Ta:O("trigger_nsm_validation_checks_with_nwl")}));return ek}
function pk(a,b){if(O("networkless_with_beacon")){var c=["method","postBody"];if(Object.keys(b).length>c.length)var d=!0;else{d=0;c=u(c);for(var e=c.next();!e.done;e=c.next())b.hasOwnProperty(e.value)&&d++;d=Object.keys(b).length!==d}d?xg(a,b):Mg(a,void 0,b.postBody)}else xg(a,b)}
function ok(){return A("ytNetworklessLoggingInitializationOptions")?fk.isNwlInitialized:ak}
function rk(){return A("ytNetworklessLoggingInitializationOptions")?fk.isIdbSupported:bk}
;function vk(a){var b=this;this.h=null;a?this.h=a:Fh()&&(this.h=ph());Rf(function(){Nh(b)},5E3)}
vk.prototype.isReady=function(){!this.h&&Fh()&&(this.h=ph());return!!this.h};
function sh(a,b,c,d){function e(t){t=void 0===t?!1:t;var q;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||(q=Lh(b,c,l,k)),q)){var B=g.onSuccess,I=g.onFetchSuccess;g.onSuccess=function(J,U){Mh(q);B(J,U)};
c.onFetchSuccess=function(J,U){Mh(q);I(J,U)}}try{t&&d.retry&&!d.Ia.bypassNetworkless?(g.method="POST",!d.Ia.writeThenSend&&O("nwl_send_fast_on_unload")?sk(n,g):nk(n,g)):(g.method="POST",g.postParams||(g.postParams={}),xg(n,g))}catch(J){if("InvalidAccessError"==J.name)q&&(Mh(q),q=0),xf(Error("An extension is blocking network request."));
else throw J;}q&&Rf(function(){Nh(a)},5E3)}
!E("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&xf(new ji("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new ji("innertube xhrclient not ready",b,c,d);wf(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,q){if(d.onError)d.onError(q)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.h.bb)&&(h=f);var k=a.h.eb||!1,l=Gh(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var p={alt:"json"};a.h.cb&&g.headers.Authorization||(p.key=a.h.innertubeApiKey);var n=lg(""+h+f,p||{},!0);ok()?fj().then(function(t){e(t)}):e(!1)}
;function wk(a,b,c){c=void 0===c?{}:c;var d=vk;E("ytLoggingEventsDefaultDisabled",!1)&&vk==vk&&(d=null);uh(a,b,d,c)}
;var xk=[{Ga:function(a){return"Cannot read property '"+a.key+"'"},
xa:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Ga:function(a){return"Cannot call '"+a.key+"'"},
xa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];var zk={S:[],R:[{Aa:yk,weight:500}]};function yk(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Ak(){this.R=[];this.S=[]}
var Bk;function Ck(){if(!Bk){var a=Bk=new Ak;a.S.length=0;a.R.length=0;zk.S&&a.S.push.apply(a.S,zk.S);zk.R&&a.R.push.apply(a.R,zk.R)}return Bk}
;var Dk=new M;function Ek(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Fk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Fk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Fk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Fk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Gk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Hk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Ek(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Hk(f+".ve",g,h,k):0;d+=f;d+=Hk(e,a[e],b,c);if(500<d)break}}else c[b]=Ik(a),d+=c[b].length;else c[b]=Ik(a),d+=c[b].length;return d}
function Hk(a,b,c,d){c+="."+a;a=Ik(b);d[c]=a;return c.length+a.length}
function Ik(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Jk=new Set,Kk=0,Lk=0,Mk=0,Nk=[],Ok=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Pk(a){Qk(a,"WARNING")}
function Qk(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||E("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),O("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=Kk))){var g=Ed(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Gk(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var p=
a.params;if("object"===typeof a.params)for(l in p){if(p[l]){var n="params."+l,t=Ik(p[l]);c[n]=t;k+=n.length+t.length;if(500<k)break}}else c.params=Ik(p)}if(Nk.length)for(l=0;l<Nk.length&&!(k=Gk(Nk[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
Ck();c=u(a.S);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.Uk)){a=d.weight;break a}a=u(a.R);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Aa(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(xk);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.xa[l.name])for(e=u(c.xa[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.Ga(f);break}l.params||(l.params={});a=Ck();l.params["params.errorServiceSignature"]="msg="+a.S.length+"&cb="+a.R.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!Jk.has(l.message)){"ERROR"===b?(Dk.W("handleError",l),O("record_app_crashed_web")&&0===Mk&&1===l.sampleWeight&&
(Mk++,wk("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Lk++):"WARNING"===b&&Dk.W("handleWarning",l);if(O("kevlar_gel_error_routing")){a=b;b:{c=u(Ok);for(d=c.next();!d.done;d=c.next())if(Gg(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),
d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};E("FEXP_EXPERIMENTS")&&(e.experimentIds=E("FEXP_EXPERIMENTS"));if(f=l.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});
f=E("SERVER_NAME",void 0);g=E("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(wk("clientError",c),("ERROR"===a||O("errors_flush_gel_always_killswitch"))&&kh())}if(!O("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:E("PAGE_NAME",window.location.href),
file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=E("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=E("SERVER_NAME",void 0);c=E("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}xg(E("ECATCHER_REPORT_HOST",
"")+"/error_204",b)}Jk.add(l.message);Kk++}}}
function Rk(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:fa(u(c)))}
;var Sk={ic:3611,xb:27686,yb:85013,zb:23462,Bb:42016,Cb:62407,Db:26926,Ab:43781,Eb:51236,Fb:79148,Gb:50160,Hb:77504,Tb:87907,Ub:18630,Vb:54445,Wb:80935,Xb:105675,Yb:37521,Zb:47786,ac:98349,cc:123695,dc:6827,ec:29434,fc:7282,hc:124448,lc:32276,kc:76278,mc:93911,nc:106531,oc:27259,pc:27262,qc:27263,tc:21759,uc:27107,wc:62936,xc:49568,yc:38408,zc:80637,Ac:68727,Bc:68728,Cc:80353,Dc:80356,Ec:74610,Fc:45707,Gc:83962,Hc:83970,Ic:46713,Jc:89711,Kc:74612,Lc:93265,Mc:74611,Oc:113533,Pc:93252,Qc:99357,Sc:94521,
Tc:114252,Uc:113532,Vc:94522,Rc:94583,Wc:88E3,Xc:93253,Yc:93254,Zc:94387,bd:94388,cd:93255,dd:97424,Nc:72502,ed:110111,fd:76019,hd:117092,jd:117093,gd:89431,kd:110466,ld:77240,md:60508,nd:105350,od:73393,pd:113534,qd:92098,rd:84517,sd:83759,td:80357,ud:86113,vd:72598,wd:72733,xd:107349,yd:124275,zd:118203,Ad:117431,Bd:117429,Cd:117430,Dd:117432,Ed:120080,Fd:117259,Gd:121692,Hd:97615,Id:31402,Jd:84774,Kd:95117,Ld:98930,Md:98931,Nd:98932,Od:43347,Pd:45474,Qd:100352,Rd:84758,Sd:98443,Td:117985,Ud:74613,
Vd:74614,Wd:64502,Xd:74615,Yd:74616,Zd:122224,ae:74617,be:77820,ce:74618,de:93278,ee:93274,ge:93275,he:93276,ie:22110,je:29433,le:120541,ne:82047,oe:113550,pe:75836,qe:75837,re:42352,se:84512,te:76065,ue:75989,we:16623,xe:32594,ye:27240,ze:32633,Ae:74858,Ce:3945,Be:16989,De:45520,Ee:25488,Fe:25492,Ge:25494,He:55760,Ie:14057,Je:18451,Ke:57204,Le:57203,Me:17897,Ne:57205,Oe:18198,Pe:17898,Qe:17909,Re:43980,Se:46220,Te:11721,Ue:49954,Ve:96369,We:3854,Xe:56251,Ye:25624,Ze:16906,af:99999,bf:68172,cf:27068,
df:47973,ef:72773,ff:26970,gf:26971,hf:96805,jf:17752,kf:73233,lf:109512,mf:22256,nf:14115,pf:22696,qf:89278,rf:89277,sf:109513,tf:43278,uf:43459,vf:43464,wf:89279,xf:43717,yf:55764,zf:22255,Af:89281,Bf:40963,Cf:43277,Df:43442,Ef:91824,Ff:120137,Gf:96367,Hf:36850,If:72694,Jf:37414,Kf:36851,Mf:124863,Lf:121343,Nf:73491,Of:54473,Pf:43375,Qf:46674,Rf:32473,Sf:72901,Tf:72906,Uf:50947,Vf:50612,Wf:50613,Xf:50942,Yf:84938,Zf:84943,ag:84939,cg:84941,dg:84944,eg:84940,fg:84942,gg:35585,hg:51926,ig:79983,jg:63238,
kg:18921,lg:63241,mg:57893,ng:41182,og:33424,pg:22207,qg:42993,rg:36229,sg:22206,tg:22205,ug:18993,vg:19001,wg:18990,xg:18991,yg:18997,zg:18725,Ag:19003,Bg:36874,Cg:44763,Dg:33427,Eg:67793,Fg:22182,Gg:37091,Hg:34650,Ig:50617,Jg:47261,Kg:22287,Lg:25144,Mg:97917,Ng:62397,Og:125598,Pg:36961,Qg:108035,Rg:27426,Sg:27857,Tg:27846,Ug:27854,Vg:69692,Wg:61411,Xg:39299,Yg:38696,Zg:62520,ah:36382,bh:108701,dh:50663,eh:36387,fh:14908,gh:37533,hh:105443,ih:61635,jh:62274,kh:65702,lh:65703,mh:65701,nh:76256,oh:37671,
ph:49953,rh:36216,sh:28237,th:39553,uh:29222,vh:26107,wh:38050,xh:26108,zh:120745,yh:26109,Ah:26110,Bh:66881,Ch:28236,Dh:14586,Eh:57929,Fh:74723,Gh:44098,Hh:44099,Ih:23528,Jh:61699,Kh:59149,Lh:101951,Mh:97346,Nh:118051,Oh:95102,Ph:64882,Qh:119505,Rh:63595,Sh:63349,Th:95101,Uh:75240,Vh:27039,Wh:68823,Xh:21537,Yh:83464,Zh:75707,ai:83113,bi:101952,ci:101953,fi:79610,gi:24402,hi:24400,ii:32925,ji:57173,ki:122502,li:64423,mi:64424,ni:33986,oi:100828,ri:21409,si:11070,ti:11074,vi:17880,wi:14001,yi:30709,
zi:30707,Ai:30711,Bi:30710,Ci:30708,xi:26984,Di:63648,Ei:63649,Fi:51879,Gi:111059,Hi:5754,Ii:20445,Ji:110386,Ki:113746,Li:66557,Mi:17310,Ni:28631,Oi:21589,Pi:68012,Qi:60480,Ri:31571,Si:76980,Ti:41577,Ui:45469,Vi:38669,Wi:13768,Xi:13777,Yi:62985,Zi:4724,aj:59369,bj:43927,cj:43928,dj:12924,ej:100355,hj:56219,ij:27669,jj:10337,gj:47896,kj:122629,lj:121258,mj:107598,nj:96639,oj:107536,pj:96661,qj:96658,rj:116646,sj:121122,tj:96660,uj:104443,vj:96659,wj:106442,xj:63667,yj:63668,zj:63669,Aj:78314,Bj:55761,
Cj:96368,Dj:67374,Ej:48992,Fj:49956,Gj:31961,Hj:26388,Ij:23811,Jj:5E4,Kj:126250,Lj:96370,Mj:47355,Nj:47356,Oj:37935,Pj:45521,Qj:21760,Rj:83769,Sj:49977,Tj:49974,Uj:93497,Vj:93498,Wj:34325,Xj:115803,Yj:123707,Zj:100081,ak:35309,bk:68314,ck:25602,dk:100339,ek:59018,fk:18248,gk:50625,hk:9729,ik:37168,jk:37169,kk:21667,lk:16749,mk:18635,nk:39305,pk:18046,qk:53969,rk:8213,sk:93926,tk:102852,uk:110099,vk:22678,wk:69076,yk:100856,zk:17736,Ak:3832,Bk:55759,Ck:64031,Dk:93044,Ek:93045,Fk:34388,Gk:17657,Hk:17655,
Ik:39579,Jk:39578,Kk:77448,Lk:8196,Mk:11357,Nk:69877,Ok:8197,Pk:82039};function Tk(){var a=kb(Uk),b;return Pe(new Ie(function(c,d){a.onSuccess=function(e){rg(e)?c(new Vk(e)):d(new Wk("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Wk("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Wk("Request timed out","net.timeout",e))};
b=xg("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Qe&&b.abort();
return Ne(c)})}
function Wk(a,b,c){Sa.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Wk,Sa);function Vk(a){this.xhr=a}
;function Xk(){this.i=0;this.h=null}
Xk.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),He(a)?a:Yk(a)):2===this.i&&b?(a=b.call(c,this.h),He(a)?a:Zk(a)):this};
Xk.prototype.getValue=function(){return this.h};
Xk.prototype.$goog_Thenable=!0;function Zk(a){var b=new Xk;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function Yk(a){var b=new Xk;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function $k(a){Sa.call(this,a.message||a.description||a.name);this.isMissing=a instanceof al;this.isTimeout=a instanceof Wk&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Qe}
v($k,Sa);$k.prototype.name="BiscottiError";function al(){Sa.call(this,"Biscotti ID is missing from server")}
v(al,Sa);al.prototype.name="BiscottiMissingError";var Uk={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},bl=null;function bg(){if(O("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!gd.get("CONSENT","").startsWith("YES+"))return Ne(Error("User has not consented - not fetching biscotti id."));if("1"==ib())return Ne(Error("Biscotti ID is not available in private embed mode"));bl||(bl=Pe(Tk().then(cl),function(a){return dl(2,a)}));
return bl}
function cl(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new al;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new al;a=a.id;cg(a);bl=Yk(a);el(18E5,2);return a}
function dl(a,b){b=new $k(b);cg("");bl=Zk(b);0<a&&el(12E4,a-1);throw b;}
function el(a,b){Nf(function(){Pe(Tk().then(cl,function(c){return dl(b,c)}),Ea)},a)}
function fl(){try{var a=A("yt.ads.biscotti.getId_");return a?a():bg()}catch(b){return Ne(b)}}
;function gl(a){if("1"!=ib()){a&&ag();try{fl().then(function(){},function(){}),Nf(gl,18E5)}catch(b){wf(b)}}}
;var hl=Date.now().toString();
function il(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(hl)for(a=1,b=0;b<hl.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^hl.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var jl,kl=y.ytLoggingDocDocumentNonce_;kl||(kl=il(),Qa("ytLoggingDocDocumentNonce_",kl));jl=kl;var ll={ke:0,jc:1,sc:2,qh:3,me:4,xk:5,di:6,fj:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function ml(a){this.h=a}
function nl(a){return new ml({trackingParams:a})}
ml.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
ml.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
ml.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function ol(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function pl(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ql(a){return E(pl(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",ql,void 0);function rl(a){return(a=ql(void 0===a?0:a))?new ml({veType:a,youtubeData:void 0}):null}
function sl(){var a=E("csn-to-ctt-auth-info");a||(a={},N("csn-to-ctt-auth-info",a));return a}
function tl(a){a=void 0===a?0:a;var b=E(ol(a));if(!b&&!E("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
z("yt_logging_screen.getCurrentCsn",tl,void 0);function ul(a,b,c){var d=sl();(c=tl(c))&&delete d[c];b&&(d[a]=b)}
function vl(a){return sl()[a]}
z("yt_logging_screen.getCttAuthInfo",vl,void 0);function wl(a,b,c,d){c=void 0===c?0:c;if(a!==E(ol(c))||b!==E(pl(c)))ul(a,d,c),N(ol(c),a),N(pl(c),b),b=function(){setTimeout(function(){a&&uh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:jl,clientScreenNonce:a},vk)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",wl,void 0);function xl(a){Oh.call(this,1,arguments);this.csn=a}
v(xl,Oh);var Xh=new Ph("screen-created",xl),yl=[],Al=zl,Bl=0;function Cl(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:Ya(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(gb(e)||!e.trackingParams&&!e.veType)&&Pk(Error("Child VE logged with no data"));d={G:vl(b),U:b};"UNDEFINED_CSN"==b?Dl("visualElementAttached",c,d):a?uh("visualElementAttached",c,a,d):wk("visualElementAttached",c,d)}
function zl(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Dc(b)}
function Dl(a,b,c){yl.push({payloadName:a,payload:b,options:c});Bl||(Bl=Yh())}
function Zh(a){if(yl){for(var b=u(yl),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,uh(c.payloadName,c.payload,null,c.options));yl.length=0}Bl=0}
;function El(){this.i=new Set;this.h=new Set;this.j=new Map}
El.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Fa(El);function Fl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Gl(a)||c.some(function(e){return!Gl(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Hl(a,d.value);return a}
function Hl(a,b){for(var c in b)if(Gl(b[c])){if(c in a&&!Gl(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Hl(a[c],b[c])}else if(Il(b[c])){if(c in a&&!Il(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Jl(a[c],b[c])}else a[c]=b[c];return a}
function Jl(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Gl(c)?a.push(Hl({},c)):Il(c)?a.push(Jl([],c)):a.push(c);return a}
function Gl(a){return"object"===typeof a&&!Array.isArray(a)}
function Il(a){return"object"===typeof a&&Array.isArray(a)}
;function Kl(a,b){Oh.call(this,1,arguments)}
v(Kl,Oh);function Ll(a,b){Oh.call(this,1,arguments)}
v(Ll,Oh);var Ml=new Ph("aft-recorded",Kl),Nl=new Ph("timing-sent",Ll);var Ol=window;function Pl(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var W=Ol.performance||Ol.mozPerformance||Ol.msPerformance||Ol.webkitPerformance||new Pl;var Ql=!1,Rl={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Oa(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||Ea,W);function Sl(a){var b=Tl(a);if(b.aft)return b.aft;a=E((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Ul(){var a;if(O("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===W||void 0===W?void 0:W.getEntriesByType)||void 0===a?void 0:a.call(W,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=Vl(e.requestStart),e.responseEnd=Vl(e.responseEnd),e.redirectStart=Vl(e.redirectStart),e.redirectEnd=Vl(e.redirectEnd),e.domainLookupEnd=Vl(e.domainLookupEnd),e.connectStart=Vl(e.connectStart),
e.connectEnd=Vl(e.connectEnd),e.responseStart=Vl(e.responseStart),e.secureConnectionStart=Vl(e.secureConnectionStart),e.domainLookupStart=Vl(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=W.timing}else a=W.timing;return a}
function Wl(){return O("csi_use_time_origin")&&W.timeOrigin?Math.floor(W.timeOrigin):W.timing.navigationStart}
function Vl(a){return Math.round(Wl()+a)}
function Xl(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Qa("ytcsi."+(a||"")+"data_",b));return b}
function Yl(a){a=Xl(a);a.info||(a.info={});return a.info}
function Tl(a){a=Xl(a);a.tick||(a.tick={});return a.tick}
function Zl(a){var b=Xl(a).nonce;b||(b=il(),Xl(a).nonce=b);return b}
function $l(a){var b=Tl(a||""),c=Sl(a);c&&!Ql&&(Uh(Ml,new Kl(Math.round(c-b._start),a)),Ql=!0)}
;function am(){if(W.getEntriesByType){var a=W.getEntriesByType("paint");if(a=$a(a,function(b){return"first-paint"===b.name}))return Vl(a.startTime)}a=W.timing;
return a.ib?Math.max(0,a.ib):0}
;function bm(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function cm(a){a=a||"";var b=A("ytcsi.reference");b||(bm(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=bm(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var dm=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",dm,void 0);function em(){this.h=0}
function fm(){em.h||(em.h=new em);return em.h}
em.prototype.tick=function(a,b,c){gm(this,"tick_"+a+"_"+b)||wk("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
em.prototype.info=function(a,b){var c=Object.keys(a).join("");gm(this,"info_"+c+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,wk("latencyActionInfo",a))};
em.prototype.span=function(a,b){var c=Object.keys(a).join("");gm(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,wk("latencyActionSpan",a))};
function gm(a,b){dm[b]=dm[b]||{count:0};var c=dm[b];c.count++;c.time=P();a.h||(a.h=Rf(function(){var d=P(),e;for(e in dm)dm[e]&&6E4<d-dm[e].time&&delete dm[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new ji("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Pk(c)),!0):!1}
;var X={},hm=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X.browse="LATENCY_ACTION_BROWSE",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.home="LATENCY_ACTION_HOME",
X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",
X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",
X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.comments"]=
"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X),Y={},im=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid=
"requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",
Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw=
"screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis=
"isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),jm="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
km={},lm=(km.ccs="CANARY_STATE_",km.mver="MEASUREMENT_VERSION_",km.pis="PLAYER_INITIALIZED_STATE_",km.yt_pt="LATENCY_PLAYER_",km.pa="LATENCY_ACTION_",km.yt_vst="VIDEO_STREAM_TYPE_",km),mm="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function nm(a){return!!E("FORCE_CSI_ON_GEL",!1)||O("csi_on_gel")||!!Xl(a).useGel}
function om(a,b,c){var d=pm(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||P();return nm(c)?(cm(c||"").tick[a]=b||P(),d=Zl(c),"_start"===a?(a=fm(),gm(a,"baseline_"+d)||wk("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):fm().tick(a,d,b),$l(c),!0):!1}
function qm(a,b,c){c=pm(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in im){c=im[a];0<=Wa(jm,c)&&(b=!!b);a in lm&&"string"===typeof b&&(b=lm[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Fl({},d)}0<=Wa(mm,a)||Pk(new ji("Unknown label logged with GEL CSI",a))}
function pm(a){a=Xl(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function rm(a){a=pm(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function sm(a,b,c){null!==b&&(Yl(c)[a]=b,nm(c)?(a=qm(a,b,c))&&nm(c)&&(b=cm(c||""),Fl(b.info,a),Fl(rm(c),a),c=Zl(c),fm().info(a,c)):cm(c||"").info[a]=b)}
function Z(a,b,c){var d=Tl(c);if(!b&&"_"!==a[0]){var e=a;W.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),W.mark(e))}e=b||P();d[a]=e;om(a,b,c)||(tm(c),cm(c||"").tick[a]=b||P());return d[a]}
function um(a,b){if(nm(void 0)){var c=pm(void 0);if(c.gelSpans)c.gelSpans[a]=!0;else{var d={};c.gelSpans=(d[a]=!0,d)}a={spanName:a,spanLengthUsec:String(Math.round(1E3*b))};cm("").span[String(a.spanName)]=a;b=pm(void 0);b.gelSpans||(b.gelSpans={});Fl(b.gelSpans,a);b=Zl(void 0);fm().span(a,b)}}
function vm(){var a=Zl(void 0);requestAnimationFrame(function(){setTimeout(function(){a===Zl(void 0)&&Z("ol",void 0,void 0)},0)})}
function tm(a){if(!A("yt.timing."+(a||"")+"pingSent_")){var b=E((a||"")+"TIMING_ACTION",void 0),c=Tl(a);if(b=!!A("ytglobal.timing"+(a||"")+"ready_")&&b)b="_start"in Tl(void 0);if(b&&Sl(a))if($l(a),a)wm(a);else{b=!0;var d=E("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&wm(a)}}}
function xm(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Df+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function wm(a){if(!nm(a)){var b=Tl(a),c=Yl(a),d=b._start,e=E("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:E((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Sl(a);var h=Tl(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Yl(a).yt_pvis&&"youtube"===e&&(sm("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var p in c)"_"!==p.charAt(0)&&(f[p]=c[p]);b.ps=P();p={};e=[];for(var n in b)"_"!==n.charAt(0)&&(k=Math.round(b[n]-d),p[n]=k,e.push(n+"."+k));f.rt=
e.join(",");b=!!c.ap;c="";for(var t in f)f.hasOwnProperty(t)&&(c+="&"+t+"="+f[t]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&(b||O("always_send_csi_204_with_beacon"))?Mg(f):Jg(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);Uh(Nl,new Ll(p.aft+(Number(g)||0),a))}}
function ym(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Xb()&&a.setAttribute("nonce",Xb());return c?(a=W.getEntriesByName(c))&&a[0]&&(a=a[0],c=Wl(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&(b=Yl(void 0),c=rm(void 0),"rc"in b||"rc"in c||sm("rc",""),0===a.transferSize))?!0:!1:!1}
function zm(){var a=window.location.protocol,b=W.getEntriesByType("resource");b=Xa(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Za(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",Vl(b.startTime)),Z("wffe",Vl(b.responseEnd)))}
var Am=window;Am.ytcsi&&(Am.ytcsi.info=sm,Am.ytcsi.tick=Z);function Bm(){this.l=[];this.u=[];this.h=[];this.i=new Set;this.m=new Map}
function Cm(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=tl(c),h=rl(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&Cl(a.client,g,h,[nl(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Cl(a.client,g,h,[nl(d.playerResponse.trackingParams)]))})}
function Dm(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.l.push([b,c]);else{var e=tl(d);c=c||rl(d);e&&c&&Cl(a.client,e,c,[b])}}
Bm.prototype.clickCommand=function(a,b,c){c=tl(void 0===c?0:c);if(!a.clickTrackingParams||!c)return!1;var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:nl(a.clickTrackingParams).getAsJson(),gestureType:e};b&&(a.clientData=b);b={G:vl(c),U:c};"UNDEFINED_CSN"==c?Dl("visualElementGestured",a,b):d?uh("visualElementGestured",a,d,b):wk("visualElementGestured",a,b);return!0};
function Em(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Fm(a,b,c);var f=rl(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,Dm(a,h[0],h[1]||f,c.layer);f=u(a.u);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=tl(g);var l=k[0]||rl(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={G:vl(h),U:h},"UNDEFINED_CSN"==h?Dl("visualElementStateChanged",k,l):g?uh("visualElementStateChanged",k,g,l):wk("visualElementStateChanged",
k,l))}}};
tl(c.layer)||a.j();if(c.Da)for(var d=u(c.Da),e=d.next();!e.done;e=d.next())Cm(a,e.value,c.layer);else Qk(Error("Delayed screen needs a data promise."))}
function Fm(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.jb?c.jb:c.layer;var e=tl(d);d=rl(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=E("EVENT_ID");O("screen_manager_log_servlet_ei")&&"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.Ca,p=c.G,n=Al(),t={csn:n,pageVe:(new ml({veType:b,youtubeData:g})).getAsJson()};h&&
h.visualElement?t.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&Pk(new ji("newScreen() parent element does not have a VE - rootVe",b));l&&(t.cloneCsn=l);l={G:p,U:n};k?uh("screenCreated",t,k,l):wk("screenCreated",t,l);Uh(Xh,new xl(n));var q=n}catch(B){Rk(B,{Yk:b,rootVe:d,parentVisualElement:void 0,Tk:e,Xk:f,Ca:c.Ca});Qk(B);return}wl(q,b,c.layer,c.G);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=O("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(ll));
for(f=b.next();!f.done;f=b.next())if(tl(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={G:vl(e),U:e,Ua:f},"UNDEFINED_CSN"==e?Dl("visualElementHidden",d,f):b?uh("visualElementHidden",d,b,f):wk("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");sm("csn",q);El.getInstance().clear();d=rl(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(O("web_mark_root_visible")||O("music_web_mark_root_visible"))&&
(e=q,q=O("use_default_events_client")?void 0:vk,b={csn:e,ve:d.getAsJson(),eventType:1},f={G:vl(e),U:e},"UNDEFINED_CSN"==e?Dl("visualElementShown",b,f):q?uh("visualElementShown",b,q,f):wk("visualElementShown",b,f));a.i.delete(c.layer||0);a.j=void 0;e=u(a.m);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value.has(c.layer)&&d&&Dm(a,b,d,c.layer)}
;function Gm(a){a&&(a.dataset?a.dataset[Hm("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Im(a,b){return a?a.dataset?a.dataset[Hm(b)]:a.getAttribute("data-"+b):null}
var Jm={};function Hm(a){return Jm[a]||(Jm[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Km=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Lm=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Mm(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Km,""),c=c.replace(Lm,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Nm(a,b,c)}
function Nm(a,b,c){c=void 0===c?null:c;var d=Om(a),e=document.getElementById(d),f=e&&Im(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Rg(d,b),b=""+Ja(b),Pm[b]=f),g||(e=Qm(a,d,function(){Im(e,"loaded")||(Gm(e),Ug(d),Nf(Pa(Vg,d),0))},c)))}
function Qm(a,b,c,d){d=void 0===d?null:d;var e=Lc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Vc(e,Wc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Rm(a){a=Om(a);var b=document.getElementById(a);b&&(Vg(a),b.parentNode.removeChild(b))}
function Sm(a,b){a&&b&&(a=""+Ja(b),(a=Pm[a])&&Tg(a))}
function Om(a){var b=document.createElement("a");Tb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ac(a)}
var Pm={};var Tm=[],Um=!1;function Vm(){if((!O("condition_ad_status_fetch_on_consent_cookie_html5_clients")||gd.get("CONSENT","").startsWith("YES+"))&&"1"!=ib()){var a=function(){Um=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)};
try{Mm("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Tm.push(Tf(function(){if(!(Um||"google_ad_status"in window)){try{Sm("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Um=!0;N("DCLKSTAT",3)}},5E3))}}
function Wm(){var a=Number(E("DCLKSTAT",0));return isNaN(a)?0:a}
;function Xm(){this.i=!1;this.h=null}
Xm.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=pb();g=k?k.createScript(g):g;g=(new rb(g)).toString()}a.interpreterSafeUrl&&(h=vb(a.interpreterSafeUrl.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Ym(this,g,h,a.program,b,c,d)}else Pk(Error("Cannot initialize botguard without program"))};
function Ym(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,Mm(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?Zm(a,d,!!g,h,e):(Rm(c),Pk(new ji("Unable to load Botguard","from "+c)))},f)):b&&(f=Lc(document,"SCRIPT"),f.textContent=b,f.nonce=Xb(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?Zm(a,d,!!g,b,e):Pk(Error("Unable to load Botguard from JS")))}
function Zm(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{$m(a,new d(b,e?function(){return e(b)}:Ea))}catch(h){h instanceof Error&&Pk(h)}else{try{$m(a,new d(b))}catch(h){h instanceof Error&&Pk(h)}e&&e(b)}else Pk(Error("Failed to finish initializing VM"))}
Xm.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
Xm.prototype.dispose=function(){this.h=null};
function $m(a,b){a.h=b}
;var an=new Xm;function bn(){return!!an.h}
function cn(a){a=void 0===a?{}:a;return an.invoke(a)}
;function dn(a,b,c){L.call(this);var d=this;c=c||E("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.B=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.o||0<=Wa(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.i=this.m=null;window.addEventListener("message",this.B)}
v(dn,L);dn.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.C)}catch(d){xf(d)}}};
dn.prototype.D=function(){window.removeEventListener("message",this.B);L.prototype.D.call(this)};function en(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new dn(!!E("WIDGET_ID_ENFORCE")),b=this.lb.bind(this);a.m=b;a.o=null;this.h.channel="widget";if(a=E("WIDGET_ID"))this.h.sessionId=a}
m=en.prototype;m.lb=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,fn(this,a)),this.j[a]=!0)):this.ya(a,b,c)};
m.ya=function(){};
function fn(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Va=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.sa());this.sendMessage("onReady");D(this.i,this.La,this);this.i=[]};
m.sa=function(){return null};
function gn(a,b){a.sendMessage("infoDelivery",b)}
m.La=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.La({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function hn(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function jn(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function kn(a,b,c,d){if(Ia(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function ln(a){en.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.Na.bind(this));this.addEventListener("onVideoProgress",this.rb.bind(this));this.addEventListener("onVolumeChange",this.sb.bind(this));this.addEventListener("onApiChange",this.mb.bind(this));this.addEventListener("onPlaybackQualityChange",this.ob.bind(this));this.addEventListener("onPlaybackRateChange",this.pb.bind(this));this.addEventListener("onStateChange",this.qb.bind(this));this.addEventListener("onWebglSettingsChanged",
this.tb.bind(this))}
v(ln,en);m=ln.prototype;
m.ya=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&hn(a)){var d=b;if(Ia(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=jn(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=jn(e);break;case "loadPlaylist":case "cuePlaylist":e=kn(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);hn(a)&&gn(this,this.sa())}};
m.Na=function(){var a=this.Va.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.sa=function(){if(!this.api)return null;var a=this.api.getApiInterface();ab(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.qb=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());gn(this,a)};
m.ob=function(a){gn(this,{playbackQuality:a})};
m.pb=function(a){gn(this,{playbackRate:a})};
m.mb=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.sb=function(){gn(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.rb=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());gn(this,a)};
m.tb=function(){var a={sphericalProperties:this.api.getSphericalProperties()};gn(this,a)};
m.dispose=function(){en.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function mn(a){L.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Ka,this)}
v(mn,L);m=mn.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.Z("RECEIVING"))};
m.Z=function(a,b){this.started&&!this.h&&this.connection.Z(a,b)};
m.Ka=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=nn(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=on(a,c))&&this.Z(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.nb.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.nb=function(a,b){this.started&&!this.h&&this.connection.Z(a,this.ra(a,b))};
m.ra=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.D=function(){var a=this.connection;a.h||$e(a.i,"command",this.Ka,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);L.prototype.D.call(this)};function pn(a,b){mn.call(this,b);this.api=a;this.start()}
v(pn,mn);pn.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
pn.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function nn(a,b){switch(a){case "loadVideoById":return a=jn(b),[a];case "cueVideoById":return a=jn(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=kn(b),[a];case "cuePlaylist":return a=kn(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function on(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
pn.prototype.ra=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return mn.prototype.ra.call(this,a,b)};
pn.prototype.D=function(){mn.prototype.D.call(this);delete this.api};function qn(a){a=void 0===a?!1:a;L.call(this);this.i=new M(a);Kd(this,Pa(Id,this.i))}
C(qn,L);qn.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
qn.prototype.l=function(a,b){this.h||this.i.W.apply(this.i,arguments)};function rn(a,b,c){qn.call(this);this.j=a;this.destination=b;this.id=c}
v(rn,qn);rn.prototype.Z=function(a,b){this.h||this.j.Z(this.destination,this.id,a,b)};
rn.prototype.D=function(){this.destination=this.j=null;qn.prototype.D.call(this)};function sn(a,b,c){L.call(this);this.destination=a;this.origin=c;this.i=Kf(window,"message",this.j.bind(this));this.connection=new rn(this,a,b);Kd(this,Pa(Id,this.connection))}
v(sn,L);sn.prototype.Z=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Be(a),this.origin))};
sn.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
sn.prototype.D=function(){Lf(this.i);this.destination=null;L.prototype.D.call(this)};function tn(){L.call(this);this.i=[]}
v(tn,L);tn.prototype.D=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Aa)}L.prototype.D.call(this)};function un(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||kb(b);this.assets=a.assets||{};this.attrs=a.attrs||kb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
un.prototype.clone=function(){var a=new un,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ga(c)?a[b]=kb(c):a[b]=c}return a};var vn=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function wn(a){a=a||"";if(window.spf){var b=a.match(vn);spf.style.load(a,b?b[1]:"",void 0)}else xn(a)}
function xn(a){var b=yn(a),c=document.getElementById(b),d=c&&Im(c,"loaded");d||c&&!d||(c=zn(a,b,function(){Im(c,"loaded")||(Gm(c),Ug(b),Nf(Pa(Vg,b),0))}))}
function zn(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Wc(a);Ub(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function yn(a){var b=Lc(document,"A");Tb(b,new Fb(a,Gb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ac(a)}
;function An(a,b,c,d){L.call(this);var e=this;this.F=b;this.webPlayerContextConfig=d;this.na=!1;this.api={};this.ba=this.m=null;this.J=new M;this.i={};this.L=this.fa=this.elementId=this.oa=this.config=null;this.K=!1;this.l=this.B=null;this.ga={};this.Oa=["onReady"];this.lastError=null;this.za=NaN;this.C={};this.Pa=new tn(this);this.P=0;this.j=this.o=a;Kd(this,Pa(Id,this.J));Bn(this);Cn(this);Kd(this,Pa(Id,this.Pa));c?this.P=Nf(function(){e.loadNewVideoConfig(c)},0):d&&(Dn(this),En(this))}
v(An,L);m=An.prototype;m.getId=function(){return this.F};
m.loadNewVideoConfig=function(a){if(!this.h){this.P&&(Of(this.P),this.P=0);var b=a||{};b instanceof un||(b=new un(b));this.config=b;this.setConfig(a);En(this);this.isReady()&&Fn(this)}};
function Dn(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.F,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.F:a.config.attrs.id=a.F);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.oa=a;this.config=Gn(a);Dn(this);this.fa||(this.fa=Hn(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Yc(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Yc(Number(a)||a))};
function Fn(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function In(a){var b=!0,c=Jn(a);c&&a.config&&(a=Kn(a),b=Im(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function En(a){if(!a.h&&!a.K){var b=In(a);if(b&&"html5"===(Jn(a)?"html5":null))a.L="html5",a.isReady()||Ln(a);else if(Mn(a),a.L="html5",b&&a.l&&a.o)a.o.appendChild(a.l),Ln(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=Nn(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.config?Gn(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);Ln(a)};
a.K=!0;b?a.B():(Mm(Kn(a),a.B),(b=On(a))&&wn(b),Pn(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function Jn(a){var b=Hc(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Ln(a){var b;if(!a.h){var c=Jn(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.K=!1,!Nn(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||Qn(a)):a.za=Nf(function(){Ln(a)},50)}}
function Qn(a){Bn(a);a.na=!0;var b=Jn(a);if(b){a.m=Rn(a,b,"addEventListener");a.ba=Rn(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Rn(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.m&&a.m(g,a.i[g]);Fn(a);a.fa&&a.fa(a.api);a.J.W("onReady",a.api)}
function Rn(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,Pk(h))}}}
function Bn(a){a.na=!1;if(a.ba)for(var b in a.i)a.i.hasOwnProperty(b)&&a.ba(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&Of(Number(c));a.C={};a.m=null;a.ba=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.oa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.na};
function Cn(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Ug("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Ug("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Ug("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=Hn(this,b);d&&(0<=Wa(this.Oa,a)||this.i[a]||(b=Sn(this,a),this.m&&this.m(a,b)),this.J.subscribe(a,d),"onReady"===a&&this.isReady()&&Nf(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=Hn(this,b))&&$e(this.J,a,b)};
function Hn(a,b){var c=b;if("string"===typeof b){if(a.ga[b])return a.ga[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];if(f=A(b))try{f.apply(y,e)}catch(g){Qk(g)}};
a.ga[b]=c}return c?c:null}
function Sn(a,b){var c="ytPlayer"+b+a.F;a.i[b]=c;y[c]=function(d){var e=Nf(function(){if(!a.h){a.J.W(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
hb(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.L||(Jn(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Mn(a){a.cancel();Bn(a);a.L=null;a.config&&(a.config.loaded=!1);var b=Jn(a);b&&(In(a)||!Pn(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&Sm(Kn(this),this.B);Of(this.za);this.K=!1};
m.D=function(){Mn(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Qk(b)}this.ga=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.oa=this.config=this.api=null;delete this.o;delete this.j;L.prototype.D.call(this)};
function Pn(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Kn(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function On(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Nn(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===fg(d||"","&")[b]}
function Gn(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?kb(e):e}return b}
;var Tn={},Un="player_uid_"+(1E9*Math.random()>>>0);function Vn(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Hc(d):d;var e=Un+"_"+Ja(d),f=Tn[e];if(f&&c)return Wn(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new An(d,e,a,b);Tn[e]=f;Ug("player-added",f.api);Kd(f,function(){delete Tn[f.getId()]});
return f.api}
function Wn(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Xn=null,Yn=null,Zn=null;function $n(){var a=Xn.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function ao(){if(id())return!0;var a=E("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=gd.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function bo(a,b,c){a="ST-"+ac(a).toString(36);b=b?fc(b):"";c=c||5;O("drop_st_cookie_before_cb")&&!ao()||wh(a,b,c)}
;function co(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=E("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=E("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=dc(window.location.href);g&&f.push(g);g=dc(d);if(0<=Wa(f,g)||!g&&0==d.lastIndexOf("/",0))if(O("autoescape_tempdata_url")&&(f=document.createElement("a"),Tb(f,d),d=f.href),d){g=d.match(bc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:tl()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&bo(d,b,k)}else bo(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var p=void 0===p?"":p;var n=void 0===n?window:n;c=n.location;a=gc(a,l)+p;a=a instanceof Fb?a:Lb(a);c.href=Hb(a)}return!0}
;z("yt.setConfig",N,void 0);z("yt.config.set",N,void 0);z("yt.setMsg",zf,void 0);z("yt.msgs.set",zf,void 0);z("yt.logging.errors.log",Qk,void 0);
z("writeEmbed",function(){var a=E("PLAYER_CONFIG",void 0);if(!a){var b=E("PLAYER_VARS",void 0);b&&(a={args:b})}gl(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=E("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);E("EXPERIMENT_FLAGS").embeds_js_api_set_1p_cookie&&(c=kg(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));N("FORCE_CSI_ON_GEL",
!0);c=["ol"];cm("").info.actionType="embed";c&&N("TIMING_AFT_KEYS",c);N("TIMING_ACTION","embed");c=E("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&sm(d,c[d]);sm("is_nav",1);(d=tl())&&sm("csn",d);(d=E("PREVIOUS_ACTION",void 0))&&!nm()&&sm("pa",d);d=Yl();c=E("CLIENT_PROTOCOL");var e=E("CLIENT_TRANSPORT");c&&sm("p",c);e&&sm("t",e);sm("yt_vis",xm());sm("yt_lt","cold");c=Ul();if(e=Wl())Z("srt",c.responseStart),1!==d.prerender&&(sm("yt_sts","n",void 0),Z("_start",e,void 0));d=am();0<d&&Z("fpt",
d);if(!O("log_deltas_killswitch")){var f,g,h,k;W&&W.timing&&(W.timeOrigin&&W.timing.navigationStart&&um("startTimeDelta",Math.floor(W.timeOrigin)-W.timing.navigationStart),(d=null===(k=null===(h=null===(g=null===(f=W.getEntriesByType)||void 0===f?void 0:f.call(W,"navigation"))||void 0===g?void 0:g[0])||void 0===h?void 0:h.toJSON)||void 0===k?void 0:k.call(h))&&d.responseEnd&&W.timing.responseEnd&&um("responseEndDelta",Vl(d.responseEnd)-W.timing.responseEnd))}f=Ul();f.isPerformanceNavigationTiming&&
sm("pnt",1,void 0);Z("nreqs",f.requestStart,void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=Wl()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",
f.secureConnectionStart,void 0),Z("ntcpe",f.connectEnd,void 0));W&&W.getEntriesByType&&zm();f=[];if(document.querySelector&&W&&W.getEntriesByName)for(var l in Rl)Rl.hasOwnProperty(l)&&(g=Rl[l],ym(l,g)&&f.push(g));f.length&&sm("rc",f.join(","));if(nm(void 0)){l={actionType:hm[E("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:hm[E("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(f=tl())l.clientScreenNonce=f;f=Zl(void 0);fm().info(l,f)}l=Yl();g=Tl();if("cold"===l.yt_lt&&(f=
pm(),h=f.gelTicks?f.gelTicks:f.gelTicks={},f=f.gelInfos?f.gelInfos:f.gelInfos={},nm())){for(var p in g)"tick_"+p in h||om(p,g[p]);p=rm();g=Zl();h={};for(var n in l)"info_"+n in f||!(k=qm(n,l[n]))||(Fl(p,k),Fl(h,k));fm().info(h,g)}z("ytglobal.timingready_",!0,void 0);tm();(n=E("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in n?(n=n.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,n.serializedForcedExperimentIds||(p=kg(),p.forced_experiments&&(n.serializedForcedExperimentIds=
p.forced_experiments)),Xn=Vn(a,n,!1)):Xn=Vn(a);Xn.addEventListener("onVideoDataChange",$n);a=E("POST_MESSAGE_ID","player");E("ENABLE_JS_API")?Zn=new ln(Xn):E("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Yn=new sn(window.parent,a,b),Zn=new pn(Xn,Yn.connection));Vm();E("EXPERIMENT_FLAGS").networkless_logging_web_embedded&&gk()},void 0);
var eo=vf(function(){vm();var a=yh.getInstance(),b=!!((Bh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Nd(document.body,"exp-invert-logo"))if(c&&!Nd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Nd(d,"inverted-hdpi")){var e=Ld(d);Md(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Nd(document.body,"inverted-hdpi")&&Od();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Bh(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete xh[b]:(c=d.toString(16),xh[b]=c.toString());c=!0;O("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in xh)d.push(f+"="+encodeURIComponent(String(xh[f])));wh(b,d.join("&"),63072E3,a.i,c)}Bm.h||(Bm.h=new Bm);a=Bm.h;f=16623;var g=void 0===g?{}:g;Object.values(Sk).includes(f)||(Pk(new ji("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.l=[];a.u=[];g.Da?Em(a,f,g):Fm(a,f,g)}),fo=vf(function(){Xn&&
Xn.sendAbandonmentPing&&Xn.sendAbandonmentPing();
E("PL_ATT")&&an.dispose();for(var a=0,b=Tm.length;a<b;a++)Vf(Tm[a]);Tm.length=0;Rm("//static.doubleclick.net/instream/ad_status.js");Um=!1;N("DCLKSTAT",0);Jd(Zn,Yn);Xn&&(Xn.removeEventListener("onVideoDataChange",$n),Xn.destroy())});
window.addEventListener?(window.addEventListener("load",eo),window.addEventListener("unload",fo)):window.attachEvent&&(window.attachEvent("onload",eo),window.attachEvent("onunload",fo));Qa("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||bn);Qa("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||cn);Qa("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||Wm);
Qa("yt.player.exports.navigate",A("yt.player.exports.navigate")||co);Qa("yt.util.activity.init",A("yt.util.activity.init")||Xf);Qa("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||$f);Qa("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||Yf);}).call(this);
