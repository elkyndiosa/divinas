<template>
  <v-footer
    dark
    padless
    class="border-top border-black"
  >
    <v-card
      flat
      tile
      class="grey  lighten-3 black--text text-center"
      style="width: 100%"
    >


      <v-divider></v-divider>

      <v-card-text class=" black--text full-width">
        &copy; {{ new Date().getFullYear() }} — <strong>DivinasPrepagos.com</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>