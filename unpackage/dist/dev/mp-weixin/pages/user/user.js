(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{129:function(e,t,n){"use strict";(function(e,t){var r=n(4);n(26);r(n(25));var i=r(n(130));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n(1)["default"],n(2)["createPage"])},130:function(e,t,n){"use strict";n.r(t);var r=n(131),i=n(133);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n(135);var a,s=n(32),u=Object(s["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],a);u.options.__file="pages/user/user.vue",t["default"]=u.exports},131:function(e,t,n){"use strict";n.r(t);var r=n(132);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},132:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));var i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.userInfo.avatar||e.getConst().defaultAvatar);e._isMounted||(e.e0=function(t){e.userInfo.id&&e.$navigateTo("/pages/user/set")}),e.$mp.data=Object.assign({},{$root:{m0:n}})},o=!1,a=[];i._withStripped=!0},133:function(e,t,n){"use strict";n.r(t);var r=n(134),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},134:function(e,t,n){"use strict";(function(e,r){var i=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(11));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={computed:{storeUser:function(){return this.$store.state.user},hasWxAuth:function(){return!(!this.userInfo.id&&!this.userInfo.wxHeadImg)}},data:function(){return{userInfo:{headImg:"/static/img/user/default-head.png",nickName:"noname",avatar:"/static/img/user/default-head.png",wxHeadImg:""},headerBgImage:"",orderStatusList:[{name:"待付款",icon:"iconfont icon31daifukuan",status:10,uri:"/pages/order/order?stat=1"},{name:"待发货",icon:"iconfont icon31daifahuo",status:30,uri:"/pages/order/order?stat=2"},{name:"待收货",icon:"iconfont icon31daishouhuo",status:40,uri:"/pages/order/order?stat=3"},{name:"待评价",icon:"iconfont icon31daipingjia",status:50,uri:"/pages/order/order?stat=4"},{name:"全部",icon:"iconfont icon31yiguanzhudianpu",status:55,uri:"/pages/order/order"}],currentIndex:0}},methods:{getUserProfile:function(){var t=this;e.getUserInfo({provider:"weixin",desc:"用于完善用戶资料",success:function(e){console.log("用户信息:",e),t.loginWithUserInfo(e.userInfo)},fail:function(e){console.error("获取用户信息失败:",e),t.$toast("获取用户信息失败: "+(e.errMsg||JSON.stringify(e)))}})},loginWithUserInfo:function(e){var t=this;r.login({provider:"weixin",success:function(n){if(n.code){console.log("登录凭证:",n);var r={code:n.code,avatarUrl:e.avatarUrl,nickName:e.nickName};t.$post("/wx_mini_app/wx_auth/wechat_login",r,(function(n){if(200===n.code){var r=n.user_info;r.wxHeadImg=r.avatar||e.avatarUrl,r.wxNickName=r.nickname||e.nickName,t.$dataLocal("token",n.access_token),t.setUser(r),t.$store.dispatch("user/update",r),t.userInfo=r,t.$toast("登录成功")}else console.error("返回数据格式不正确:",n),t.$toast("登录失败")}),(function(e){console.error("更新用户信息失败:",e)}))}},fail:function(e){console.error("登录失败:",e),t.$toast("登录失败: "+(e.errMsg||JSON.stringify(e)))}})},tuiguang:function(){var e=this.getUser()||{},t="./external/guider.html?guider="+e.id;this.isWeixin()?location.href=t:this.$navigateTo("/pages/user/zhiwen-share")},tologin:function(){this.hasWxAuth&&(this.$isNull(this.userInfo.id)||this.$isNull(this.userInfo.mobile)?(this.$dataLocal("pre_reg_page","/pages/user/user"),this.$navigateTo("/pages/login/register")):this.$navigateTo("/pages/user/set"))},getuser:function(){var e=this.getUser()||{headImg:"/static/img/user/default-head.png",nickName:"noname"};this.userInfo=e},clearLoginStatus:function(){if(!this.hasWxAuth){var e=this.getUser()||{};if(!e.wxHeadImg&&!e.wxNickName){var t=s(s({},e),{},{wxHeadImg:"",wxNickName:"",wxMpOpenId:""});this.setUser(t),this.$store.dispatch("user/update",t)}}},getHeaderBgImage:function(){var e=this;this.$get("/mini_core/banners/by-type/user_bg",{},(function(t){t&&t.items&&t.items.length>0&&(e.headerBgImage=t.items[0].upload_image)}),(function(e){console.error("获取背景图片失败:",e)}))}},onLoad:function(){this.getuser(),this.clearLoginStatus()},onShow:function(){this.getuser(),this.getHeaderBgImage(),this.clearLoginStatus()}};t.default=u}).call(this,n(1)["default"],n(2)["default"])},135:function(e,t,n){"use strict";n.r(t);var r=n(136),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},136:function(e,t,n){}},[[129,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map