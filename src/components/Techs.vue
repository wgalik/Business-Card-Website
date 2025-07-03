<template>
  <div class="container text-light" id="techs">
    <h1 class="mb-5" v-if="isEN">{{ headerEN }}</h1>
    <h1 class="mb-5" v-else>{{ headerPL }}</h1>
    <div class="row" v-for="tech in techs">
      <div class="col-sm-3 font-monospace mb-sm-4">{{ tech.name }}</div>

      <div class="progress p-0 col-sm-9 mb-4 mb-sm-4">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated bg-info"
          :style="{ width: tech.width }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { inject } from 'vue'

const isEN = inject<Ref<boolean>>('isEN')
if (!isEN) throw new Error('isEN not provided')

const headerEN = 'Technologies'
const headerPL = 'Technologie'

const techs = [
  { name: 'HTML', width: '80%' },
  { name: 'CSS', width: '80%' },
  { name: 'Bootstrap', width: '60%' },
  { name: 'Sass', width: '80%' },
  { name: 'JavaScript', width: '60%' },
  { name: 'jQuery', width: '60%' },
  { name: 'React', width: '20%' },
  { name: 'Vue.js', width: '40%' },
  { name: 'TypeScript', width: '40%' },
  { name: 'PHP ', width: '40%' },
  { name: 'WordPress ', width: '40%' },
  { name: 'Git ', width: '60%' },
]
</script>

<style></style>
