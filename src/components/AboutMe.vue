<template>
  <div class="container text-light" id="about">
    <div class="row">
      <div class="col-12 col-md-3">
        <img
          class="rounded-circle border border-light p-2"
          :src="portrait"
          alt="Portrait"
          width="100%"
        />
      </div>
      <div class="col-12 col-md-9 border-start">
        <AboutMeEN v-if="isEN" />
        <AboutMePL v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import portrait from '../assets/portret.jpg'
import AboutMeEN from './AboutMeEN.vue'
import AboutMePL from './AboutMePL.vue'

const { isEN } = defineProps(['isEN'])
</script>
<style></style>
