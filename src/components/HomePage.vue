<template>
  <div
    v-if="intro"
    id="code"
    class="font-monospace fw-bold d-flex justify-content-center align-items-center"
  ></div>
  <div v-else id="welcome" class="d-flex justify-content-center align-items-center">
    <h1 class="text-center font-monospace fw-bold m-5 mt-0 lh-base">{{ header }}</h1>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { inject, computed } from 'vue'

const isEN = inject<Ref<boolean>>('isEN')
if (!isEN) throw new Error('isEN not provided')

const intro = inject<Ref<boolean>>('intro')
if (!intro) throw new Error('intro not provided')

const header = computed(() =>
  isEN.value ? 'Hi, I’m Wojtek, Frontend Developer' : 'Witaj! Jestem Wojtek, Frontend Developer',
)

console.log(intro)
</script>

<style></style>
