(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4cedb96"],{"0693":function(e,t,r){"use strict";var s=r("d746"),a=r.n(s);a.a},3408:function(e,t,r){},"615b":function(e,t,r){},8212:function(e,t,r){"use strict";r("8e6e"),r("ac6a"),r("456d");var s=r("ade3"),a=(r("c5f6"),r("3408"),r("a9ad")),n=r("24b2"),i=r("80d2"),c=r("58df");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=Object(c["a"])(a["a"],n["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48},tile:Boolean},computed:{classes:function(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,"v-avatar--tile":this.tile}},styles:function(){return l({height:Object(i["f"])(this.size),minWidth:Object(i["f"])(this.size),width:Object(i["f"])(this.size)},this.measurableStyles)}},render:function(e){var t={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return e("div",this.setBackgroundColor(this.color,t),this.$slots.default)}})},b0af:function(e,t,r){"use strict";r("8e6e"),r("ac6a"),r("456d");var s=r("ade3"),a=(r("c5f6"),r("615b"),r("10d2")),n=r("297c"),i=r("1c87"),c=r("58df");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=Object(c["a"])(n["a"],i["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return l(l({"v-card":!0},i["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},a["a"].options.computed.classes.call(this))},styles:function(){var e=l({},a["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=n["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,s=t.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},c649:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticStyle:{width:"100%"},attrs:{align:"center",fluid:""}},[r("v-app-bar",{staticClass:"app-bar-gradient-back",attrs:{fixed:"",app:"",color:"#FFFFFF",elevation:"3",dark:""}},[r("v-row",[r("v-col"),r("v-col",{staticClass:"text-center"},[r("v-toolbar-title",[e._v(e._s(e.usersText))])],1),r("v-col",{staticClass:"text-right",staticStyle:{"padding-top":"0","padding-bottom":"0"}},[r("v-btn",{staticClass:"app-bar-button white--text",staticStyle:{display:"inline"},attrs:{small:"",tile:"",text:""},on:{click:e.openSearchFilter}},[e._v(e._s(e.toFilterText)+" ")])],1)],1)],1),r("div",{staticStyle:{"margin-top":"64px"}}),r("v-row",{staticClass:"text-center",staticStyle:{height:"58px","padding-bottom":"0px"}},[r("v-col",{staticStyle:{"padding-right":"0px","padding-top":"4px"}},[r("v-text-field",{attrs:{rules:[e.rules.min5Char],label:e.searchLabel,solo:"",dense:"",clearable:"",rounded:""},model:{value:e.searchByUsernameField,callback:function(t){e.searchByUsernameField=t},expression:"searchByUsernameField"}})],1),r("v-col",{staticStyle:{"padding-left":"0px","padding-top":"4px","padding-right":"12px"},attrs:{cols:"auto"}},[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.usersListed,expression:"usersListed"}],staticClass:"mx-2",staticStyle:{"margin-right":"0px!important"},attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:e.listUsersByUsername}},[r("v-icon",{attrs:{dark:""}},[e._v("mdi-magnify")])],1),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.usersListed,expression:"!usersListed"}],staticClass:"mx-2",staticStyle:{"margin-right":"0px!important"},attrs:{fab:"",dark:"",small:"",color:"#D3D3D3"}},[r("v-icon",{attrs:{dark:""}},[e._v("mdi-magnify")])],1)],1)],1),e.filtersOn?r("v-row",{staticClass:"text-center"},[r("v-col",{staticClass:"pa-0",staticStyle:{"margin-bottom":"8px"}},[r("v-btn",{attrs:{rounded:"",color:"primary",dark:"",small:""},on:{click:e.resetSearchingFilters}},[r("v-icon",{attrs:{small:"",left:""}},[e._v("mdi-close-circle")]),e._v(" "+e._s(e.removeFiltersText)+" ")],1)],1)],1):e._e(),e.users.length>0?r("v-row",{staticClass:"text-center justify-center",staticStyle:{padding:"8px 2% 80px 2%"}},[e._l(e.users,(function(t){return r("div",{key:t.id,staticStyle:{"margin-bottom":"68px!important"}},[r("v-card",{staticClass:"text-center ma-1",staticStyle:{padding:"0px",width:"available","min-width":"105px","max-width":"150px",display:"inline-block",margin:"auto"}},[r("v-card",{staticStyle:{padding:"4px"},attrs:{elevation:"0"},on:{click:function(r){return e.openUserProfile(t.id)}}},[r("v-img",{staticClass:"white--text align-end",attrs:{"aspect-ratio":1,src:t.profileImg}}),r("div",[r("strong",{staticClass:"secondary--text",staticStyle:{"font-size":"11px"}},[e._v("@"+e._s(t.username))])])],1),r("v-card",{staticStyle:{padding:"0px",width:"100%",position:"absolute",left:"0px",top:"calc(100% + 6px)"}},[r("div",{staticClass:"scrolling-wrapper-flexbox",staticStyle:{width:"calc(100% - 8px)","margin-left":"4px"}},e._l(e.getLanguagesByUserID(t.id),(function(t){return r("div",{key:t,staticClass:"flag-card ma-1"},[r("v-avatar",{staticStyle:{height:"16px !important",width:"16px !important","min-width":"16px!important","z-index":"2"}},[r("img",{staticStyle:{"object-position":"center","object-fit":"cover"},attrs:{src:e.createPathToFlagImage(t),"aspect-ratio":1}})])],1)})),0)])],1)],1)})),r("v-col",{directives:[{name:"show",rawName:"v-show",value:0==e.users.length,expression:"users.length == 0"}]},[r("p",[e._v(e._s(e.messageNoUsersFit))])])],2):e._e(),r("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:e.fabScroll&&e.users.length>0,expression:"fabScroll && users.length > 0"}],staticStyle:{"z-index":"3",bottom:"80px"},attrs:{fab:"",dark:"",fixed:"",right:"",color:"primary"},on:{click:e.toTop}},[r("v-icon",[e._v("mdi-arrow-up")])],1),e.pageLoading?r("v-row",{staticClass:"text-center justify-center"},[r("v-progress-circular",{staticStyle:{"margin-bottom":"80px"},attrs:{indeterminate:"",color:"primary"}})],1):e._e(),0==e.users.length&&(e.filtersOn||null!=e.usernameFilter)&&e.usersListed?r("v-card",{staticClass:"pa-2 ma-1",staticStyle:{"padding-bottom":"24px!important",height:"calc(100vh - 260px)"}},[r("v-row",{staticClass:"text-center justify-center"},[r("p",{staticClass:"pa-4",staticStyle:{opacity:"0.6","padding-bottom":"0px!important"}},[e._v(e._s(e.noUsersText))])]),r("v-row",{staticClass:"text-center justify-center"},[r("img",{staticStyle:{opacity:"0.2",width:"12vh",height:"12vh","max-width":"150px","min-width":"65px","max-height":"150px","min-height":"65px"},attrs:{src:e.sadFaceImg}})])],1):e._e(),r("v-snackbar",{staticStyle:{bottom:"76px"},attrs:{timeout:4e3},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarText)+" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v(" "+e._s(e.closeText)+" ")])],1)],1)},a=[],n=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("1da1")),i=r("ade3"),c=r("4c51"),o=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={name:"SearchHome",data:function(){var e=this;return{buttonIsDisabled:!1,snackbar:!1,snackbarText:null,searchLabel:null,noUsersText:null,usersText:null,toFilterText:null,removeFiltersText:null,closeText:null,searchByUsernameField:null,searchButtonDisabled:!0,messageNoUsersFit:"",rules:{min5Char:function(t){return null==t||t.length>=c["a"].RULE_MIN_VALUE_CHARACTERS_USERNAME||0==t.length||e.$i18n.t("messages.RULE_TEXT_MIN_VALUE_CHARACTERS_USERNAME_TO_START_SEARCHING")}},filtersOn:!1,sadFaceImg:c["a"].IMG_EMOJI_SAD_FACE,usersListed:!1,pageLoading:!1,fabScroll:!1,ruleTextMinChar:null}},methods:u(u(u({},Object(o["b"])("users",["getSearchedUsers","resetSearchedUsers","resetFilters"])),Object(o["d"])("users",["setSearchByUsernameFilter"])),{},{onScroll:function(e){if("undefined"!==typeof window){var t=window.pageYOffset||e.target.scrollTop||0;this.fabScroll=t>20}},toTop:function(){this.$vuetify.goTo(0)},createPathToFlagImage:function(e){return"../img/flags/"+e+".svg"},getLanguagesByUserID:function(e){return this.$store.getters["users/getLanguagesByUserID"](e)},listUsers:function(){var e=this;e.buttonIsDisabled=!0,e.usersListed=!1;var t=e.getSearchedUsers();t.then((function(t){e.usersListed=!0,e.buttonIsDisabled=!t,e.pageLoading=!1})).catch((function(t){e.pageLoading=!1,e.snackbarText=t,e.snackbar=!0}))},listUsersByUsername:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,!(t.searchByUsernameField&&t.searchByUsernameField.length>=c["a"].RULE_MIN_VALUE_CHARACTERS_USERNAME)){e.next=19;break}return t.searchButtonDisabled=!0,s=r("1157"),t.usersListed=!1,e.next=7,t.resetSearchedUsers().then((function(){t.filtersOn=t.$store.getters["users/areThereFiltersOn"]})).catch((function(e){t.snackbarText=e,t.snackbar=!0}));case 7:t.setSearchByUsernameFilter(t.searchByUsernameField.toLowerCase()),a=!0,n=!0,t.buttonIsDisabled=!0;case 11:if(!(a||n&&s(document).height()<=s(window).height())){e.next=17;break}return a=!1,e.next=15,t.getSearchedUsers().then((function(e){n=e,t.usersListed=!0,t.pageLoading=!1})).catch((function(e){t.pageLoading=!1,t.snackbarText=e,t.snackbar=!0}));case 15:e.next=11;break;case 17:t.buttonIsDisabled=!n,t.usersListed=!0;case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),resetSearchingFilters:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,t.usersListed=!1,e.next=4,t.resetFilters().catch((function(e){t.snackbarText=e,t.snackbar=!0}));case 4:return this.searchByUsernameField=null,e.next=7,t.initUsers();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),openUserProfile:function(e){this.$router.push("search/user/"+e)},openSearchFilter:function(){this.searchByUsernameField=null,this.setSearchByUsernameFilter(this.searchByUsernameField),this.$router.push("search/filter")},initUsers:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,s=r("1157"),t.usersListed=!1,e.next=5,t.resetSearchedUsers().catch((function(e){t.snackbarText=e,t.snackbar=!0}));case 5:a=!0,n=!0,t.buttonIsDisabled=!0;case 8:if(!(a||n&&s(document).height()<=window.screen.height+80)){e.next=15;break}return a=!1,t.pageLoading=!0,e.next=13,t.getSearchedUsers().then((function(e){n=e,t.filtersOn=t.$store.getters["users/areThereFiltersOn"],t.pageLoading=!1})).catch((function(e){t.pageLoading=!1,t.snackbarText=e,t.snackbar=!0}));case 13:e.next=8;break;case 15:t.buttonIsDisabled=!n,t.usersListed=!0;case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}),created:function(){this.searchLabel=this.$i18n.t("messages.TEXT_SEARCH"),this.noUsersText=this.$i18n.t("messages.TEXT_NO_USERS_MATCH_SEARCH"),this.usersText=this.$i18n.t("messages.TEXT_USERS"),this.toFilterText=this.$i18n.t("messages.TEXT_TO_FILTER"),this.removeFiltersText=this.$i18n.t("messages.TEXT_REMOVE_FILTERS"),this.closeText=this.$i18n.t("messages.TEXT_CLOSE"),this.initUsers()},mounted:function(){var e=this,t=r("1157");t(window).scroll((function(){var r=t(document).height()-(t(window).scrollTop()+window.screen.height);!e.buttonIsDisabled&&r<1&&(e.pageLoading=!0,e.listUsers())}))},computed:u(u({},Object(o["c"])("users",{users:"getSearchedUsers"})),Object(o["c"])("users",{usernameFilter:"getSearchByUsernameFilter"})),watch:{searchByUsernameField:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""==t&&(this.searchByUsernameField=null),null!=t||t==this.$store.getters["users/getSearchByUsernameFilter"]){e.next=6;break}return e.next=4,this.resetFilters().catch((function(e){self.setSearchByUsernameFilter(null),self.snackbarText=e,self.snackbar=!0}));case 4:return e.next=6,this.initUsers();case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},h=d,p=(r("0693"),r("2877")),g=r("6544"),f=r.n(g),b=r("40dc"),m=r("8212"),v=r("8336"),x=r("b0af"),y=r("62ad"),w=r("a523"),O=r("132d"),S=r("adda"),k=r("490a"),T=r("0fd9"),_=r("2db4"),U=r("8654"),j=r("2a7f"),F=r("269a"),C=r.n(F),E=r("f977"),L=Object(p["a"])(h,s,a,!1,null,"f9b3e6f6",null);t["default"]=L.exports;f()(L,{VAppBar:b["a"],VAvatar:m["a"],VBtn:v["a"],VCard:x["a"],VCol:y["a"],VContainer:w["a"],VIcon:O["a"],VImg:S["a"],VProgressCircular:k["a"],VRow:T["a"],VSnackbar:_["a"],VTextField:U["a"],VToolbarTitle:j["a"]}),C()(L,{Scroll:E["b"]})},d746:function(e,t,r){}}]);
//# sourceMappingURL=chunk-f4cedb96.6afafa71.js.map