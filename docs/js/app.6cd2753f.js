(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0af517":"d62fb8e0","chunk-2d20770d":"3b1aacfd","chunk-6feb54fb":"1a41ed68","chunk-09c8063d":"146b0048","chunk-2d0d679f":"90e505ca","chunk-2d0e271f":"5858f4f9","chunk-7adff9a6":"8894fae9"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-6feb54fb":1,"chunk-09c8063d":1,"chunk-7adff9a6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0af517":"31d6cfe0","chunk-2d20770d":"31d6cfe0","chunk-6feb54fb":"e6c87b6a","chunk-09c8063d":"1d75ff36","chunk-2d0d679f":"31d6cfe0","chunk-2d0e271f":"31d6cfe0","chunk-7adff9a6":"e8624e3e"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-subheader",[e._v("REPORTS")]),n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}},e._l(e.links,(function(t,r){return n("v-list-item",{key:r,attrs:{to:t.url}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)})),1)],1)],1),n("v-app-bar",{attrs:{app:"",dark:"",color:"blue darken-4"}},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){e.drawer=!e.drawer}}}),n("v-toolbar-title",[n("router-link",{staticClass:"pointer",attrs:{to:"/",tag:"span"}},[e._v("Ride gear")])],1),n("v-spacer"),n("div",{staticClass:"hidden-sm-and-down"},e._l(e.links,(function(t){return n("v-btn",{key:t.id,staticClass:"app-header__link",attrs:{text:"",large:"",elevation:"2",to:t.url}},[n("v-icon",{attrs:{dark:"",left:""},domProps:{textContent:e._s(t.icon)}}),e._v(" "+e._s(t.title)+" ")],1)})),1)],1),n("v-main",[n("v-container",[n("router-view")],1)],1)],1)},o=[],i={data:function(){return{drawer:!1,selectedItem:1,links:[{title:"Login",icon:"mdi-lock",url:"/login"},{title:"Registration",icon:"mdi-face",url:"/registration"},{title:"Orders",icon:"mdi-bookmark-check-outline",url:"/orders"},{title:"New ad",icon:"mdi-plus-box-multiple",url:"/new"},{title:"My ads",icon:"mdi-format-list-bulleted",url:"/list"}]}}},s=i,c=(n("5c0b"),n("2877")),l=n("6544"),u=n.n(l),d=n("7496"),f=n("40dc"),m=n("5bc1"),p=n("8336"),h=n("a523"),v=n("132d"),g=n("8860"),b=n("da13"),k=n("5d23"),w=n("1baa"),y=n("34c3"),_=n("f6c4"),V=n("f774"),C=n("2fa4"),I=n("e0c7"),P=n("2a7f"),x=Object(c["a"])(s,a,o,!1,null,null,null),A=x.exports;u()(x,{VApp:d["a"],VAppBar:f["a"],VAppBarNavIcon:m["a"],VBtn:p["a"],VContainer:h["a"],VIcon:v["a"],VList:g["a"],VListItem:b["a"],VListItemContent:k["a"],VListItemGroup:w["a"],VListItemIcon:y["a"],VListItemTitle:k["c"],VMain:_["a"],VNavigationDrawer:V["a"],VSpacer:C["a"],VSubheader:I["a"],VToolbarTitle:P["a"]});n("d3b7");var j=n("8c4f"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[e.loading?n("v-sheet",[n("v-skeleton-loader",{attrs:{light:"",type:"image"}})],1):n("v-carousel",e._l(e.ads,(function(e){return n("v-carousel-item",{key:e.id,attrs:{to:"/ad/"+e.id,src:e.fullImage}})})),1)],1)],1)],1),n("v-container",{attrs:{"grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.ads,(function(t){return n("v-flex",{key:t.id,attrs:{xs12:"",sm6:"",md4:""}},[n("v-card",[e.loading?n("v-sheet",[n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{"full-width":"",type:"image, card-heading, actions"}})],1):n("div",[n("v-img",{attrs:{src:t.previewImage,height:"200px"}}),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[e._v(e._s(t.title))]),n("div",[e._v(e._s(t.description))])])]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:"",to:"/ad/"+t.id}},[e._v("Open")]),n("v-btn",{staticClass:"primary",attrs:{raised:""}},[e._v("Buy")])],1)],1)],1)],1)})),1)],1)],1)},S=[],L={data:function(){return{loading:!0,ads:[{title:"Airflame Gloss",description:"$375",promo:!1,previewImage:"http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AFPSolidWhiteProfile-0101-8031.jpg?mtime=20161212113716",fullImage:"http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_hero/IconAirframeProGlossWhiteHelmetMainFeature.jpg?mtime=20161212113946",id:"121980921"},{title:"Airflame Construct",description:"$395",promo:!0,previewImage:"http://s3-us-west-2.amazonaws.com/iconmotosports/gear/_r300/AFPConstructBlackProfile-0101-8010.jpg?mtime=20160330162033",fullImage:"http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_hero/IconAirframeProConstructBlackMainFeature.jpg?mtime=20160428173230",id:"121980922"},{title:"Airflame Quicksilver",description:"$400",promo:!0,previewImage:"http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AirframeProQuicksilverProfile.jpg?mtime=20170801103340",fullImage:"http://s3-us-west-2.amazonaws.com/iconmotosports/videos/poster/_wFull/AirframeProQuicksilverMainImage.jpg?mtime=20170822092522",id:"121980923"}]}},mounted:function(){var e=this;setTimeout((function(){e.loading=!1}),1e3)}},T=L,E=(n("a27f"),n("b0af")),B=n("99d9"),M=n("5e66"),N=n("3e35"),F=n("0e8f"),z=n("adda"),$=n("a722"),R=n("8dd9"),D=n("3129"),G=Object(c["a"])(T,O,S,!1,null,"49f57ad8",null),H=G.exports;u()(G,{VBtn:p["a"],VCard:E["a"],VCardActions:B["a"],VCardTitle:B["c"],VCarousel:M["a"],VCarouselItem:N["a"],VContainer:h["a"],VFlex:F["a"],VImg:z["a"],VLayout:$["a"],VSheet:R["a"],VSkeletonLoader:D["a"],VSpacer:C["a"]}),r["a"].use(j["a"]);var Q=[{path:"/",name:"Home",component:H},{path:"/ad/:id",name:"ad",component:function(){return n.e("chunk-2d20770d").then(n.bind(null,"a118"))}},{path:"/list",name:"list",component:function(){return n.e("chunk-2d0af517").then(n.bind(null,"0e8d"))}},{path:"/new",name:"newAd",component:function(){return Promise.all([n.e("chunk-6feb54fb"),n.e("chunk-09c8063d")]).then(n.bind(null,"7046"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-6feb54fb"),n.e("chunk-2d0e271f")]).then(n.bind(null,"7f71"))}},{path:"/registration",name:"reg",component:function(){return Promise.all([n.e("chunk-6feb54fb"),n.e("chunk-2d0d679f")]).then(n.bind(null,"735b"))}},{path:"/orders",name:"orders",component:function(){return n.e("chunk-7adff9a6").then(n.bind(null,"cdd0"))}}],q=new j["a"]({mode:"history",base:"/",routes:Q}),J=q,W=n("2f62");r["a"].use(W["a"]);var K=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}}),U=n("f309");r["a"].use(U["a"]);var X=new U["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:J,store:K,vuetify:X,render:function(e){return e(A)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},"9c3d":function(e,t,n){},a27f:function(e,t,n){"use strict";n("9c3d")}});
//# sourceMappingURL=app.6cd2753f.js.map