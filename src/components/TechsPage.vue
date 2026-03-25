<template>
  <div class="container text-light" id="techs">
    <h1 class="mb-5 text-center">
      {{ isEN ? 'Technologies I work with:' : 'Technologie, z którymi pracuję:' }}
    </h1>
    <div class="row d-flex justify-content-center">
      <div
        class="col-11 col-sm-3 col-lg-2 font-monospace m-2 mb-sm-4 fs-6 text-center rounded border bg-light bg-gradient"
        style="--bs-bg-opacity: 0.2"
        v-for="tech in techs"
        :key="tech.name"
      >
        <p v-html="tech.logo" class="fs-1 mt-2"></p>
        <p class="mb-2">{{ tech.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import jQueryLogo from '../assets/jquery-svgrepo-com.svg'
import tailwindCSSLogo from '../assets/Tailwind_CSS_Logo.svg'
import typeScriptLogo from '../assets/typescript_logo.svg'

const { isEN } = defineProps(['isEN'])

const techs = [
  { name: 'HTML5', logo: '<i class="fa-brands fa-html5"></i>' },
  { name: 'CSS3', logo: '<i class="fa-brands fa-css3-alt"></i>' },
  { name: 'Bootstrap 5', logo: '<i class="fa-brands fa-bootstrap"></i>' },
  { name: 'Tailwind CSS', logo: `<img src="${tailwindCSSLogo}" alt="logo"/>` },
  { name: 'SCSS (Sass)', logo: '<i class="fa-brands fa-sass"></i>' },
  { name: 'JavaScript (ES6+)', logo: '<i class="fab fa-js-square"></i>' },
  { name: 'TypeScript', logo: `<img src="${typeScriptLogo}" alt="logo"/>` },
  { name: 'jQuery', logo: `<img src="${jQueryLogo}" alt="logo"/>` },
  { name: 'React', logo: '<i class="fa-brands fa-react"></i>' },
  { name: 'Vue.js 3', logo: '<i class="fa-brands fa-vuejs"></i>' },
  { name: 'WordPress', logo: '<i class="fa-brands fa-wordpress"></i>' },
  { name: 'PHP', logo: '<i class="fa-brands fa-php"></i>' },
  { name: 'Git / GitHub', logo: '<i class="fa-brands fa-square-github"></i>' },
]
</script>

<style scoped>
.logo {
  width: 20px;
  height: 20px;
}

.logo::before {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  content: '';
  background: url('../assets/typescript_logo.svg');
}

img {
  max-width: 40px;
  max-height: 40px;
}

/* #typeScript {
  background-image: url('../assets/typescript_logo.svg');
} */

/* `<img src="${tailwindCSSLogo}" alt="logo"/>` */

/* Tailwind
<i class="fa-brands fa-tailwind-css"></i>
TS
<i class="fa-brands fa-typescript"></i> */
</style>
