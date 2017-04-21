webpackJsonp([2,0],[function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var s=n(51),r=a(s),i=n(135),o=a(i),u=n(75),c=a(u);new r.default({el:"#app",store:c.default,template:"<App/>",components:{App:o.default}})},,,,,,,function(t,e){},,,,,,,function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.FETCH_FINAL_DATA=e.FETCH_GAS_DATA=void 0;var s=n(72),r=a(s);e.FETCH_GAS_DATA=function(t){var e=t.commit;t.state;return r.default.get("http://localhost:8000/carAPI/gas").then(function(t){return e("SET_GAS",t)})},e.FETCH_FINAL_DATA=function(t){var e=t.commit,n=t.state;if(null===n.route||""===n.vehicle||null===n.gasPrice)return-1;for(var a=0,s=0;s<n.route.legs.length;s++)a+=parseFloat(n.route.legs[s].distance.text.split(" ")[0]);var r=a*(1/n.vehicle.car_comb_mpg)*n.gasPrice/n.passengers;e("SET_FINAL_VAL",r)}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(37),r=a(s),i=n(52),o=a(i);o.default.use(n(153)),e.default={get:function(t){return o.default.http.get(t).then(function(t){return r.default.resolve(t.body)}).catch(function(t){return r.default.reject(t)})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getCar=function(t){return t.vehicle},e.getRoute=function(t){return t.route},e.getEndDest=function(t){return null===t.route?null:t.route.legs.slice(-1)[0].end_address},e.getFinalValue=function(t){return t.finalCalc},e.getPassengers=function(t){return t.passengers},e.getGasPrice=function(t){return t.gasPrice}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SET_GAS=function(t,e){t.gas=e},e.SET_VEHICLE=function(t,e){t.vehicle=e},e.SET_ROUTE=function(t,e){t.route=e},e.SET_SRC=function(t,e){t.src=e},e.SET_GAS_PRICE=function(t,e){t.gasPrice=e},e.SET_PASSENGERS=function(t,e){t.passengers=e},e.SET_FINAL_VAL=function(t,e){t.finalCalc=e}},function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(51),i=s(r),o=n(154),u=s(o),c=n(73),l=a(c),d=n(71),f=a(d),p=n(74),_=a(p);i.default.use(u.default);var v={vehicle:null,route:null,src:null,gasPrice:null,passengers:1,finalCalc:null};e.default=new u.default.Store({state:v,mutations:_,getters:l,actions:f})},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(14),r=(a(s),n(11)),i=a(r),o=n(16),u=(a(o),n(7)),c=(a(u),n(13)),l=a(c),d=n(138),f=a(d),p=n(139),_=a(p),v=n(140),m=a(v),h=n(141),g=a(h),C=n(142),I=a(C),y=n(143),E=a(y),b=l.default,x=i.default;e.default={name:"app",data:function(){return{view:"state-0"}},components:{UIRow:b,UIColumn:x,state0:f.default,timeline:E.default,"state-0":{template:"<state0/>",components:{state0:f.default}},"state-1":{template:"<state1/>",components:{state1:_.default}},"state-2":{template:"<state2/>",components:{state2:m.default}},"state-3":{template:"<state3/>",components:{state3:g.default}},"state-4":{template:"<state4/>",components:{state4:I.default}}},methods:{changeView:function(t){this.view="state-"+(t+1).toString()},changeViewRight:function(){var t=parseInt(this.view.slice(-1));t<4&&(this.view="state-"+(t+1).toString())},changeViewLeft:function(){var t=parseInt(this.view.slice(-1));t>0&&(this.view="state-"+(t-1).toString())}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{data:Array,columns:Array},data:function(){var t={};return this.columns.forEach(function(e){t[e]=1}),{sortKey:"",sortOrders:t}},computed:{filteredData:function(){var t=this.sortKey,e=this.sortOrders[t]||1,n=this.data;return t&&(n=n.slice().sort(function(n,a){return n=n[t],a=a[t],(n===a?0:n>a?1:-1)*e})),n}},filters:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},methods:{sortBy:function(t){this.sortKey=t,this.sortOrders[t]=this.sortOrders[t]*-1},setF:function(t){this.$store.commit("SET_VEHICLE",this.data[t])}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(86),r=a(s),i=n(85),o=a(i),u=n(23),c=(a(u),n(22)),l=a(c),d=n(15),f=(a(d),n(12)),p=a(f),_=n(14),v=(a(_),n(11)),m=a(v),h=n(16),g=(a(h),n(7)),C=(a(g),n(13)),I=a(C),y=n(131),E=a(y),b=I.default,x=m.default,w=p.default,S=l.default;e.default={components:{UIRow:b,UIColumn:x,UIInput:w,UIButton:S},data:function(){return{data1:"",data2:"",mid:null,locations:[],route:null,directionsS:null,directionsD:null}},mounted:function(){var t=this;(0,E.default)({key:"AIzaSyDWqkSWcyfLuSqhWaVGVexdWmIQvDCQQAs"}).then(function(e){var n=new e.DirectionsService,a=new e.DirectionsRenderer;t.$set(t,"directionsS",n),t.$set(t,"directionsD",a);var s=new e.Map(document.getElementById("map"),{zoom:6,center:{lat:37.7749,lng:-122.4194}});t.directionsD.setMap(s)}).catch(function(t){console.error(t)})},methods:{submit_mid:function(){this.locations.push(this.mid),this.mid=""},remove_mid:function(t){this.locations.splice(t,1)},loadDirections:function(){var t=this;this.calculateAndDisplayRoute(this.directionsS,this.directionsD,function(e){t.$store.commit("SET_ROUTE",e)})},calculateAndDisplayRoute:function(){function t(t,n,a){return e.apply(this,arguments)}var e=(0,o.default)(r.default.mark(function t(e,n,a){var s,i,o,u,c;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(s=[],i=0;i<this.locations.length;i++)s.push({location:this.locations[i],stopover:!0});o=this.data1,u=this.data2,c={origin:o,destination:u,waypoints:s,optimizeWaypoints:!0,travelMode:"DRIVING"},e.route(c,function(t,e){if("OK"!==e)return window.alert("Directions request failed due to "+e),-1;n.setDirections(t);var s=t.routes[0];a(s);var r=document.getElementById("directions-panel");r.innerHTML="";for(var i=0;i<s.legs.length;i++){var o=i+1;r.innerHTML+="<b>Route Segment: "+o+"</b><br>",r.innerHTML+=s.legs[i].start_address+" to ",r.innerHTML+=s.legs[i].end_address+"<br>",r.innerHTML+=s.legs[i].distance.text+"<br><br>"}});case 6:case"end":return t.stop()}},t,this)}));return t}()}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(23),r=(a(s),n(22)),i=a(r),o=n(15),u=(a(o),n(12)),c=a(u),l=n(14),d=(a(l),n(11)),f=a(d),p=n(16),_=(a(p),n(7)),v=(a(_),n(13)),m=a(v),h=m.default,g=f.default,C=c.default,I=i.default;e.default={components:{UIRow:h,UIColumn:g,UIInput:C,UIButton:I}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(15),r=(a(s),n(7)),i=(a(r),n(12)),o=a(i),u=n(53),c=a(u),l=n(132),d=a(l),f=n(136),p=a(f),_=d.default,v=o.default;e.default={name:"state1",components:{demoGrid:p.default,UIInput:v},data:function(){return{car_year:"",car_make:"",car_model:"",cars:[],gridColumns:["car_model","car_cylinder","car_drive","fuel"]}},watch:{car_model:function(){this.car_year.length>3&&this.car_make.length&&0===this.car_model.length&&this.lookupnewCar(),this.car_make.length||this.car_model.length?this.lookupnewCar():this.clearCar()}},methods:{lookupnewCar:_.debounce(function(){var t=this;c.default.get("http://127.0.0.1:8000/carAPI/cars/?car_make="+this.car_make+"&car_year="+this.car_year+"&car_model="+this.car_model).then(function(e){t.$set(t,"cars",e.data)}).catch(function(t){t&&console.log(t)})},500),clearCar:function(){this.$set(this,"cars",[])}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(137),r=a(s);e.default={components:{maps:r.default}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(23),r=(a(s),n(22)),i=a(r),o=n(15),u=(a(o),n(12)),c=a(u),l=n(14),d=(a(l),n(11)),f=a(d),p=n(16),_=(a(p),n(7)),v=(a(_),n(13)),m=a(v),h=m.default,g=f.default,C=c.default,I=i.default;e.default={components:{UIRow:h,UIColumn:g,UIInput:C,UIButton:I},data:function(){return{gasPrice:null,passengers:null}},watch:{gasPrice:function(){this.$store.commit("SET_GAS_PRICE",this.gasPrice),this.$store.dispatch("FETCH_FINAL_DATA")},passengers:function(){this.$store.commit("SET_PASSENGERS",this.passengers)}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(23),r=(a(s),n(22)),i=a(r),o=n(15),u=(a(o),n(12)),c=a(u),l=n(14),d=(a(l),n(11)),f=a(d),p=n(16),_=(a(p),n(7)),v=(a(_),n(13)),m=a(v),h=m.default,g=f.default,C=c.default,I=i.default;e.default={components:{UIRow:h,UIColumn:g,UIInput:C,UIButton:I},computed:{stateGetter:function(){var t=this.$store.getters.getFinalValue;return null!==t?this.$store.getters.getFinalValue.toFixed(2):null},passengerGetter:function(){return this.$store.getters.getPassengers}},mounted:function(){this.$store.dispatch("FETCH_FINAL_DATA")}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{values:{Car:!1,Location:!1,Gas:!1,Trip:!1},last:["1","Destination","3","Split"]}},methods:{updateStyle:function(t){return this.bool[t]===!0}},computed:{returnVehicle:function(){var t=this.$store.getters.getCar;if(null!=t){var e="";return e+=t.car_make,e+=" ",e+=t.car_model,this.$set(this.values,"Car",!0),e}return"Your Car"},returnTrip:function(){var t=this.$store.getters.getEndDest;return null!=t?(this.$set(this.values,"Location",!0),t.split(",")[0]):"Destination"},returnGas:function(){var t=this.$store.getters.getGasPrice;return null!=t?(this.$set(this.values,"Gas",!0),"$"+t):"$"}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e,n){n(123);var a=n(4)(n(76),n(145),null,null);t.exports=a.exports},function(t,e,n){n(125);var a=n(4)(n(77),n(147),"data-v-b36e0cf0",null);t.exports=a.exports},function(t,e,n){n(124);var a=n(4)(n(78),n(146),null,null);t.exports=a.exports},function(t,e,n){n(130);var a=n(4)(n(79),n(152),"data-v-d9712252",null);t.exports=a.exports},function(t,e,n){n(129);var a=n(4)(n(80),n(151),"data-v-d954f350",null);t.exports=a.exports},function(t,e,n){n(128);var a=n(4)(n(81),n(150),"data-v-d938c44e",null);t.exports=a.exports},function(t,e,n){n(127);var a=n(4)(n(82),n(149),"data-v-d91c954c",null);t.exports=a.exports},function(t,e,n){n(126);var a=n(4)(n(83),n(148),"data-v-d900664a",null);t.exports=a.exports},function(t,e,n){n(122);var a=n(4)(n(84),n(144),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hi"},[n("ul",{staticClass:"timeline",attrs:{id:"timelineID"}},t._l(t.values,function(e,a,s){return n("li",{staticClass:"li",class:{complete:e}},[n("div",{staticClass:"timestamp"},[n("span",{staticClass:"author"},[t._v(t._s(a))])]),t._v(" "),n("div",{staticClass:"status"},[0===s?n("h4",[t._v(" "+t._s(t.returnVehicle)+" ")]):1===s?n("h4",[t._v(" "+t._s(t.returnTrip)+" ")]):2===s?n("h4",[t._v(" "+t._s(t.returnGas)+" ")]):n("h4",[t._v(" "+t._s(t.last[s])+" ")])])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("UIRow",{staticClass:"mainRow"},[n("UIColumn",{attrs:{span:2}},[n("a",{staticClass:"navigation navigation-prev ",attrs:{"aria-label":"Previous page: State",value:"v-a",id:"a",name:"view"},on:{click:t.changeViewLeft}},[n("i",{staticClass:"fa fa-angle-left"})])]),t._v(" "),n("UIColumn",{attrs:{span:20}},[n("timeline"),t._v(" "),n("div",{staticClass:"Center-Block"},[n("transition",{attrs:{name:"component-fade",mode:"out-in"}},[n("keep-alive",[n(t.view,{tag:"component"})],1)],1)],1)],1),t._v(" "),n("UIColumn",{attrs:{span:2}},[n("a",{staticClass:"navigation navigation-next ",staticStyle:{"margin-right":"0px"},attrs:{"aria-label":"Next page: Mutations",value:"v-b",id:"b",name:"view"},on:{click:t.changeViewRight}},[n("i",{staticClass:"fa fa-angle-right"})])])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"map_section"}},[n("UIRow",{attrs:{gutter:20}},[n("UIColumn",{attrs:{span:10}},[n("div",{staticClass:"ui_inputs"},[n("UIInput",{staticClass:"form-control",attrs:{placeholder:"Please input"},model:{value:t.data1,callback:function(e){t.data1=e},expression:"data1"}}),t._v(" "),n("UIInput",{attrs:{placeholder:"Enter destinations in between:"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.submit_mid(e):null}},model:{value:t.mid,callback:function(e){t.mid=e},expression:"mid"}},[n("UIButton",{attrs:{icon:"search"},on:{click:t.submit_mid},slot:"append"})],1)],1),t._v(" "),n("UIColumn",t._l(t.locations,function(e,a){return n("div",{attrs:{id:"mid-list"}},[n("div",{staticClass:"legCity"},[t._v(t._s(e))]),t._v(" "),n("i",{staticClass:"fa fa-minus-square",attrs:{"aria-hidden":"true"},on:{click:function(e){t.remove_mid(a)}}})])})),t._v(" "),n("UIInput",{staticClass:"form-control",attrs:{placeholder:"End Destination:"},model:{value:t.data2,callback:function(e){t.data2=e},expression:"data2"}},[n("UIButton",{attrs:{icon:"search"},on:{click:t.loadDirections},slot:"append"})],1),t._v(" "),n("input",{attrs:{type:"submit",id:"submit"},on:{click:t.loadDirections}}),t._v(" "),n("div",{attrs:{id:"directions-panel"}})],1),t._v(" "),n("UIColumn",{attrs:{span:10}},[n("div",{attrs:{id:"map"}})])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",t._l(t.columns,function(e){return n("th",{class:{active:t.sortKey==e},on:{click:function(n){t.sortBy(e)}}},[t._v("\n        "+t._s(t._f("capitalize")(e))+"\n        "),n("span",{staticClass:"arrow",class:t.sortOrders[e]>0?"asc":"dsc"})])}))]),t._v(" "),n("tbody",t._l(t.filteredData,function(e,a){return n("tr",{on:{click:function(e){t.setF(a)}}},t._l(t.columns,function(a){return n("td",[t._v("\n        "+t._s(e[a])+"\n      ")])}))}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"state4"},[n("h1",[t._v(" Your trip has been Split!")]),t._v(" "),1==t.passengerGetter?n("h2",[t._v(" $"+t._s(t.stateGetter)+" for 1 passenger")]):n("h2",[t._v(" $"+t._s(t.stateGetter)+" for "+t._s(t.passengerGetter)+" passengers")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"state3"},[n("UIRow",{attrs:{span:24,id:"myRow"}},[n("UIColumn",{staticClass:"input3",attrs:{span:10,offset:1,id:"enterGas"}},[n("div",[t._v("How much did you pay for a gallon of gas?")]),t._v(" "),n("UIInput",{attrs:{type:"text",placeholder:"3.00"},model:{value:t.gasPrice,callback:function(e){t.gasPrice=e},expression:"gasPrice"}},[n("template",{slot:"prepend"},[t._v("$")])],2)],1),t._v(" "),n("UIColumn",{staticClass:"input3",attrs:{span:10,offset:1,id:"enterPassenger"}},[n("div",[t._v("How many passengers?")]),t._v(" "),n("UIInput",{attrs:{type:"text",placeholder:"1 passenger"},model:{value:t.passengers,callback:function(e){t.passengers=e},expression:"passengers"}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"state2"},[n("maps")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"state1"},[n("div",{staticClass:"inputs"},[n("UIInput",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Year:"},model:{value:t.car_year,callback:function(e){t.car_year=e},expression:"car_year"}}),t._v(" "),n("UIInput",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Make:"},model:{value:t.car_make,callback:function(e){t.car_make=e},expression:"car_make"}}),t._v(" "),n("UIInput",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Model:"},model:{value:t.car_model,callback:function(e){t.car_model=e},expression:"car_model"}})],1),t._v(" "),n("demo-grid",{attrs:{data:t.cars,columns:t.gridColumns}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"state0"},[n("h1",[t._v("Need your trip split?")]),t._v(" "),n("h3",[t._v("Click the arrow on the right to begin")])])}]}},,,,function(t,e){}]);
//# sourceMappingURL=app.668610457d9205be72a6.js.map