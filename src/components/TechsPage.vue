<template>
  <div class="container text-light" id="techs">
    <h1 class="mb-5">{{ isEN ? headerEN : headerPL }}</h1>
    <div class="row" v-for="tech in techs" :key="tech.name">
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
  { name: 'HTML5', width: '80%' },
  { name: 'CSS3', width: '80%' },
  { name: 'Bootstrap 5', width: '60%' },
  { name: 'SCSS (Sass)', width: '80%' },
  { name: 'JavaScript (ES6+)', width: '60%' },
  { name: 'jQuery', width: '60%' },
  { name: 'React', width: '40%' },
  { name: 'Vue.js 3', width: '40%' },
  { name: 'TypeScript', width: '40%' },
  { name: 'PHP', width: '20%' },
  { name: 'WordPress', width: '20%' },
  { name: 'Git / GitHub', width: '60%' },
]
</script>

<style></style>
