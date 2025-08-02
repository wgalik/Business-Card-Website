<template>
  <div
    class="container-xl d-flex justify-content-center align-items-center text-light"
    id="contact"
  >
    <div class="card bg-transparent text-light border-0 w-50">
      <div class="card-body text-center">
        <h1 class="card-title mb-3" v-if="isEN">{{ headerEN }}</h1>
        <h1 class="card-title mb-3" v-else>{{ headerPL }}</h1>
        <a
          class="card-link d-block text-light text-decoration-none p-1 fs-5"
          href="tel:+48 796 144 888"
          ><i class="fa-solid fa-phone fs-6"></i> +48 796 144 888</a
        >
        <a
          class="card-link d-block text-light text-decoration-none p-1 fs-5"
          href="mailto:wojciełóch.galik@gmail.com"
          ><i class="fa-solid fa-envelope fs-6"></i> wojciech.galik@gmail.com</a
        >
        <div class="card-text d-flex justify-content-center align-items-center gap-3 mt-3">
          <a
            class="card-link"
            href="https://wa.me/+48796144888"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fa-brands fa-whatsapp text-light fs-3"></i
          ></a>

          <a
            class="card-link"
            href="https://github.com/wgalik"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fa-brands fa-github text-light fs-3"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { inject } from 'vue'

const isEN = inject<Ref<boolean>>('isEN')
if (!isEN) throw new Error('isEN not provided')

const headerEN = 'Contact me:'
const headerPL = 'Skontaktuj się ze mną:'
</script>

<style></style>
