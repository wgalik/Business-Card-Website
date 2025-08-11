<template>
  <nav class="navbar navbar-expand-sm navbar-dark shadow position-fixed z-3 w-100 top-0 start-0">
    <div class="container-fluid align-items-center">
      <p class="font-monospace mt-2 ms-2 fw-bold fs-3" id="logo"></p>

      <button
        class="navbar-toggler navbar-dark ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon navbar-dark"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-if="isEN">
          <li v-for="page in pagesEN" :key="page.id" class="nav-item">
            <RouterLink class="nav-link" :to="page.href" :id="page.id">{{ page.name }}</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-else>
          <li v-for="page in pagesPL" :key="page.id" class="nav-item">
            <RouterLink class="nav-link" :to="page.href" :id="page.id">{{ page.name }}</RouterLink>
          </li>
        </ul>
      </div>
      <button
        class="d-flex justify-content-center align-items-center rounded-circle ms-3 me-2 mb-2 mb-lg-0 overflow-hidden"
        :id="isEN ? 'langBtnPL' : 'langBtnEN'"
        @click="toggleLang"
      >
        <img class="w-100 h-100" :src="isEN ? flagPL : flagUK" alt="flag" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { inject } from 'vue'
import flagPL from '../assets/National_Flag_of_Poland.png'
import flagUK from '../assets/united-kingdom-flag-icon.png'

const isEN = inject<Ref<boolean>>('isEN')
if (!isEN) throw new Error('isEN not provided')

const pagesEN = [
  { name: 'About me', href: '/about', id: 'AboutMe' },
  { name: 'Technologies', href: '/techs', id: 'Techs' },
  { name: 'Projects', href: '/projects', id: 'Projects' },
  { name: 'Contact', href: '/contact', id: 'Contact' },
]
const pagesPL = [
  { name: 'O mnie', href: '/about', id: 'AboutMe' },
  { name: 'Technologie', href: '/techs', id: 'Techs' },
  { name: 'Projekty', href: '/projects', id: 'Projects' },
  { name: 'Kontakt', href: '/contact', id: 'Contact' },
]

const toggleLang = () => {
  isEN.value = !isEN.value
  if (isEN.value === true) {
    document.documentElement.lang = 'en'
  } else {
    document.documentElement.lang = 'pl'
  }
}
</script>

<style></style>
