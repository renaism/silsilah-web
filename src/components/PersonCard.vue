<template>
  <v-card
    class="mx-auto pb-5"
    max-width="300"
    :color="color"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="300px"
      cover
    ></v-img>

    <v-card-title>
      {{ person.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ person ? person.birth_place + ', ' : '' }}
      {{ person ? person.birth_date : '' }}
    </v-card-subtitle>
  </v-card>
</template>

<script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    person: Object
  })

  const color = computed(() => {
    const person = props.person

    if (person) {
      if (person.gender == 'm') return 'indigo-darken-3'
      else if (person.gender == 'f') return 'pink-darken-3'
    }
    
    // Default
    return 'grey-darken-3'
  }) 
</script>