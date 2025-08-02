<template>
  <nav class="navbar navbar-expand-sm navbar-dark shadow position-fixed z-3 w-100 top-0 start-0">
    <div class="container-fluid align-items-center">
      <p class="font-monospace mt-2 ms-2 fw-bold fs-3" id="logo"></p>

      <button
        class="navbar-toggler navbar-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon navbar-dark"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-if="isEN">
            <li v-for="page in pagesEN" :key="page.id" class="nav-item">
              <a class="nav-link" :href="page.href" :id="page.id" @click="navigate">{{
                page.name
              }}</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-if="!isEN">
            <li v-for="page in pagesPL" :key="page.id" class="nav-item">
              <a class="nav-link" :href="page.href" :id="page.id" @click="navigate">{{
                page.name
              }}</a>
            </li>
          </ul>
          <li class="nav-item">
            <button :id="isEN ? 'langBtnPL' : 'langBtnEN'" @click="toggleLang">
              <img v-if="isEN" :src="flagPL" alt="flag" />
              <img v-else :src="flagUK" alt="flag" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { defineEmits, inject } from 'vue'
import flagPL from '../assets/National_Flag_of_Poland.png'
import flagUK from '../assets/united-kingdom-flag-icon.png'

const isEN = inject<Ref<boolean>>('isEN')
if (!isEN) throw new Error('isEN not provided')

const emit = defineEmits<{
  (e: 'navigate', msg: string): void
}>()

const pagesEN = [
  { name: 'About me', href: '#about', id: 'AboutMe' },
  { name: 'Technologies', href: '#techs', id: 'Techs' },
  { name: 'Projects', href: '#projects', id: 'Projects' },
  { name: 'Contact', href: '#contact', id: 'Contact' },
]
const pagesPL = [
  { name: 'O mnie', href: '#about', id: 'AboutMe' },
  { name: 'Technologie', href: '#techs', id: 'Techs' },
  { name: 'Projekty', href: '#projects', id: 'Projects' },
  { name: 'Kontakt', href: '#contact', id: 'Contact' },
]

const toggleLang = () => {
  isEN.value = !isEN.value
  if (isEN.value === true) {
    document.documentElement.lang = 'en'
  } else {
    document.documentElement.lang = 'pl'
  }
}

const navigate = (event: MouseEvent) => {
  const navLink = document.querySelectorAll('.nav-link')
  const navbarToggler = document.querySelectorAll('.navbar-toggler')
  const links = document.querySelectorAll('.active')

  if (links) {
    links.forEach((link) => link.classList.remove('active'))
    const show = document.querySelector('.show')
    if (show) {
      show.classList.remove('show')
      navbarToggler[0].setAttribute('aria-expanded', 'false')
      navbarToggler[0].classList.add('collapsed')
    }
  }

  const target = event.target as HTMLElement
  navLink.forEach((link) => {
    if (link.id === target.id) link.classList.add('active')
  })
  emit('navigate', target.id)
}
</script>

<style></style>
