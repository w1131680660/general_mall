(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/HM-search"],{186:function(e,t,n){"use strict";(function(e,t){var o=n(4);n(26);o(n(25));var r=o(n(187));e.__webpack_require_UNI_MP_PLUGIN__=n,t(r.default)}).call(this,n(1)["default"],n(2)["createPage"])},187:function(e,t,n){"use strict";n.r(t);var o=n(188),r=n(190);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(192);var d,a=n(32),s=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],d);s.options.__file="pages/goods/HM-search.vue",t["default"]=s.exports},188:function(e,t,n){"use strict";n.r(t);var o=n(189);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},189:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return d})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return o}));var r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.oldKeywordList.length);e.$mp.data=Object.assign({},{$root:{g0:n}})},i=!1,d=[];r._withStripped=!0},190:function(e,t,n){"use strict";n.r(t);var o=n(191),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},191:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){n.e("components/mehaotian-search-revision/mehaotian-search-revision").then(function(){return resolve(n(387))}.bind(null,n)).catch(n.oe)},r={data:function(){return{defaultKeyword:"",keyword:"",oldKeywordList:[],hotKeywordList:[],keywordList:[],forbid:"",isShowKeywordList:!1}},onLoad:function(){this.init()},components:{mSearch:o},methods:{init:function(){this.loadDefaultKeyword(),this.loadOldKeyword(),this.loadHotKeyword()},blur:function(){e.hideKeyboard()},loadDefaultKeyword:function(){this.defaultKeyword="默认关键字"},loadOldKeyword:function(){var t=this;e.getStorage({key:"OldKeys",success:function(e){var n=JSON.parse(e.data);t.oldKeywordList=n}})},loadHotKeyword:function(){this.hotKeywordList=["车载","停车牌","显示器","汽车","蓝牙音箱","笔记本电脑","鼠标垫","清洁剂","储物箱"]},inputChange:function(e){var t=e.detail?e.detail.value:e;if(!t)return this.keywordList=[],void(this.isShowKeywordList=!1)},drawCorrelativeKeyword:function(e,t){for(var n=e.length,o=[],r=0;r<n;r++){var i=e[r],d=i[0].replace(t,"<span style='color: #9f9f9f;'>"+t+"</span>");d="<div>"+d+"</div>";var a={keyword:i[0],htmlStr:d};o.push(a)}return o},setkeyword:function(e){this.keyword=e.keyword},oldDelete:function(){var t=this;e.showModal({content:"确定清除历史搜索记录？",success:function(n){n.confirm?(console.log("用户点击确定"),t.oldKeywordList=[],e.removeStorage({key:"OldKeys"})):n.cancel&&console.log("用户点击取消")}})},hotToggle:function(){this.forbid=this.forbid?"":"_forbid"},doSearch:function(t){t=t||(this.keyword?this.keyword:this.defaultKeyword),this.keyword=t,this.saveKeyword(t),e.showToast({title:t,icon:"none",duration:2e3});var n="../../pages/goods/search?kword="+t;e.navigateTo({url:n})},saveKeyword:function(t){var n=this;e.getStorage({key:"OldKeys",success:function(o){console.log(o.data);var r=JSON.parse(o.data),i=r.indexOf(t);-1==i||r.splice(i,1),r.unshift(t),r.length>10&&r.pop(),e.setStorage({key:"OldKeys",data:JSON.stringify(r)}),n.oldKeywordList=r},fail:function(o){var r=[t];e.setStorage({key:"OldKeys",data:JSON.stringify(r)}),n.oldKeywordList=r}})}}};t.default=r}).call(this,n(2)["default"])},192:function(e,t,n){"use strict";n.r(t);var o=n(193),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},193:function(e,t,n){}},[[186,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods/HM-search.js.map