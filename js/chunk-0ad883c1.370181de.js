(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ad883c1"],{"277e":function(t,e,i){"use strict";var s=i("f977"),r=i("d9bd"),o=i("2b0e");e["a"]=o["a"].extend({name:"scrollable",directives:{Scroll:s["a"]},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(r["c"])(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}})},"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var s=i("71d9"),r=i("80d2");const o=Object(r["h"])("v-toolbar__title"),a=Object(r["h"])("v-toolbar__items");s["a"]},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var s=i("fe6c"),r=i("58df");function o(t,e=[]){return Object(r["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"40dc":function(t,e,i){"use strict";i("8b0d");var s=i("71d9"),r=i("f977"),o=i("3a66"),a=i("277e"),l=i("d10f"),n=i("f2e7"),c=i("80d2"),h=i("58df");const d=Object(h["a"])(s["a"],a["a"],l["a"],n["a"],Object(o["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=d.extend({name:"v-app-bar",directives:{Scroll:r["b"]},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return a["a"].options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...s["a"].options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},computedContentHeight(){if(!this.shrinkOnScroll)return s["a"].options.computed.computedContentHeight.call(this);const t=this.computedOriginalHeight,e=this.dense?48:56,i=t,r=i-e,o=r/this.computedScrollThreshold,a=this.currentScroll*o;return Math.max(e,i-a)},computedFontSize(){if(!this.isProminent)return;const t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(!this.fadeImgOnScroll)return;const t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))},computedOriginalHeight(){let t=s["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:s["a"].options.computed.isCollapsed.call(this)},isProminent(){return s["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...s["a"].options.computed.styles.call(this),fontSize:Object(c["e"])(this.computedFontSize,"rem"),marginTop:Object(c["e"])(this.computedMarginTop),transform:`translateY(${Object(c["e"])(this.computedTransform)})`,left:Object(c["e"])(this.computedLeft),right:Object(c["e"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=s["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:this.currentThreshold<this.computedScrollThreshold||(this.hideOnScroll&&(this.isActive=this.isScrollingUp),this.savedScroll=this.currentScroll)}},render(t){const e=s["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"4bd4":function(t,e,i){"use strict";var s=i("58df"),r=i("7e2b"),o=i("3206");e["a"]=Object(s["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>{return t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0})},i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"4c98":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-app-bar",{staticClass:"app-bar-gradient-back",attrs:{app:"",color:"#FFFFFF",elevation:"3",dark:""}},[i("v-row",[i("v-col",{staticClass:"text-left pa-0"},[i("v-btn",{attrs:{text:"",icon:"",dark:"",tile:"",height:"100%",width:"50px"},on:{click:function(e){return t.$router.replace({name:"settingsAccount"})}}},[i("v-icon",[t._v("mdi-arrow-left")])],1)],1),i("v-col",{staticClass:"text-center"},[i("v-toolbar-title",[t._v(t._s(t.changeEmailText))])],1),i("v-col")],1)],1),i("v-card",{staticClass:"pa-5",staticStyle:{"margin-top":"60px"}},[i("v-form",{model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[i("v-text-field",{attrs:{rules:[t.rules.required,t.rules.email],label:t.emailText,required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),i("v-btn",{staticStyle:{"margin-top":"10px"},attrs:{block:"",color:"primary",disabled:t.buttonIsDisabled},on:{click:t.updateEmail}},[t._v("\n            "+t._s(t.updateText)+"\n        ")])],1),i("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("br"),i("v-card-text",{staticStyle:{color:"black","padding-bottom":"0px"},attrs:{align:"justify"}},[i("p",{staticStyle:{"margin-bottom":"7px"}},[t._v(t._s(t.yourEmailHasBeenUpdatedText))])]),i("v-card-actions",{staticStyle:{"padding-bottom":"15px"}},[i("v-spacer"),i("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$router.go(-2)}}},[t._v(t._s(t.continueText))]),i("v-spacer")],1)],1)],1),i("v-snackbar",{staticStyle:{bottom:"76px"},attrs:{timeout:4e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.snackbarText)+"\n        "),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n            "+t._s(t.closeText)+"\n        ")])],1)],1)},r=[],o=(i("8e6e"),i("ac6a"),i("456d"),i("a481"),i("bd86")),a=i("2f62");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(i,!0).forEach((function(e){Object(o["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var c={name:"SettingsAccountEditEmail",data:function(){var t=this;return{buttonIsDisabled:!1,validForm:!1,snackbar:!1,snackbarText:null,dialog:!1,email:this.$store.getters["user/getEmail"],rules:{required:function(e){return!!e||t.$i18n.t("messages.RULE_TEXT_MANDATORY_FIELD")},email:function(e){var i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return i.test(e)||t.$i18n.t("messages.TEXT_EMAIL_NOT_VALID")}},changeEmailText:null,emailText:null,closeText:null,continueText:null,updateText:null,yourEmailHasBeenUpdatedText:null}},methods:n({},Object(a["b"])("user",["updateAccountEmail"]),{updateEmail:function(){var t=this;if(t.email!=t.$store.getters["user/getEmail"]){var e=t.updateAccountEmail(t.email);e.then((function(){t.dialog=!0})).catch((function(e){t.snackbarText=e,t.snackbar=!0}))}else t.$router.replace({name:"settingsAccount"})}}),created:function(){this.changeEmailText=this.$i18n.t("messages.TEXT_CHANGE_EMAIL"),this.emailText=this.$i18n.t("messages.TEXT_EMAIL_DIRECTION"),this.closeText=this.$i18n.t("messages.TEXT_CLOSE"),this.continueText=this.$i18n.t("messages.TEXT_TO_CONTINUE"),this.updateText=this.$i18n.t("messages.TEXT_UPDATE"),this.yourEmailHasBeenUpdatedText=this.$i18n.t("messages.TEXT_YOUR_EMAIL_HAS_BEEN_UPDATED")}},h=c,d=i("2877"),p=i("6544"),u=i.n(p),m=i("40dc"),v=i("8336"),b=i("b0af"),g=i("99d9"),f=i("62ad"),S=i("a523"),O=i("169a"),T=i("4bd4"),x=i("132d"),_=i("0fd9"),y=i("2db4"),E=i("2fa4"),B=i("8654"),k=i("2a7f"),$=Object(d["a"])(h,s,r,!1,null,"404f3e0b",null);e["default"]=$.exports;u()($,{VAppBar:m["a"],VBtn:v["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VCol:f["a"],VContainer:S["a"],VDialog:O["a"],VForm:T["a"],VIcon:x["a"],VRow:_["a"],VSnackbar:y["a"],VSpacer:E["a"],VTextField:B["a"],VToolbarTitle:k["a"]})},"5e23":function(t,e,i){},"615b":function(t,e,i){},"71d9":function(t,e,i){"use strict";i("5e23");var s=i("8dd9"),r=i("adda"),o=i("80d2"),a=i("d9bd");e["a"]=s["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...s["a"].options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:Object(o["e"])(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(a["a"])(t,e,this)})},methods:{genBackground(){const t={height:Object(o["e"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(o["e"])(this.computedContentHeight)}},Object(o["o"])(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(o["e"])(this.extensionHeight)}},Object(o["o"])(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},"8b0d":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return n}));var s=i("b0af"),r=i("80d2");const o=Object(r["h"])("v-card__actions"),a=Object(r["h"])("v-card__subtitle"),l=Object(r["h"])("v-card__text"),n=Object(r["h"])("v-card__title");s["a"]},"9d65":function(t,e,i){"use strict";var s=i("d9bd"),r=i("2b0e");e["a"]=r["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(s["d"])("lazy",this)},methods:{showLazyContent(t){return this.hasContent?t:void 0}}})},b0af:function(t,e,i){"use strict";i("615b");var s=i("10d2"),r=i("297c"),o=i("1c87"),a=i("58df");e["a"]=Object(a["a"])(r["a"],o["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...o["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...s["a"].options.computed.classes.call(this)}},styles(){const t={...s["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},d10f:function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},f977:function(t,e,i){"use strict";function s(t,e){const i=e.value,s=e.options||{passive:!0},r=e.arg?document.querySelector(e.arg):window;r&&(r.addEventListener("scroll",i,s),t._onScroll={callback:i,options:s,target:r})}function r(t){if(!t._onScroll)return;const{callback:e,options:i,target:s}=t._onScroll;s.removeEventListener("scroll",e,i),delete t._onScroll}i.d(e,"a",(function(){return o}));const o={inserted:s,unbind:r};e["b"]=o}}]);
//# sourceMappingURL=chunk-0ad883c1.370181de.js.map