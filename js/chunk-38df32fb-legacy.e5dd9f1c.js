(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38df32fb"],{"277e":function(t,e,r){"use strict";r("c5f6");var s=r("f977"),i=r("d9bd"),o=r("2b0e");e["a"]=o["a"].extend({name:"scrollable",directives:{Scroll:s["a"]},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(i["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}})},"2a7f":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var s=r("71d9"),i=r("80d2"),o=Object(i["h"])("v-toolbar__title"),n=Object(i["h"])("v-toolbar__items");s["a"]},"3a66":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var s=r("fe6c"),i=r("58df");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(i["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,r=e.length;t<r;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"40dc":function(t,e,r){"use strict";r("8e6e"),r("ac6a"),r("456d"),r("c5f6"),r("d263");var s=r("bd86"),i=(r("8b0d"),r("71d9")),o=r("f977"),n=r("3a66"),a=r("277e"),c=r("2b0e"),l=c["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}}),h=r("f2e7"),p=r("80d2"),u=r("58df");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v=Object(u["a"])(i["a"],a["a"],l,h["a"],Object(n["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=v.extend({name:"v-app-bar",directives:{Scroll:o["b"]},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return a["a"].options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return f({},i["a"].options.computed.classes.call(this),{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return i["a"].options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,r=t,s=r-e,o=s/this.computedScrollThreshold,n=this.currentScroll*o;return Math.max(e,r-n)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,r=.00347;return Number((1.5-e*r).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=i["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:i["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return i["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return f({},i["a"].options.computed.styles.call(this),{fontSize:Object(p["e"])(this.computedFontSize,"rem"),marginTop:Object(p["e"])(this.computedMarginTop),transform:"translateY(".concat(Object(p["e"])(this.computedTransform),")"),left:Object(p["e"])(this.computedLeft),right:Object(p["e"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=i["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:this.currentThreshold<this.computedScrollThreshold||(this.hideOnScroll&&(this.isActive=this.isScrollingUp),this.savedScroll=this.currentScroll)}},render:function(t){var e=i["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"5e23":function(t,e,r){},"71d9":function(t,e,r){"use strict";r("8e6e"),r("ac6a"),r("456d");var s=r("768b"),i=r("bd86"),o=(r("c5f6"),r("5e23"),r("8dd9")),n=r("adda"),a=r("80d2"),c=r("d9bd");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=o["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return h({},o["a"].options.computed.classes.call(this),{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return h({},this.measurableStyles,{height:Object(a["e"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var r=Object(s["a"])(e,2),i=r[0],o=r[1];t.$attrs.hasOwnProperty(i)&&Object(c["a"])(i,o,t)}))},methods:{genBackground:function(){var t={height:Object(a["e"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(a["e"])(this.computedContentHeight)}},Object(a["o"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(a["e"])(this.extensionHeight)}},Object(a["o"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],r=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,r,e)}})},"8b0d":function(t,e,r){},c6a4:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.chatID?r("v-container",{staticClass:"chat-screen",staticStyle:{"min-width":"305px !important"}},[r("v-app-bar",{attrs:{fixed:"",app:"",color:"#FFFFFF",elevation:"3"}},[r("v-row",[r("v-col",{staticClass:"text-left pa-0"},[r("v-btn",{attrs:{text:"",icon:"",color:"primary",tile:"",height:"100%",width:"80px"},on:{click:function(e){return t.$router.go(-1)}}},[r("v-icon",[t._v("mdi-arrow-left")]),t.userProfileImage?r("v-avatar",{staticStyle:{height:"50px"}},[r("img",{staticStyle:{"object-position":"center","object-fit":"cover"},attrs:{src:t.userProfileImage,alt:"Avatar","aspect-ratio":1}})]):t._e()],1)],1),r("v-col",{staticClass:"text-center"},[r("v-btn",{staticStyle:{display:"inline",top:"50%","-ms-transform":"translateY(-50%)",transform:"translateY(-50%)"},attrs:{tile:"",text:"",color:"primary"},on:{click:function(e){return t.$router.push({path:"/dashboard/chats/user/"+t.userID})}}},[r("v-toolbar-title",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.username))])],1)],1),r("v-col",{staticClass:"text-right",staticStyle:{"padding-top":"0","padding-bottom":"0"}})],1)],1),r("div",{staticClass:"conversation"},[r("div",{staticClass:"conversation-container"},t._l(t.messages,(function(e){return r("div",{key:e.id,class:{"message sent":t.myUID==e.sender,"message received":t.myUID!=e.sender},on:{change:t.setMessagesToRead}},[t._v("\n                "+t._s(e.text)+"\n                "),r("span",{staticClass:"metadata"},[r("span",{staticClass:"time"}),r("span",{staticClass:"tick"},[t.myUID==e.sender?r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"15",id:"msg-dblcheck-ack",x:"2063",y:"2076"}},[r("path",{attrs:{d:"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z",fill:[!0===e.read?"#006400":"#a9a9a9"]}})]):t._e()])])])})),0),r("v-form",[r("div",{staticClass:"message-sender"},[r("v-text-field",{staticStyle:{"margin-right":"20px"},attrs:{solo:"",dense:"",rounded:""},model:{value:t.textMessageContent,callback:function(e){t.textMessageContent=e},expression:"textMessageContent"}}),r("v-btn",{attrs:{color:"primary",disabled:!t.textMessageContent},on:{click:t.sendMessage}},[r("v-icon",[t._v("mdi-send")])],1)],1)])],1),r("v-snackbar",{attrs:{timeout:4e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.snackbarText)+"\n        "),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n            "+t._s(t.closeText)+"\n        ")])],1)],1):t._e()},i=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("7514"),r("a481"),r("bd86")),n=r("2f62"),a=r("4c51");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={name:"ChatWithUser",data:function(){return{userProfileImage:null,textMessageContent:"",username:null,myUID:this.$store.getters.getUserInfoUID,snackbar:!1,snackbarText:"",myActiveChat:null,closeText:a["a"].TEXT_CLOSE,chatID:null,userID:null}},methods:l({},Object(n["b"])({closeChatWithUserFirebase:"closeChatWithUserFirebase",setChatWithUserMessagesToRead:"setChatWithUserMessagesToRead",sendChatMessageFirebase:"sendChatMessageFirebase",resetActiveChat:"resetActiveChat",prepareChatWithUser:"prepareChatWithUser"}),{},Object(n["d"])(["setChatsInfoActiveChat"]),{setMessagesToRead:function(){this.setChatWithUserMessagesToRead(this.chatID)},sendMessage:function(){var t=this,e=t.sendChatMessageFirebase({chatID:t.chatID,messageText:t.textMessageContent});e.then((function(){t.textMessageContent=""})).catch((function(e){t.snackbarText=e,t.snackbar=!0}))},prepareChatData:function(t){var e=this.$store.getters.getChatUserByChatID(t);this.userProfileImage=e.profileImage,this.username=e.username,this.userID=e.id,this.$store.commit("setChatsInfoActiveChat",t),this.setMessagesToRead()}}),mounted:function(){var t=this;if(t.chatID=this.$route.params.id,null==t.$store.getters.getChatWithUserByChatID(t.chatID)){var e=t.chatID.replace(this.$store.getters.getUserInfoUID,"");console.log(e);var r=t.prepareChatWithUser({chatID:t.chatID,userID:e});r.then((function(){t.prepareChatData(t.chatID)})).catch((function(e){t.snackbarText=e,t.snackbar=!0}))}else t.prepareChatData(t.chatID)},computed:l({},Object(n["e"])({chats:function(t){return t.chats}}),{messages:function(){var t=this,e=this.$store.state.chats.find((function(e){return e.id===t.chatID}));return null==e?null:e.messages}}),destroyed:function(){this.$store.commit("resetChatsInfoActiveChat")}},p=h,u=(r("eae4"),r("2877")),d=r("6544"),f=r.n(d),v=r("40dc"),m=r("8212"),b=r("8336"),g=r("62ad"),S=r("a523"),O=r("4bd4"),y=r("132d"),x=r("0fd9"),C=r("2db4"),j=r("8654"),w=r("2a7f"),T=Object(u["a"])(p,s,i,!1,null,"58ae6205",null);e["default"]=T.exports;f()(T,{VAppBar:v["a"],VAvatar:m["a"],VBtn:b["a"],VCol:g["a"],VContainer:S["a"],VForm:O["a"],VIcon:y["a"],VRow:x["a"],VSnackbar:C["a"],VTextField:j["a"],VToolbarTitle:w["a"]})},cba0:function(t,e,r){},eae4:function(t,e,r){"use strict";var s=r("cba0"),i=r.n(s);i.a},f977:function(t,e,r){"use strict";function s(t,e){var r=e.value,s=e.options||{passive:!0},i=e.arg?document.querySelector(e.arg):window;i&&(i.addEventListener("scroll",r,s),t._onScroll={callback:r,options:s,target:i})}function i(t){if(t._onScroll){var e=t._onScroll,r=e.callback,s=e.options,i=e.target;i.removeEventListener("scroll",r,s),delete t._onScroll}}r.d(e,"a",(function(){return o}));var o={inserted:s,unbind:i};e["b"]=o}}]);
//# sourceMappingURL=chunk-38df32fb-legacy.e5dd9f1c.js.map