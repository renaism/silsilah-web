<template>
  <Suspense>
    <router-view />
    <template #fallback>
      <v-progress-circular indeterminate></v-progress-circular>
    </template>
  </Suspense>
</template>

<script setup>
  //
</script>
