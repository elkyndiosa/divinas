(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{272:function(t,e,n){"use strict";n.r(e);var a={components:{},props:["userDataTable","times"],data:function(){return{}},computed:{},methods:{getHour:function(t){var e="",n=parseInt(t.substring(0,3));return n>12?(n-=12,e="PM"):0==n?(n=12,e="AM"):e="AM",n+t.substring(2,5)+" "+e}},mounted:function(){var t=this;setTimeout((function(){console.log(t.userDataTable)}),2e3)}},s=n(1),_=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-simple-table",{staticStyle:{width:"100%"},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Informacion Detallada")]),t._v(" "),n("th")])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("\n                    Domicilio\n                ")]),t._v(" "),n("td",[t._v("\n                    "+t._s(t.userDataTable.delivery?"Si":"No")+"\n                ")])]),t._v(" "),n("tr",[n("td",[t._v("\n                    Tiene Sitio\n                ")]),t._v(" "),n("td",[t._v("\n                    "+t._s(t.userDataTable.have_site?"Si":"No")+"\n                ")])]),t._v(" "),n("tr",[n("td",[t._v("\n                    Telefono\n                ")]),t._v(" "),n("td",[t._v("\n                    "+t._s(t.userDataTable.phone?"Si":"No")+"\n                ")])]),t._v(" "),n("tr",[n("td",[t._v("\n                    Whatsapp\n                ")]),t._v(" "),n("td",[t._v("\n                    "+t._s(t.userDataTable.whatsapp?"Si":"No")+"\n                ")])]),t._v(" "),n("tr",[n("td",[t._v("\n                    Perfil verificado\n                ")]),t._v(" "),n("td",[t._v("\n                    "+t._s(t.userDataTable.status?"Si":"No")+"\n                ")])]),t._v(" "),n("tr",[n("td",[t._v("\n                    Edad\n                ")]),t._v(" "),n("td",[t._v("\n                    "+t._s(t.userDataTable.years+" Años")+"\n                ")])]),t._v(" "),t.times?n("tr",[n("td",[t._v("\n                    Horario\n                ")]),t._v(" "),n("td",[t._v("\n                    "+t._s(t.times.every_single_day?"Todo el dia":t.getHour(t.times.input)+" - "+t.getHour(t.times.output))+"\n                ")])]):t._e(),t._v(" "),t.times?n("tr",[n("td",[t._v("\n                    Dias\n                ")]),t._v(" "),n("td",[t._v("\n                    "+t._s(t.times.every_day?"Todos los dia":t.times.input_day+" - "+t.times.output_day)+"\n                ")])]):t._e(),t._v(" "),n("tr",[n("td",[t._v("\n                    Mide\n                ")]),t._v(" "),n("td",[t._v("\n                    "+t._s(t.userDataTable.height+" Cm")+"\n                ")])]),t._v(" "),n("tr",[n("td",[t._v("\n                    Pesa\n                ")]),t._v(" "),n("td",[t._v("\n                    "+t._s(t.userDataTable.weight+" Kg")+"\n                ")])])])]},proxy:!0}])})}),[],!1,null,null,null);e.default=_.exports}}]);