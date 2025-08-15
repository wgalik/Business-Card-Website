<template>
  <div
    v-if="intro"
    id="code"
    class="font-monospace fw-bold d-flex justify-content-center align-items-center"
  ></div>
  <div v-else id="welcome" class="d-flex justify-content-center align-items-center">
    <h1 class="text-center font-monospace fw-bold m-5 mt-0 lh-base">
      {{ isEN ? 'Hi, I’m Wojtek, Frontend Developer' : 'Witaj! Jestem Wojtek, Frontend Developer' }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const { intro, isEN } = defineProps(['intro', 'isEN'])
</script>

<style></style>
