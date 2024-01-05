<template>
  <v-app>
    <v-main>
      <div class="text-h1 text-center mb-5">{{ tree.name }}</div>
      <v-divider></v-divider>
      <family :family="tree.root_family" class="mt-5"></family>
    </v-main>
  </v-app>
</template>

<script setup>
  import config from '@/config'
  import { getFamily } from '@/services/family'
  import { getTree } from '@/services/tree'

  import Family from '@/components/Family.vue'

  const tree = await getTree(config.tree.id)
</script>
