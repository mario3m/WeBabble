(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd58f02a"],{"0789":function(t,e,i){"use strict";var a=i("80d2"),n=function(t="",e=!1){const i=e?"width":"height",n=`offset${Object(a["x"])(i)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow,[i]:t.style[i]}},enter(e){const a=e._initialStyle,s=`${e[n]}px`;e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=a.visibility,e.style.overflow="hidden",e.style[i]="0",e.offsetHeight,e.style.transition=a.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{e.style[i]=s})},afterEnter:r,enterCancelled:r,leave(t){t._initialStyle={transition:"",visibility:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=`${t[n]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[i]="0")},afterLeave:s,leaveCancelled:s};function s(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){const e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[i]=e),delete t._initialStyle}};i.d(e,"c",(function(){return s})),i.d(e,"d",(function(){return r})),i.d(e,"e",(function(){return o})),i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return c}));Object(a["i"])("carousel-transition"),Object(a["i"])("carousel-reverse-transition"),Object(a["i"])("tab-transition"),Object(a["i"])("tab-reverse-transition"),Object(a["i"])("menu-transition"),Object(a["i"])("fab-transition","center center","out-in"),Object(a["i"])("dialog-transition"),Object(a["i"])("dialog-bottom-transition");const s=Object(a["i"])("fade-transition"),r=Object(a["i"])("scale-transition"),o=(Object(a["i"])("scroll-x-transition"),Object(a["i"])("scroll-x-reverse-transition"),Object(a["i"])("scroll-y-transition"),Object(a["i"])("scroll-y-reverse-transition"),Object(a["i"])("slide-x-transition")),l=(Object(a["i"])("slide-x-reverse-transition"),Object(a["i"])("slide-y-transition"),Object(a["i"])("slide-y-reverse-transition"),Object(a["f"])("expand-transition",n())),c=Object(a["f"])("expand-x-transition",n("",!0))},"0fd9":function(t,e,i){"use strict";i("4b85");var a=i("2b0e"),n=i("d9f7"),s=i("80d2");const r=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return r.reduce((i,a)=>{return i[t+Object(s["x"])(a)]=e(),i},{})}const c=t=>[...o,"baseline","stretch"].includes(t),u=l("align",()=>({type:String,default:null,validator:c})),d=t=>[...o,"space-between","space-around"].includes(t),h=l("justify",()=>({type:String,default:null,validator:d})),f=t=>[...o,"space-between","space-around","stretch"].includes(t),g=l("alignContent",()=>({type:String,default:null,validator:f})),v={align:Object.keys(u),justify:Object.keys(h),alignContent:Object.keys(g)},m={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,i){let a=m[t];if(null!=i){if(e){const i=e.replace(t,"");a+=`-${i}`}return a+=`-${i}`,a.toLowerCase()}}const p=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...h,alignContent:{type:String,default:null,validator:f},...g},render(t,{props:e,data:i,children:a}){let s="";for(const n in e)s+=String(e[n]);let r=p.get(s);if(!r){let t;for(t in r=[],v)v[t].forEach(i=>{const a=e[i],n=b(t,i,a);n&&r.push(n)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),p.set(s,r)}return t(e.tag,Object(n["a"])(i,{staticClass:"row",class:r}),a)}})},"297c":function(t,e,i){"use strict";var a=i("2b0e"),n=i("37c6");e["a"]=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(n["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"2db4":function(t,e,i){"use strict";i("ca71");var a=i("a9ad"),n=i("f2e7"),s=i("fe6c"),r=i("58df"),o=i("d9bd");e["a"]=Object(r["a"])(a["a"],n["a"],Object(s["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive(){this.setTimeout()}},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(o["d"])("auto-height",this)},mounted(){this.setTimeout()},methods:{setTimeout(){window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},this.timeout))}},render(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},"37c6":function(t,e,i){"use strict";var a=i("8e36");e["a"]=a["a"]},"615b":function(t,e,i){},"62ad":function(t,e,i){"use strict";i("4b85");var a=i("2b0e"),n=i("d9f7"),s=i("80d2");const r=["sm","md","lg","xl"],o=(()=>{return r.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),l=(()=>{return r.reduce((t,e)=>{return t["offset"+Object(s["x"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return r.reduce((t,e)=>{return t["order"+Object(s["x"])(e)]={type:[String,Number],default:null},t},{})})(),u={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,i){let a=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");a+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(a+=`-${i}`,a.toLowerCase()):a.toLowerCase()}}const h=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},justifySelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:a,parent:s}){let r="";for(const n in e)r+=String(e[n]);let o=h.get(r);if(!o){let t;for(t in o=[],u)u[t].forEach(i=>{const a=e[i],n=d(t,i,a);n&&o.push(n)});const i=o.some(t=>t.startsWith("col-"));o.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf,[`justify-self-${e.justifySelf}`]:e.justifySelf}),h.set(r,o)}return t(e.tag,Object(n["a"])(i,{class:o}),a)}})},"6ece":function(t,e,i){},"8e36":function(t,e,i){"use strict";i("6ece");var a=i("0789"),n=i("a9ad"),s=i("fe6c"),r=i("a452"),o=i("7560"),l=i("80d2"),c=i("58df");const u=Object(c["a"])(n["a"],Object(s["b"])(["absolute","fixed","top","bottom"]),r["a"],o["a"]);e["a"]=u.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["e"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["e"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.$vuetify.rtl?"right":"left"]:Object(l["e"])(this.normalizedValue,"%"),width:Object(l["e"])(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?a["c"]:a["e"]},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(l["e"])(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=Object(l["o"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["e"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return l}));var a=i("b0af"),n=i("80d2");const s=Object(n["h"])("v-card__actions"),r=Object(n["h"])("v-card__subtitle"),o=Object(n["h"])("v-card__text"),l=Object(n["h"])("v-card__title");a["a"]},"9d65":function(t,e,i){"use strict";var a=i("d9bd"),n=i("2b0e");e["a"]=n["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(a["d"])("lazy",this)},methods:{showLazyContent(t){return this.hasContent?t:void 0}}})},a452:function(t,e,i){"use strict";var a=i("2b0e");function n(t="value",e="change"){return a["a"].extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const s=n();e["a"]=s},b0af:function(t,e,i){"use strict";i("615b");var a=i("10d2"),n=i("297c"),s=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(n["a"],s["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...s["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...a["a"].options.computed.classes.call(this)}},styles(){const t={...a["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},ca71:function(t,e,i){},cf2d:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img-back",staticStyle:{position:"relative",height:"100%!important"}},[a("v-container",{staticClass:"login",staticStyle:{position:"relative",height:"100%","max-width":"550px"}},[a("v-row",{staticClass:"justify-center text-center"},[a("v-card-title",{staticClass:"text-center justify-center pa-3 white--text"},[t._v("\n                "+t._s(t.verifyYourEmailText)+"\n            ")]),a("v-col",{staticStyle:{"padding-bottom":"0px"},attrs:{cols:"12"}},[a("v-card",{staticClass:"text--center justify-center",staticStyle:{"padding-bottom":"8px"}},[a("v-container",[a("v-row",{staticClass:"pa-3"},[a("v-col",{attrs:{"text-align":"center"}},[a("v-card-text",{staticClass:"pa-0",attrs:{align:"justify"}},[t._v("\n                                    "+t._s(t.verificationEmailSentTo)+"\n                                ")]),a("v-card-text",{staticClass:"pa-0",attrs:{align:"center"}},[a("b",[t._v(t._s(t.getEmail))])])],1)],1),a("v-row",{staticClass:"pa-3"},[a("v-col",{attrs:{align:"center"}},[a("v-progress-circular",{attrs:{size:"100",color:"primary",indeterminate:""}},[a("img",{staticStyle:{width:"60px"},attrs:{src:i("e74c")}})]),a("br"),a("br")],1)],1),a("v-btn",{staticStyle:{"margin-top":"10px"},attrs:{block:"",color:"primary"},on:{click:t.sendUserEmailVerification}},[t._v("\n                            "+t._s(t.resendEmailText)+"\n                        ")])],1)],1)],1)],1),a("v-row",{staticStyle:{position:"fixed",bottom:"10px",width:"100%"}},[a("v-col"),a("v-col",{staticClass:"pa-0",attrs:{align:"center"}},[a("a",{staticClass:"white--text",staticStyle:{"font-size":"14px"},on:{click:t.wantToLogout}},[a("u",[t._v(t._s(t.logOutText))])])]),a("v-col")],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("br"),a("v-card-text",{staticStyle:{color:"black","padding-bottom":"0px"},attrs:{align:"justify"}},[a("h3",{staticStyle:{"margin-bottom":"10px"}},[t._v(t._s(t.aboutToLogOutText))]),a("p",{staticStyle:{"margin-bottom":"7px"}},[t._v(t._s(t.askingForLogOutConfirmationText))])]),a("v-card-actions",{staticStyle:{"padding-bottom":"15px"}},[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v(t._s(t.cancelText))]),a("v-btn",{attrs:{color:"primary"},on:{click:t.logoutUser}},[t._v(t._s(t.confirmText))])],1)],1)],1),a("v-snackbar",{attrs:{timeout:4e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n            "+t._s(t.snackbarText)+"\n            "),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n                "+t._s(t.closeText)+"\n            ")])],1)],1)],1)},n=[],s=(i("8e6e"),i("ac6a"),i("456d"),i("a481"),i("bd86")),r=i("2f62");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var c={name:"emailVerification",data:function(){return{dialog:!1,sendEmailButtonIsDisabled:!0,snackbar:!1,snackbarText:"",isEmailVerified:!1,intervalCheckEmailVerified:null,logOutText:null,resendEmailText:null,closeText:null,cancelText:null,toLogOutText:null,confirmText:null,aboutToLogOutText:null,verificationEmailSentTo:null,askingForLogOutConfirmationText:null,verifyYourEmailText:null,verificationEmailSentText:null}},methods:l({},Object(r["b"])("user",["logout","sendEmailVerification","checkIfEmailIsVerified","checkRegistrationState"]),{sendUserEmailVerification:function(){var t=this,e=this.sendEmailVerification();e.then((function(){t.snackbarText=t.verificationEmailSentText,t.snackbar=!0})).catch((function(e){t.snackbarText=e,t.snackbar=!0}))},wantToLogout:function(){var t=this;t.dialog=!0},logoutUser:function(){var t=this,e=this.logout();e.then((function(){clearInterval(t.intervalCheckEmailVerified),t.$router.replace("home")})).catch((function(e){t.snackbarText=e,t.snackbar=!0}))},checkEmailVerified:function(){var t=this,e=this,i=this.checkIfEmailIsVerified();i.then((function(i){if(i){clearInterval(t.intervalCheckEmailVerified);var a=e.checkRegistrationState(e.$store.getters["user/getProfile"]);a.then((function(t){e.$router.replace(t)})).catch((function(t){e.snackbarText=t,e.snackbar=!0}))}})).catch((function(t){e.snackbarText=t,e.snackbar=!0}))}}),beforeMount:function(){var t=this;this.sendEmailVerification().catch((function(e){e!=t.$i18n.t("messages.ERROR_TOO_MANY_REQUESTS")&&(self.snackbarText=e,self.snackbar=!0)})),this.intervalCheckEmailVerified=setInterval(this.checkEmailVerified,2e3)},created:function(){this.logOutText=this.$i18n.t("messages.TEXT_TO_LOG_OUT"),this.resendEmailText=this.$i18n.t("messages.TEXT_RESEND_EMAIL"),this.closeText=this.$i18n.t("messages.TEXT_CLOSE"),this.cancelText=this.$i18n.t("messages.TEXT_CANCEL"),this.toLogOutText=this.$i18n.t("messages.TEXT_TO_LOG_OUT"),this.confirmText=this.$i18n.t("messages.TEXT_CONFIRM"),this.aboutToLogOutText=this.$i18n.t("messages.TEXT_YOU_ARE_ABOUT_TO_LOG_OUT"),this.verificationEmailSentTo=this.$i18n.t("messages.TEXT_VERIFICATION_EMAIL_SENT_TO"),this.askingForLogOutConfirmationText=this.$i18n.t("messages.TEXT_ARE_YOU_SURE_YOU_WANT_TO_LOG_OUT"),this.verifyYourEmailText=this.$i18n.t("messages.TEXT_VERIFY_YOUR_EMAIL"),this.verificationEmailSentText=this.$i18n.t("messages.TEXT_VERIFICATION_EMAIL_SENT")},computed:l({},Object(r["c"])("user",["getEmail"]))},u=c,d=i("2877"),h=i("6544"),f=i.n(h),g=i("8336"),v=i("b0af"),m=i("99d9"),b=i("62ad"),p=i("a523"),y=i("169a"),_=i("490a"),O=i("0fd9"),x=i("2db4"),T=i("2fa4"),k=Object(d["a"])(u,a,n,!1,null,"27ea9f97",null);e["default"]=k.exports;f()(k,{VBtn:g["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:b["a"],VContainer:p["a"],VDialog:y["a"],VProgressCircular:_["a"],VRow:O["a"],VSnackbar:x["a"],VSpacer:T["a"]})},e74c:function(t,e,i){t.exports=i.p+"img/EmailLogoWeBabble.afcf55c1.png"}}]);
//# sourceMappingURL=chunk-fd58f02a.25046192.js.map