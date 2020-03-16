(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b9ff83f"],{a58d:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{width:"100%"},attrs:{align:"center"}},[n("v-app-bar",{attrs:{fixed:"",app:"",color:"#FFFFFF",elevation:"3"}},[n("v-row",[n("v-col",{staticClass:"text-center"},[n("v-toolbar-title",[t._v(t._s(t.eventsText))]),n("v-btn",{attrs:{color:"primary"},on:{click:t.getMessagingToken}},[n("p",[t._v("uwu2")])])],1)],1)],1),t.events.length>0?n("v-row",{staticStyle:{"margin-top":"60px"},attrs:{dense:""}},t._l(t.events,(function(e){return n("div",{key:e.id,staticStyle:{width:"100%"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400","min-width":"280"},on:{click:function(n){return t.openEventDescription(e.id)}}},[n("v-img",{staticClass:"white--text align-end",staticStyle:{position:"relative"},attrs:{height:"150px",src:e.headerImage}},[n("v-chip",{staticStyle:{display:"inline",float:"right","margin-right":"5px",bottom:"5px"},attrs:{color:"primary",small:""}},[n("p",{staticClass:"text-with-icon ma-1"},[n("v-icon",{staticStyle:{display:"inline","vertical-align":"top","font-size":"18px"}},[t._v("mdi-map-marker-outline")]),t._v(" "+t._s(e.distance)+" km")],1)])],1),n("v-card-text",{staticClass:"text--primary"},[n("div",{staticStyle:{display:"flex",position:"relative"}},[n("div",{staticStyle:{"margin-top":"10.5px"}},[n("strong",{staticStyle:{"font-size":"46px"}},[t._v(t._s(t.getDay(e.date)))])]),n("div",{staticStyle:{"margin-left":"5px"}},[n("div",[n("strong",[t._v(t._s(t.getMonth(e.date)))])]),n("div",[n("strong",[t._v(t._s(t.getYear(e.date)))])])]),n("div",{staticStyle:{"margin-left":"25px"}},[n("div",[n("strong",{staticStyle:{"font-size":"18px","margin-bottom":"0px"}},[t._v('"'+t._s(e.name)+'"')])]),n("div",[n("p",{staticClass:"text-with-icon"},[n("v-icon",{staticStyle:{display:"inline","vertical-align":"top","font-size":"18px"}},[t._v("mdi-store")]),t._v(" "+t._s(e.address))],1)])])]),n("v-spacer")],1)],1),n("br")],1)})),0):t._e(),0==t.events.length?n("v-row",[n("p",[t._v(t._s(t.problemRetrievingEventsText))])]):t._e(),n("v-row",[n("v-col",[n("v-container",[t.buttonIsDisabled?t._e():n("v-btn",{staticClass:"bottom-centered-buttons",attrs:{color:"primary",disabled:t.buttonIsDisabled},on:{click:function(e){return t.listEvents(!1)}}},[t._v("\n                    "+t._s(t.watchMoreButtonText)+"\n                ")])],1)],1)],1)],1)},a=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),o=n("bd86"),r=n("2f62"),c=n("4c51"),l=n("bc3a"),u=n.n(l),v=n("8aa5");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"EventsHome",data:function(){return{problemRetrievingEventsText:c["a"].TEXT_PROBLEM_GETTING_EVENTS,watchMoreButtonText:c["a"].TEXT_WATCH_MORE,buttonIsDisabled:!0,center:{lat:45.508,lng:-73.587},markers:[],places:[],currentPlace:null,eventsText:c["a"].TEXT_EVENTS}},methods:p({},Object(r["b"])(["listEventsEventsPageFirebase","isNextEventsEventsPageEmptyFirebase"]),{},Object(r["d"])(["setActiveEventID"]),{getMonth:function(t){return this.$store.getters.getFormattedMonthIn3CapitalLettersText(t.toDate())},getDay:function(t){return t.toDate().getDate()},getYear:function(t){return t.toDate().getFullYear()},setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.places.push(this.currentPlace),this.center=t,this.currentPlace=null}},openEventDescription:function(t){var e=this;e.setActiveEventID(t),this.$router.push("event/"+t)},listEvents:function(t){var e=this,n=this.listEventsEventsPageFirebase(t);n.then((function(){e.isNextEventsPageEmpty()})).catch((function(t){e.buttonIsDisabled=!0,e.snackbarText=t,e.snackbar=!0}))},isNextEventsPageEmpty:function(){var t=this,e=this.isNextEventsEventsPageEmptyFirebase();e.then((function(e){t.buttonIsDisabled=e})).catch((function(e){t.buttonIsDisabled=!0,t.snackbarText=e,t.snackbar=!0}))},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}}))},getMessagingToken:function(){var t=this;v["messaging"]().getToken().then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n){e.next=8;break}if(i=window.localStorage.getItem("messagingToken"),console.log("token will be updated",i!=n),i==n){e.next=6;break}return e.next=6,t.saveToken(n);case 6:e.next=10;break;case 8:console.log("No Instance ID token available. Request permission to generate one."),t.notificationsPermisionRequest();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log("An error occurred while retrieving token. ",t)}))},notificationsPermisionRequest:function(){var t=this;v["messaging"]().requestPermission().then((function(){t.getMessagingToken()})).catch((function(t){console.log("Unable to get permission to notify.",t)}))},listenTokenRefresh:function(){var t=window.localStorage.getItem("messagingToken");console.log("currentMessageToken",t),t&&v["messaging"]().onTokenRefresh((function(){v["messaging"]().getToken().then((function(t){this.saveToken(t)})).catch((function(t){console.log("Unable to retrieve refreshed token ",t)}))}))},saveToken:function(t){console.log("tokens",t),u.a.post("https://us-central1-tfg-vue-m3m.cloudfunctions.net/GeneralSubscription",{token:t}).then((function(e){window.localStorage.setItem("messagingToken",t),console.log(e)})).catch((function(t){console.log(t)}))}}),computed:p({},Object(r["e"])({events:function(t){return t.eventsInfo.events}})),mounted:function(){0==this.events.length?this.listEvents(!0):this.isNextEventsPageEmpty()}},d=f,h=(n("da29"),n("2877")),b=n("6544"),m=n.n(b),y=n("40dc"),x=n("8336"),k=n("b0af"),E=n("99d9"),w=n("cc20"),T=n("62ad"),_=n("a523"),P=n("132d"),O=n("adda"),S=n("0fd9"),D=n("2fa4"),I=n("2a7f"),j=Object(h["a"])(d,i,a,!1,null,"1609f216",null);e["default"]=j.exports;m()(j,{VAppBar:y["a"],VBtn:x["a"],VCard:k["a"],VCardText:E["b"],VChip:w["a"],VCol:T["a"],VContainer:_["a"],VIcon:P["a"],VImg:O["a"],VRow:S["a"],VSpacer:D["a"],VToolbarTitle:I["a"]})},da29:function(t,e,n){"use strict";var i=n("e003"),a=n.n(i);a.a},e003:function(t,e,n){}}]);
//# sourceMappingURL=chunk-5b9ff83f-legacy.c76f9e28.js.map