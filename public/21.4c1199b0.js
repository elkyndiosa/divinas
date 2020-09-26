(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{279:function(e,t,s){"use strict";s.r(t);var r=s(2),a=s.n(r);function i(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r}function c(e,t,s,r,a,i,n){try{var c=e[i](n),l=c.value}catch(e){return void s(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function l(e){return function(){var t=this,s=arguments;return new Promise((function(r,a){var i=e.apply(t,s);function n(e){c(i,r,a,n,l,"next",e)}function l(e){c(i,r,a,n,l,"throw",e)}n(void 0)}))}}var o={name:"Feed",components:{FeedCard:function(){return Promise.all([s.e(0),s.e(2)]).then(s.bind(null,271))}},data:function(){return{layout:[1,2,2,2,2,3,3,3,3,3,3],publications:[],status:!1,searched:!1,scroller:{page:1,last_page:0,getting:!1,ready:!1},weekGirl:{busy:!1,data:{}},barrio:null,city:null,cities:{busy:!1,list:[]},servicesSelect:[],services:{busy:!1,list:[]},ageList:[{text:"Entre 18 y 25",value:"18-25"},{text:"Entre 26 y 35",value:"26-35"},{text:"Entre 36 y 45",value:"36-45"}],age:null,price:null,priceList:[{text:"Entre 10 y 30",value:"10-30"},{text:"Entre 30 y 70",value:"30-70"},{text:"Entre 70 y 100",value:"70-100"},{text:"Entre 100 y 120",value:"100-120"}],busy:!1}},computed:{noGet:function(){var e=this.scroller;return!(!e.getting&&!e.ready)},barrios:function(){var e=_.findIndex(this.cities.list,{id:this.city}),t=this.cities.list[e];return t?t.barrios:[]},isHome:function(){return"favorites"!=this.$router.history.current.name&&("home"==this.$router.history.current.name||void 0)},week:function(){var e={name:this.weekGirl.data.name,description:this.weekGirl.data.description,uuid:this.weekGirl.data.uuid};return this.weekGirl.data.imgages_path&&(e.image=JSON.parse(this.weekGirl.data.imgages_path)[0]),e}},created:function(){this.getPublications(),this.getWeek(),this.getCitiesList(),this.getServices()},methods:{getPublications:function(){var e=this;return l(a.a.mark((function t(){var s,r,n,c,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.scroller.getting=!0,s="/api/publication",t.next=4,e.getParams();case 4:return r=t.sent,t.prev=5,t.next=8,axios.get(s,{params:r});case 8:c=t.sent,l=c.data.list,(n=e.publications).push.apply(n,i(l.data)),e.scroller.last_page=l.last_page,e.scroller.page+=1,l.current_page>=l.last_page&&(e.scroller.ready=!0),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),console.log(t.t0);case 19:e.scroller.getting=!1,e.searched=!0;case 21:case"end":return t.stop()}}),t,null,[[5,16]])})))()},search:function(){var e=this;return l(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.searched=!1,e.scroller.ready=!0,e.publications=[],e.scroller.page=1,e.$vuetify.goTo(9999,10),e.$nextTick((function(){e.scroller.ready=!1}));case 6:case"end":return t.stop()}}),t)})))()},getWeek:function(){var e=this;return l(a.a.mark((function t(){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.weekGirl.busy=!0,"/api/get-week",t.prev=2,t.next=5,axios.get("/api/get-week");case 5:s=t.sent,e.weekGirl.data=s.data.week,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0.response.data);case 12:e.weekGirl.busy=!1;case 13:case"end":return t.stop()}}),t,null,[[2,9]])})))()},getCitiesList:function(){var e=this;return l(a.a.mark((function t(){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.cities.busy=!0,"/api/cities",t.prev=2,t.next=5,axios.get("/api/cities");case 5:s=t.sent,e.cities.list=s.data.cities,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:e.cities.busy=!1;case 13:case"end":return t.stop()}}),t,null,[[2,9]])})))()},getServices:function(){var e=this;return l(a.a.mark((function t(){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.services.busy=!0,"/api/services",t.prev=2,t.next=5,axios.get("/api/services");case 5:s=t.sent,e.services.list=s.data.services,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console;case 12:e.services.busy=!1;case 13:case"end":return t.stop()}}),t,null,[[2,9]])})))()},addFavorities:function(e){this.$emit("addFavorities",e)},getParams:function(){var e={page:this.scroller.page};return this.status&&(e.status=this.status),this.age&&(e.age=this.age),this.city&&(e.city=this.city),this.barrio&&(e.barrio=this.barrio),this.price&&(e.price=this.price),this.servicesSelect.length>0&&(e.services=_.join(this.servicesSelect,"-")),e},showWeek:function(){var e=this.week.uuid;this.$router.push("/publication/"+e)}},watch:{}},u=s(1),v=Object(u.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{id:"scroll-target"}},[s("v-row",{staticClass:"fill-height",attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[e._t("default")],2),e._v(" "),s("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[s("h4",{staticClass:"text-center text-h4 full-width",domProps:{textContent:e._s(e.isHome?"Las mejores prepagos de la ciudad":"Tus Favoritas")}})]),e._v(" "),e.isHome?s("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[s("v-form",{ref:"form_search",on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-select",{attrs:{items:e.cities.list,"item-text":"name","item-value":"id",label:"Ciudad",readonly:e.cities.busy,loading:e.cities.busy,outlined:"","hide-details":"",dense:""},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-select",{attrs:{items:e.barrios,"item-text":"name","item-value":"id",readonly:e.cities.busy,loading:e.cities.busy,"no-data-text":"No hay barrio para la ciudad seleccionada.",label:"Barrio","hide-details":"",outlined:"",dense:""},model:{value:e.barrio,callback:function(t){e.barrio=t},expression:"barrio"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-select",{attrs:{"hide-details":"",dense:"",outlined:"",label:"Edad",items:e.ageList},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-select",{attrs:{"hide-details":"",dense:"",outlined:"",label:"Precio",items:e.priceList},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"8"}},[s("v-select",{attrs:{"hide-details":"",outlined:"",chips:"",multiple:"",dense:"","item-text":"name","item-value":"id",label:"Servicios",items:e.services.list,loading:e.services.busy,readonly:e.services.busy},model:{value:e.servicesSelect,callback:function(t){e.servicesSelect=t},expression:"servicesSelect"}})],1),e._v(" "),s("v-col",{staticClass:"d-flex justify-center pa-0",attrs:{cols:"12"}},[s("v-checkbox",{attrs:{label:"Solo prefiles verificados"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1),e._v(" "),s("v-col",{staticClass:"pa-0 mb-8",attrs:{cols:"12"}},[s("v-toolbar",{attrs:{flat:"",color:"white"}},[s("v-spacer"),e._v(" "),s("v-btn",{staticClass:"px-16 py-4 mx-2 text-subtitle-2",attrs:{color:"primary",large:"",rounded:"",type:"submit",disabled:e.scroller.getting,loading:e.scroller.getting}},[e._v("\n                              Filtrar\n                          ")]),e._v(" "),s("v-btn",{staticClass:"px-16 py-4 mx-2 text-subtitle-2",attrs:{color:"primary",large:"",rounded:"",outlined:"",disabled:e.scroller.getting},on:{click:function(t){return e.$refs.form_search.reset()}}},[e._v("\n                              Limpiar\n                          ")]),e._v(" "),s("v-spacer")],1)],1)],1)],1)],1):e._e(),e._v(" "),e.isHome?s("v-col",{attrs:{cols:"12",md:"10"}},[s("v-toolbar",{attrs:{flat:"",dense:""}},[s("v-spacer"),e._v(" "),s("v-toolbar-title",{staticClass:"text-h4"},[e._v("\n                  Chica de la Semana\n              ")]),e._v(" "),s("v-spacer")],1),e._v(" "),e.weekGirl.busy?s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"image"}})],1)],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"article",height:"100"}})],1)],1)],1):s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-img",{staticClass:"grey lighten-2",attrs:{src:"/uploads/images/"+e.week.image,"aspect-ratio":"1",width:"500",height:"400"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[s("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[s("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!1,4034393411)})],1)],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",{staticClass:"text-h5"},[e._v("\n                          "+e._s(e.week.name)+"\n                      ")]),e._v(" "),s("v-card-text",[s("p",{staticClass:"black--text text-none text-justify text-body-1",staticStyle:{"line-height":"25px"}},[e._v("\n                              "+e._s(e.week.description)+"\n                          ")])]),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{color:"primary"},on:{click:e.showWeek}},[e._v("\n                              Ver\n                          ")])],1)],1)],1)],1),e._v(" "),s("v-divider",{staticClass:"my-4"})],1):e._e(),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.getPublications,expression:"getPublications"}],attrs:{id:"scroller","infinite-scroll-disabled":"noGet","infinite-scroll-distance":"100"}},[s("v-row",e._l(e.publications,(function(t,r){return s("feed-card",{key:r,attrs:{size:3,value:t},on:{addFavorities:e.addFavorities,reload:e.getPublications}})})),1),e._v(" "),!e.scroller.getting&&e.searched&&0==e.publications.length?s("v-row",{attrs:{justify:"center"}},[s("h4",{staticClass:"text-h4"},[e._v("\n                  No hay resultados\n              ")])]):e._e(),e._v(" "),e.scroller.getting?s("v-row",{staticClass:"mt-4",attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"8",sm:"6",md:"4"}},[s("v-progress-linear",{attrs:{color:"primary",indeterminate:""}})],1)],1):e._e()],1)])],1)],1)}),[],!1,null,null,null);t.default=v.exports}}]);