<template>
  <div class="container text-light" id="projects">
    <div class="row row-gap-4">
      <div class="col-sm-12 col-md-6 col-lg-4" v-for="(project, index) in projects" :key="index">
        <div class="card text-center border bg-transparent text-light">
          <img
            :src="Array.isArray(projectsImgs?.[index]) ? projectsImgs[index][0] : ''"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">
              {{ project.shortDescription }}
            </p>
            <p class="card-text">
              Technologies:
              <span class="font-monospace">
                {{ project.techs }}
              </span>
            </p>

            <button
              class="btn btn-light"
              type="button"
              data-bs-toggle="offcanvas"
              :data-bs-target="'#portfolio_project_' + index"
              :aria-controls="'portfolio_project_' + index"
            >
              Case study
            </button>

            <div
              class="offcanvas offcanvas-bottom h-100 text-light"
              tabindex="-1"
              :id="'portfolio_project_' + index"
              :aria-labelledby="'portfolio_project_' + index + '_Label'"
            >
              <div class="offcanvas-header">
                <h3 class="offcanvas-title ms-5" :id="'portfolio_project_' + index + '_Label'">
                  {{ project.name }}
                </h3>
                <button
                  type="button"
                  class="btn-close bg-light"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body small">
                <div :id="'carousel_project_' + index" class="carousel slide h-50 overflow">
                  <div class="carousel-inner">
                    <div
                      class="carousel-item"
                      v-for="(img, i) in projectsImgs[index]"
                      :class="{ active: i == 0 }"
                      :key="i"
                    >
                      <img :src="img" class="d-block w-75 mx-auto carousel-img" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    :data-bs-target="'#carousel_project_' + index"
                    data-bs-slide="prev"
                  >
                    <span class="carousel-control-prev-icon text-primary" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    :data-bs-target="'#carousel_project_' + index"
                    data-bs-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <h4 class="mt-5">Description:</h4>
                <p class="ms-5 me-5 mb-5">
                  {{ project.description }}
                </p>
                <h6 class="card-text">Technologies used:</h6>
                <p class="font-monospace">{{ project.techs }}</p>
                <p class="mt-5">
                  <a
                    class="text-light text-decoration-none"
                    :href="project.page_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><i class="fa-solid fa-link"></i> {{ project.page }}</a
                  >
                </p>

                <p>
                  <a
                    class="text-light text-decoration-none"
                    :href="project.repo_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><i class="fa-brands fa-github text-light"> </i> {{ project.repo }}</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projectsImgs: unknown[] = []

const projectGlobs: Record<number, Record<string, unknown>> = {
  0: import.meta.glob('../assets/project_1/*.jpg', { eager: true, import: 'default' }),
  1: import.meta.glob('../assets/project_2/*.jpg', { eager: true, import: 'default' }),
  2: import.meta.glob('../assets/project_7/*.jpg', { eager: true, import: 'default' }),
  3: import.meta.glob('../assets/project_3/*.jpg', { eager: true, import: 'default' }),
  4: import.meta.glob('../assets/project_6/*.jpg', { eager: true, import: 'default' }),
  5: import.meta.glob('../assets/project_8/*.jpg', { eager: true, import: 'default' }),
  6: import.meta.glob('../assets/project_4/*.jpg', { eager: true, import: 'default' }),
  7: import.meta.glob('../assets/project_5/*.jpg', { eager: true, import: 'default' }),
}

for (const key of Object.keys(projectGlobs)) {
  projectsImgs.push(Object.values(projectGlobs[Number(key)]))
}

const projects = [
  {
    name: 'Rent an Art...',
    shortDescription:
      'Rent an Art... is a fictional web application developed as my graduation project.',
    description:
      'Rent an Art... is a fictional web application developed as my graduation project. It focuses on designing a modern, clean, and fully functional frontend interface for an art rental service. The app is built entirely using HTML, CSS, and JavaScript – with no backend integration. ',
    techs: ' HTML5 | CSS3 | JavaScript | jQuery | Bootstrap | REST API',
    page: ' wgalik.github.io/project_WG/',
    page_link: 'https://wgalik.github.io/project_WG/',
    repo: ' github.com/wgalik/project_WG',
    repo_link: 'https://github.com/wgalik/project_WG',
  },
  {
    name: 'Business Card Website',
    shortDescription: 'This is my personal front-end developer portfolio.',
    description:
      'This is my personal front-end developer portfolio. The website presents who I am, my technical skills, and selected projects in an engaging and interactive way. ',
    techs: ' HTML5 | CSS3 | Bootstrap | Vue.js | TypeScript | Vite',
    page: ' wgalik.github.io/Business-Card-Website/',
    page_link: 'https://wgalik.github.io/Business-Card-Website/',
    repo: ' github.com/wgalik/Business-Card-Website/tree/dev',
    repo_link: 'https://github.com/wgalik/Business-Card-Website/tree/dev',
  },
  {
    name: 'Memory Game',
    shortDescription: 'A multi-level memory card game built with React and Webpack.',
    description:
      'A multi-level memory card game built with React and Webpack. Test your memory skills by flipping cards, advancing through difficulty levels, and tracking your score. Clean transitions and state management make for a smooth and interactive experience.',
    techs: '  React | SCSS | React Router | React Context API | React Transition Group | Webpack',
    page: ' wgalik.github.io/Memory-Game---React/',
    page_link: 'https://wgalik.github.io/Memory-Game---React/',
    repo: ' github.com/wgalik/Memory-Game---React',
    repo_link: 'https://github.com/wgalik/Memory-Game---React',
  },
  {
    name: 'Inspiring Quote App',
    shortDescription: 'A simple and elegant web application built with Vue 3 and Vite.',
    description:
      'A simple and elegant web application built with Vue 3 and Vite that fetches and displays random inspirational quotes from a REST API. Users can generate a new quote with a single click.',
    techs: ' HTML5 | SCSS | Bootstrap | Vue.js | Vite | REST API',
    page: ' wgalik.github.io/Inspiring-quote-app---Vue.js/',
    page_link: 'https://wgalik.github.io/Inspiring-quote-app---Vue.js/',
    repo: ' github.com/wgalik/Inspiring-quote-app---Vue.js',
    repo_link: 'https://github.com/wgalik/Inspiring-quote-app---Vue.js',
  },
  {
    name: 'Weather App',
    shortDescription: 'A simple and responsive weather application built with React.',
    description:
      'A simple and responsive weather application built with React and styled using SCSS. It fetches real-time weather data using a public REST API.',
    techs: '  React | SCSS | JavaScript | CRA | REST API',
    page: ' wgalik.github.io/weather-app---react/',
    page_link: 'https://wgalik.github.io/weather-app---react/',
    repo: ' github.com/wgalik/weather-app---react/tree/dev',
    repo_link: 'https://github.com/wgalik/weather-app---react/tree/dev',
  },
  {
    name: '6/49 Lottery Game',
    shortDescription:
      'A simple and interactive web-based version of the classic 6/49 lottery game.',
    description:
      'A simple and interactive web-based version of the classic 6/49 lottery game. Players can manually pick their numbers or use the Quick Pick option, and then compare their selection with randomly drawn numbers.',
    techs: '  HTML5 | CSS3 | Flexbox | Vanilla JavaScript (ES6)',
    page: ' wgalik.github.io/lotto_game/',
    page_link: 'https://wgalik.github.io/lotto_game/',
    repo: ' github.com/wgalik/lotto_game',
    repo_link: 'https://github.com/wgalik/lotto_game',
  },
  {
    name: 'Interactive Image Grid Portfolio',
    shortDescription:
      'A modern and responsive image gallery using HTML, CSS Grid, and Vanilla JavaScript.',
    description:
      'A modern and responsive image gallery using HTML, CSS Grid, and vanilla JavaScript. Designed as a minimalist portfolio-style grid, it features grayscale hover effects and full-screen image previews on click.',
    techs: '  HTML5 | CSS3 | CSS Grid | JavaScript',
    page: ' wgalik.github.io/Interactive-Image-Grid-Portfolio/',
    page_link: 'https://wgalik.github.io/Interactive-Image-Grid-Portfolio/',
    repo: ' github.com/wgalik/Interactive-Image-Grid-Portfolio',
    repo_link: 'https://github.com/wgalik/Interactive-Image-Grid-Portfolio',
  },
  {
    name: 'Flexbox Menu with VanillaJS',
    shortDescription:
      'Simple, responsive navigation bar built with HTML, CSS (Flexbox), and Vanilla JavaScript.',
    description:
      'This is a simple, responsive navigation bar built with HTML, CSS (Flexbox), and Vanilla JavaScript. The project demonstrates how to create a dynamic dropdown menu and a toggleable search input, all without external frameworks.',
    techs: '  HTML5 | CSS3 | Flexbox | JavaScript',
    page: ' wgalik.github.io/Flex-Box-Menu---Vanilla-JS/',
    page_link: 'https://wgalik.github.io/Flex-Box-Menu---Vanilla-JS/',
    repo: ' github.com/wgalik/Flex-Box-Menu---Vanilla-JS',
    repo_link: 'https://github.com/wgalik/Flex-Box-Menu---Vanilla-JS',
  },
]
</script>

<style></style>
