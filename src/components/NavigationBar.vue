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
            <RouterLink class="nav-link" :to="page.href" :id="page.id" @click="handleClick"
              >{{ page.name }}
            </RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-else>
          <li v-for="page in pagesPL" :key="page.id" class="nav-item">
            <RouterLink class="nav-link" :to="page.href" :id="page.id" @click="handleClick">{{
              page.name
            }}</RouterLink>
          </li>
        </ul>
      </div>
      <button
        v-show="visible"
        class="justify-content-center align-items-center rounded-circle ms-3 me-2 mb-2 mb-lg-0 overflow-hidden"
        :id="isEN ? 'langBtnPL' : 'langBtnEN'"
        @click="emit('click')"
      >
        <img class="w-100 h-100" :src="isEN ? flagPL : flagUK" alt="flag" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import flagPL from '../assets/National_Flag_of_Poland.png'
import flagUK from '../assets/united-kingdom-flag-icon.png'

import { ref } from 'vue'
const visible = ref(true)

const { isEN } = defineProps(['isEN'])
const emit = defineEmits(['click'])

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

const handleClick = (event: MouseEvent) => {
  const navbarToggler = document.querySelector('button.navbar-toggler')
  const show = document.querySelector('.show')
  const target = event.target as HTMLElement | null
  if (show && navbarToggler) {
    show.classList.remove('show')
    navbarToggler.setAttribute('aria-expanded', 'false')
    navbarToggler.classList.add('collapsed')
  }

  if (target && target.id === 'Projects') {
    visible.value = false
  } else {
    visible.value = true
  }
}
</script>

<style></style>
