(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f6958ae"],{"16b7":function(t,e,n){"use strict";var s=n("2b0e");e["a"]=s["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const n=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),n)}}})},"1af6":function(t,e,n){var s=n("63b6");s(s.S,"Array",{isArray:n("9003")})},"20fd":function(t,e,n){"use strict";var s=n("d9f6"),i=n("aebd");t.exports=function(t,e,n){e in t?s.f(t,e,i(0,n)):t[e]=n}},"21be":function(t,e,n){"use strict";var s=n("2b0e"),i=n("80d2");e["a"]=s["a"].extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(i["q"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,n=[this.stackMinZIndex,Object(i["q"])(e)],s=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let a=0;a<s.length;a++)t.includes(s[a])||n.push(Object(i["q"])(s[a]));return Math.max(...n)}}})},"2bfd":function(t,e,n){},"2fa4":function(t,e,n){"use strict";n("20f6");var s=n("80d2");e["a"]=Object(s["h"])("spacer","div","v-spacer")},"4ad4":function(t,e,n){"use strict";var s=n("16b7"),i=n("f2e7"),a=n("58df"),r=n("80d2"),o=n("d9bd");const l=Object(a["a"])(s["a"],i["a"]);e["a"]=l.extend({name:"activatable",props:{activator:{default:null,validator:t=>{return["string","object"].includes(typeof t)}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave"],listeners:{}}),watch:{activator:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=Object(r["p"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(o["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=Object(r["o"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):t.click=t=>{const e=this.getActivator(t);e&&e.focus(),this.isActive=!this.isActive},t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const t=this.internalActivator?this.$el:document;e="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(t)e=t.currentTarget||t.target;else if(this.activatorNode.length){const t=this.activatorNode[0].componentInstance;e=t&&t.$options.mixins&&t.$options.mixins.some(t=>t.options&&["activatable","menuable"].includes(t.options.name))?t.getActivator():this.activatorNode[0].elm}return this.activatorElement=e,this.activatorElement},getContentSlot(){return Object(r["o"])(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"549b":function(t,e,n){"use strict";var s=n("d864"),i=n("63b6"),a=n("241e"),r=n("b0dc"),o=n("3702"),l=n("b447"),c=n("20fd"),h=n("7cd6");i(i.S+i.F*!n("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,u,d=a(t),g="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,f=void 0!==m,v=0,b=h(d);if(f&&(m=s(m,p>2?arguments[2]:void 0,2)),void 0==b||g==Array&&o(b))for(e=l(d.length),n=new g(e);e>v;v++)c(n,v,f?m(d[v],v):d[v]);else for(u=b.call(d),n=new g;!(i=u.next()).done;v++)c(n,v,f?r(u,m,[i.value,v],!0):i.value);return n.length=v,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},"68a4":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img-back",staticStyle:{position:"relative",height:"100%!important"}},[n("v-container",{staticClass:"login",staticStyle:{position:"relative",height:"100%","max-width":"550px"}},[n("v-row",[n("v-spacer"),n("v-card-title",{staticClass:"text-center justify-center pa-3 white--text"},[t._v("\n                "+t._s(t.yourLanguagesText)+"\n            ")]),n("v-spacer"),n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[n("img",{staticStyle:{width:"60px"},attrs:{src:"/LogoWeBabble.png"}})]),n("v-container",{staticClass:"pa-3",staticStyle:{"padding-top":"10px!important"}},[n("YourLanguagesSelector",{on:{dataValidityUpdate:function(e){return t.isDataValid(e)}}}),n("v-btn",{attrs:{block:"",color:"primary",disabled:t.buttonIsDisabled},on:{click:t.setUserLanguages}},[t._v("\n                            "+t._s(t.continueText)+"\n                        ")])],1)],1)],1)],1),n("v-snackbar",{attrs:{timeout:4e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n            "+t._s(t.snackbarText)+"\n            "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n                "+t._s(t.closeText)+"\n            ")])],1)],1)],1)},i=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("bd86")),r=n("9a99"),o=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={name:"FillYourLanguages",data:function(){return{buttonIsDisabled:!0,knownLanguages:null,languagesToLearn:null,yourLanguagesText:null,continueText:null,snackbarText:null,snackbar:!1,closeText:null}},methods:c({},Object(o["b"])("user",["setLanguages"]),{isDataValid:function(t){t.isValid?(this.languagesToLearn=t.languagesToLearn,this.knownLanguages=t.knownLanguages,this.buttonIsDisabled=!1):this.buttonIsDisabled=!0},setUserLanguages:function(){var t=this,e=this.setLanguages({knownLanguages:this.knownLanguages,languagesToLearn:this.languagesToLearn});e.then((function(){t.$router.replace("set-your-profile-image")})).catch((function(e){t.snackbarText=e,t.snackbar=!0}))}}),created:function(){this.closeText=this.$i18n.t("messages.TEXT_CLOSE"),this.yourLanguagesText=this.$i18n.t("messages.TEXT_YOUR_LANGUAGES"),this.continueText=this.$i18n.t("messages.TEXT_TO_CONTINUE")},components:{YourLanguagesSelector:r["a"]}},u=h,d=n("2877"),g=n("6544"),p=n.n(g),m=n("8336"),f=n("b0af"),v=n("99d9"),b=n("62ad"),_=n("a523"),y=n("0fd9"),x=n("2db4"),I=n("2fa4"),S=Object(d["a"])(u,s,i,!1,null,"5ac0fd8c",null);e["default"]=S.exports;p()(S,{VBtn:m["a"],VCard:f["a"],VCardTitle:v["c"],VCol:b["a"],VContainer:_["a"],VRow:y["a"],VSnackbar:x["a"],VSpacer:I["a"]})},"75eb":function(t,e,n){"use strict";var s=n("9d65"),i=n("80d2"),a=n("58df"),r=n("d9bd");function o(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]=Object(a["a"])(s["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:o},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},beforeMount(){this.$nextTick(()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)})}})},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)})}}catch(t){console.log(t)}},methods:{getScopeIdAttrs(){const t=Object(i["m"])(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):Object(r["c"])(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}})},"774e":function(t,e,n){t.exports=n("d2d5")},9003:function(t,e,n){var s=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==s(t)}},"95d5":function(t,e,n){var s=n("40c3"),i=n("5168")("iterator"),a=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||a.hasOwnProperty(s(e))}},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l}));var s=n("b0af"),i=n("80d2");const a=Object(i["h"])("v-card__actions"),r=Object(i["h"])("v-card__subtitle"),o=Object(i["h"])("v-card__text"),l=Object(i["h"])("v-card__title");s["a"]},"9a99":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h4",[t._v(t._s(t.knownLanguagesTitle))]),n("v-combobox",{attrs:{items:t.items_known_languages,chips:"",type:"button",clearable:"",label:t.knownLanguagesLabel,multiple:"",solo:""},scopedSlots:t._u([{key:"item",fn:function(e){e.index;var s=e.item;return[n("v-chip",{attrs:{color:"white",block:""}},[n("v-avatar",{attrs:{left:""}},[n("v-img",{attrs:{src:s.img}})],1),n("strong",[t._v(t._s(s.text))]),t._v(" \n            ")],1)]}},{key:"selection",fn:function(e){var s=e.attrs,i=e.item,a=e.select,r=e.selected;return[n("v-chip",t._b({attrs:{"input-value":r,close:"",color:"primary"},on:{click:a,"click:close":function(e){return t.remove_known_language(i)}}},"v-chip",s,!1),[n("v-avatar",{attrs:{left:""}},[n("v-img",{attrs:{src:i.img}})],1),n("strong",[t._v(t._s(i.text))]),t._v(" \n            ")],1)]}}]),model:{value:t.chips_known_languages,callback:function(e){t.chips_known_languages=e},expression:"chips_known_languages"}}),n("h4",[t._v(t._s(t.languagesToLearnTitle))]),n("v-combobox",{attrs:{items:t.items_languages_to_learn,chips:"",clearable:"",type:"button",label:t.languagesToLearnLabel,multiple:"",solo:""},scopedSlots:t._u([{key:"item",fn:function(e){e.index;var s=e.item;return[n("v-chip",{attrs:{color:"white",block:""}},[n("v-avatar",{attrs:{left:""}},[n("v-img",{attrs:{src:s.img}})],1),n("strong",[t._v(t._s(s.text))]),t._v(" \n            ")],1)]}},{key:"selection",fn:function(e){var s=e.attrs,i=e.item,a=e.select,r=e.selected;return[n("v-chip",t._b({attrs:{"input-value":r,close:"",color:"primary"},on:{click:a,"click:close":function(e){return t.remove_language_to_learn(i)}}},"v-chip",s,!1),[n("v-avatar",{attrs:{left:""}},[n("v-img",{attrs:{src:i.img}})],1),n("strong",[t._v(t._s(i.text))]),t._v(" \n            ")],1)]}}]),model:{value:t.chips_languages_to_learn,callback:function(e){t.chips_languages_to_learn=e},expression:"chips_languages_to_learn"}}),n("v-snackbar",{attrs:{timeout:4e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n            "+t._s(t.snackbarText)+"\n            "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n                "+t._s(t.closeText)+"\n            ")])],1)],1)},i=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("a745")),r=n.n(a);function o(t){if(r()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var l=n("774e"),c=n.n(l),h=n("c8bb"),u=n.n(h);function d(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return o(t)||d(t)||g()}var m=n("bd86"),f=n("2f62");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach((function(e){Object(m["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={name:"YourLanguagesSelector",props:{knownLanguagesInitialValue:Array,languagesToLearnInitialValue:Array},data:function(){return{snackbar:!1,snackbarText:"",chips_known_languages:[],chips_languages_to_learn:[],items_known_languages:this.$store.getters["user/getLanguageOptionsAsArray"].filter((function(t){return"all"!=t.id})),items_languages_to_learn:this.$store.getters["user/getLanguageOptionsAsArray"].filter((function(t){return"all"!=t.id})),languagesToLearnLabel:null,languagesToLearnTitle:null,knownLanguagesLabel:null,knownLanguagesTitle:null,closeText:null}},methods:b({},Object(f["b"])("user",["setLanguages"]),{remove_known_language:function(t){this.chips_known_languages.splice(this.chips_known_languages.indexOf(t),1),this.chips_known_languages=p(this.chips_known_languages)},remove_language_to_learn:function(t){this.chips_languages_to_learn.splice(this.chips_languages_to_learn.indexOf(t),1),this.chips_languages_to_learn=p(this.chips_languages_to_learn)},validLanguages:function(){var t;if(this.chips_known_languages.length>0&&this.chips_languages_to_learn.length>0){for(var e=[],n=[],s=0;s<this.chips_known_languages.length;s++)e.push(this.chips_known_languages[s].id);for(var i=0;i<this.chips_languages_to_learn.length;i++)n.push(this.chips_languages_to_learn[i].id);t={isValid:!0,knownLanguages:e,languagesToLearn:n}}else t={isValid:!1};this.$emit("dataValidityUpdate",t)},filter_items_known_languages:function(){var t=this;this.items_known_languages=this.$store.getters["user/getLanguageOptionsAsArray"].filter((function(t){return"all"!=t.id})).filter((function(e){for(var n=!0,s=0;s<t.chips_languages_to_learn.length;s++)if(t.chips_languages_to_learn[s].id==e.id){n=!1;break}if(n)return e}))},filter_items_languages_to_learn:function(){var t=this;this.items_languages_to_learn=this.$store.getters["user/getLanguageOptionsAsArray"].filter((function(t){return"all"!=t.id})).filter((function(e){for(var n=!0,s=0;s<t.chips_known_languages.length;s++)if(t.chips_known_languages[s].id==e.id){n=!1;break}if(n)return e}))}}),watch:{chips_known_languages:function(){this.validLanguages(),this.filter_items_languages_to_learn()},chips_languages_to_learn:function(){this.validLanguages(),this.filter_items_known_languages()}},created:function(){this.languagesToLearnLabel=this.$i18n.t("messages.TEXT_LANGUAGES_YOU_WANT_TO_IMPROVE"),this.languagesToLearnTitle=this.$i18n.t("messages.TEXT_LANGUAGES_YOU_WANT_TO_PRACTICE"),this.knownLanguagesLabel=this.$i18n.t("messages.TEXT_LANGUAGES_YOU_SPEAK_FLUENTLY"),this.knownLanguagesTitle=this.$i18n.t("messages.TEXT_MOTHER_LANGUAGES"),this.closeText=this.$i18n.t("messages.TEXT_CLOSE")},mounted:function(){if(this.knownLanguagesInitialValue&&this.knownLanguagesInitialValue.length>0)for(var t=0;t<this.knownLanguagesInitialValue.length;t++){var e=this.knownLanguagesInitialValue[t],n=b({id:e},this.$store.getters["user/getLanguageFromLanguageOptionsByID"](e));this.chips_known_languages.push(n)}if(this.languagesToLearnInitialValue&&this.languagesToLearnInitialValue.length>0)for(var s=0;s<this.languagesToLearnInitialValue.length;s++){var i=this.languagesToLearnInitialValue[s],a=b({id:i},this.$store.getters["user/getLanguageFromLanguageOptionsByID"](i));this.chips_languages_to_learn.push(a)}}},y=_,x=n("2877"),I=n("6544"),S=n.n(I),k=n("8212"),T=n("8336"),O=n("cc20"),w=(n("2bfd"),n("b974")),D=n("8654"),A=n("80d2");const L={...w["b"],offsetY:!0,offsetOverflow:!0,transition:!1};var E=w["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,n)=>{return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:w["a"].options.props.menuProps.type,default:()=>L},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...w["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>this.filter(t,String(this.internalSearch),String(this.getText(t))))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=w["a"].options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...L,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>{return this.valueComparator(this.getValue(t),this.getValue(this.internalValue))})},listData(){const t=w["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},methods:{onFilteredItemsChanged(t,e){t!==e&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){if(this.searchIsDirty||!this.multiple)return;if(![A["s"].backspace,A["s"].left,A["s"].right,A["s"].delete].includes(t))return;const e=this.selectedItems.length-1;if(t===A["s"].left)-1===this.selectedIndex?this.selectedIndex=e:this.selectedIndex--;else if(t===A["s"].right)this.selectedIndex>=e?this.selectedIndex=-1:this.selectedIndex++;else if(-1===this.selectedIndex)return void(this.selectedIndex=e);const n=this.selectedItems[this.selectedIndex];if([A["s"].backspace,A["s"].delete].includes(t)&&!this.getDisabled(n)){const t=this.selectedIndex===e?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===t?this.setValue(this.multiple?[]:void 0):this.selectItem(n),this.selectedIndex=t}},clearableCallback(){this.internalSearch=void 0,w["a"].options.methods.clearableCallback.call(this)},genInput(){const t=D["a"].options.methods.genInput.call(this);return t.data=t.data||{},t.data.attrs=t.data.attrs||{},t.data.attrs.autocomplete=t.data.attrs.autocomplete||"disabled",t.data.domProps=t.data.domProps||{},t.data.domProps.value=this.internalSearch,t},genInputSlot(){const t=w["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?w["a"].options.methods.genSelections.call(this):[]},onClick(){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;w["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){w["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(){this.activateMenu()},selectItem(t){w["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){w["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){if(-1===this.selectedIndex)return;const e=this.selectedItems[this.selectedIndex],n=this.getText(e);t.clipboardData.setData("text/plain",n),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}),V=E.extend({name:"v-combobox",props:{delimiters:{type:Array,default:()=>[]},returnObject:{type:Boolean,default:!0}},data:()=>({editingIndex:-1}),computed:{counterValue(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot(){return w["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed(){return!0},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged(t){if(t&&this.multiple&&this.delimiters.length){const e=this.delimiters.find(e=>t.endsWith(e));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput(){const t=E.options.methods.genInput.call(this);return t.data.on.paste=this.onPaste,t},genChipSelection(t,e){const n=w["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(n.componentOptions.listeners={...n.componentOptions.listeners,dblclick:()=>{this.editingIndex=e,this.internalSearch=this.getText(t),this.selectedIndex=-1}}),n},onChipInput(t){w["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown(t){t.preventDefault(),this.$nextTick(()=>{this.getMenuIndex()>-1||this.updateSelf()})},onFilteredItemsChanged(t,e){this.autoSelectFirst&&E.options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown(t){const e=t.keyCode;w["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===A["s"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===A["s"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();E.options.methods.onTabDown.call(this,t)},selectItem(t){this.editingIndex>-1?this.updateEditing():E.options.methods.selectItem.call(this,t)},setSelectedItems(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue(t){w["a"].options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing(){const t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox(){const t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf(){this.multiple?this.updateTags():this.updateCombobox()},updateTags(){const t=this.getMenuIndex();if(t<0&&!this.searchIsDirty)return;if(this.editingIndex>-1)return this.updateEditing();const e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){const t=this.internalValue.slice();t.splice(e,1),this.setValue(t)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null},onPaste(t){if(!this.multiple||this.searchIsDirty)return;const e=t.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");e&&-1===this.findExistingIndex(e)&&(t.preventDefault(),w["a"].options.methods.selectItem.call(this,e))}}}),$=n("a523"),C=n("adda"),j=n("2db4"),N=Object(x["a"])(y,s,i,!1,null,"479e002d",null);e["a"]=N.exports;S()(N,{VAvatar:k["a"],VBtn:T["a"],VChip:O["a"],VCombobox:V,VContainer:$["a"],VImg:C["a"],VSnackbar:j["a"]})},a293:function(t,e,n){"use strict";function s(){return!1}function i(t,e,n){n.args=n.args||{};const i=n.args.closeConditional||s;if(!t||!1===i(t))return;if("isTrusted"in t&&!t.isTrusted||"pointerType"in t&&!t.pointerType)return;const a=(n.args.include||(()=>[]))();a.push(e),!a.some(e=>e.contains(t.target))&&setTimeout(()=>{i(t)&&n.value&&n.value(t)},0)}const a={inserted(t,e){const n=n=>i(n,t,e),s=document.querySelector("[data-app]")||document.body;s.addEventListener("click",n,!0),t._clickOutside=n},unbind(t){if(!t._clickOutside)return;const e=document.querySelector("[data-app]")||document.body;e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}};e["a"]=a},a745:function(t,e,n){t.exports=n("f410")},b848:function(t,e,n){"use strict";var s=n("58df");function i(t){const e=[];for(let n=0;n<t.length;n++){const s=t[n];s.isActive&&s.isDependent?e.push(s):e.push(...i(s.$children))}return e}e["a"]=Object(s["a"])().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?i(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let n=0;n<e.length;n++)t.push(...e[n].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}})},bfc5:function(t,e,n){"use strict";var s=n("7560"),i=n("58df");e["a"]=Object(i["a"])(s["a"]).extend({name:"theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:s["a"].options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find(t=>!t.isComment&&" "!==t.text)}})},c8bb:function(t,e,n){t.exports=n("54a1")},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},e4d3:function(t,e,n){"use strict";var s=n("2b0e");e["a"]=s["a"].extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout(()=>{this.isActive=!1})}}})},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-9f6958ae.1df27a0e.js.map