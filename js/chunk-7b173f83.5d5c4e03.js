(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b173f83"],{2616:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0",staticStyle:{position:"relative",width:"100vw"},attrs:{align:"center"}},[t.isEventLoaded?a("div",[a("v-btn",{staticClass:"top-left-fixed-button",attrs:{text:"",icon:"",color:"#FFFFFF"},on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-row",{staticClass:"ma-0",staticStyle:{width:"100%"}},[t.headerImage?a("v-img",{staticClass:"white--text align-end",staticStyle:{overflow:"visible","margin-bottom":"26px",height:"150px","min-width":"100%"},attrs:{src:t.headerImage}},[a("v-chip",{staticClass:"centered-event-name",attrs:{color:"primary",block:"","x-large":""}},[a("strong",[t._v(t._s(t.name))]),t._v(" \n                ")])],1):t._e()],1),a("v-row",{staticClass:"ma-0",staticStyle:{height:"100%",padding:"24px 24px 10px 24px"}},[a("div",[a("p",{attrs:{align:"center"}},[t._v('"'+t._s(t.description)+'"')]),a("p",{attrs:{align:"center"}},[t._v(t._s(t.date))]),a("p",{staticClass:"text-with-icon",attrs:{align:"center"}},[a("v-icon",{staticStyle:{display:"inline","vertical-align":"top","font-size":"18px"}},[t._v("mdi-store")]),t._v("\n                    "+t._s(t.address)+"\n                ")],1),a("p",{staticClass:"text-with-icon",attrs:{align:"center"}},[a("v-icon",{staticStyle:{display:"inline","vertical-align":"top","font-size":"18px"}},[t._v("mdi-map-marker-outline\n                    ")]),t._v("\n                    "+t._s(t.distance)+" km\n                ")],1)])]),a("v-row",{staticClass:"ma-0",staticStyle:{width:"100%",height:"60%","margin-bottom":"64px !important"}},[t.location?a("gmap-map",{staticStyle:{width:"100%",height:"100%",position:"absolute"},attrs:{center:t.location,zoom:18}},[a("gmap-marker",{attrs:{position:t.location}})],1):t._e()],1)],1):t._e()])},i=[],s=(a("ac6a"),a("ade3")),r=a("2f62");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(a,!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={name:"EventDescription",data(){return{headerImage:null,location:null,name:"",description:"",date:null,address:"",distance:null,isEventLoaded:!1}},methods:c({},Object(r["b"])({getEventFirebase:"getEventFirebase"}),{setEventInfo(t){this.headerImage=t.headerImage,this.location={lat:t.coordinates.latitude,lng:t.coordinates.longitude},this.name=t.name,this.description=t.description,this.date=this.$store.getters.getFormattedDateInTextMonth(t.date.toDate()),this.address=t.address,this.distance=t.distance}}),computed:{},mounted(){let t=this,e=t.$route.params.id,a=t.$store.getters.getEvent(e);null==a?t.getEventFirebase(e).then((function(e){t.setEventInfo(e),t.isEventLoaded=!0})).catch((function(t){console.log(t)})):(t.setEventInfo(a),t.isEventLoaded=!0)}},d=l,p=(a("fda3"),a("2877")),v=a("6544"),g=a.n(v),h=a("8336"),m=a("cc20"),u=a("a523"),f=a("132d"),b=a("adda"),w=a("0fd9"),y=Object(p["a"])(d,n,i,!1,null,"a999e1d6",null);e["default"]=y.exports;g()(y,{VBtn:h["a"],VChip:m["a"],VContainer:u["a"],VIcon:f["a"],VImg:b["a"],VRow:w["a"]})},d7e1:function(t,e,a){},fda3:function(t,e,a){"use strict";var n=a("d7e1"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-7b173f83.5d5c4e03.js.map