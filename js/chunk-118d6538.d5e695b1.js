(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-118d6538"],{"0789":function(t,e,n){"use strict";var r=n("80d2"),i=function(t="",e=!1){const n=e?"width":"height",i=`offset${Object(r["x"])(n)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow,[n]:t.style[n]}},enter(e){const r=e._initialStyle,a=`${e[i]}px`;e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=r.visibility,e.style.overflow="hidden",e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{e.style[n]=a})},afterEnter:s,enterCancelled:s,leave(t){t._initialStyle={transition:"",visibility:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[n]="0")},afterLeave:a,leaveCancelled:a};function a(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){const e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}};n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c}));Object(r["i"])("carousel-transition"),Object(r["i"])("carousel-reverse-transition"),Object(r["i"])("tab-transition"),Object(r["i"])("tab-reverse-transition"),Object(r["i"])("menu-transition"),Object(r["i"])("fab-transition","center center","out-in"),Object(r["i"])("dialog-transition"),Object(r["i"])("dialog-bottom-transition");const a=Object(r["i"])("fade-transition"),s=Object(r["i"])("scale-transition"),o=(Object(r["i"])("scroll-x-transition"),Object(r["i"])("scroll-x-reverse-transition"),Object(r["i"])("scroll-y-transition"),Object(r["i"])("scroll-y-reverse-transition"),Object(r["i"])("slide-x-transition")),l=(Object(r["i"])("slide-x-reverse-transition"),Object(r["i"])("slide-y-transition"),Object(r["i"])("slide-y-reverse-transition"),Object(r["f"])("expand-transition",i())),c=Object(r["f"])("expand-x-transition",i("",!0))},"0fd9":function(t,e,n){"use strict";n("4b85");var r=n("2b0e"),i=n("d9f7"),a=n("80d2");const s=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return s.reduce((n,r)=>{return n[t+Object(a["x"])(r)]=e(),n},{})}const c=t=>[...o,"baseline","stretch"].includes(t),u=l("align",()=>({type:String,default:null,validator:c})),d=t=>[...o,"space-between","space-around"].includes(t),h=l("justify",()=>({type:String,default:null,validator:d})),f=t=>[...o,"space-between","space-around","stretch"].includes(t),g=l("alignContent",()=>({type:String,default:null,validator:f})),m={align:Object.keys(u),justify:Object.keys(h),alignContent:Object.keys(g)},p={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,n){let r=p[t];if(null!=n){if(e){const n=e.replace(t,"");r+=`-${n}`}return r+=`-${n}`,r.toLowerCase()}}const b=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...h,alignContent:{type:String,default:null,validator:f},...g},render(t,{props:e,data:n,children:r}){let a="";for(const i in e)a+=String(e[i]);let s=b.get(a);if(!s){let t;for(t in s=[],m)m[t].forEach(n=>{const r=e[n],i=v(t,n,r);i&&s.push(i)});s.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(a,s)}return t(e.tag,Object(i["a"])(n,{staticClass:"row",class:s}),r)}})},"132d":function(t,e,n){"use strict";n("4804");var r,i=n("7e2b"),a=n("a9ad"),s=n("af2b"),o=n("7560"),l=n("80d2"),c=n("2b0e"),u=n("58df");function d(t){return["fas","far","fal","fab"].some(e=>t.includes(e))}function h(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(r||(r={}));const f=Object(u["a"])(i["a"],a["a"],s["a"],o["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["w"])(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["t"])(t).find(e=>t[e]);return e&&r[e]||Object(l["e"])(this.size)},getDefaultData(){const t=Boolean(this.listeners$.click||this.listeners$["!click"]),e={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":t,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!t,role:t?"button":null,...this.attrs$},on:this.listeners$};return e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const n=[],r=this.getDefaultData();let i="material-icons";const a=t.indexOf("-"),s=a<=-1;s?n.push(t):(i=t.slice(0,a),d(i)&&(i="")),r.class[i]=!0,r.class[t]=!s;const o=this.getSize();return o&&(r.style={fontSize:o}),this.applyColors(r),e(this.tag,r,n)},renderSvgIcon(t,e){const n=this.getDefaultData();n.class["v-icon--svg"]=!0,n.attrs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"24",width:"24",role:"img","aria-hidden":!this.attrs$["aria-label"],"aria-label":this.attrs$["aria-label"]};const r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r},n.attrs.height=r,n.attrs.width=r),this.applyColors(n),e("svg",n,[e("path",{attrs:{d:t}})])},renderSvgIconComponent(t,e){const n=this.getDefaultData();n.class["v-icon--is-component"]=!0;const r=this.getSize();r&&(n.style={fontSize:r,height:r}),this.applyColors(n);const i=t.component;return n.props=t.props,n.nativeOn=n.on,e(i,n)}},render(t){const e=this.getIcon();return"string"===typeof e?h(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=c["a"].extend({name:"v-icon",$_wrapperFor:f,functional:!0,render(t,{data:e,children:n}){let r="";return e.domProps&&(r=e.domProps.textContent||e.domProps.innerHTML||r,delete e.domProps.textContent,delete e.domProps.innerHTML),t(f,e,r?[r]:n)}})},"297c":function(t,e,n){"use strict";var r=n("2b0e"),i=n("37c6");e["a"]=r["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(i["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"2db4":function(t,e,n){"use strict";n("ca71");var r=n("a9ad"),i=n("f2e7"),a=n("fe6c"),s=n("58df"),o=n("d9bd");e["a"]=Object(s["a"])(r["a"],i["a"],Object(a["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive(){this.setTimeout()}},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(o["d"])("auto-height",this)},mounted(){this.setTimeout()},methods:{setTimeout(){window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},this.timeout))}},render(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d2c8"),a="includes";r(r.P+r.F*n("5147")(a),"String",{includes:function(t){return!!~i(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3408:function(t,e,n){},"37c6":function(t,e,n){"use strict";var r=n("8e36");e["a"]=r["a"]},4804:function(t,e,n){},"57e4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{height:"100%",position:"relative",width:"100%"},attrs:{align:"center"}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",[t._v(t._s(t.chooseYourProfileImageText))])])],1),n("v-row",{staticStyle:{height:"100%"}},[n("v-col",{staticStyle:{height:"100%"},attrs:{cols:"12",sm:"6","offset-sm":"3",md:"4","offset-md":"4"}},[n("v-card",{attrs:{align:"center"}},[n("v-progress-linear",{attrs:{value:"100",height:"10px",color:"blue-grey",dark:""}}),n("v-container",[n("profile-image-selector",{attrs:{size:"1"},on:{newImageSelected:function(e){return t.newImageSelected(e)}}}),n("v-btn",{attrs:{block:"",color:"primary",disabled:t.buttonIsDisabled},on:{click:t.uploadUserProfileImage}},[t._v("\n                        "+t._s(t.continueText)+"\n                    ")])],1)],1)],1)],1),n("v-snackbar",{attrs:{timeout:4e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.snackbarText)+"\n        "),n("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n            "+t._s(t.closeText)+"\n        ")])],1)],1)},i=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("bd86")),s=n("4c51"),o=n("2f62"),l=n("db97");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"SetYourProfileImage",components:{ProfileImageSelector:l["a"]},data:function(){return{showImg:!0,imagePreview:this.$store.getters["user/getGenderDefaultProfileImgByUserGender"],imageUpload:null,snackbar:!1,snackbarText:"",chooseYourProfileImageText:s["a"].TEXT_CHOOSE_YOUR_PROFILE_IMAGE,closeText:s["a"].TEXT_CLOSE,continueText:s["a"].TEXT_TO_CONTINUE}},methods:u({},Object(o["b"])("user",["setProfileImg","setRegistrationCompleted"]),{newImageSelected:function(t){this.imageUpload=t},uploadUserProfileImage:function(){var t=this,e=this;if(e.imageUpload){var n=this.setProfileImg(e.imageUpload);n.then((function(){var n=t.setRegistrationCompleted(e.imageUpload);n.then((function(){t.$router.replace("dashboard")})).catch((function(t){e.snackbarText=t,e.snackbar=!0}))})).catch((function(t){e.snackbarText=t,e.snackbar=!0}))}else this.$router.replace("dashboard")}}),computed:{buttonIsDisabled:function(){return null==this.imageUpload}}},h=d,f=n("2877"),g=n("6544"),m=n.n(g),p=n("8336"),v=n("b0af"),b=n("62ad"),y=n("a523"),w=n("8e36"),O=n("0fd9"),C=n("2db4"),k=Object(f["a"])(h,r,i,!1,null,"e3ef19e6",null);e["default"]=k.exports;m()(k,{VBtn:p["a"],VCard:v["a"],VCol:b["a"],VContainer:y["a"],VProgressLinear:w["a"],VRow:O["a"],VSnackbar:C["a"]})},"615b":function(t,e,n){},"62ad":function(t,e,n){"use strict";n("4b85");var r=n("2b0e"),i=n("d9f7"),a=n("80d2");const s=["sm","md","lg","xl"],o=(()=>{return s.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),l=(()=>{return s.reduce((t,e)=>{return t["offset"+Object(a["x"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return s.reduce((t,e)=>{return t["order"+Object(a["x"])(e)]={type:[String,Number],default:null},t},{})})(),u={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,n){let r=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");r+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const h=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},justifySelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:r,parent:a}){let s="";for(const i in e)s+=String(e[i]);let o=h.get(s);if(!o){let t;for(t in o=[],u)u[t].forEach(n=>{const r=e[n],i=d(t,n,r);i&&o.push(i)});const n=o.some(t=>t.startsWith("col-"));o.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf,[`justify-self-${e.justifySelf}`]:e.justifySelf}),h.set(s,o)}return t(e.tag,Object(i["a"])(n,{class:o}),r)}})},6762:function(t,e,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6ece":function(t,e,n){},8212:function(t,e,n){"use strict";n("3408");var r=n("a9ad"),i=n("24b2"),a=n("80d2"),s=n("58df");e["a"]=Object(s["a"])(r["a"],i["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48},tile:Boolean},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,"v-avatar--tile":this.tile}},styles(){return{height:Object(a["e"])(this.size),minWidth:Object(a["e"])(this.size),width:Object(a["e"])(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},"8e36":function(t,e,n){"use strict";n("6ece");var r=n("0789"),i=n("a9ad"),a=n("fe6c"),s=n("a452"),o=n("7560"),l=n("80d2"),c=n("58df");const u=Object(c["a"])(i["a"],Object(a["b"])(["absolute","fixed","top","bottom"]),s["a"],o["a"]);e["a"]=u.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["e"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["e"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.$vuetify.rtl?"right":"left"]:Object(l["e"])(this.normalizedValue,"%"),width:Object(l["e"])(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?r["c"]:r["e"]},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(l["e"])(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=Object(l["o"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["e"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},a452:function(t,e,n){"use strict";var r=n("2b0e");function i(t="value",e="change"){return r["a"].extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const a=i();e["a"]=a},b0af:function(t,e,n){"use strict";n("615b");var r=n("10d2"),i=n("297c"),a=n("1c87"),s=n("58df");e["a"]=Object(s["a"])(i["a"],a["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...a["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...r["a"].options.computed.classes.call(this)}},styles(){const t={...r["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:n}=this.generateRouteLink();return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},ca71:function(t,e,n){},db97:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"text-align":"center"}},[1==t.size?n("v-avatar",{staticClass:"thumbnail",staticStyle:{width:"95%","padding-top":"95%","vertical-align":"top",position:"relative","margin-top":"5%"}},[t.showImg?n("img",{staticClass:"white--text align-end",staticStyle:{width:"100%",position:"absolute",top:"0",height:"100%","object-position":"center","object-fit":"cover"},attrs:{"aspect-ratio":1,src:t.imagePreview}}):t._e(),n("v-btn",{staticClass:"button-open-camera",staticStyle:{"margin-bottom":"12%"},attrs:{absolute:"",dark:"",fab:"",bottom:"",right:"",width:"19%",height:"19%",color:"primary"},on:{click:function(e){return t.$refs.myFiles.click()}}},[n("v-icon",[t._v("mdi-camera")])],1)],1):t._e(),.5==t.size?n("v-avatar",{staticClass:"thumbnail",staticStyle:{width:"45%","padding-top":"45%","vertical-align":"top",position:"relative","margin-top":"5%"}},[t.showImg?n("img",{staticClass:"white--text align-end",staticStyle:{width:"90%",position:"absolute",top:"0",height:"90%","object-position":"center","object-fit":"cover"},attrs:{"aspect-ratio":1,src:t.imagePreview}}):t._e(),n("v-btn",{staticClass:"button-open-camera",staticStyle:{"margin-bottom":"28%"},attrs:{absolute:"",dark:"",fab:"",bottom:"",right:"",width:"28%",height:"28%",color:"primary"},on:{click:function(e){return t.$refs.myFiles.click()}}},[n("v-icon",[t._v("mdi-camera")])],1)],1):t._e(),n("input",{ref:"myFiles",attrs:{hidden:"",type:"file",accept:"image/*"},on:{change:t.previewFiles}}),n("v-snackbar",{attrs:{timeout:4e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.snackbarText)+"\n        "),n("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n            "+t._s(t.closeText)+"\n        ")])],1)],1)},i=[],a=(n("a481"),n("6762"),n("2fdb"),n("4c51"));function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o="undefined"!=typeof window&&window.cordova&&window.cordova.require("cordova/modulemapper"),l=o&&o.getOriginalSymbol(window,"File")||File,c=o&&o.getOriginalSymbol(window,"FileReader")||FileReader;function u(t){return new Promise((function(e,n){var r=new c;r.onload=function(){return e(r.result)},r.onerror=function(t){return n(t)},r.readAsDataURL(t)}))}function d(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();return new Promise((function(r){for(var i=t.split(","),a=i[0].match(/:(.*?);/)[1],s=atob(i[1]),o=s.length,l=new Uint8Array(o);o--;)l[o]=s.charCodeAt(o);var c=new Blob([l],{type:a});c.name=e,c.lastModified=n,r(c)}))}function h(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){return e(r)},r.onerror=function(t){return n(t)},r.src=t}))}function f(t){var e=s(y(t.width,t.height),2),n=e[0];return e[1].drawImage(t,0,0,n.width,n.height),n}function g(t){return new Promise((function(e,n){var r,i,a=function(){try{return i=f(r),e([r,i])}catch(t){return n(t)}},s=function(e){try{return u(t).then((function(t){try{return h(t).then((function(t){try{return r=t,a()}catch(t){return n(t)}}),n)}catch(t){return n(t)}}),n)}catch(t){return n(t)}};try{return createImageBitmap(t).then((function(t){try{return r=t,a()}catch(t){return s()}}),s)}catch(t){s()}}))}function m(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return new Promise((function(a,s){var o;return"function"==typeof OffscreenCanvas&&t instanceof OffscreenCanvas?t.convertToBlob({type:e,quality:i}).then(function(t){try{return(o=t).name=n,o.lastModified=r,l.call(this)}catch(t){return s(t)}}.bind(this),s):d(t.toDataURL(e,i),n,r).then(function(t){try{return o=t,l.call(this)}catch(t){return s(t)}}.bind(this),s);function l(){return a(o)}}))}function p(t){return new Promise((function(e,n){var r=new c;r.onload=function(t){var n=new DataView(t.target.result);if(65496!=n.getUint16(0,!1))return e(-2);for(var r=n.byteLength,i=2;i<r;){if(n.getUint16(i+2,!1)<=8)return e(-1);var a=n.getUint16(i,!1);if(i+=2,65505==a){if(1165519206!=n.getUint32(i+=2,!1))return e(-1);var s=18761==n.getUint16(i+=6,!1);i+=n.getUint32(i+4,s);var o=n.getUint16(i,s);i+=2;for(var l=0;l<o;l++)if(274==n.getUint16(i+12*l,s))return e(n.getUint16(i+12*l+8,s))}else{if(65280!=(65280&a))break;i+=n.getUint16(i,!1)}}return e(-1)},r.onerror=function(t){return n(t)},r.readAsArrayBuffer(t)}))}function v(t,e){var n,r=t.width,i=t.height,a=e.maxWidthOrHeight,o=t;if(Number.isInteger(a)&&(r>a||i>a)){var l=s(y(r,i),2);o=l[0],n=l[1],r>i?(o.width=a,o.height=i/r*a):(o.width=r/i*a,o.height=a),n.drawImage(t,0,0,o.width,o.height)}return o}function b(t,e){var n=t.width,r=t.height,i=s(y(n,r),2),a=i[0],o=i[1];switch(4<e&&e<9?(a.width=r,a.height=n):(a.width=n,a.height=r),e){case 2:o.transform(-1,0,0,1,n,0);break;case 3:o.transform(-1,0,0,-1,n,r);break;case 4:o.transform(1,0,0,-1,0,r);break;case 5:o.transform(0,1,1,0,0,0);break;case 6:o.transform(0,1,-1,0,r,0);break;case 7:o.transform(0,-1,-1,0,r,n);break;case 8:o.transform(0,-1,1,0,0,n)}return o.drawImage(t,0,0,n,r),a}function y(t,e){var n,r;try{r=(n=new OffscreenCanvas(t,e)).getContext("2d")}catch(t){r=(n=document.createElement("canvas")).getContext("2d")}return n.width=t,n.height=e,[n,r]}function w(t,e){return new Promise((function(n,r){var i,a,o,l,c,u;return i=e.maxIteration||10,a=1024*e.maxSizeMB*1024,g(t).then(function(d){try{var h=s(d,2);return h[0],o=v(o=h[1],e),new Promise((function(n,r){var i;if(!(i=e.exifOrientation))return p(t).then(function(t){try{return i=t,a.call(this)}catch(t){return r(t)}}.bind(this),r);function a(){return n(i)}return a.call(this)})).then(function(d){try{return e.exifOrientation=d,o=b(o,e.exifOrientation),l=1,m(o,t.type,t.name,t.lastModified,l).then(function(e){try{var d,h=function e(){if(i--&&u.size>a){var n,c,d,h=s(y(n=.9*o.width,c=.9*o.height),2);return d=h[0],h[1].drawImage(o,0,0,n,c),"image/jpeg"===t.type&&(l*=.9),m(d,t.type,t.name,t.lastModified,l).then((function(t){try{return u=t,o=d,e}catch(t){return r(t)}}),r)}return[1]},f=function(){return n(u)};return(c=e).size<=a?n(c):(u=c,(d=function(t){for(;t;){if(t.then)return void t.then(d,r);try{if(t.pop){if(t.length)return t.pop()?f.call(this):t;t=h}else t=t.call(this)}catch(t){return r(t)}}}.bind(this))(h))}catch(t){return r(t)}}.bind(this),r)}catch(t){return r(t)}}.bind(this),r)}catch(t){return r(t)}}.bind(this),r)}))}var O,C=0,k=function(t){return new Worker(URL.createObjectURL(new Blob(["(".concat(t,")()")])))}((function(){var t=!1;self.addEventListener("message",(function(e){return new Promise((function(n,r){var i,a,s,o,l=e.data;i=l.file,a=l.id,s=l.imageCompressionLibUrl,o=l.options;var c=function(){try{return n()}catch(t){return r(t)}},u=function(t){try{return self.postMessage({error:t.message+"\n"+t.stack,id:a}),c()}catch(t){return r(t)}};try{var d;return t||(importScripts(s),t=!0),_(i,o).then((function(t){try{return d=t,self.postMessage({file:d,id:a}),c()}catch(t){return u(t)}}),u)}catch(t){u(t)}}))}))}));function x(t,e){return new Promise((function(n,r){return new Promise((function(i,a){O||(O=function(t){return URL.createObjectURL(new Blob([t],{type:"application/javascript"}))}("\n    function imageCompression (){return (".concat(_,").apply(null, arguments)}\n\n    imageCompression.getDataUrlFromFile = ").concat(_.getDataUrlFromFile,"\n    imageCompression.getFilefromDataUrl = ").concat(_.getFilefromDataUrl,"\n    imageCompression.loadImage = ").concat(_.loadImage,"\n    imageCompression.drawImageInCanvas = ").concat(_.drawImageInCanvas,"\n    imageCompression.drawFileInCanvas = ").concat(_.drawFileInCanvas,"\n    imageCompression.canvasToFile = ").concat(_.canvasToFile,"\n    imageCompression.getExifOrientation = ").concat(_.getExifOrientation,"\n    imageCompression.handleMaxWidthOrHeight = ").concat(_.handleMaxWidthOrHeight,"\n    imageCompression.followExifOrientation = ").concat(_.followExifOrientation,"\n\n    getDataUrlFromFile = imageCompression.getDataUrlFromFile\n    getFilefromDataUrl = imageCompression.getFilefromDataUrl\n    loadImage = imageCompression.loadImage\n    drawImageInCanvas = imageCompression.drawImageInCanvas\n    drawFileInCanvas = imageCompression.drawFileInCanvas\n    canvasToFile = imageCompression.canvasToFile\n    getExifOrientation = imageCompression.getExifOrientation\n    handleMaxWidthOrHeight = imageCompression.handleMaxWidthOrHeight\n    followExifOrientation = imageCompression.followExifOrientation\n\n    getNewCanvasAndCtx = ").concat(y,"\n    \n    CustomFileReader = FileReader\n    \n    CustomFile = File\n    \n    function _slicedToArray(arr, n) { return arr }\n\n    function compress (){return (").concat(w,").apply(null, arguments)}\n    ")));var s=C++;return k.addEventListener("message",(function t(e){e.data.id===s&&(k.removeEventListener("message",t),e.data.error&&r(new Error(e.data.error)),n(e.data.file))})),k.postMessage({file:t,id:s,imageCompressionLibUrl:O,options:e}),i()}))}))}function _(t,e){return new Promise((function(n,r){var i,a;if(e.maxSizeMB=e.maxSizeMB||Number.POSITIVE_INFINITY,e.useWebWorker="boolean"!=typeof e.useWebWorker||e.useWebWorker,!(t instanceof Blob||t instanceof l))return r(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(t.type))return r(new Error("The file given is not an image"));if(a="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,!e.useWebWorker||"function"!=typeof Worker||a)return w(t,e).then(function(t){try{return i=t,c.call(this)}catch(t){return r(t)}}.bind(this),r);var s=function(){try{return c.call(this)}catch(t){return r(t)}}.bind(this),o=function(n){try{return console.warn("Run compression in web worker failed:",n,", fall back to main thread"),w(t,e).then((function(t){try{return i=t,s()}catch(t){return r(t)}}),r)}catch(t){return r(t)}};try{return x(t,e).then((function(t){try{return i=t,s()}catch(t){return o(t)}}),o)}catch(t){o(t)}function c(){try{i.name=t.name,i.lastModified=t.lastModified}catch(t){}return n(i)}}))}_.getDataUrlFromFile=u,_.getFilefromDataUrl=d,_.loadImage=h,_.drawImageInCanvas=f,_.drawFileInCanvas=g,_.canvasToFile=m,_.getExifOrientation=p,_.handleMaxWidthOrHeight=v,_.followExifOrientation=b;var S=_,j=n("2b0e"),I={name:"ProfileImageSelector",props:{size:String,imagePreviewInitialValue:String},data:function(){return{showImg:!0,imagePreview:this.$store.getters["user/getGenderDefaultProfileImgByUserGender"],imageUpload:null,chooseYourProfileImageText:a["a"].TEXT_CHOOSE_YOUR_PROFILE_IMAGE,closeText:a["a"].TEXT_CLOSE,continueText:a["a"].TEXT_TO_CONTINUE,snackbar:!1,snackbarText:""}},methods:{previewFiles:function(){var t=this;if(this.$refs.myFiles.files.length>0){if(!this.$refs.myFiles.files[0].type.includes("image/"))return this.snackbarText=a["a"].ASK_FOR_IMAGE_SELECTION,void(this.snackbar=!0);var e=this.$refs.myFiles.files[0],n={maxSizeMB:.5,maxWidthOrHeight:500,useWebWorker:!0};S(e,n).then((function(e){if("function"===typeof FileReader){var n=new FileReader;n.onload=function(e){t.imgSrc=e.target.result,t.imagePreview=t.imgSrc,t.imageUpload=t.imagePreview.replace("data:image/jpeg;base64,","").replace("data:image/png;base64,",""),console.log(t.imagePreview),t.showImg=!1,j["a"].nextTick((function(){t.showImg=!0}))},n.readAsDataURL(e)}else t.snackbarText=a["a"].ERROR_API_FILEREADER_NOT_SUPPORTED,t.snackbar=!0})).catch((function(t){console.log(t.message)}))}else console.warn("Img error")}},watch:{imageUpload:function(t){console.log(this.imagePreviewInitialValue),this.$emit("newImageSelected",t)}},mounted:function(){this.imagePreviewInitialValue&&(this.imagePreview=this.imagePreviewInitialValue)}},B=I,P=n("2877"),T=n("6544"),E=n.n(T),$=n("8212"),F=n("8336"),z=n("a523"),U=n("132d"),L=n("2db4"),D=Object(P["a"])(B,r,i,!1,null,"2d62f66f",null);e["a"]=D.exports;E()(D,{VAvatar:$["a"],VBtn:F["a"],VContainer:z["a"],VIcon:U["a"],VSnackbar:L["a"]})}}]);
//# sourceMappingURL=chunk-118d6538.d5e695b1.js.map