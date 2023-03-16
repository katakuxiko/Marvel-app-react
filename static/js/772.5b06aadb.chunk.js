/*! For license information please see 772.5b06aadb.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmarvel_app=self.webpackChunkmarvel_app||[]).push([[772],{3957:function(t,r,e){e.d(r,{Z:function(){return i}});var n=e.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",o=e.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",a=e(184),i=function(){return(0,a.jsxs)("div",{className:"app__banner",children:[(0,a.jsx)("img",{src:n,alt:"Avengers"}),(0,a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,a.jsx)("br",{}),"Stay tuned!"]}),(0,a.jsx)("img",{src:o,alt:"Avengers logo"})]})}},9613:function(t,r,e){e.d(r,{Z:function(){return a}});var n=e.p+"static/media/error.42292aa12b6bc303ce99.gif",o=e(184),a=function(){return(0,o.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},6501:function(t,r,e){e.r(r);var n=e(885),o=e(6871),a=e(2791),i=e(388),c=e(3394),u=e(9613),s=e(3957),l=e(184);r.default=function(t){var r=t.Component,e=t.dataType,f=(0,o.UO)().id,h=(0,i.Z)(),p=h.getComics,d=h.clearError,v=h.getCharacter,y=h.loading,m=h.error,g=(0,a.useState)(null),w=(0,n.Z)(g,2),b=w[0],x=w[1];(0,a.useEffect)((function(){Z()}),[f]);var Z=function(){switch(d(),e){case"comic":p(f).then(E);break;case"character":v(f).then(E)}},E=function(t){x(t)},L=m?(0,l.jsx)(u.Z,{}):null,k=y?(0,l.jsx)(c.Z,{}):null,j=y||m||!b?null:(0,l.jsx)(r,{data:b});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{}),L,k,j]})}},388:function(t,r,e){e.d(r,{Z:function(){return c}});var n=e(4165),o=e(5861),a=e(885),i=e(2791),c=function(){var t=function(){var t=(0,i.useState)(!1),r=(0,a.Z)(t,2),e=r[0],c=r[1],u=(0,i.useState)(null),s=(0,a.Z)(u,2),l=s[0],f=s[1],h=(0,i.useCallback)(function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o,a,i,u,s=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:null,a=s.length>3&&void 0!==s[3]?s[3]:{"Content-type":"application/json"},c(!0),t.prev=4,t.next=7,fetch(r,{method:e,body:o,headers:a});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return u=t.sent,c(!1),t.abrupt("return",u);case 17:throw t.prev=17,t.t0=t.catch(4),c(!1),f(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(r){return t.apply(this,arguments)}}(),[]);return{loading:e,request:h,clearError:(0,i.useCallback)((function(){f(null)}),[]),error:l}}(),r=t.loading,e=t.request,c=t.error,u=t.clearError,s="https://gateway.marvel.com:443/v1/public/",l="apikey=ff5ce3ecbcc8c665529b8eaa817b386d",f=210,h=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r,o,a=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:f,t.next=3,e("".concat(s,"comics?limit=8&offset=").concat(r,"&").concat(l));case 3:return o=t.sent,t.abrupt("return",o.data.results.map(m));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"comics/").concat(r,"?").concat(l));case 2:return o=t.sent,t.abrupt("return",m(o.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r,o,a=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:f,t.next=3,e("".concat(s,"characters?limit=9&offset=").concat(r,"&").concat(l));case 3:return o=t.sent,t.abrupt("return",o.data.results.map(g));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters/").concat(r,"?").concat(l));case 2:return o=t.sent,t.abrupt("return",g(o.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),y=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters?name=").concat(r,"&").concat(l));case 2:return o=t.sent,t.abrupt("return",o.data.results.map(g));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),m=function(t){return{id:t.id,title:t.title,description:t.description?t.description:"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about of number of pages",language:t.textObjects.language||"en-us",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}},g=function(t){return{name:t.name,description:t.description,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,id:t.id,comics:t.comics.items}};return{loading:r,error:c,getAllCharacters:d,getCharacter:v,clearError:u,getAllComics:h,getComics:p,getCharacterByName:y}}},5861:function(t,r,e){function n(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=t.apply(r,e);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}e.d(r,{Z:function(){return o}})},4165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(1002);function o(){o=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(C){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof p?r:p,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=Z(i,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=f(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,i),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};s(y,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(j([])));g&&g!==r&&e.call(g,i)&&(y=g);var w=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function o(a,i,c,u){var s=f(t[a],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==(0,n.Z)(h)&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return a=a?a.then(n,n):n()}}function Z(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,Z(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=v,s(w,"constructor",v),s(v,"constructor",d),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new x(l(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(w),s(w,u,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=e.call(a,"catchLoc"),u=e.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:j(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}},1002:function(t,r,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}e.d(r,{Z:function(){return n}})}}]);
//# sourceMappingURL=772.5b06aadb.chunk.js.map