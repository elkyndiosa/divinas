(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{238:function(e,t,n){"use strict";n.r(t);var o=n(7),r=n.n(o),s=(n(24),{components:{Videos:function(){return n.e(29).then(n.bind(null,246))},vueDropzone:r.a},data:function(){return{dropzoneOptions:{url:"/api/upload/video",thumbnailHeight:150,maxFilesize:1e4,headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').content},dictDefaultMessage:"Click para buscar un video o arrastre aqui"},galleryKey:0}},created:function(){},destroyed:function(){},computed:{},methods:{cleanFiles:function(){this.$refs.myVueDropzone.removeAllFiles()}}}),a=n(1),i=Object(a.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("h4",{staticClass:"text-h4"},[e._v("Mis Videos")]),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:e.dropzoneOptions},on:{"vdropzone-success":function(t){return e.cleanFiles()}}})],1),e._v(" "),n("transition",{attrs:{name:"slide-image",mode:"out-in"}},[n("videos",{attrs:{dash:"true",search:"allUser"}})],1)],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);