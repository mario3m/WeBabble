(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf8e62e8"],{"2db4":function(t,e,r){"use strict";r("c5f6"),r("ca71");var n=r("a9ad"),s=r("f2e7"),a=r("fe6c"),i=r("58df"),o=r("d9bd");e["a"]=Object(i["a"])(n["a"],s["a"],Object(a["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(o["d"])("auto-height",this)},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper",attrs:{role:"alert"}}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},"4bd4":function(t,e,r){"use strict";r("8e6e"),r("456d");var n=r("ade3"),s=(r("7514"),r("ac6a"),r("8615"),r("6762"),r("2fdb"),r("58df")),a=r("7e2b"),i=r("3206");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(s["a"])(a["a"],Object(i["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=r(t)))})):n.valid=r(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"615b":function(t,e,r){},"62ad":function(t,e,r){"use strict";r("8e6e"),r("f559"),r("6762"),r("2fdb");var n=r("ade3"),s=(r("5df3"),r("f400"),r("a481"),r("ac6a"),r("456d"),r("c5f6"),r("4b85"),r("2b0e")),a=r("d9f7"),i=r("80d2");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=["sm","md","lg","xl"],u=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return l.reduce((function(t,e){return t["offset"+Object(i["x"])(e)]={type:[String,Number],default:null},t}),{})}(),f=function(){return l.reduce((function(t,e){return t["order"+Object(i["x"])(e)]={type:[String,Number],default:null},t}),{})}(),h={col:Object.keys(u),offset:Object.keys(d),order:Object.keys(f)};function p(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var s=e.replace(t,"");n+="-".concat(s)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r),n.toLowerCase()):n.toLowerCase()}}var b=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:c(c(c(c({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},f),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,s=e.data,i=e.children,o=(e.parent,"");for(var c in r)o+=String(r[c]);var l=b.get(o);return l||function(){var t,e;for(e in l=[],h)h[e].forEach((function(t){var n=r[t],s=p(e,t,n);s&&l.push(s)}));var s=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!s||!r.cols},Object(n["a"])(t,"col-".concat(r.cols),r.cols),Object(n["a"])(t,"offset-".concat(r.offset),r.offset),Object(n["a"])(t,"order-".concat(r.order),r.order),Object(n["a"])(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),b.set(o,l)}(),t(r.tag,Object(a["a"])(s,{class:l}),i)}})},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return c}));var n=r("b0af"),s=r("80d2"),a=Object(s["h"])("v-card__actions"),i=Object(s["h"])("v-card__subtitle"),o=Object(s["h"])("v-card__text"),c=Object(s["h"])("v-card__title");n["a"]},b0af:function(t,e,r){"use strict";r("8e6e"),r("ac6a"),r("456d");var n=r("ade3"),s=(r("c5f6"),r("615b"),r("10d2")),a=r("297c"),i=r("1c87"),o=r("58df");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(o["a"])(a["a"],i["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return l(l({"v-card":!0},i["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},s["a"].options.computed.classes.call(this))},styles:function(){var t=l({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},ca71:function(t,e,r){},e977:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-back",staticStyle:{position:"relative",height:"100%!important"}},[r("v-container",{staticClass:"login",staticStyle:{position:"relative","padding-bottom":"40px",height:"100%","max-width":"550px"}},[r("v-col",{attrs:{cols:"12"}},[r("v-card-title",{staticClass:"text-center justify-center pa-3 white--text"},[t._v(" "+t._s(t.accessToYourAccountText)+" ")]),r("v-card",{staticClass:"text--center justify-center",staticStyle:{"padding-bottom":"8px"}},[r("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[r("img",{staticStyle:{width:"60px"},attrs:{src:"/LogoWeBabble.png"}})]),r("v-container",{staticClass:"pa-3",staticStyle:{"padding-top":"10px!important"}},[r("v-form",{staticClass:"pa-1",model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[r("v-text-field",{attrs:{rules:[t.rules.required],label:t.emailText,required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("v-text-field",{attrs:{rules:[t.rules.required],"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",label:t.passwordText},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),r("v-btn",{attrs:{block:"",color:"primary",dark:"",disabled:t.buttonIsDisabled},on:{click:t.loginUser}},[t._v(t._s(t.toLogInText)+" ")])],1)],1)],1),r("v-col",{staticStyle:{"padding-top":"2px"},attrs:{cols:"12",align:"center"}},[r("router-link",{staticClass:"white--text",staticStyle:{"font-size":"14px"},attrs:{to:"/send-change-password-email"}},[t._v(" "+t._s(t.haveYouForgottenYourPasswordText)+" ")])],1),r("v-col",{staticClass:"pa-0",staticStyle:{position:"absolute",bottom:"0px","margin-left":"-12px"},attrs:{cols:"12",align:"center",id:"sign-up-now-claim"}},[r("p",{staticClass:"white--text",staticStyle:{"font-size":"14px"}},[t._v(t._s(t.stillDontHaveAnAccountText)+" "),r("router-link",{staticClass:"white--text",staticStyle:{"font-size":"14px"},attrs:{to:"/sign-up"}},[t._v(" "+t._s(t.registerNowText)+" ")])],1)]),r("v-snackbar",{attrs:{timeout:4e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarText)+" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" "+t._s(t.closeText)+" ")])],1)],1)],1)},s=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("a481"),r("ade3")),i=r("2f62");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={name:"login",data:function(){var t=this;return{validForm:!1,email:"",password:"",showPassword:!1,buttonIsDisabled:!0,snackbar:!1,snackbarText:"",accessToYourAccountText:null,registerNowText:null,haveYouForgottenYourPasswordText:null,stillDontHaveAnAccountText:null,closeText:null,toLogInText:null,passwordText:null,emailText:null,rules:{required:function(e){return!!e||t.$i18n.t("messages.RULE_TEXT_MANDATORY_FIELD")}}}},methods:c(c({},Object(i["b"])("user",["login"])),{},{loginUser:function(){var t=this;t.login({email:t.email,password:t.password}).then((function(){t.$router.replace("dashboard")})).catch((function(e){t.snackbarText=e,t.snackbar=!0}))}}),created:function(){this.accessToYourAccountText=this.$i18n.t("messages.TEXT_ACCESS_TO_YOUR_ACCOUNT"),this.registerNowText=this.$i18n.t("messages.TEXT_REGISTER_NOW"),this.haveYouForgottenYourPasswordText=this.$i18n.t("messages.TEXT_HAVE_YOU_FORGOTTEN_YOUR_PASSWORD"),this.stillDontHaveAnAccountText=this.$i18n.t("messages.TEXT_STILL_DONT_HAVE_AN_ACCOUNT"),this.closeText=this.$i18n.t("messages.TEXT_CLOSE"),this.toLogInText=this.$i18n.t("messages.TEXT_TO_LOG_IN"),this.passwordText=this.$i18n.t("messages.TEXT_PASSWORD"),this.emailText=this.$i18n.t("messages.TEXT_EMAIL")},watch:{validForm:function(t){this.buttonIsDisabled=!t}}},u=l,d=r("2877"),f=r("6544"),h=r.n(f),p=r("8336"),b=r("b0af"),v=r("99d9"),g=r("62ad"),m=r("a523"),O=r("4bd4"),w=r("2db4"),y=r("8654"),j=Object(d["a"])(u,n,s,!1,null,"33a13263",null);e["default"]=j.exports;h()(j,{VBtn:p["a"],VCard:b["a"],VCardTitle:v["c"],VCol:g["a"],VContainer:m["a"],VForm:O["a"],VSnackbar:w["a"],VTextField:y["a"]})}}]);
//# sourceMappingURL=chunk-bf8e62e8.378b990d.js.map