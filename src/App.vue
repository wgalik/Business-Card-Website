<template>
  <header>
    <NavigationBar v-if="showNav" :isEN @click="handleButton" />
  </header>

  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" appear mode="out-in">
        <component :is="Component" :intro :isEN @click="handleButton" />
      </Transition>
    </RouterView>
  </main>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { ref, onMounted, defineAsyncComponent } from 'vue'

const isEN = ref(true)
const intro = ref(true)
const showNav = ref(false)

const timeDelay = window.location.pathname === '/Business-Card-Website/' ? 4000 : 0

let timeoutId: ReturnType<typeof setTimeout>

const NavigationBar = defineAsyncComponent<Component>({
  loader: () => import('./components/NavigationBar.vue'),
})

const handleButton = (id?: string) => {
  if (!id) return toggleLang()
  if (timeoutId) clearTimeout(timeoutId)
  intro.value = true
  timeoutId = setTimeout(() => {
    intro.value = false
  }, 4000)
}
const toggleLang = () => {
  isEN.value = !isEN.value
  return isEN.value
    ? (document.documentElement.lang = 'en')
    : (document.documentElement.lang = 'pl')
}

const stars = () => {
  setTimeout(() => {
    showNav.value = true
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
    intro.value = !intro.value
  }, timeDelay)
}

onMounted(() => {
  stars()
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
