<template>
  <header>
    <div v-if="intro">
      <div
        id="code"
        class="font-monospace fw-bold d-flex justify-content-center align-items-center"
      ></div>
    </div>
    <NavigationBar @navigate="changeView" />
  </header>

  <main>
    <Transition name="fade" appear mode="out-in">
      <component :is="currentComponent" />
    </Transition>
  </main>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { ref, computed, onMounted, provide, defineAsyncComponent } from 'vue'

import Home from './components/HomePage.vue'
import AboutMe from './components/AboutMe.vue'
import Techs from './components/TechsPage.vue'
import Projects from './components/ProjectsPage.vue'
import Contact from './components/ContactPage.vue'

type ViewName = 'Home' | 'AboutMe' | 'Techs' | 'Projects' | 'Contact'

const intro = ref(true)
const isEN = ref(true)

provide('isEN', isEN)

const NavigationBar = defineAsyncComponent<Component>(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./components/NavigationBar.vue'))
        intro.value = !intro.value
      }, 4000)
    }),
)

const currentView = ref<ViewName>('Home')

const components: Record<ViewName, Component> = {
  Home,
  AboutMe,
  Techs,
  Projects,
  Contact,
}

const currentComponent = computed(() => components[currentView.value])

const changeView = (view: ViewName) => {
  currentView.value = view
}

const twinkle = () => {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div')
    star.classList.add('star')
    star.style.position = 'absolute'
    star.style.top = `${Math.random() * 98}vh`
    star.style.left = `${Math.random() * 98}vw`
    star.style.width = '2px'
    star.style.height = '2px'
    star.style.backgroundColor = 'white'
    star.style.borderRadius = '50%'
    star.style.animation = 'twinkle 2s infinite'
    star.style.animationDuration = `${1 + Math.random() * 2}s`
    star.style.animationDelay = `${Math.random() * 2}s`

    document.body.appendChild(star)
  }
}

const start = () => {
  setTimeout(() => {
    twinkle()
  }, 4000)
}

onMounted(() => {
  start()
})
</script>

<style>
@import './assets/style.css';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
