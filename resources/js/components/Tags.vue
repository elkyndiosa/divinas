<template>
  <v-container class="pa-0">
    <base-subheading>Tags</base-subheading>

    <v-chip
      v-for="(category, i) in categories"
      :key="i"
      class="mr-2"
      color="secondary"
      label
      small
      tag
      text-color="white"
    >
      {{ category.text }}
    </v-chip>
  </v-container>
</template>

<script>
  // Utilities
  export default {
    components:{
      BaseSubheading: () => import('./base/Subheading'),
    },
    name: 'Tags',
    data: () => ({

      categories: ['categories-1', 'categories-2','categories-3','categories-4']
    }),
    computed: {
    },
  }
</script>
