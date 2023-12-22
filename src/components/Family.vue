<template>
  <v-app>
    <v-main>
      <v-chip variant="text" class="mx-5 my-5">Parent</v-chip>
      <person-card
        :person="family.father" 
        class="mx-5 my-5"
      ></person-card>
      <person-card
        :person="family.mother"
        class="mx-5 my-5"
      ></person-card>
      <v-divider></v-divider>
      <v-chip variant="text" class="mx-5 my-5">Children</v-chip>
      <person-card
        v-for="child in family.children"
        :key="child.id"
        :person="child"
        class="mx-5 my-5"
      ></person-card>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import config from '@/config'
import { getTree } from '@/services/tree'

import PersonCard from '@/components/PersonCard.vue'

const family = ref({})

async function fetchFamily() {
  const tree = await getTree(config.tree.id)
  family.value = tree.root_family
}

onMounted(() => {
  fetchFamily()
  console.log('hello')
})
</script>