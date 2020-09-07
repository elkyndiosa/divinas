<template>
  <div class="full-width mt-3 m-auto d-flex justify-center flex-wrap">
    <v-col cols="12" class="d-flex justify-center flex-wrap" style="width: 100%" >
      <v-simple-table style="width: 100%" >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Informacion Detallada</th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td>Domicilio</td>
                <td>{{userDataTable.delivery == 1?'Si':'No'}}</td>
              </tr>
            </tbody>
            <tbody>
              <tr >
                <td>Tiene Sitio</td>
                <td>{{userDataTable.have_site == 1?'Si':'No'}}</td>
              </tr>
            </tbody><tbody>
              <tr >
                <td>Telefono</td>
                <td>{{userDataTable.phone == 1?'Si':'No'}}</td>
              </tr>
            </tbody><tbody>
              <tr >
                <td>Whatsapp</td>
                <td>{{userDataTable.whatsapp == 1?'Si':'No'}}</td>
              </tr>
            </tbody><tbody>
              <tr >
                <td>Perfil verificado</td>
                <td>{{userDataTable.status == 1 ?'Si':'No'}}</td>
              </tr>
            </tbody><tbody>
              <tr >
                <td>Edad</td>
                <td>{{userDataTable.years + ' Años'}} </td>
              </tr>
            </tbody><tbody v-if="times">
              <tr >
                <td >Hotario</td>
                <td>{{times.every_single_day == 1 ? 'Todo el dia' : getHour(times.input) +" - "+ getHour(times.output) }}</td>
              </tr>
            </tbody><tbody v-if="times">
              <tr >
                <td>Dias</td>
                <td>{{times.every_day == 1 ? 'Todos los dia' : times.input_day +" - "+ times.output_day }}</td>
              </tr>
            </tbody><tbody v-if="times">
              <tr >
                <td >Mide</td>
                <td>{{userDataTable.height + ' Cm'}}</td>
              </tr>
            </tbody><tbody v-if="times">
              <tr >
                <td>Pesa</td>
                <td>{{userDataTable.weight + ' Kg'}}</td>
              </tr>
            </tbody>
           
          </template>
        </v-simple-table>
    </v-col>
  </div>
</template>
<script>
export default {
  components: {},
  props: ["userDataTable", "times"],
  data() {
    return {
      
    };
  },
  computed: {
   
  },
  methods: {
     getHour(hour){
       //console.log(hour)
       var lateNight = ''
       var hourOnly = parseInt(hour.substring(0, 3))
       if(hourOnly > 12){
         hourOnly = hourOnly -12
         lateNight = 'PM';
       }else if(hourOnly == 0){
         hourOnly = 12;
         lateNight = 'AM';

       }else{
         lateNight = 'AM';
       }
         //console.log(hour.substring(2, 5))

      return hourOnly + hour.substring(2, 5) +' '+ lateNight; // retorna 'ma'
    }
  },
  mounted() {
    
  },

};
</script>
<style>
</style>