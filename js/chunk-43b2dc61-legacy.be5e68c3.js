(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43b2dc61"],{"185c":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{width:"100%"},attrs:{align:"center"}},[i("v-app-bar",{attrs:{fixed:"",app:"",color:"#FFFFFF",elevation:"3"}},[i("v-row",[i("v-col",{staticClass:"text-center"},[i("v-toolbar-title",[t._v(t._s(t.rankingText))])],1)],1)],1),t.users.length>0?i("v-row",{staticStyle:{"margin-top":"54px"},attrs:{dense:""}},t._l(t.users,(function(e,s){return i("div",{key:e.uid,staticStyle:{width:"100%"}},[i("v-card",{class:"my-ranking-card",staticStyle:{padding:"5px"},attrs:{color:"#FFFFFF"},on:{click:function(i){return t.$router.push({path:"/dashboard/search/user/"+e.uid})}}},[i("v-row",[i("v-col",{attrs:{cols:"3"}},[i("h2",[t._v(t._s(s+1))])]),i("v-col",[i("v-avatar",{staticStyle:{width:"20%","padding-top":"20%","vertical-align":"top","border-radius":"50%"}},[i("img",{staticClass:"white--text align-end",staticStyle:{width:"100%",position:"absolute",top:"0",height:"100%","object-position":"center","object-fit":"cover"},attrs:{"aspect-ratio":1,src:e.profileImage}})])],1),i("v-col",[i("div",[i("strong",{staticStyle:{"font-size":"12px"}},[t._v("@"+t._s(e.username))]),i("p",[i("v-icon",{attrs:{color:"yellow darken-3"}},[t._v("mdi-star")]),t._v("\n                                "+t._s(e.avgRating)+"/5 ("+t._s(e.numRatings)+")\n                            ")],1)])])],1)],1),i("br")],1)})),0):t._e(),0==t.users.length?i("v-row",[i("p",[t._v(t._s(t.problemRetrievingRankingText))])]):t._e(),i("v-row",[i("v-col",[i("v-container",[t.buttonIsDisabled?t._e():i("v-btn",{staticClass:"bottom-centered-buttons",attrs:{color:"primary",disabled:t.buttonIsDisabled},on:{click:function(e){return t.listRankingUsers(!1)}}},[t._v("\n                    "+t._s(t.watchMoreButtonText)+"\n                ")])],1)],1)],1)],1)},o=[],r=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),n=i("2f62"),l=i("4c51");function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(i,!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h={name:"RankingHome",data:function(){return{problemRetrievingRankingText:l["a"].TEXT_PROBLEM_RETRIEVING_RANKING,watchMoreButtonText:l["a"].TEXT_WATCH_MORE,buttonIsDisabled:!0,rankingText:l["a"].TEXT_RANKING}},methods:c({},Object(n["b"])(["listUsersRankingPageFirebase","isNextRankingUsersPageEmptyFirebase"]),{listRankingUsers:function(t){var e=this,i=this.listUsersRankingPageFirebase(t);i.then((function(){e.isNextRankingUsersPageEmpty()})).catch((function(t){e.buttonIsDisabled=!0,e.snackbarText=t,e.snackbar=!0}))},isNextRankingUsersPageEmpty:function(){var t=this,e=this.isNextRankingUsersPageEmptyFirebase();e.then((function(e){t.buttonIsDisabled=e})).catch((function(e){t.buttonIsDisabled=!0,t.snackbarText=e,t.snackbar=!0}))}}),mounted:function(){0==this.users.length?this.listRankingUsers(!0):this.isNextRankingUsersPageEmpty()},computed:c({},Object(n["c"])({users:"getRankingUsers",myUserID:"getUserInfoUID"}))},d=h,p=(i("fa32"),i("2877")),u=i("6544"),m=i.n(u),b=i("40dc"),g=i("8212"),v=i("8336"),f=i("b0af"),S=i("62ad"),O=i("a523"),y=i("132d"),x=i("0fd9"),T=i("2a7f"),w=Object(p["a"])(d,s,o,!1,null,"49c03c0b",null);e["default"]=w.exports;m()(w,{VAppBar:b["a"],VAvatar:g["a"],VBtn:v["a"],VCard:f["a"],VCol:S["a"],VContainer:O["a"],VIcon:y["a"],VRow:x["a"],VToolbarTitle:T["a"]})},"277e":function(t,e,i){"use strict";var s=i("f977"),o=i("d9bd"),r=i("2b0e");e["a"]=r["a"].extend({name:"scrollable",directives:{Scroll:s["a"]},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(o["c"])(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}})},"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("71d9"),o=i("80d2");const r=Object(o["h"])("v-toolbar__title"),n=Object(o["h"])("v-toolbar__items");s["a"]},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("fe6c"),o=i("58df");function r(t,e=[]){return Object(o["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"40dc":function(t,e,i){"use strict";i("8b0d");var s=i("71d9"),o=i("f977"),r=i("3a66"),n=i("277e"),l=i("2b0e"),a=l["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}}),c=i("f2e7"),h=i("80d2"),d=i("58df");const p=Object(d["a"])(s["a"],n["a"],a,c["a"],Object(r["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=p.extend({name:"v-app-bar",directives:{Scroll:o["b"]},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return n["a"].options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...s["a"].options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},computedContentHeight(){if(!this.shrinkOnScroll)return s["a"].options.computed.computedContentHeight.call(this);const t=this.computedOriginalHeight,e=this.dense?48:56,i=t,o=i-e,r=o/this.computedScrollThreshold,n=this.currentScroll*r;return Math.max(e,i-n)},computedFontSize(){if(!this.isProminent)return;const t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(!this.fadeImgOnScroll)return;const t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))},computedOriginalHeight(){let t=s["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:s["a"].options.computed.isCollapsed.call(this)},isProminent(){return s["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...s["a"].options.computed.styles.call(this),fontSize:Object(h["e"])(this.computedFontSize,"rem"),marginTop:Object(h["e"])(this.computedMarginTop),transform:`translateY(${Object(h["e"])(this.computedTransform)})`,left:Object(h["e"])(this.computedLeft),right:Object(h["e"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=s["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:this.currentThreshold<this.computedScrollThreshold||(this.hideOnScroll&&(this.isActive=this.isScrollingUp),this.savedScroll=this.currentScroll)}},render(t){const e=s["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"5e23":function(t,e,i){},"634c":function(t,e,i){},"71d9":function(t,e,i){"use strict";i("5e23");var s=i("8dd9"),o=i("adda"),r=i("80d2"),n=i("d9bd");e["a"]=s["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...s["a"].options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:Object(r["e"])(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(n["a"])(t,e,this)})},methods:{genBackground(){const t={height:Object(r["e"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(o["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(r["e"])(this.computedContentHeight)}},Object(r["o"])(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(r["e"])(this.extensionHeight)}},Object(r["o"])(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},"8b0d":function(t,e,i){},f977:function(t,e,i){"use strict";function s(t,e){const i=e.value,s=e.options||{passive:!0},o=e.arg?document.querySelector(e.arg):window;o&&(o.addEventListener("scroll",i,s),t._onScroll={callback:i,options:s,target:o})}function o(t){if(!t._onScroll)return;const{callback:e,options:i,target:s}=t._onScroll;s.removeEventListener("scroll",e,i),delete t._onScroll}i.d(e,"a",(function(){return r}));const r={inserted:s,unbind:o};e["b"]=r},fa32:function(t,e,i){"use strict";var s=i("634c"),o=i.n(s);o.a}}]);
//# sourceMappingURL=chunk-43b2dc61-legacy.be5e68c3.js.map