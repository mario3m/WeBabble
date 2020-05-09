(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13a5e6b2"],{"10af":function(t,e,a){"use strict";var s=a("9dcc"),i=a.n(s);i.a},"9dcc":function(t,e,a){},cc6f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-app-bar",{staticClass:"app-bar-gradient-back",attrs:{fixed:"",app:"",color:"#FFFFFF",elevation:"3",dark:""}},[a("v-row",[a("v-col",{staticClass:"text-center"},[a("v-toolbar-title",[t._v(t._s(t.chatsText))])],1)],1)],1),a("div",{staticStyle:{"margin-top":"54px"}}),t.numberOfChats>0||t.searchByUsernameField?a("v-row",[a("v-col",{staticClass:"pa-0"},[a("v-list",{staticClass:"pa-3",staticStyle:{"padding-left":"0px!important","padding-right":"0px!important","padding-top":"6px!important"}},[a("v-text-field",{staticStyle:{padding:"10px","padding-bottom":"0px!important"},attrs:{label:t.searchLabel,solo:"",dense:"",clearable:"",rounded:""},on:{input:t.listChatsByUsername},model:{value:t.searchByUsernameField,callback:function(e){t.searchByUsernameField=e},expression:"searchByUsernameField"}})],1)],1)],1):t._e(),a("v-row",{staticStyle:{"margin-top":"-10px"}},[a("v-col",{staticClass:"pa-0"},[a("v-list",{staticClass:"ma-0 pa-0",attrs:{"three-line":""}},[a("v-divider"),t._l(t.items,(function(e,s){return[a("v-list-item",{key:e.title,on:{click:function(a){return t.openChatWithUser(e.ids)}}},[a("v-list-item-avatar",{attrs:{size:"50px"}},[a("v-img",{staticStyle:{border:"2px solid #00abba"},attrs:{src:e.avatar}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"secondary--text"},[t._v(" "+t._s(e.title)+" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0!=e.notReadMessages,expression:"item.notReadMessages != 0"}],attrs:{id:"notReadMessagesNotification"}},[t._v(t._s(e.notReadMessages))])]),a("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1),a("v-divider",{key:s})]}))],2)],1)],1),0!=t.numberOfChats||null!=t.searchByUsernameField&&""!=t.searchByUsernameField?t._e():a("v-card",{staticClass:"pa-2 ma-1",staticStyle:{"padding-bottom":"24px!important",height:"calc(100vh - 260px)","padding-top":"24px!important","margin-top":"30px!important"}},[a("v-row",{staticClass:"text-center justify-center"},[a("p",{staticClass:"pa-4",staticStyle:{opacity:"0.6","padding-bottom":"0px!important"}},[t._v(t._s(t.noChatsText))])]),a("v-row",{staticClass:"text-center justify-center"},[a("img",{staticStyle:{opacity:"0.2",width:"22.5%","max-width":"150px","min-width":"65px","max-height":"150px","min-height":"65px"},attrs:{src:t.sadFaceImg}})])],1),0==t.numberOfChats&&null!=t.searchByUsernameField&&""!=t.searchByUsernameField?a("v-card",{staticClass:"pa-2 ma-1",staticStyle:{"padding-bottom":"24px!important",height:"calc(100vh - 260px)","padding-top":"24px!important","margin-top":"20px!important"}},[a("v-row",{staticClass:"text-center justify-center"},[a("p",{staticClass:"pa-4",staticStyle:{opacity:"0.6","padding-bottom":"0px!important"}},[t._v(t._s(t.noChatsMatchText))])]),a("v-row",{staticClass:"text-center justify-center"},[a("img",{staticStyle:{opacity:"0.2",width:"22.5%","max-width":"150px","min-width":"65px","max-height":"150px","min-height":"65px"},attrs:{src:t.sadFaceImg}})])],1):t._e(),a("v-snackbar",{staticStyle:{bottom:"76px"},attrs:{timeout:4e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarText)+" "),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" "+t._s(t.closeText)+" ")])],1)],1)},i=[],n=(a("8e6e"),a("456d"),a("ac6a"),a("ade3")),r=a("2f62"),c=a("4c51");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={name:"ChatHome",data:function(){return{chatsText:null,searchByUsernameField:null,noChatsText:null,sadFaceImg:null,searchLabel:null,snackbarText:null,snackbar:!1,closeText:null,noChatsMatchText:null}},methods:{openChatWithUser:function(t){this.$router.push("chats/chat/"+t.chat)},listChatsByUsername:function(){null!=this.searchByUsernameField&&void 0!=this.searchByUsernameField&&""!=this.searchByUsernameField?this.$store.commit("chats/setUsernameFilter",this.searchByUsernameField):this.$store.commit("chats/setUsernameFilter",null)}},created:function(){this.noChatsText=this.$i18n.t("messages.TEXT_NO_CHATS_AVAILABLE"),this.searchLabel=this.$i18n.t("messages.TEXT_SEARCH"),this.noChatsText=this.$i18n.t("messages.TEXT_NO_CHATS_AVAILABLE"),this.chatsText=this.$i18n.t("messages.TEXT_CHATS"),this.closeText=this.$i18n.t("messages.TEXT_CLOSE"),this.noChatsMatchText=this.$i18n.t("messages.TEXT_NO_CHATS_MATCH_SEARCH"),this.sadFaceImg=c["a"].IMG_EMOJI_SAD_FACE},computed:l(l({},Object(r["c"])("chats",["getChatsToShow","getNotReadMessagesCountByChatID","getUserByChatID"])),{},{items:function(){var t=this,e=[];return t.getChatsToShow.forEach((function(a){var s=t.getUserByChatID(a.id);e.push({ids:{chat:a.id,user:s.id},avatar:s.profileImg,title:s.username,subtitle:a.lastMessage.text,notReadMessages:t.getNotReadMessagesCountByChatID(a.id)})})),e},numberOfChats:function(){return this.items.length}})},h=p,d=(a("10af"),a("2877")),m=a("6544"),u=a.n(m),b=a("40dc"),v=a("8336"),x=a("b0af"),g=a("62ad"),y=a("a523"),f=a("ce7e"),C=a("adda"),T=a("8860"),_=a("da13"),w=a("8270"),O=a("5d23"),F=a("0fd9"),S=a("2db4"),B=a("8654"),k=a("2a7f"),U=Object(d["a"])(h,s,i,!1,null,"67fbbdc0",null);e["default"]=U.exports;u()(U,{VAppBar:b["a"],VBtn:v["a"],VCard:x["a"],VCol:g["a"],VContainer:y["a"],VDivider:f["a"],VImg:C["a"],VList:T["a"],VListItem:_["a"],VListItemAvatar:w["a"],VListItemContent:O["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VRow:F["a"],VSnackbar:S["a"],VTextField:B["a"],VToolbarTitle:k["a"]})}}]);
//# sourceMappingURL=chunk-13a5e6b2.07fede6f.js.map