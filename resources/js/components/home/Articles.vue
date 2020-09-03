<template>
  <section id="feed" class="mt-8">
    <feed @addFavorities="addFavorities">
      <slot />
    </feed>
  </section>
</template>

<script>
  export default {
    name: 'HomeAbout',

    components: {
      Feed: () => import('../Feed'),
    },
    methods: {
      addFavorities(uuid){
        this.$emit("addFavorities", uuid);

      }
    },
  }
</script>
