"use strict";(self.webpackChunkmarvel_app=self.webpackChunkmarvel_app||[]).push([[682],{3957:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",a=n.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",c=n(184),i=function(){return(0,c.jsxs)("div",{className:"app__banner",children:[(0,c.jsx)("img",{src:r,alt:"Avengers"}),(0,c.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,c.jsx)("br",{}),"Stay tuned!"]}),(0,c.jsx)("img",{src:a,alt:"Avengers logo"})]})}},9613:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n.p+"static/media/error.42292aa12b6bc303ce99.gif",a=n(184),c=function(){return(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})}},1748:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(4270),a=n(3957),c=n(2982),i=n(885),s=n(2791),o=n(3504),u=n(6983),l=n(5660),p=n(388),m=n(3394),f=n(9613),d=n(184),h=function(){var t=(0,s.useState)([]),e=(0,i.Z)(t,2),n=e[0],r=e[1],a=(0,s.useState)(!0),h=(0,i.Z)(a,2),v=h[0],g=h[1],b=(0,s.useState)(210),x=(0,i.Z)(b,2),Z=x[0],j=x[1],_=(0,s.useState)(!1),w=(0,i.Z)(_,2),k=(w[0],w[1]),C=(0,p.Z)(),y=C.loading,N=C.error,A=C.getAllComics;(0,s.useEffect)((function(){E(Z,!0)}),[]);var E=function(t,e){g(!e),A(t).then(S)},S=function(t){var e=!1;t.length<8&&(e=!0),r((function(e){return[].concat((0,c.Z)(e),(0,c.Z)(t))})),g(!1),j((function(t){return t+8})),k((function(t){return e}))};var F=function(t){var e=t.map((function(t,e){var n="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail?{objectFit:"contain"}:{objectFit:"cover"};return(0,d.jsx)(u.Z,{classNames:"comics__item",timeout:1500,children:(0,d.jsx)("li",{className:"comics__item",children:(0,d.jsxs)(o.rU,{to:"/comics/".concat(t.id),href:"#",children:[(0,d.jsx)("img",{style:n,src:t.thumbnail,alt:"ultimate war",className:"comics__item-img"}),(0,d.jsx)("div",{className:"comics__item-name",children:t.title}),(0,d.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)},t.id)}));return(0,d.jsx)("ul",{className:"comics__grid",children:(0,d.jsx)(l.Z,{component:null,children:e})})}(n),q=N?(0,d.jsx)(f.Z,{}):null,T=y&&!v?(0,d.jsx)(m.Z,{}):null;return(0,d.jsxs)("div",{className:"comics__list",children:[q,T,F,(0,d.jsx)("button",{disabled:v,onClick:function(){return E(Z)},className:"button button__main button__long",children:(0,d.jsx)("div",{className:"inner",children:"load more"})})]})},v=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.q,{children:[(0,d.jsx)("meta",{name:"description",content:"Page with list of our comics"}),(0,d.jsx)("title",{children:"Comics page"})]}),(0,d.jsx)(a.Z,{}),(0,d.jsx)(h,{})]})}},388:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(4165),a=n(5861),c=n(885),i=n(2791),s=function(){var t=function(){var t=(0,i.useState)(!1),e=(0,c.Z)(t,2),n=e[0],s=e[1],o=(0,i.useState)(null),u=(0,c.Z)(o,2),l=u[0],p=u[1],m=(0,i.useCallback)(function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a,c,i,o,u=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:{"Content-type":"application/json"},s(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:c});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return o=t.sent,s(!1),t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),s(!1),p(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{loading:n,request:m,clearError:(0,i.useCallback)((function(){p(null)}),[]),error:l}}(),e=t.loading,n=t.request,s=t.error,o=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=ff5ce3ecbcc8c665529b8eaa817b386d",p=210,m=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e,a,c=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:p,t.next=3,n("".concat(u,"comics?limit=8&offset=").concat(e,"&").concat(l));case 3:return a=t.sent,t.abrupt("return",a.data.results.map(g));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"comics/").concat(e,"?").concat(l));case 2:return a=t.sent,t.abrupt("return",g(a.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e,a,c=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:p,t.next=3,n("".concat(u,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return a=t.sent,t.abrupt("return",a.data.results.map(b));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters/").concat(e,"?").concat(l));case 2:return a=t.sent,t.abrupt("return",b(a.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters?name=").concat(e,"&").concat(l));case 2:return a=t.sent,t.abrupt("return",a.data.results.map(b));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(t){return{id:t.id,title:t.title,description:t.description?t.description:"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about of number of pages",language:t.textObjects.language||"en-us",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}},b=function(t){return{name:t.name,description:t.description,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,id:t.id,comics:t.comics.items}};return{loading:e,error:s,getAllCharacters:d,getCharacter:h,clearError:o,getAllComics:m,getComics:f,getCharacterByName:v}}}}]);
//# sourceMappingURL=682.8d658435.chunk.js.map