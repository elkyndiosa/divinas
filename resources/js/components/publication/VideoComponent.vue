<template>
  <div class="full-width mt-3 m-auto d-flex justify-center flex-wrap">
    <v-col cols="12" class="d-flex justify-center flex-wrap" style="max-width: 100%" >
    </v-col>

    <v-dialog v-model="dialog" max-width="700px">
     
    </v-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  props: ["search", "uuid", "userData", "dash"],
  data() {
    return {
      videos: [],
      dialog: false,
    };
  },
  mounted() {
  },
  computed: {
   
  },
  methods: {
    
  },
};
</script>
<style>
</style>