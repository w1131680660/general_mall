(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{110:function(t,n,e){"use strict";(function(t,n){var o=e(4);e(26);o(e(25));var i=o(e(111));t.__webpack_require_UNI_MP_PLUGIN__=e,n(i.default)}).call(this,e(1)["default"],e(2)["createPage"])},111:function(t,n,e){"use strict";e.r(n);var o=e(112),i=e(114);for(var c in i)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(c);e(116);var r,s=e(32),a=Object(s["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],r);a.options.__file="pages/cart/cart.vue",n["default"]=a.exports},112:function(t,n,e){"use strict";e.r(n);var o=e(113);e.d(n,"render",(function(){return o["render"]})),e.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),e.d(n,"components",(function(){return o["components"]}))},113:function(t,n,e){"use strict";var o;e.r(n),e.d(n,"render",(function(){return i})),e.d(n,"staticRenderFns",(function(){return r})),e.d(n,"recyclableRender",(function(){return c})),e.d(n,"components",(function(){return o}));try{o={uniNumberBox:function(){return e.e("components/uni-number-box/uni-number-box").then(e.bind(null,359))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.cartList.length),o=0!==e?t.__map(t.cartList,(function(n,e){var o=t.__get_orig(n),i=t.cartList.length,c=t.$endwith(n.product_name,20);return{$orig:o,g1:i,m0:c}})):null;t.$mp.data=Object.assign({},{$root:{g0:e,l0:o}})},c=!1,r=[];i._withStripped=!0},114:function(t,n,e){"use strict";e.r(n);var o=e(115),i=e.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=i.a},115:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){e.e("components/uni-number-box/uni-number-box").then(function(){return resolve(e(359))}.bind(null,e)).catch(e.oe)},i={components:{uniNumberBox:o},data:function(){return{allChecked:!1,empty:!1,cartList:[],userInfo:{id:-1},goodsAmount:0,hasLogin:1}},onLoad:function(){this.loadUserInfo()},onShow:function(){var t=this;this.getCartList(),setTimeout((function(){t.cartList&&t.cartList.length>0&&(t.cartList.forEach((function(n,e){t.$set(t.cartList[e],"loaded","loaded"),t.$set(t.cartList[e],"checked",!1)})),t.allChecked=!1,t.count())}),200)},watch:{cartList:{handler:function(t,n){var e=0===this.cartList.length;this.empty!==e&&(this.empty=e),this.count()},deep:!0}},methods:{loadUserInfo:function(){this.userInfo=this.getUser()},getCartList:function(){var n={};n.userId=this.userInfo.id;var e=this;this.$get("/wx_mini_app/shop-cart",{},(function(n){200===n.code?(e.cartList=n.data,e.count()):t.showToast({title:n.msg||"购物车数据加载失败",icon:"none"})}),(function(n){t.showToast({title:"购物车数据加载失败",icon:"none"})}),!0)},count:function(){var t=this.cartList,n=0;for(var e in t){var o=t[e],i=o.price,c=parseFloat(i)*parseFloat(o.product_count);!0===o.checked&&(n+=c)}this.goodsAmount=this.$round2pos(n)},onImageLoad:function(t,n){console.log("onImageLoad",t,n),this.$set(this[t][n],"loaded","loaded")},onImageError:function(t,n){this[t]&&this[t][n]&&this[t][n].goods&&(this[t][n].goods.image="/static/errorImage.jpg"),this.$set(this[t][n],"loaded","loaded")},navToLogin:function(){this.$navigateTo("pages/login/login")},check:function(t,n){if("item"===t)this.cartList[n].checked=!this.cartList[n].checked;else{var e=!this.allChecked,o=this.cartList;o.forEach((function(t){t.checked=e})),this.allChecked=e}this.count()},numberChange:function(n){var e=this.cartList[n.index];this.cartList[n.index].product_count=n.number,console.log("cartItem",e),this.$post("/wx_mini_app/shop-cart/update",{id:e.cart_id,sku_id:e.product_id,product_count:n.number},(function(n){200===n.code?console.log("购物车数量更新成功"):t.showToast({title:n.msg||"数量更新失败",icon:"none"})})),this.count()},deleteCartItem:function(n){var e=this,o=this.cartList,i=o[n],c=i.product_id;this.$post("/wx_mini_app/shop-cart/delete",{sku_id:c},(function(o){200===o.code?(e.cartList.splice(n,1),e.count(),t.showToast({title:"删除成功",icon:"success"})):t.showToast({title:o.msg||"删除失败",icon:"none"}),t.hideLoading()}),(function(n){t.showToast({title:"删除失败",icon:"none"}),t.hideLoading()}))},clearCart:function(){var n=this;t.showModal({content:"清空购物车？",success:function(e){if(e.confirm){var o=[];for(var i in n.cartList){var c=n.cartList[i];o.push(c.id)}if(0===o.length)return;t.showLoading({title:"清空中..."}),n.$post("/api/v1/wx_mini_app/shop-cart/clear",{ids:o},(function(e){200===e.code?(n.cartList=[],n.count(),t.showToast({title:"购物车已清空",icon:"success"})):t.showToast({title:e.msg||"清空失败",icon:"none"}),t.hideLoading()}),(function(n){t.showToast({title:"清空失败",icon:"none"}),t.hideLoading()}))}}})},createOrder:function(){var n=this.cartList,e=[];for(var o in n){var i=n[o];if(!0===i.checked){var c={};c.goods=i,c.goods.image=i.images[0],c.number=i.product_count,e.push(c)}}0!==e.length?(this.$dataLocal("buy_list",e),this.$dataLocal("buy_type","cart"),this.$navigateTo("/pages/order/create")):t.showToast({title:"没有选中商品进行结算"})}}};n.default=i}).call(this,e(2)["default"])},116:function(t,n,e){"use strict";e.r(n);var o=e(117),i=e.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=i.a},117:function(t,n,e){}},[[110,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/cart/cart.js.map