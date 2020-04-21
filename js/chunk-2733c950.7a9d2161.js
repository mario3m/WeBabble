(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2733c950"],{"277e":function(t,e,s){"use strict";var i=s("f977"),r=s("d9bd"),o=s("2b0e");e["a"]=o["a"].extend({name:"scrollable",directives:{Scroll:i["a"]},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(r["c"])(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}})},"2a7f":function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var i=s("71d9"),r=s("80d2");const o=Object(r["h"])("v-toolbar__title"),a=Object(r["h"])("v-toolbar__items");i["a"]},"2db4":function(t,e,s){"use strict";s("ca71");var i=s("a9ad"),r=s("f2e7"),o=s("fe6c"),a=s("58df"),n=s("d9bd");e["a"]=Object(a["a"])(i["a"],r["a"],Object(o["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive(){this.setTimeout()}},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(n["d"])("auto-height",this)},mounted(){this.setTimeout()},methods:{setTimeout(){window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},this.timeout))}},render(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},"3a66":function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var i=s("fe6c"),r=s("58df");function o(t,e=[]){return Object(r["a"])(Object(i["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,s=e.length;t<s;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"40dc":function(t,e,s){"use strict";s("8b0d");var i=s("71d9"),r=s("f977"),o=s("3a66"),a=s("277e"),n=s("d10f"),l=s("f2e7"),c=s("80d2"),h=s("58df");const d=Object(h["a"])(i["a"],a["a"],n["a"],l["a"],Object(o["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=d.extend({name:"v-app-bar",directives:{Scroll:r["b"]},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return a["a"].options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...i["a"].options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},computedContentHeight(){if(!this.shrinkOnScroll)return i["a"].options.computed.computedContentHeight.call(this);const t=this.computedOriginalHeight,e=this.dense?48:56,s=t,r=s-e,o=r/this.computedScrollThreshold,a=this.currentScroll*o;return Math.max(e,s-a)},computedFontSize(){if(!this.isProminent)return;const t=this.dense?96:128,e=t-this.computedContentHeight,s=.00347;return Number((1.5-e*s).toFixed(2))},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(!this.fadeImgOnScroll)return;const t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))},computedOriginalHeight(){let t=i["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:i["a"].options.computed.isCollapsed.call(this)},isProminent(){return i["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...i["a"].options.computed.styles.call(this),fontSize:Object(c["e"])(this.computedFontSize,"rem"),marginTop:Object(c["e"])(this.computedMarginTop),transform:`translateY(${Object(c["e"])(this.computedTransform)})`,left:Object(c["e"])(this.computedLeft),right:Object(c["e"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=i["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:this.currentThreshold<this.computedScrollThreshold||(this.hideOnScroll&&(this.isActive=this.isScrollingUp),this.savedScroll=this.currentScroll)}},render(t){const e=i["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"4bd4":function(t,e,s){"use strict";var i=s("58df"),r=s("7e2b"),o=s("3206");e["a"]=Object(i["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>{return t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0})},s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"5e23":function(t,e,s){},"615b":function(t,e,s){},"71cb":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-app-bar",{attrs:{app:"",color:"#FFFFFF",elevation:"3"}},[s("v-row",[s("v-col",{staticClass:"text-left pa-0"},[s("v-btn",{attrs:{text:"",icon:"",color:"primary",tile:"",height:"100%",width:"50px"},on:{click:function(e){return t.$router.go(-1)}}},[s("v-icon",[t._v("mdi-arrow-left")])],1)],1),s("v-col",{staticClass:"text-center"},[s("v-toolbar-title",[t._v(t._s(t.verifyYourPasswordText))])],1),s("v-col")],1)],1),s("v-card",{staticClass:"pa-5",staticStyle:{"margin-top":"60px"}},[s("v-card-text",{staticClass:"pa-0",staticStyle:{"margin-bottom":"20px"},attrs:{align:"justify"}},[t._v("\n            "+t._s(t.introduceYourPasswordToContinueText)+"\n        ")]),s("v-form",{model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[s("v-text-field",{attrs:{rules:[t.rules.required,t.rules.min8Char],"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",label:t.passwordText,hint:t.min8CharText,counter:"",required:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("v-btn",{staticStyle:{"margin-top":"20px"},attrs:{block:"",color:"primary",disabled:!t.validForm},on:{click:t.verifyPassword}},[t._v("\n            "+t._s(t.continueText)+"\n        ")])],1),s("v-snackbar",{attrs:{timeout:4e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.snackbarText)+"\n        "),s("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n            "+t._s(t.closeText)+"\n        ")])],1)],1)},r=[],o=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),a=s("4c51"),n=s("2f62");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(s,!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var h={name:"SettingsAccountPasswordVerification",data:function(){return{validForm:!1,snackbar:!1,password:"",snackbarText:null,showPassword:!1,rules:{required:function(t){return!!t||a["a"].RULE_TEXT_MANDATORY_FIELD},min8Char:function(t){return t.length>=8||0==t.length||a["a"].RULE_TEXT_MIN_VALUE_CHARACTERS_PASSWORD}},passwordText:a["a"].TEXT_PASSWORD,email:this.$store.getters["user/getEmail"],closeText:a["a"].TEXT_CLOSE,continueText:a["a"].TEXT_TO_CONTINUE,min8CharText:a["a"].RULE_TEXT_MIN_VALUE_CHARACTERS_PASSWORD,verifyYourPasswordText:a["a"].TEXT_VERIFY_YOUR_PASSWORD,introduceYourPasswordToContinueText:a["a"].TEXT_INTRODUCE_YOUR_PASSWORD_TO_CONTINUE}},methods:c({},Object(n["b"])("user",["login"]),{verifyPassword:function(){var t=this,e=t.login({email:t.email,password:t.password});e.then((function(){t.$router.push({name:"settingsAccountEditEmail"})})).catch((function(e){e==a["a"].ERROR_WRONG_EMAIL_PASSWORD_COMBINATION?t.snackbarText=a["a"].ERROR_TEXT_WRONG_PASSWORD:t.snackbarText=e,t.snackbar=!0}))}})},d=h,u=s("2877"),p=s("6544"),m=s.n(p),v=s("40dc"),b=s("8336"),f=s("b0af"),g=s("99d9"),S=s("62ad"),O=s("a523"),T=s("4bd4"),_=s("132d"),w=s("0fd9"),x=s("2db4"),y=s("8654"),k=s("2a7f"),E=Object(u["a"])(d,i,r,!1,null,"0633131a",null);e["default"]=E.exports;m()(E,{VAppBar:v["a"],VBtn:b["a"],VCard:f["a"],VCardText:g["b"],VCol:S["a"],VContainer:O["a"],VForm:T["a"],VIcon:_["a"],VRow:w["a"],VSnackbar:x["a"],VTextField:y["a"],VToolbarTitle:k["a"]})},"71d9":function(t,e,s){"use strict";s("5e23");var i=s("8dd9"),r=s("adda"),o=s("80d2"),a=s("d9bd");e["a"]=i["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...i["a"].options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:Object(o["e"])(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(a["a"])(t,e,this)})},methods:{genBackground(){const t={height:Object(o["e"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(o["e"])(this.computedContentHeight)}},Object(o["o"])(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(o["e"])(this.extensionHeight)}},Object(o["o"])(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],s=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,s,e)}})},"8b0d":function(t,e,s){},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return o})),s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return l}));var i=s("b0af"),r=s("80d2");const o=Object(r["h"])("v-card__actions"),a=Object(r["h"])("v-card__subtitle"),n=Object(r["h"])("v-card__text"),l=Object(r["h"])("v-card__title");i["a"]},b0af:function(t,e,s){"use strict";s("615b");var i=s("10d2"),r=s("297c"),o=s("1c87"),a=s("58df");e["a"]=Object(a["a"])(r["a"],o["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...o["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...i["a"].options.computed.classes.call(this)}},styles(){const t={...i["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},ca71:function(t,e,s){},d10f:function(t,e,s){"use strict";var i=s("2b0e");e["a"]=i["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},f977:function(t,e,s){"use strict";function i(t,e){const s=e.value,i=e.options||{passive:!0},r=e.arg?document.querySelector(e.arg):window;r&&(r.addEventListener("scroll",s,i),t._onScroll={callback:s,options:i,target:r})}function r(t){if(!t._onScroll)return;const{callback:e,options:s,target:i}=t._onScroll;i.removeEventListener("scroll",e,s),delete t._onScroll}s.d(e,"a",(function(){return o}));const o={inserted:i,unbind:r};e["b"]=o}}]);
//# sourceMappingURL=chunk-2733c950.7a9d2161.js.map