(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{16:function(t,i,e){var o=e(180);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(6)(o,n);o.locals&&(t.exports=o.locals)},179:function(t,i,e){"use strict";var o=e(16);e.n(o).a},180:function(t,i,e){(t.exports=e(5)(!1)).push([t.i,".icon-card{position:absolute;left:20px;bottom:20px}.icon-card i{font-size:100px!important}",""])},230:function(t,i,e){"use strict";e.r(i);var o={components:{FeedCard:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,239))},FormPublication:function(){return e.e(22).then(e.bind(null,240))}},data:function(){return{layout:[3,3,3,3,3,3,3,3,3,3,3],publicationForm:!1,page:1,publications:[],data:[{color:"#00cae3 ",title:"Vistas de perfil",subtitle:49,lastDate:"date",icon:"timeline",iconColor:"#f2f2f2"},{color:"#4caf50",title:"Clics en Whatsapp",subtitle:78,lastDate:"date",icon:"touch_app",iconColor:"#f2f2f2"},{color:"#e91e63",title:"Favorita",subtitle:8,lastDate:"date",icon:"favorite",iconColor:"#f2f2f2"}]}},created:function(){this.getPublication()},destroyed:function(){},computed:{pages:function(){return Math.ceil(this.articles.length/11)},paginatedArticles:function(){var t=11*(this.page-1),i=11*this.page;return this.articles.slice(t,i)}},methods:{getPublication:function(){var t=this,i="/api/publications/"+this.user.uuid;axios.get(i).then((function(i){t.publications=i.data;for(var e=0;e<t.publications.length;e++)t.publications[e].user=t.user;console.log(t.publications)})).catch((function(t){console.log(t.response.data)}))}},watch:{page:function(){window.scrollTo(0,0)}}},n=(e(179),e(1)),a=Object(n.a)(o,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mt-16 d-flex justify-center flex-wrap"},[i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"text-h4 text-center font-weight-bold"},[this._v("Mis Anuncios")])]),this._v(" "),i("v-col",{staticClass:"d-flex justify-center grey lighten-3 mb-6 mx-6",attrs:{cols:"12",color:"grey darken-1"}},[i("form-publication")],1),this._v(" "),this._l(this.publications,(function(t,e){return i("feed-card",{key:e,attrs:{size:3,value:t}})}))],2)}),[],!1,null,null,null);i.default=a.exports}}]);