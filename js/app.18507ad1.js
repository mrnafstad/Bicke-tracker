(function(t){function e(e){for(var o,r,l=e[0],s=e[1],c=e[2],f=0,p=[];f<l.length;f++)r=l[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="Bike-tracker/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"dark",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),t._v(" Citybike-tracker "),n("v-spacer"),n("v-btn",{on:{click:t.toggleAppInfo}},[t._v("Info")])],1),n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-item-group",[n("v-list-item",[n("v-switch",{attrs:{label:"Show empty stations",ligth:""},on:{click:t.toggleDisplay}})],1),n("v-list-item",[n("v-switch",{attrs:{label:"Hide full stations",light:""},on:{click:t.toggleFull}})],1)],1)],1)],1),n("v-main",{staticClass:"text-center"},[n("GoogleMap")],1)],1)},i=[],r=n("5530"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-overlay",{attrs:{value:t.showAppInfo}},[n("v-card",{attrs:{raised:"",light:""}},[n("v-list",[n("v-list-item",[t._v(" This is a simple tracking app for Oslo city bikes ")]),n("v-list-item",[t._v("Stationdata is updated every minute")]),n("v-list-item",[t._v("Toggle filters in the menu to the right")])],1),n("v-card-actions",[n("v-btn",{attrs:{icon:""},on:{click:t.toggleAppInfo}},[n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1),n("v-overlay",{attrs:{value:t.showStationInfo}},[n("v-card",{attrs:{raised:"",light:""}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.currentInfo.name))]),n("v-list-item-subtitle",[t._v(" Ledig: "+t._s(t.currentInfo.available)+"/"+t._s(t.currentInfo.capacity)+" ")]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:t.toggleStationInfo}},[n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)],1),n("v-overlay",{attrs:{value:t.user.show}},[n("v-card",{attrs:{raised:"",light:""}},[n("v-list-item",[n("v-list-item-title",[t._v(t._s(t.user.info))]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.user.show=!t.user.show}}},[n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1),n("gmap-map",{staticStyle:{width:"100%",height:"90vh"},attrs:{center:t.center,zoom:12}},[t._l(t.stationsFiltered,(function(e,o){return n("gmap-marker",{key:o,attrs:{position:e.pos,clickable:!0},on:{click:function(n){return t.toggleStation(e)}}})})),n("gmap-marker",{attrs:{position:t.center,clickable:!0},on:{click:function(e){t.user.show=!t.user.show}}})],2)],1)},s=[],c=(n("b0c0"),n("96cf"),n("1da1")),u=n("2f62"),f={name:"GoogleMap",data:function(){return{center:{lat:45.508,lng:-73.587},currentPlace:null,showInfo:!0,currentInfo:{name:"no name",capacity:"no data"},user:{show:!1,info:"Users position"}}},mounted:function(){this.geolocate()},methods:Object(r["a"])(Object(r["a"])({},Object(u["b"])(["getStations","getStationData","toggleAppInfo","toggleStationInfo"])),{},{setPlace:function(t){this.currentPlace=t},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}}))},toggleStation:function(t){this.toggleStationInfo(),this.currentInfo={name:t.name,capacity:t.capacity,available:t.available,docksFree:t.docksAvailable}}}),computed:Object(r["a"])({},Object(u["c"])(["stationsFiltered","showAppInfo","showStationInfo","showUnavailable","showFull"])),created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getStations();case 2:return e.next=4,t.getStationData();case 4:t.timer=setInterval(t.getStationData,60);case 5:case"end":return e.stop()}}),e)})))()}},p=f,v=n("2877"),g=n("6544"),d=n.n(g),h=n("8336"),b=n("b0af"),m=n("99d9"),w=n("a523"),y=n("132d"),k=n("8860"),I=n("da13"),S=n("5d23"),A=n("a797"),_=n("2fa4"),j=Object(v["a"])(p,l,s,!1,null,null,null),O=j.exports;d()(j,{VBtn:h["a"],VCard:b["a"],VCardActions:m["a"],VContainer:w["a"],VIcon:y["a"],VList:k["a"],VListItem:I["a"],VListItemContent:S["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VOverlay:A["a"],VSpacer:_["a"]});var V={name:"App",components:{GoogleMap:O},computed:Object(r["a"])({},Object(u["c"])(["showAppInfo"])),methods:Object(r["a"])({},Object(u["b"])(["toggleAppInfo","toggleDisplay","toggleFull"])),data:function(){return{drawer:!1}}},F=V,x=n("7496"),D=n("40dc"),L=n("5bc1"),P=n("1baa"),B=n("f6c4"),C=n("f774"),M=n("b73d"),E=Object(v["a"])(F,a,i,!1,null,null,null),R=E.exports;d()(E,{VApp:x["a"],VAppBar:D["a"],VAppBarNavIcon:L["a"],VBtn:h["a"],VList:k["a"],VListItem:I["a"],VListItemGroup:P["a"],VMain:B["a"],VNavigationDrawer:C["a"],VSpacer:_["a"],VSwitch:M["a"]});var T=n("9483");Object(T["a"])("".concat("Bike-tracker/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("4de4"),n("7db0"),n("4160"),n("d3b7"),n("159b");o["a"].use(u["a"]);var N=new u["a"].Store({state:{stations:[],showAppInfo:!0,showStationInfo:!1,onlyAvailable:!1,showFull:!1},mutations:{setStations:function(t,e){e.forEach((function(e){t.stations.push({station_id:e.station_id,name:e.name,pos:{lat:e.lat,lng:e.lon},capacity:e.capacity})}))},toggleAppInfo:function(t){return t.showAppInfo=!t.showAppInfo},toggleStationInfo:function(t){return t.showStationInfo=!t.showStationInfo},toggleDisplay:function(t){return t.onlyAvailable=!t.onlyAvailable},toggleFull:function(t){return t.showFull=!t.showFull}},actions:{getStations:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,fetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json").then((function(t){return t.json()})).then((function(t){n("setStations",t.data.stations)})).catch((function(t){return console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},getStationData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json").then((function(t){return t.json()})).then((function(e){e.data.stations.forEach((function(e){var n=t.state.stations.find((function(t){return t.station_id===e.station_id}));n.available=e.num_bikes_available,n.docksAvailable=e.num_docks_available}))}));case 2:case"end":return e.stop()}}),e)})))()},toggleAppInfo:function(t){var e=t.commit;e("toggleAppInfo")},toggleStationInfo:function(t){var e=t.commit;e("toggleStationInfo")},toggleDisplay:function(t){var e=t.commit;e("toggleDisplay")},toggleFull:function(t){var e=t.commit;e("toggleFull")}},modules:{},getters:{stationsFiltered:function(t){var e;return e=t.onlyAvailable||t.showFull?t.onlyAvailable&&!t.showfull?t.stations:!t.onlyAvailable&&t.showFull?t.stations.filter((function(t){return t.available<t.capacity&&t.available>0})):t.onlyAvailable&&t.showFull?t.stations.filter((function(t){return t.available<t.capacity})):t.stations:t.stations.filter((function(t){return t.available>0})),e.forEach((function(t){return console.log(t.name+": "+(t.available-t.capacity))})),e},showAppInfo:function(t){return t.showAppInfo},showStationInfo:function(t){return t.showStationInfo},showUnavailable:function(t){return t.onlyAvailable},showFull:function(t){return t.showFull}}}),G=n("f309");o["a"].use(G["a"]);var J=new G["a"]({}),U=n("755e");o["a"].use(U,{load:{key:"AIzaSyDLLnxJcAssbfaovhQyAcmt0cZsd95BbJg",libraries:"places"}}),o["a"].config.productionTip=!1,new o["a"]({store:N,vuetify:J,render:function(t){return t(R)}}).$mount("#app")}});
//# sourceMappingURL=app.18507ad1.js.map