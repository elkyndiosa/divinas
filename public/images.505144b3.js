(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{231:function(e,t,n){"use strict";n.r(t);var r=n(159),a=n.n(r),o=(n(181),{components:{Gallery:function(){return n.e(6).then(n.bind(null,236))},vueDropzone:a.a},data:function(){return{dropzoneOptions:{url:"/api/upload/image",thumbnailHeight:150,maxFilesize:2,headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').content},dictDefaultMessage:"Click para buscar una imagen o arrastre aqui"},galleryKey:0}},created:function(){},destroyed:function(){},computed:{},methods:{cleanFiles:function(){this.$refs.myVueDropzone.removeAllFiles(),this.galleryKey+=1}}}),s=n(1),i=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-16 pt-16 d-flex justify-center flex-wrap"},[n("h4",{staticClass:"text-h4 text-center font-weight-bold"},[e._v("Mis Imagenes")]),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:e.dropzoneOptions},on:{"vdropzone-success":function(t){return e.cleanFiles()}}})],1),e._v(" "),n("transition",{attrs:{name:"slide-image",mode:"out-in"}},[n("gallery",{attrs:{dash:"true",userData:e.user,search:"allUser"}})],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);