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
        <div data-lang="EN" v-if="isEN">
          <h1 class="ps-md-2">About me</h1>
          <p class="ps-md-2">
            Hi! My name is Wojtek and I am a freelancer specializing in creating websites.
          </p>

          <p class="ps-md-2">
            I have always been fascinated by technology and its impact on our daily lives, which is
            why I decided to pursue a career in building modern and functional websites. I treat
            every project as a challenge and an opportunity to learn - and quickly picking up new
            skills is one of my strongest traits.
          </p>
          <p class="ps-md-2">
            I am not afraid of new technologies, and difficulties motivate me to take action. I
            consistently strive to achieve my goals while paying attention to aesthetics, usability,
            and detail. I believe in continuous development, so I am constantly expanding my
            knowledge in front-end development, WordPress, and PHP. This allows me to better respond
            to my clients' needs and create projects that not only look good but also perform well -
            fast, smoothly, and reliably.
          </p>
          <p class="ps-md-2">
            In my work, I value communication, reliability, and meeting deadlines. I enjoy
            challenges and gladly take on new projects that let me use both creativity and logical
            thinking.
          </p>
          <p class="ps-md-2">
            If you are looking for someone who can not only build a website but also help turn your
            idea into a real, well-functioning product - I would love to work with you!
          </p>
        </div>
        <div data-lang="PL" v-else>
          <h1 class="ps-md-2">O mnie</h1>
          <p class="ps-md-2">
            Cześć! Mam na imię Wojtek i jestem freelancerem specjalizującym się w tworzeniu stron
            internetowych.
          </p>

          <p class="ps-md-2">
            Od zawsze fascynowała mnie technologia i jej wpływ na naszą codzienność, dlatego
            postanowiłem związać swoją ścieżkę zawodową z tworzeniem nowoczesnych i funkcjonalnych
            stron internetowych. Każdy projekt traktuję jak wyzwanie i okazję do nauki - a szybkie
            przyswajanie nowych umiejętności to jedna z moich najmocniejszych cech.
          </p>
          <p class="ps-md-2">
            Nie boję się nowych technologii, a trudności motywują mnie do działania. Konsekwentnie
            dążę do celu, dbając przy tym o estetykę, użyteczność i detale. Stawiam na ciągły
            rozwój, dlatego nieustannie poszerzam swoją wiedzę z zakresu front-endu, WordPressa czy
            PHP. Dzięki temu mogę lepiej odpowiadać na potrzeby moich klientów i tworzyć projekty,
            które nie tylko dobrze wyglądają, ale przede wszystkim działają - szybko, płynnie i
            bezproblemowo.
          </p>
          <p class="ps-md-2">
            W pracy stawiam na komunikację, rzetelność i terminowość. Lubię wyzwania i z
            przyjemnością podejmuję się nowych projektów, które pozwalają mi wykorzystać kreatywność
            i logiczne myślenie.
          </p>
          <p class="ps-md-2">
            Jeśli szukasz kogoś, kto nie tylko wykona stronę internetową, ale również pomoże Ci
            przekształcić pomysł w realny, dobrze funkcjonujący produkt - zapraszam do współpracy!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { inject } from 'vue'
import portrait from '../assets/portret.jpg'

const isEN = inject<Ref<boolean>>('isEN')
if (!isEN) throw new Error('isEN not provided')
</script>
<style></style>
