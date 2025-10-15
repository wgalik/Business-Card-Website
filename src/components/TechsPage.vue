<template>
  <div class="container text-light" id="techs">
    <h1 class="mb-5">
      {{ isEN ? 'Technologies I work with:' : 'Technologie, z którymi pracuję:' }}
    </h1>
    <div class="row" v-for="tech in techs" :key="tech.name">
      <div class="col-sm-3 font-monospace mb-sm-4 fs-5">
        <span v-html="tech.logo"></span> {{ tech.name }}
      </div>

      <!-- <div class="progress p-0 col-sm-9 mb-4 mb-sm-4">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated bg-info"
          :style="{ width: tech.width }"
        >
      </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const { isEN } = defineProps(['isEN'])

const techs = [
  { name: 'HTML5', logo: '<i class="fa-brands fa-html5"></i>' },
  { name: 'CSS3', logo: '<i class="fa-brands fa-css3-alt"></i>' },
  { name: 'Bootstrap 5', logo: '<i class="fa-brands fa-bootstrap"></i>' },
  { name: 'SCSS (Sass)', logo: '<i class="fa-brands fa-sass"></i>' },
  { name: 'JavaScript (ES6+)', logo: '<i class="fab fa-js-square"></i>' },
  // { name: 'jQuery', logo: '60%' },
  { name: 'React', logo: '<i class="fa-brands fa-react"></i>' },
  { name: 'Vue.js 3', logo: '<i class="fa-brands fa-vuejs"></i>' },
  // { name: 'TypeScript', logo: '40%' },
  { name: 'PHP', logo: '<i class="fa-brands fa-php"></i>' },
  // { name: 'Laravel', logo: '<i class="fa-brands fa-laravel"></i>' },
  // { name: 'WordPress', logo: '20%' },
  { name: 'Git / GitHub', logo: '<i class="fa-brands fa-square-github"></i>' },
]
</script>

<style></style>
