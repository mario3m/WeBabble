(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2be9c6d8"],{"277e":function(t,e,i){"use strict";i("c5f6");var o=i("f977"),r=i("d9bd"),n=i("2b0e");e["a"]=n["a"].extend({name:"scrollable",directives:{Scroll:o["a"]},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(r["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}})},"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var o=i("71d9"),r=i("80d2"),n=Object(r["h"])("v-toolbar__title"),s=Object(r["h"])("v-toolbar__items");o["a"]},"35f2":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-app-bar",{attrs:{fixed:"",app:"",color:"#FFFFFF",elevation:"3"}},[i("v-row",[i("v-col",{staticClass:"text-center"},[i("v-toolbar-title",[t._v(t._s(t.chatsText))])],1)],1)],1),i("v-row",{staticClass:"text-center"},[i("v-toolbar-title",[t._v(t._s(t.eventsText))]),i("v-btn",{attrs:{color:"primary"},on:{click:t.getMessagingToken}},[i("p",[t._v("uwu2")])])],1),i("v-row",{staticStyle:{"margin-top":"54px"}},[i("v-col",{staticClass:"pa-0"},[i("v-list",{staticClass:"ma-0 pa-0",attrs:{"three-line":""}},[t._l(t.items,(function(e,o){return[e.header?i("v-subheader",{key:e.header,domProps:{textContent:t._s(e.header)}}):e.divider?i("v-divider",{key:o,attrs:{inset:e.inset}}):i("v-list-item",{key:e.title,on:{click:function(i){return t.openChatWithUser(e.ids)}}},[i("v-list-item-avatar",[i("v-img",{attrs:{src:e.avatar}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v("\n                                "+t._s(e.title)+"\n                                "),i("span",{directives:[{name:"show",rawName:"v-show",value:0!=e.notReadMessages,expression:"item.notReadMessages != 0"}],attrs:{id:"notReadMessagesNotification"}},[t._v(t._s(e.notReadMessages))])]),i("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]}))],2)],1)],1)],1)},r=[],n=(i("8e6e"),i("456d"),i("ac6a"),i("55dd"),i("96cf"),i("3b8d")),s=i("bd86"),a=i("2f62"),c=i("4c51"),l=i("d6b6");function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(i,!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var p={name:"ChatHome",data:function(){return{chatsText:c["a"].TEXT_CHATS}},methods:u({},Object(a["b"])(["prepareChatWithUser"]),{openChatWithUser:function(t){this.$router.push("chats/chat/"+t.chat)},getMessagingToken:function(){var t=this;l["messaging"]().getToken().then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(i){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i){e.next=8;break}if(o=window.localStorage.getItem("messagingToken"),console.log("token will be updated",o!=i),o==i){e.next=6;break}return e.next=6,t.saveToken(i);case 6:e.next=10;break;case 8:console.log("No Instance ID token available. Request permission to generate one."),t.notificationsPermisionRequest();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log("An error occurred while retrieving token. ",t)}))}}),computed:u({},Object(a["e"])({activeChat:function(t){return t.activeChat},chats:function(t){return t.chats}}),{},Object(a["c"])({notReadMessagesCount:"notReadMessagesCountByChatID"}),{items:function(){var t=this,e=this,i=[],o=e.chats.sort((function(t,e){return t.messages.length>0&&e.messages.length>0?e.messages[e.messages.length-1].created.toDate().getTime()-t.messages[t.messages.length-1].created.toDate().getTime():0}));return o.forEach((function(o){var r=t.$store.getters.getChatUserByChatID(o.id);o.messages.length>0&&(i.push({ids:{chat:o.id,user:r.id},avatar:r.profileImage,title:r.username,subtitle:o.messages[o.messages.length-1].text,notReadMessages:e.notReadMessagesCount(o.id)}),i.push({divider:!0,inset:!0}))})),i}})},d=p,f=(i("d319"),i("2877")),v=i("6544"),m=i.n(v),g=i("40dc"),b=i("8336"),S=i("62ad"),O=i("a523"),y=i("ce7e"),w=i("adda"),j=i("8860"),x=i("da13"),T=i("8270"),P=i("5d23"),C=i("0fd9"),k=i("e0c7"),B=i("2a7f"),_=Object(f["a"])(d,o,r,!1,null,"15f6e704",null);e["default"]=_.exports;m()(_,{VAppBar:g["a"],VBtn:b["a"],VCol:S["a"],VContainer:O["a"],VDivider:y["a"],VImg:w["a"],VList:j["a"],VListItem:x["a"],VListItemAvatar:T["a"],VListItemContent:P["a"],VListItemSubtitle:P["b"],VListItemTitle:P["c"],VRow:C["a"],VSubheader:k["a"],VToolbarTitle:B["a"]})},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var o=i("fe6c"),r=i("58df");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(r["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"40dc":function(t,e,i){"use strict";i("8e6e"),i("ac6a"),i("456d"),i("c5f6"),i("d263");var o=i("bd86"),r=(i("8b0d"),i("71d9")),n=i("f977"),s=i("3a66"),a=i("277e"),c=i("2b0e"),l=c["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}}),h=i("f2e7"),u=i("80d2"),p=i("58df");function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(i,!0).forEach((function(e){Object(o["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var v=Object(p["a"])(r["a"],a["a"],l,h["a"],Object(s["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=v.extend({name:"v-app-bar",directives:{Scroll:n["b"]},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return a["a"].options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return f({},r["a"].options.computed.classes.call(this),{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return r["a"].options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,i=t,o=i-e,n=o/this.computedScrollThreshold,s=this.currentScroll*n;return Math.max(e,i-s)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=r["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:r["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return r["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return f({},r["a"].options.computed.styles.call(this),{fontSize:Object(u["e"])(this.computedFontSize,"rem"),marginTop:Object(u["e"])(this.computedMarginTop),transform:"translateY(".concat(Object(u["e"])(this.computedTransform),")"),left:Object(u["e"])(this.computedLeft),right:Object(u["e"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=r["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:this.currentThreshold<this.computedScrollThreshold||(this.hideOnScroll&&(this.isActive=this.isScrollingUp),this.savedScroll=this.currentScroll)}},render:function(t){var e=r["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"568e":function(t,e,i){},"5e23":function(t,e,i){},"71d9":function(t,e,i){"use strict";i("8e6e"),i("ac6a"),i("456d");var o=i("768b"),r=i("bd86"),n=(i("c5f6"),i("5e23"),i("8dd9")),s=i("adda"),a=i("80d2"),c=i("d9bd");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(i,!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]=n["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return h({},n["a"].options.computed.classes.call(this),{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return h({},this.measurableStyles,{height:Object(a["e"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(o["a"])(e,2),r=i[0],n=i[1];t.$attrs.hasOwnProperty(r)&&Object(c["a"])(r,n,t)}))},methods:{genBackground:function(){var t={height:Object(a["e"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(s["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(a["e"])(this.computedContentHeight)}},Object(a["o"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(a["e"])(this.extensionHeight)}},Object(a["o"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},"8b0d":function(t,e,i){},d319:function(t,e,i){"use strict";var o=i("568e"),r=i.n(o);r.a},d6b6:function(t){t.exports=JSON.parse("{}")},f977:function(t,e,i){"use strict";function o(t,e){var i=e.value,o=e.options||{passive:!0},r=e.arg?document.querySelector(e.arg):window;r&&(r.addEventListener("scroll",i,o),t._onScroll={callback:i,options:o,target:r})}function r(t){if(t._onScroll){var e=t._onScroll,i=e.callback,o=e.options,r=e.target;r.removeEventListener("scroll",i,o),delete t._onScroll}}i.d(e,"a",(function(){return n}));var n={inserted:o,unbind:r};e["b"]=n}}]);
//# sourceMappingURL=chunk-2be9c6d8-legacy.c50aedf7.js.map