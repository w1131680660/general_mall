(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-popup/uni-transition"],{446:function(t,n,e){"use strict";e.r(n);var r=e(447),i=e(449);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e(451);var a,c=e(32),s=Object(c["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],a);s.options.__file="components/uni-popup/uni-transition.vue",n["default"]=s.exports},447:function(t,n,e){"use strict";e.r(n);var r=e(448);e.d(n,"render",(function(){return r["render"]})),e.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(n,"components",(function(){return r["components"]}))},448:function(t,n,e){"use strict";var r;e.r(n),e.d(n,"render",(function(){return i})),e.d(n,"staticRenderFns",(function(){return a})),e.d(n,"recyclableRender",(function(){return o})),e.d(n,"components",(function(){return r}));var i=function(){var t=this,n=t.$createElement;t._self._c},o=!1,a=[];i._withStripped=!0},449:function(t,n,e){"use strict";e.r(n);var r=e(450),i=e.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=i.a},450:function(t,n,e){"use strict";var r=e(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e(11));function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){(0,i.default)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var c={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=a(a({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),n="";for(var e in t){var r=this.toLine(e);n+=r+":"+t[e]+";"}return n}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var n in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===n?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[n]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var n=this,e=this.getTranfrom(t);for(var r in this.transform="",e)"opacity"===r?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(e[r]," ");this.timer=setTimeout((function(){t||(n.isShow=!1),n.$emit("change",{detail:n.isShow})}),this.duration)},getTranfrom:function(t){var n={transform:""};return this.modeClass.forEach((function(e){switch(e){case"fade":n.opacity=t?1:0;break;case"slide-top":n.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":n.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":n.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":n.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":n.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":n.transform+="scale(".concat(t?1:1.2,") ");break}})),n},_modeClassArr:function(t){var n=this.modeClass;if("string"!==typeof n){var e="";return n.forEach((function(n){e+=n+"-"+t+","})),e.substr(0,e.length-1)}return n+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};n.default=c},451:function(t,n,e){"use strict";e.r(n);var r=e(452),i=e.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=i.a},452:function(t,n,e){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/uni-popup/uni-transition.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-popup/uni-transition-create-component',
    {
        'components/uni-popup/uni-transition-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(446))
        })
    },
    [['components/uni-popup/uni-transition-create-component']]
]);
