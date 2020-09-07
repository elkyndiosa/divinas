<template>
  <v-app>
    <drawer-component/>
    <v-main app>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
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
