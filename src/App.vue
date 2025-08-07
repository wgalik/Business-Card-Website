<template>
  <header>
    <HomePage v-if="intro" />
    <NavigationBar />
  </header>

  <main>
    <Transition name="fade" appear mode="out-in">
      <RouterView />
    </Transition>
  </main>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { ref, onMounted, provide, defineAsyncComponent } from 'vue'

const intro = ref(true)
const isEN = ref(true)

provide('isEN', isEN)

let timeDeley = 4000

if (window.location.pathname !== '/Business-Card-Website/') {
  intro.value = !intro.value
  timeDeley = 0
}

const HomePage = defineAsyncComponent<Component>(
  () =>
    new Promise((resolve) => {
      resolve(import('./components/HomePage.vue'))
    }),
)

const NavigationBar = defineAsyncComponent<Component>(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./components/NavigationBar.vue'))
        if (intro.value) intro.value = !intro.value
      }, timeDeley)
    }),
)

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
  }, timeDeley)
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
