(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{238:function(t,e,i){"use strict";i.r(e);var a={components:{},props:["type"],data:function(){return{images:[],imageSelect:""}},created:function(){this.getImages()},methods:{toggle:function(t){this.imageSelect=t},mainMethods:function(){switch(this.type){case"publication":this.selectImagePrimaryPublication();break;case"profile":this.saveImageProfile()}},getImages:function(){var t=this;axios.get("/api/images").then((function(e){t.images=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))},saveImageProfile:function(){var t=this,e="/api/profile/image/"+this.imageSelect;axios.get(e).then((function(e){t.updateImageProfile()})).catch((function(t){console.log(t)}))},selectImagePrimaryPublication:function(){this.$emit("selectImagePrimaryPublication",this.imageSelect)},updateImageProfile:function(){this.$emit("updateImageProfile",this.imageSelect)}}},s=i(1),c=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"full-width mt-3 m-auto d-flex justify-center flex-wrap"},[i("v-card",{staticClass:"d-flex justify-center flex-wrap",attrs:{elevation:"0",width:"100%"}},[i("v-col",{staticClass:"text-h6 text-center font-weight-bold",attrs:{cols:"12"}},[t._v("Seleccione una imagen de perfil")]),t._v(" "),t._l(t.images,(function(e,a){return i("v-col",{key:a,attrs:{cols:"6",sm:"4",md:"2"}},[i("v-card",{staticClass:"portrait",attrs:{img:"/uploads/images/"+e.path,height:"100"},on:{click:function(i){return t.toggle(e.path)}}},[i("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[i("v-scale-transition",[e.path==t.imageSelect?i("v-icon",{attrs:{color:"white",size:"48"},domProps:{textContent:t._s("check_circle_outline")}}):t._e()],1)],1)],1)],1)})),t._v(" "),i("v-col",{attrs:{cols:"12"}},[i("v-list",{attrs:{"two-line":""}},[i("v-list-item",{staticClass:"d-flex justify-center"},[i("v-list-item-action",[i("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.mainMethods()}}},[t._v("Guardar")])],1)],1)],1)],1)],2)],1)}),[],!1,null,null,null);e.default=c.exports}}]);