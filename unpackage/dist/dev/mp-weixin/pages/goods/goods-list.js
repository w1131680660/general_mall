(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods-list"],{210:function(t,e,o){"use strict";(function(t,e){var i=o(4);o(26);i(o(25));var n=i(o(211));t.__webpack_require_UNI_MP_PLUGIN__=o,e(n.default)}).call(this,o(1)["default"],o(2)["createPage"])},211:function(t,e,o){"use strict";o.r(e);var i=o(212),n=o(214);for(var r in n)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(r);o(216);var s,d=o(32),c=Object(d["default"])(n["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],s);c.options.__file="pages/goods/goods-list.vue",e["default"]=c.exports},212:function(t,e,o){"use strict";o.r(e);var i=o(213);o.d(e,"render",(function(){return i["render"]})),o.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),o.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),o.d(e,"components",(function(){return i["components"]}))},213:function(t,e,o){"use strict";var i;o.r(e),o.d(e,"render",(function(){return n})),o.d(e,"staticRenderFns",(function(){return s})),o.d(e,"recyclableRender",(function(){return r})),o.d(e,"components",(function(){return i}));var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.goodsList,(function(e,o){var i=t.__get_orig(e),n=!!e.image&&-1==e.image.indexOf(".mp4"),r=!!e.image&&e.image.indexOf(".mp4")>-1;return{$orig:i,g0:n,g1:r}}))),i=t.goodsList.length;t.$mp.data=Object.assign({},{$root:{l0:o,g2:i}})},r=!1,s=[];n._withStripped=!0},214:function(t,e,o){"use strict";o.r(e);var i=o(215),n=o.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},215:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{goodsList:[],loadingText:"正在加载...",orderbyList:[{text:"销量",selected:!0,orderbyicon:!1,orderby:0},{text:"价格",selected:!1,orderbyicon:["sheng","jiang"],orderby:0},{text:"好评",selected:!1,orderbyicon:!1,orderby:0}],orderby:"sheng",cond:{pagesize:10,pagefrom:1,isUp:1,desc:"sortLevel",asc:"",cateId:"",subCateId:""},userInfo:{},title:"商品列表",option:{}}},onPageScroll:function(t){},onPullDownRefresh:function(){},onReachBottom:function(){t.showToast({title:"加载中···"});var e=this.cond.cateId;this.getProductByCid(e)},onLoad:function(t){this.option=t,this.setTitleAndCateId(t),this.$notNull(t.acid)?this.reloadacgoodsList(t.acid):this.reloadProductList(t.cid)},methods:{reloadacgoodsList:function(t){this.goodsList=[],this.cond.pagefrom=1,this.getacgoodsByCid(t)},getacgoodsByCid:function(t){this.cond.activityId=t,this.load_data(this.cond)},reloadProductList:function(t){this.goodsList=[],this.cond.pagefrom=1,this.getProductByCid(t)},getProductByCid:function(t){var e=this.option;1==e.sub?(this.cond.subCateId=e.cid,this.cond.cateId=""):(this.cond.cateId=e.cid,this.cond.subCateId=""),this.load_data(this.cond)},load_data:function(t){var e=this;this.$post("goods/query",t,(function(t){var o=t.rows,i=e.$dataLocal("user_info")||{};for(var n in e.userInfo=i,o){var r=o[n];r.image=e.getLi(r.imageList)[0]||e.getConst("").default_img}var s=e.goodsList,d=s.concat(o);e.goodsList=d,o.length>0&&(e.cond.pagefrom=e.cond.pagefrom+1)}))},setTitleAndCateId:function(e){e.name&&(this.title=e.name),t.setNavigationBarTitle({title:this.title})},toGoods:function(e){var o=e.id;t.navigateTo({url:"/pages/goods/detail?id=".concat(o)})},select:function(e){var o=this.orderbyList[e].text+"排序 ";if(this.orderbyList[e].orderbyicon){var i=0==this.orderbyList[e].orderby?"升序":"降序";this.orderbyList[e].selected&&(i=0==this.orderbyList[e].orderby?"降序":"升序",this.orderbyList[e].orderby=0==this.orderbyList[e].orderby?1:0),o+=i}this.orderbyList[e].selected=!0;for(var n=this.orderbyList.length,r=0;r<n;r++)r!=e&&(this.orderbyList[r].selected=!1);"价格排序 升序"==o?(this.cond.asc="price",this.cond.desc=""):"价格排序 降序"==o?(this.cond.desc="price",this.cond.asc=""):o.indexOf("销量排序")>-1?(this.cond.desc="saleNum",this.cond.asc=""):o.indexOf("好评排序")>-1&&(this.cond.desc="commentNum",this.cond.asc="");var s=this.cond.cateId;this.reloadProductList(s),t.showToast({title:o,icon:"none"})}}};e.default=o}).call(this,o(2)["default"])},216:function(t,e,o){"use strict";o.r(e);var i=o(217),n=o.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},217:function(t,e,o){}},[[210,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods/goods-list.js.map