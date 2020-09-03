<template>
  <v-app>
    <drawer-component/>
    <v-content app>
      <v-container fluid class="pa-0" style="height: auto; overflow: hidden;">
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {
    DrawerComponent: () =>
      import("../components/dashboard/DrawerComponent.vue"),
  },
};
</script>

<style>
</style>
