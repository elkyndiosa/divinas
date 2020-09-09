<template>
  <v-card
    flat
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-card>
</template>

<script>
  export default {
    name: 'BaseCard',
  }
</script>

<style>
    .base-card {
        transition: all 0.3s;
    }
</style>
