(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{266:function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),s=r(7),i=r.n(s);r(12);function a(e,t,r,n,o,s,i){try{var a=e[s](i),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(n,o)}var c={components:{vueDropzone:i.a,VideoPlayer:function(){return r.e(3).then(r.bind(null,273))}},data:function(){return{dropzoneOptions:{url:"/api/upload/video",thumbnailHeight:150,maxFilesize:1e4,headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').content},dictDefaultMessage:"Click para buscar un video o arrastre aqui"},list:[],busy:!1,showing:!1,selected:{}}},created:function(){this.getVideos()},watch:{},destroyed:function(){},computed:{player:function(){var e=this.$refs.video_player.player;return e}},methods:{cleanFiles:function(){this.$refs.myVueDropzone.removeAllFiles(),this.getVideos()},getVideos:function(){var e,t=this;return(e=o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.busy=!0,e.prev=2,e.next=5,axios.get("/api/user-videos");case 5:r=e.sent,t.list=r.data.list,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),ErrorHandler.render(e.t0);case 12:t.busy=!1;case 13:case"end":return e.stop()}}),e,null,[[2,9]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var s=e.apply(t,r);function i(e){a(s,n,o,i,c,"next",e)}function c(e){a(s,n,o,i,c,"throw",e)}i(void 0)}))})()},toPlay:function(e){var t=this;this.selected=e,this.$nextTick((function(){t.showing=!0}))}}},l=r(1),u=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},[r("h4",{staticClass:"text-h4"},[e._v("Mis Videos")]),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:e.dropzoneOptions},on:{"vdropzone-success":function(t){return e.cleanFiles()}}})],1)],1),e._v(" "),e.busy?r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-progress-linear",{attrs:{color:"primary",indeterminate:""}})],1)],1):r("v-row",{attrs:{justify:"center"}},e._l(e.list,(function(t,n){return r("v-col",{key:n,attrs:{cols:"6",sm:"4",md:"2"}},[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var o=n.hover;return[r("v-card",{staticClass:"portrait",staticStyle:{cursor:"pointer"},attrs:{height:"200"},on:{click:function(r){return e.toPlay(t)}}},[r("v-img",{attrs:{src:"/uploads/images/"+t.image_path+".png",height:"100%",width:"100%"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)}),e._v(" "),r("v-overlay",{attrs:{absolute:"",value:o}},[r("v-icon",{staticClass:"material-icons",attrs:{color:"primary",large:""}},[e._v("\r\n                                play_circle_outline\r\n                            ")])],1)],1)]}}],null,!0)})],1)})),1),e._v(" "),r("VideoPlayer",{attrs:{showing:e.showing,item:e.selected},on:{close:function(t){e.showing=!1}}})],1)}),[],!1,null,null,null);t.default=u.exports}}]);