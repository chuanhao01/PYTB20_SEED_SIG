(function(e){function t(t){for(var s,r,o=t[0],i=t[1],l=t[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],s=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(s=!1)}s&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={app:0},a={app:0},c=[];function o(e){return i.p+"js/"+({event:"event","login~register":"login~register",login:"login",register:"register"}[e]||e)+"."+{event:"c534a5cc","login~register":"21b93db9",login:"a7845b88",register:"c1520d2d"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={event:1,"login~register":1,login:1,register:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var s="css/"+({event:"event","login~register":"login~register",login:"login",register:"register"}[e]||e)+"."+{event:"ace8654f","login~register":"ddd3d4f5",login:"769426a2",register:"075b8f7a"}[e]+".css",a=i.p+s,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===a))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===s||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var s=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=s,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=a;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){r[e]=0})));var s=a[e];if(0!==s)if(s)t.push(s[2]);else{var c=new Promise((function(t,n){s=a[e]=[t,n]}));t.push(s[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",f.name="ChunkLoadError",f.type=s,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("5530"),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),a=n("bc3a"),c=n.n(a),o=n("2f62"),i={type:null,message:null},l={success:function(e,t){var n=e.commit;n("success",t)},error:function(e,t){var n=e.commit;n("error",t)},clear:function(e){var t=e.commit;t("clear")}},u={success:function(e,t){e.type="alert-success",e.message=t},error:function(e,t){e.type="alert-danger",e.message=t},clear:function(e){e.type=null,e.message=null}},f={namespaced:!0,state:i,actions:l,mutations:u},d={login:v,logout:g,register:b,getUser:m};function v(e){return c.a.post("/api/login",{email:e}).then((function(e){return console.log(e),console.log("login success"),e})).catch((function(e){console.error(e)}))}function g(){localStorage.removeItem("user")}function b(e){return c.a.post("/api/users",e).then((function(e){return console.log("register success"),e})).catch((function(e){console.error(e)}))}function m(){console.log("hello")}n("4de4");var j=n("2909"),p={getAllEvents:h,getEventById:E,filterEvents:y};function h(){return c.a.get("api/events").then(_).catch((function(e){return console.log(e)}))}function E(e){return c.a.get("api/events/".concat(e)).then(_).catch((function(e){return console.log(e)}))}function y(e,t){var n=Object(j["a"])(t);if("all"!==e.status){var s=n.filter((function(t){return t.status===e.status}));n=s}return n}function _(e){return console.log(e.data),e.data}n("99af"),n("d3b7");function O(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var S=n("8c4f"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home mx-auto mt-5"},[n("h1",{staticClass:"pt-3"},[e._v("List of Events")]),n("event-box")],1)},A=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"eventbox"},[n("event-filter"),n("div",{staticClass:"events row"},e._l(e.allEvents.items,(function(t){return n("router-link",{key:t.eventid,staticClass:"event col-lg-3 col-md-4 col-6 mb-3",attrs:{to:"/event/"+t.event_id,tag:"div"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"container"},[n("h4",[e._v(e._s(t.title))]),e._v(" "+e._s(t.description)+" "),n("hr"),n("span",[n("svg",{staticClass:"svg-inline--fa fa-calendar-alt fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"calendar-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}})]),e._v(" "+e._s(e.moment(t.event_date).format("YYYY-MM-DD"))+" ")])])])])})),1)],1)},z=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"eventFilter"},[n("v-btn-toggle",{attrs:{tile:"",group:""},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[n("v-btn",{attrs:{value:"all"},on:{click:function(t){return e.getAllEvents()}}},[e._v("All Events")]),n("v-btn",{attrs:{value:"signed-up"},on:{click:function(t){return e.getSignedUpEvents()}}},[e._v("Signed Up")]),n("v-btn",{attrs:{value:"!signed-up"},on:{click:function(t){return e.getNotSignedUpEvents()}}},[e._v(" Not Signed Up ")])],1)],1)},C=[],U={name:"EventFilter",data:function(){return{status:"all"}},created:function(){this.getAllEvents()},methods:Object(s["a"])({},Object(o["b"])("events",{getAllEvents:"getAllEvents",getSignedUpEvents:"getSignedUpEvents",getNotSignedUpEvents:"getNotSignedUpEvents"}))},B=U,F=n("2877"),R=n("6544"),N=n.n(R),V=n("8336"),I=n("a609"),P=Object(F["a"])(B,x,C,!1,null,null,null),T=P.exports;N()(P,{VBtn:V["a"],VBtnToggle:I["a"]});var q=n("c1df"),L=n.n(q),M={name:"EventBox",components:{"event-filter":T},created:function(){this.allEvents.length||this.getAllEvents(),console.log("list of events "+JSON.stringify(this.allEvents))},computed:Object(s["a"])({},Object(o["c"])({allEvents:function(e){return e.events.allEvents}})),methods:Object(s["a"])({},Object(o["b"])("events",{getAllEvents:"getAllEvents"}),{moment:function(){return L()()}})},D=M,H=(n("bd91"),Object(F["a"])(D,w,z,!1,null,null,null)),J=H.exports,$={components:{"event-box":J},data:function(){return{}},computed:Object(s["a"])({},Object(o["c"])({account:function(e){return e.account},status:function(e){return e.events.filter.status}})),created:function(){},methods:{}},Y=$,G=(n("6c4e"),Object(F["a"])(Y,k,A,!1,null,"1ccd060e",null)),K=G.exports;r["a"].use(S["a"]);var Q=[{path:"/",name:"Home",component:K},{path:"/event/:eventid",name:"Event",component:function(){return n.e("event").then(n.bind(null,"0a2e"))}},{path:"/user/:userid",name:"User Profile",component:function(){return n.e("event").then(n.bind(null,"7c54"))}},{path:"/user/:userid/activity",name:"User Activity",component:function(){return n.e("event").then(n.bind(null,"5d90"))}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("login~register"),n.e("login")]).then(n.bind(null,"3d71"))}},{path:"/register",name:"Register",component:function(){return Promise.all([n.e("login~register"),n.e("register")]).then(n.bind(null,"63a6"))}},{path:"*",redirect:"/"}],W=new S["a"]({mode:"history",base:"/",routes:Q}),X={createSignUp:Z,deleteSignUp:ee};function Z(e){return c.a.post("/api/events/".concat(e,"/signups")).then((function(e){return console.log(e),console.log("volunteer success"),e})).catch((function(e){console.error(e)}))}function ee(e,t){var n={method:"DELETE",headers:O()};return fetch("".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL,"/events/").concat(t,"/signups"),n).then(te)}function te(e){return console.log(e),e.text().then((function(t){var n=t&&JSON.parse(t);if(!e.ok){401===e.status&&(d.logout(),location.reload(!0));var s=n&&n.message||e.statusText;return Promise.reject(s)}return n}))}var ne=JSON.parse(localStorage.getItem("user")),se=ne?{status:{loggedin:!0},user:ne}:{status:{},user:null},re={login:function(e,t){var n=e.dispatch,s=e.commit,r=t.email;s("loginRequest",{email:r}),d.login(r).then((function(e){s("loginSuccess",e)}),(function(e){s("loginFailure",e),n("alert/error",e,{root:!0})}))},logout:function(e){var t=e.commit;d.logout(),t("logout")},register:function(e,t){var n=e.dispatch,s=e.commit;s("registerRequest",t),d.register(t).then((function(e){s("registerSuccess",e),W.push("/login"),setTimeout((function(){n("alert/success","Registration successful",{root:!0})}))}),(function(e){s("registerFailure",e),n("alert/error",e,{root:!0})}))}},ae={loginRequest:function(e,t){e.status={loggingIn:!0},e.user=t},loginSuccess:function(e,t){e.user=t},loginFailure:function(e){e.status={},e.user=null},logout:function(e){e.status={},e.user=null},registerRequest:function(e,t){e.status={registering:!0}},registerSuccess:function(e,t){e.status={}},registerFailure:function(e,t){e.status={}}},ce={isLoggedIn:function(){return se.status.loggedin}},oe={namespaced:!0,state:se,actions:re,mutations:ae,getters:ce},ie={all:{},user:{}},le={getAll:function(e){var t=e.commit;t("getAllRequest"),d.getAll().then((function(e){return t("getAllSuccess",e)}),(function(e){return t("getAllFailure",e)}))}},ue={getAllRequest:function(e){e.all={loading:!0}},getAllSuccess:function(e,t){e.all={items:t}},getAllFailure:function(e,t){e.all={error:t}}},fe={namespaced:!0,state:ie,actions:le,mutations:ue},de={allEvents:{},filteredEvents:{},event:{},filter:{status:"all"}},ve={getAllEvents:function(e){var t=e.commit;t("getAllEventsRequest"),p.getAllEvents().then((function(e){return t("getAllEventsSuccess",e)}),(function(e){return t("getAllEventsFailure",e)}))},getEventById:function(e,t){var n=e.commit;n("getEventByIdRequest"),p.getEventById(t).then((function(e){return n("getEventByIdSuccess",e)}),(function(e){return n("getEventByIdFailure",e)}))},createSignUp:function(e,t){var n=e.commit;n("signupRequest",t),X.createSignUp(t).then((function(e){n("signupSuccess",e)}),(function(e){n("signupFailure",e)}))},filterStatus:function(e,t){var n=e.commit,s=e.dispatch;n("setFilterStatus",t),s("filterEvents")}},ge={getAllEventsRequest:function(e){e.allEvents={loading:!0}},getAllEventsSuccess:function(e,t){e.allEvents={items:t}},getAllEventsFailure:function(e,t){e.allEvents={error:t}},getEventByIdRequest:function(e){e.event={loading:!0}},getEventByIdSuccess:function(e,t){e.event={items:t}},getEventByIdFailure:function(e,t){e.event={error:t}},signupRequest:function(e,t){e.status={signingup:!0}},signupSuccess:function(e,t){e.status={}},signupFailure:function(e,t){e.status={}},setFilteredEvents:function(e,t){e.filteredEvents=t},setFilterStatus:function(e,t){e.filter.status=t},filterEvents:function(e){var t=Object(j["a"])(e.events);e.filteredEvents=t,e.filteredEvents=p.filterEvents(e.filter,t)}},be={getAllEvents:function(e){return e.allEvents},getFilteredEvents:function(e){return e.filteredEvents},getEvent:function(e){return e.event}},me={namespaced:!0,state:de,actions:ve,mutations:ge,getters:be};r["a"].use(o["a"]);var je=new o["a"].Store({modules:{alert:f,account:oe,users:fe,events:me}}),pe=(n("4989"),n("ab8b"),n("f309"));r["a"].use(pe["a"]);var he=new pe["a"]({}),Ee=n("4c93"),ye=n("7bb1"),_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("NavBar",{attrs:{id:"nav"}}),n("v-content",{staticClass:"overflow-y-auto vh-100 mt-2 pt-5",attrs:{id:"contents"}},[n("v-container",{staticClass:"vh-100",attrs:{fluid:""}},[n("router-view")],1)],1)],1)},Oe=[],Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{fixed:"",color:"white","elevate-on-scroll":"","scroll-target":"#contents"}},[n("v-toolbar-title",{staticClass:"toolbar-title"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("span",[n("strong",[e._v("SINGAPORE")]),e._v(" YOUTH "),n("strong",[e._v("FOR")]),e._v(" CHRIST ")])])],1),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{text:""}},[n("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),n("v-btn",{attrs:{text:""}},[n("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1)],1),n("v-menu",{staticClass:"hidden-md-and-up"},[n("v-toolbar-side-icon"),n("v-list",[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[e._v("Login")])],1)],1)],1)],1)],1)},ke=[],Ae={},we=Ae,ze=(n("656d"),n("40dc")),xe=n("8860"),Ce=n("e449"),Ue=n("2fa4"),Be=n("2a7f"),Fe=Object(F["a"])(we,Se,ke,!1,null,"41277fab",null),Re=Fe.exports;N()(Fe,{VAppBar:ze["a"],VBtn:V["a"],VList:xe["a"],VMenu:Ce["a"],VSpacer:Ue["a"],VToolbarItems:Be["a"],VToolbarTitle:Be["b"]});var Ne={name:"app",components:{NavBar:Re},data:function(){return{footer:{inset:!0}}}},Ve=Ne,Ie=(n("5c0b"),n("7496")),Pe=n("a523"),Te=n("a75b"),qe=Object(F["a"])(Ve,_e,Oe,!1,null,null,null),Le=qe.exports;N()(qe,{VApp:Ie["a"],VContainer:Pe["a"],VContent:Te["a"]}),Object(ye["d"])("eager"),Object(ye["c"])("required",Object(s["a"])({},Ee["g"],{message:"{_field_} can not be empty"})),Object(ye["c"])("max",Object(s["a"])({},Ee["e"],{message:"{_field_} entered is not valid"})),Object(ye["c"])("min",Object(s["a"])({},Ee["f"],{message:"{_field_} entered is not valid"})),Object(ye["c"])("length",Object(s["a"])({},Ee["d"],{message:"{_field_} entered is not valid"})),Object(ye["c"])("email",Object(s["a"])({},Ee["c"],{message:"Email must be valid"})),Object(ye["c"])("alpha_num",Object(s["a"])({},Ee["a"],{message:"{_field_} must be valid"})),Object(ye["c"])("digits",Object(s["a"])({},Ee["b"],{message:"{_field_} must be valid"})),r["a"].component("ValidationObserver",ye["a"]),r["a"].component("ValidationProvider",ye["b"]),r["a"].config.productionTip=!1,c.a.defaults.baseURL="http://34.87.12.64:8081",c.a.defaults.withCredentials=!0,new r["a"]({router:W,store:je,vuetify:he,render:function(e){return e(Le)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("7694"),r=n.n(s);r.a},"656d":function(e,t,n){"use strict";var s=n("e3a9"),r=n.n(s);r.a},"6c4e":function(e,t,n){"use strict";var s=n("992b"),r=n.n(s);r.a},"6da8":function(e,t,n){},7694:function(e,t,n){},"992b":function(e,t,n){},bd91:function(e,t,n){"use strict";var s=n("6da8"),r=n.n(s);r.a},e3a9:function(e,t,n){}});
//# sourceMappingURL=app.fb1efb04.js.map