(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f88206e"],{a1d1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"content"},[n("img",{attrs:{src:t.imgUrl,alt:""}}),n("h6",[t._v(t._s(t.title))])]),n("p",[t._v(t._s(t.summary))])])},s=[],i=(n("f386"),n("cadf"),n("551c"),n("097d"),n("a91b")),u=n.n(i),o={name:"About",data:function(){return{imgUrl:"",title:"",summary:""}},mounted:function(){var t=this,e=this.$route.params.id,n="https://douban.uieee.com/v2/movie/subject/";u.a.jsonp(n+e).then(function(e){t.imgUrl=e.images.small,t.title=e.title,t.summary=e.summary})}},r=o,c=(n("d5e4"),n("2877")),l=Object(c["a"])(r,a,s,!1,null,"10773353",null);l.options.__file="About.vue";e["default"]=l.exports},d5e4:function(t,e,n){"use strict";var a=n("f91f"),s=n.n(a);s.a},f91f:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1f88206e.ce693177.js.map