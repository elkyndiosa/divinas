(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{103:function(e,t,a){"use strict";a.r(t);var r=a(23),l={name:"Feed",components:{FeedCard:function(){return a.e(2).then(a.bind(null,99))}},data:function(){return{layout:[1,2,2,2,2,3,3,3,3,3,3],page:1,articles:r}},computed:{pages:function(){return Math.ceil(this.articles.length/11)},paginatedArticles:function(){var e=11*(this.page-1),t=11*this.page;return this.articles.slice(e,t)},isHome:function(){return"favorites"!=this.$router.history.current.name&&("home"==this.$router.history.current.name||void 0)}},created:function(){},watch:{page:function(){window.scrollTo(0,0)}}},s=a(0),o=Object(s.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[e._t("default")],2),e._v(" "),a("v-col",{staticClass:"d-flex justify-center"},[a("h4",{staticClass:"text-center text-h4 full-width",domProps:{textContent:e._s(e.isHome?"Las mejores prepagos de la ciudad":"Tus Favoritas")}})]),e._v(" "),e.isHome?a("v-row",{staticClass:"d-flex justify-center px-4 px-md-14"},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{"hide-details":"",dense:"",outlined:"",label:"Barrio"}})],1),e._v(" "),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{"hide-details":"",dense:"",outlined:"",label:"Edad"}})],1),e._v(" "),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{"hide-details":"",dense:"",outlined:"",label:"Servicios"}})],1),e._v(" "),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{"hide-details":"",dense:"",outlined:"",label:"Precio"}})],1),e._v(" "),a("v-col",{staticClass:"d-flex justify-center pa-0",attrs:{cols:"12"}},[a("v-checkbox",{attrs:{label:"Solo prefiles verificados"}})],1),e._v(" "),a("v-col",{staticClass:"d-flex pa-0 mb-8",attrs:{cols:"12"}},[a("v-btn",{staticClass:"text-capitalize px-16 py-4 ma-auto text-subtitle-2",attrs:{color:"primary",dark:"",large:"",rounded:""}},[e._v("Filtrar")])],1)],1):e._e(),e._v(" "),e._l(e.paginatedArticles,(function(t,r){return a("feed-card",{key:t.title,attrs:{size:e.layout[r],value:t}})}))],2)],1)}),[],!1,null,null,null);t.default=o.exports},23:function(e){e.exports=JSON.parse('[{"title":"Moroccan Days","author":"John L","category":"Travel","hero":"moroccandays.jpg"},{"title":"Swedish Fishing","author":"Rachel L","category":"Leisure","hero":"autumnclouds.jpg"},{"title":"Swedish s Fishing","author":"Rachel s","category":"Leisurea","hero":"autumncloudss.jpg"},{"title":"Paris in Spring","author":"John L","category":"Travel","hero":"christmas.jpg"},{"title":"Youthful Independence","author":"Rachel L","category":"Political","hero":"july4.jpg"},{"title":"Trial By Fire","author":"Anthony R","category":"Cooking","hero":"firepots.jpg"},{"title":"Water Ventures","author":"Rachel L","category":"Leisure","hero":"jellyfish.jpg"},{"title":"Mt. Zekial","author":"Rachel L","category":"Travel","hero":"mountaincabin.jpg"},{"title":"Cozumel Caves","author":"Rachel L","category":"Travel","hero":"lightcave.jpg"},{"title":"Amazing Ireland","author":"Rachel L","category":"Travel","hero":"greengrass.jpg"},{"title":"Cabin Fever","author":"Rachel L","category":"Travel","hero":"snowcabin.jpg"},{"title":"To the ancient ruins","author":"Rachel L","category":"Travel","hero":"ruins.jpg"},{"title":"New fashion trends","author":"Rachel L","category":"Travel","hero":"umbrella.jpg"},{"title":"Go on a vacation","author":"Rachel L","category":"Travel","hero":"adventurecave.jpg"}]')}}]);