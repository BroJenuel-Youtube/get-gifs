(function(t){function e(e){for(var o,c,i=e[0],s=e[1],l=e[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},r=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"485f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a=n("5c59"),r=n.n(a),c=Object(o["e"])("i",{class:"bx bx-window-close"},null,-1),i={class:"images"};function s(t,e,n,a,s,l){var u=Object(o["h"])("dir");return Object(o["f"])(),Object(o["c"])(o["a"],null,[Object(o["e"])("form",{onSubmit:e[3]||(e[3]=Object(o["l"])((function(t){return l.getGifs()}),["prevent"])),class:"field-container",style:0==t.datas.length?"margin-top: 50px;":""},[Object(o["e"])("img",{style:[0==t.datas.length?"width: 200px;":"width: 70px; position:fixed; top: 0px; margin-left: -200px;",{"margin-bottom":"-100px",transition:"0.15 ease"}],src:r.a,alt:""},null,4),Object(o["e"])("h1",{style:[0==t.datas.length?"":"display:none;",{"margin-bottom":"-20px"}],class:"header"}," Search GIFs ",4),Object(o["e"])(u,{class:"input-container"},{default:Object(o["j"])((function(){return[Object(o["k"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.q=e}),placeholder:"Type here to Search GIF",class:"field",style:""!=t.q?"width: 250px;":""},null,4),[[o["i"],t.q]]),Object(o["e"])("h1",{style:0==t.datas.length?"display: none;":"width: 70px; position:fixed; top: 0; right: 0; cursor: pointer;",onClick:e[2]||(e[2]=function(e){t.q="",t.datas=[],t.total=0,t.offset=0})},[c],4)]})),_:1})],36),Object(o["e"])("div",i,[(Object(o["f"])(!0),Object(o["c"])(o["a"],null,Object(o["g"])(t.datas,(function(t){return Object(o["f"])(),Object(o["c"])("div",{class:"image",key:t.id},[Object(o["e"])("img",{class:"img","data-clipboard-text":t.images.downsized.url,src:t.images.downsized.url,alt:t.title},null,8,["data-clipboard-text","src","alt"])])})),128))]),t.total>50?(Object(o["f"])(),Object(o["c"])("button",{key:0,class:"load-more",onClick:e[4]||(e[4]=function(t){return l.loadmore()})},"Load More...")):Object(o["d"])("",!0)],64)}n("99af");var l=n("2909"),u=n("b311"),f=n.n(u),p={name:"App",data:function(){return{q:"",datas:[],total:0,offset:0}},mounted:function(){var t=new f.a(".img");t.on("success",(function(t){t.clearSelection()}))},methods:{getGifs:function(){var t=this;this.axios.get("https://api.giphy.com/v1/gifs/search?api_key=yrHgruwkr8SeXdko7PUH62LNrbhWWD0W&q=".concat(this.q)).then((function(e){t.datas=e.data.data,t.total=e.data.pagination.total_count,t.offset=e.data.pagination.count})).catch((function(t){console.log(t)}))},loadmore:function(){var t=this;this.axios.get("https://api.giphy.com/v1/gifs/search?api_key=yrHgruwkr8SeXdko7PUH62LNrbhWWD0W&q=".concat(this.q,"&offset=").concat(this.offset)).then((function(e){var n;(n=t.datas).push.apply(n,Object(l["a"])(e.data.data)),t.offset=t.offset+e.data.pagination.count,console.log(t.offset)})).catch((function(t){console.log(t)}))}}};n("d4d2");p.render=s;var d=p,b=n("bc3a"),h=n.n(b),g=n("2106"),O=n.n(g);Object(o["b"])(d).use(O.a,h.a).mount("#app")},"5c59":function(t,e,n){t.exports=n.p+"img/gif.ea9d2c5a.png"},d4d2:function(t,e,n){"use strict";n("485f")}});
//# sourceMappingURL=app.f28adf0a.js.map