(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c911e686"],{"185c":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{width:"100%"},attrs:{align:"center"}},[i("v-app-bar",{attrs:{fixed:"",app:"",color:"#FFFFFF",elevation:"3"}},[i("v-row",[i("v-col",{staticClass:"text-center"},[i("v-toolbar-title",[t._v(t._s(t.rankingText))])],1)],1)],1),t.users.length>0?i("v-row",{staticStyle:{"margin-top":"54px"},attrs:{dense:""}},t._l(t.users,(function(e,r){return i("div",{key:e.uid,staticStyle:{width:"100%"}},[i("v-card",{class:"my-ranking-card",staticStyle:{padding:"5px"},attrs:{color:"#FFFFFF"},on:{click:function(i){return t.$router.push({path:"/dashboard/search/user/"+e.uid})}}},[i("v-row",[i("v-col",{attrs:{cols:"3"}},[i("h2",[t._v(t._s(r+1))])]),i("v-col",[i("v-avatar",{staticStyle:{width:"20%","padding-top":"20%","vertical-align":"top","border-radius":"50%"}},[i("img",{staticClass:"white--text align-end",staticStyle:{width:"100%",position:"absolute",top:"0",height:"100%","object-position":"center","object-fit":"cover"},attrs:{"aspect-ratio":1,src:e.profileImage}})])],1),i("v-col",[i("div",[i("strong",{staticStyle:{"font-size":"12px"}},[t._v("@"+t._s(e.username))]),i("p",[i("v-icon",{attrs:{color:"yellow darken-3"}},[t._v("mdi-star")]),t._v("\n                                "+t._s(e.avgRating)+"/5 ("+t._s(e.numRatings)+")\n                            ")],1)])])],1)],1),i("br")],1)})),0):t._e(),0==t.users.length?i("v-row",[i("p",[t._v(t._s(t.problemRetrievingRankingText))])]):t._e(),i("v-row",[i("v-col",[i("v-container",[t.buttonIsDisabled?t._e():i("v-btn",{staticClass:"bottom-centered-buttons",attrs:{color:"primary",disabled:t.buttonIsDisabled},on:{click:function(e){return t.listRankingUsers(!1)}}},[t._v("\n                    "+t._s(t.watchMoreButtonText)+"\n                ")])],1)],1)],1)],1)},o=[],n=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),s=i("2f62"),c=i("4c51");function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(i,!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h={name:"RankingHome",data:function(){return{problemRetrievingRankingText:c["a"].TEXT_PROBLEM_RETRIEVING_RANKING,watchMoreButtonText:c["a"].TEXT_WATCH_MORE,buttonIsDisabled:!0,rankingText:c["a"].TEXT_RANKING}},methods:l({},Object(s["b"])(["listUsersRankingPageFirebase","isNextRankingUsersPageEmptyFirebase"]),{listRankingUsers:function(t){var e=this,i=this.listUsersRankingPageFirebase(t);i.then((function(){e.isNextRankingUsersPageEmpty()})).catch((function(t){e.buttonIsDisabled=!0,e.snackbarText=t,e.snackbar=!0}))},isNextRankingUsersPageEmpty:function(){var t=this,e=this.isNextRankingUsersPageEmptyFirebase();e.then((function(e){t.buttonIsDisabled=e})).catch((function(e){t.buttonIsDisabled=!0,t.snackbarText=e,t.snackbar=!0}))}}),mounted:function(){0==this.users.length?this.listRankingUsers(!0):this.isNextRankingUsersPageEmpty()},computed:l({},Object(s["c"])({users:"getRankingUsers",myUserID:"getUserInfoUID"}))},p=h,u=(i("fa32"),i("2877")),d=i("6544"),f=i.n(d),b=i("40dc"),v=i("8212"),g=i("8336"),m=i("b0af"),S=i("62ad"),O=i("a523"),y=i("132d"),j=i("0fd9"),w=i("2a7f"),x=Object(u["a"])(p,r,o,!1,null,"49c03c0b",null);e["default"]=x.exports;f()(x,{VAppBar:b["a"],VAvatar:v["a"],VBtn:g["a"],VCard:m["a"],VCol:S["a"],VContainer:O["a"],VIcon:y["a"],VRow:j["a"],VToolbarTitle:w["a"]})},"277e":function(t,e,i){"use strict";i("c5f6");var r=i("f977"),o=i("d9bd"),n=i("2b0e");e["a"]=n["a"].extend({name:"scrollable",directives:{Scroll:r["a"]},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(o["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}})},"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var r=i("71d9"),o=i("80d2"),n=Object(o["h"])("v-toolbar__title"),s=Object(o["h"])("v-toolbar__items");r["a"]},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var r=i("fe6c"),o=i("58df");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(o["a"])(Object(r["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"40dc":function(t,e,i){"use strict";i("8e6e"),i("ac6a"),i("456d"),i("c5f6"),i("d263");var r=i("bd86"),o=(i("8b0d"),i("71d9")),n=i("f977"),s=i("3a66"),c=i("277e"),a=i("2b0e"),l=a["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}}),h=i("f2e7"),p=i("80d2"),u=i("58df");function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(i,!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var b=Object(u["a"])(o["a"],c["a"],l,h["a"],Object(s["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=b.extend({name:"v-app-bar",directives:{Scroll:n["b"]},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return c["a"].options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return f({},o["a"].options.computed.classes.call(this),{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return o["a"].options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,i=t,r=i-e,n=r/this.computedScrollThreshold,s=this.currentScroll*n;return Math.max(e,i-s)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=o["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:o["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return o["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return f({},o["a"].options.computed.styles.call(this),{fontSize:Object(p["e"])(this.computedFontSize,"rem"),marginTop:Object(p["e"])(this.computedMarginTop),transform:"translateY(".concat(Object(p["e"])(this.computedTransform),")"),left:Object(p["e"])(this.computedLeft),right:Object(p["e"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=o["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:this.currentThreshold<this.computedScrollThreshold||(this.hideOnScroll&&(this.isActive=this.isScrollingUp),this.savedScroll=this.currentScroll)}},render:function(t){var e=o["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"5e23":function(t,e,i){},"634c":function(t,e,i){},"71d9":function(t,e,i){"use strict";i("8e6e"),i("ac6a"),i("456d");var r=i("768b"),o=i("bd86"),n=(i("c5f6"),i("5e23"),i("8dd9")),s=i("adda"),c=i("80d2"),a=i("d9bd");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(i,!0).forEach((function(e){Object(o["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]=n["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return h({},n["a"].options.computed.classes.call(this),{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return h({},this.measurableStyles,{height:Object(c["e"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(r["a"])(e,2),o=i[0],n=i[1];t.$attrs.hasOwnProperty(o)&&Object(a["a"])(o,n,t)}))},methods:{genBackground:function(){var t={height:Object(c["e"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(s["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(c["e"])(this.computedContentHeight)}},Object(c["o"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(c["e"])(this.extensionHeight)}},Object(c["o"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},"8b0d":function(t,e,i){},f977:function(t,e,i){"use strict";function r(t,e){var i=e.value,r=e.options||{passive:!0},o=e.arg?document.querySelector(e.arg):window;o&&(o.addEventListener("scroll",i,r),t._onScroll={callback:i,options:r,target:o})}function o(t){if(t._onScroll){var e=t._onScroll,i=e.callback,r=e.options,o=e.target;o.removeEventListener("scroll",i,r),delete t._onScroll}}i.d(e,"a",(function(){return n}));var n={inserted:r,unbind:o};e["b"]=n},fa32:function(t,e,i){"use strict";var r=i("634c"),o=i.n(r);o.a}}]);
//# sourceMappingURL=chunk-c911e686-legacy.227f16cd.js.map