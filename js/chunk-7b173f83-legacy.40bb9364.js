(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b173f83"],{2616:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0",staticStyle:{position:"relative",width:"100vw"},attrs:{align:"center"}},[t.isEventLoaded?n("div",[n("v-btn",{staticClass:"top-left-fixed-button",attrs:{text:"",icon:"",color:"#FFFFFF"},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-close")])],1),n("v-row",{staticClass:"ma-0",staticStyle:{width:"100%"}},[t.headerImage?n("v-img",{staticClass:"white--text align-end",staticStyle:{overflow:"visible","margin-bottom":"26px",height:"150px","min-width":"100%"},attrs:{src:t.headerImage}},[n("v-chip",{staticClass:"centered-event-name",attrs:{color:"primary",block:"","x-large":""}},[n("strong",[t._v(t._s(t.name))]),t._v(" \n                ")])],1):t._e()],1),n("v-row",{staticClass:"ma-0",staticStyle:{height:"100%",padding:"24px 24px 10px 24px"}},[n("div",[n("p",{attrs:{align:"center"}},[t._v('"'+t._s(t.description)+'"')]),n("p",{attrs:{align:"center"}},[t._v(t._s(t.date))]),n("p",{staticClass:"text-with-icon",attrs:{align:"center"}},[n("v-icon",{staticStyle:{display:"inline","vertical-align":"top","font-size":"18px"}},[t._v("mdi-store")]),t._v("\n                    "+t._s(t.address)+"\n                ")],1),n("p",{staticClass:"text-with-icon",attrs:{align:"center"}},[n("v-icon",{staticStyle:{display:"inline","vertical-align":"top","font-size":"18px"}},[t._v("mdi-map-marker-outline\n                    ")]),t._v("\n                    "+t._s(t.distance)+" km\n                ")],1)])]),n("v-row",{staticClass:"ma-0",staticStyle:{width:"100%",height:"60%","margin-bottom":"64px !important"}},[t.location?n("gmap-map",{staticStyle:{width:"100%",height:"100%",position:"absolute"},attrs:{center:t.location,zoom:18}},[n("gmap-marker",{attrs:{position:t.location}})],1):t._e()],1)],1):t._e()])},i=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("bd86")),r=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={name:"EventDescription",data:function(){return{headerImage:null,location:null,name:"",description:"",date:null,address:"",distance:null,isEventLoaded:!1}},methods:c({},Object(r["b"])({getEventFirebase:"getEventFirebase"}),{setEventInfo:function(t){this.headerImage=t.headerImage,this.location={lat:t.coordinates.latitude,lng:t.coordinates.longitude},this.name=t.name,this.description=t.description,this.date=this.$store.getters.getFormattedDateInTextMonth(t.date.toDate()),this.address=t.address,this.distance=t.distance}}),computed:{},mounted:function(){var t=this,e=t.$route.params.id,n=t.$store.getters.getEvent(e);null==n?t.getEventFirebase(e).then((function(e){t.setEventInfo(e),t.isEventLoaded=!0})).catch((function(t){console.log(t)})):(t.setEventInfo(n),t.isEventLoaded=!0)}},d=l,p=(n("fda3"),n("2877")),v=n("6544"),u=n.n(v),g=n("8336"),h=n("cc20"),m=n("a523"),f=n("132d"),b=n("adda"),w=n("0fd9"),y=Object(p["a"])(d,a,i,!1,null,"a999e1d6",null);e["default"]=y.exports;u()(y,{VBtn:g["a"],VChip:h["a"],VContainer:m["a"],VIcon:f["a"],VImg:b["a"],VRow:w["a"]})},d7e1:function(t,e,n){},fda3:function(t,e,n){"use strict";var a=n("d7e1"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-7b173f83-legacy.40bb9364.js.map