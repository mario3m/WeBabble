(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3d7f09e"],{"185c":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticStyle:{width:"100%"},attrs:{align:"center"}},[s("v-app-bar",{attrs:{fixed:"",app:"",color:"#FFFFFF",elevation:"3"}},[s("v-row",[s("v-col",{staticClass:"text-center"},[s("v-toolbar-title",[t._v(t._s(t.rankingText))])],1)],1)],1),t.users.length>0?s("v-row",{staticStyle:{"margin-top":"54px"},attrs:{dense:""}},t._l(t.users,(function(e,r){return s("div",{key:e.id,staticStyle:{width:"100%"}},[s("v-card",{class:"my-ranking-card",staticStyle:{padding:"5px"},attrs:{color:"#FFFFFF"},on:{click:function(s){return t.$router.push({path:"/dashboard/search/user/"+e.id})}}},[s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("h2",[t._v(t._s(r+1))])]),s("v-col",[s("v-avatar",{staticStyle:{width:"20%","padding-top":"20%","vertical-align":"top","border-radius":"50%"}},[s("img",{staticClass:"white--text align-end",staticStyle:{width:"100%",position:"absolute",top:"0",height:"100%","object-position":"center","object-fit":"cover"},attrs:{"aspect-ratio":1,src:e.profileImg}})])],1),s("v-col",[s("div",[s("strong",{staticStyle:{"font-size":"12px"}},[t._v("@"+t._s(e.username))]),s("p",[s("v-icon",{attrs:{color:"yellow darken-3"}},[t._v("mdi-star")]),t._v("\n                                "+t._s(e.score)+"\n                            ")],1)])])],1)],1),s("br")],1)})),0):t._e(),0==t.users.length?s("v-row",[s("p",[t._v(t._s(t.problemRetrievingRankingText))])]):t._e(),s("v-row",[s("v-col",[s("v-container",[t.buttonIsDisabled?t._e():s("v-btn",{staticClass:"bottom-centered-buttons",attrs:{color:"primary",disabled:t.buttonIsDisabled},on:{click:t.listRankingUsers}},[t._v("\n                    "+t._s(t.watchMoreButtonText)+"\n                ")])],1)],1)],1)],1)},i=[],o=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),l=s("2f62"),a=s("4c51");function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(s,!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var h={name:"RankingHome",data:function(){return{problemRetrievingRankingText:a["a"].TEXT_PROBLEM_RETRIEVING_RANKING,watchMoreButtonText:a["a"].TEXT_WATCH_MORE,buttonIsDisabled:!0,rankingText:a["a"].TEXT_RANKING,myUserID:this.$store.getters["user/getID"]}},methods:c({},Object(l["b"])("ranking",["getPagedRankingUsers","areThereMoreRankingUsersToShow"]),{listRankingUsers:function(){var t=this;t.buttonIsDisabled=!0;var e=t.getPagedRankingUsers();e.then((function(e){t.buttonIsDisabled=!e})).catch((function(e){t.snackbarText=e,t.snackbar=!0}))}}),created:function(){var t=this;if(0==t.users.length){t.buttonIsDisabled=!0;var e=t.getPagedRankingUsers();e.then((function(e){t.buttonIsDisabled=!e})).catch((function(e){t.snackbarText=e,t.snackbar=!0}))}else t.areThereMoreRankingUsersToShow().then((function(e){t.buttonIsDisabled=!e}))},computed:c({},Object(l["c"])("ranking",{users:"getRankingUsersToShow"}))},d=h,p=(s("3452"),s("2877")),u=s("6544"),f=s.n(u),g=s("40dc"),b=s("8212"),v=s("8336"),m=s("b0af"),S=s("62ad"),y=s("a523"),O=s("132d"),T=s("0fd9"),x=s("2a7f"),k=Object(p["a"])(d,r,i,!1,null,"161a9858",null);e["default"]=k.exports;f()(k,{VAppBar:g["a"],VAvatar:b["a"],VBtn:v["a"],VCard:m["a"],VCol:S["a"],VContainer:y["a"],VIcon:O["a"],VRow:T["a"],VToolbarTitle:x["a"]})},"277e":function(t,e,s){"use strict";var r=s("f977"),i=s("d9bd"),o=s("2b0e");e["a"]=o["a"].extend({name:"scrollable",directives:{Scroll:r["a"]},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(i["c"])(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}})},"2a7f":function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var r=s("71d9"),i=s("80d2");const o=Object(i["h"])("v-toolbar__title"),l=Object(i["h"])("v-toolbar__items");r["a"]},3408:function(t,e,s){},3452:function(t,e,s){"use strict";var r=s("ef97"),i=s.n(r);i.a},"3a66":function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var r=s("fe6c"),i=s("58df");function o(t,e=[]){return Object(i["a"])(Object(r["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,s=e.length;t<s;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"40dc":function(t,e,s){"use strict";s("8b0d");var r=s("71d9"),i=s("f977"),o=s("3a66"),l=s("277e"),a=s("2b0e"),n=a["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}}),c=s("f2e7"),h=s("80d2"),d=s("58df");const p=Object(d["a"])(r["a"],l["a"],n,c["a"],Object(o["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=p.extend({name:"v-app-bar",directives:{Scroll:i["b"]},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return l["a"].options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...r["a"].options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},computedContentHeight(){if(!this.shrinkOnScroll)return r["a"].options.computed.computedContentHeight.call(this);const t=this.computedOriginalHeight,e=this.dense?48:56,s=t,i=s-e,o=i/this.computedScrollThreshold,l=this.currentScroll*o;return Math.max(e,s-l)},computedFontSize(){if(!this.isProminent)return;const t=this.dense?96:128,e=t-this.computedContentHeight,s=.00347;return Number((1.5-e*s).toFixed(2))},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(!this.fadeImgOnScroll)return;const t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))},computedOriginalHeight(){let t=r["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:r["a"].options.computed.isCollapsed.call(this)},isProminent(){return r["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...r["a"].options.computed.styles.call(this),fontSize:Object(h["e"])(this.computedFontSize,"rem"),marginTop:Object(h["e"])(this.computedMarginTop),transform:`translateY(${Object(h["e"])(this.computedTransform)})`,left:Object(h["e"])(this.computedLeft),right:Object(h["e"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=r["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:this.currentThreshold<this.computedScrollThreshold||(this.hideOnScroll&&(this.isActive=this.isScrollingUp),this.savedScroll=this.currentScroll)}},render(t){const e=r["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"5e23":function(t,e,s){},"615b":function(t,e,s){},"62ad":function(t,e,s){"use strict";s("4b85");var r=s("2b0e"),i=s("d9f7"),o=s("80d2");const l=["sm","md","lg","xl"],a=(()=>{return l.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),n=(()=>{return l.reduce((t,e)=>{return t["offset"+Object(o["x"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return l.reduce((t,e)=>{return t["order"+Object(o["x"])(e)]={type:[String,Number],default:null},t},{})})(),h={col:Object.keys(a),offset:Object.keys(n),order:Object.keys(c)};function d(t,e,s){let r=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");r+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(r+=`-${s}`,r.toLowerCase()):r.toLowerCase()}}const p=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...n,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},justifySelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:r,parent:o}){let l="";for(const i in e)l+=String(e[i]);let a=p.get(l);if(!a){let t;for(t in a=[],h)h[t].forEach(s=>{const r=e[s],i=d(t,s,r);i&&a.push(i)});const s=a.some(t=>t.startsWith("col-"));a.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf,[`justify-self-${e.justifySelf}`]:e.justifySelf}),p.set(l,a)}return t(e.tag,Object(i["a"])(s,{class:a}),r)}})},"71d9":function(t,e,s){"use strict";s("5e23");var r=s("8dd9"),i=s("adda"),o=s("80d2"),l=s("d9bd");e["a"]=r["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...r["a"].options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:Object(o["e"])(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(l["a"])(t,e,this)})},methods:{genBackground(){const t={height:Object(o["e"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(i["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(o["e"])(this.computedContentHeight)}},Object(o["o"])(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(o["e"])(this.extensionHeight)}},Object(o["o"])(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],s=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,s,e)}})},8212:function(t,e,s){"use strict";s("3408");var r=s("a9ad"),i=s("24b2"),o=s("80d2"),l=s("58df");e["a"]=Object(l["a"])(r["a"],i["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48},tile:Boolean},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,"v-avatar--tile":this.tile}},styles(){return{height:Object(o["e"])(this.size),minWidth:Object(o["e"])(this.size),width:Object(o["e"])(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},"8b0d":function(t,e,s){},b0af:function(t,e,s){"use strict";s("615b");var r=s("10d2"),i=s("297c"),o=s("1c87"),l=s("58df");e["a"]=Object(l["a"])(i["a"],o["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...o["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...r["a"].options.computed.classes.call(this)}},styles(){const t={...r["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},ef97:function(t,e,s){},f977:function(t,e,s){"use strict";function r(t,e){const s=e.value,r=e.options||{passive:!0},i=e.arg?document.querySelector(e.arg):window;i&&(i.addEventListener("scroll",s,r),t._onScroll={callback:s,options:r,target:i})}function i(t){if(!t._onScroll)return;const{callback:e,options:s,target:r}=t._onScroll;r.removeEventListener("scroll",e,s),delete t._onScroll}s.d(e,"a",(function(){return o}));const o={inserted:r,unbind:i};e["b"]=o}}]);
//# sourceMappingURL=chunk-c3d7f09e.daf04df8.js.map