<template>
  <v-card
    variant="outlined"
    :title="person ? person.name : ''"
  >
    <template v-slot:prepend>
      <v-avatar size="32">
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.png"
        ></v-img>
      </v-avatar>
    </template>
    <v-card-text>
      <v-row>
        <v-col class="font-weight-bold">Gender</v-col>
        <v-col>{{ person ? (person.gender == 'm' ? 'Male' : 'Female') : '' }}</v-col>
      </v-row>
      <v-row>
        <v-col class="font-weight-bold">Birth Place</v-col>
        <v-col>{{ person ? person.birth_place : '' }}</v-col>
      </v-row>
      <v-row>
        <v-col class="font-weight-bold">Birth Date</v-col>
        <v-col>{{ person ? person.birth_date : '' }}</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
  const props = defineProps({
    person: Object
  })
</script>