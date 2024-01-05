<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h6 text-center">Father</div>
        <person-card
          :person="family.father" 
          class="my-5"
        ></person-card>
      </v-col>
      <v-col>
        <div class="text-h6 text-center">Mother</div>
        <person-card
          :person="family.mother"
          class="my-5"
        ></person-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-h6 text-center">Children</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="child in family.children"
        :key="child.id"
      >
      <person-card
        :person="child"
        class="my-5"
      ></person-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import PersonCard from '@/components/PersonCard.vue'

  const props = defineProps({
    family: Object
  })
</script>