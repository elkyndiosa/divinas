<template>
    <v-simple-table style="width: 100%" >
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">Informacion Detallada</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Domicilio
                    </td>
                    <td>
                        {{ userDataTable.delivery ? 'Si' : 'No' }}
                    </td>
                </tr>
                <tr>
                    <td>
                        Tiene Sitio
                    </td>
                    <td>
                        {{ userDataTable.have_site ? 'Si' : 'No'}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Telefono
                    </td>
                    <td>
                        {{  userDataTable.phone ? 'Si' : 'No' }}
                    </td>
                </tr>
                <tr>
                    <td>
                        Whatsapp
                    </td>
                    <td>
                        {{ userDataTable.whatsapp ? 'Si' : 'No' }}
                    </td>
                </tr>
                <tr>
                    <td>
                        Perfil verificado
                    </td>
                    <td>
                        {{ userDataTable.status ? 'Si' : 'No' }}
                    </td>
                </tr>
                <tr>
                    <td>
                        Edad
                    </td>
                    <td>
                        {{ userDataTable.years + ' Años' }}
                    </td>
                </tr>
                <tr v-if="times">
                    <td>
                        Hotario
                    </td>
                    <td>
                        {{ times.every_single_day ? 'Todo el dia' : getHour(times.input) +" - "+ getHour(times.output) }}
                    </td>
                </tr>
                <tr v-if="times">
                    <td>
                        Dias
                    </td>
                    <td>
                        {{ times.every_day ? 'Todos los dia' : times.input_day +" - "+ times.output_day }}
                    </td>
                </tr>
                <tr>
                    <td>
                        Mide
                    </td>
                    <td>
                        {{  userDataTable.height + ' Cm' }}
                    </td>
                </tr>
                <tr>
                    <td>
                        Pesa
                    </td>
                    <td>
                        {{ userDataTable.weight + ' Kg' }}
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
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
