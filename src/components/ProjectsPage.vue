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
  5: import.meta.glob('../assets/project_10/*.jpg', { eager: true, import: 'default' }),
  6: import.meta.glob('../assets/project_11/*.jpg', { eager: true, import: 'default' }),
  7: import.meta.glob('../assets/project_9/*.jpg', { eager: true, import: 'default' }),
  8: import.meta.glob('../assets/project_8/*.jpg', { eager: true, import: 'default' }),
  9: import.meta.glob('../assets/project_12/*.jpg', { eager: true, import: 'default' }),
  10: import.meta.glob('../assets/project_4/*.jpg', { eager: true, import: 'default' }),
  11: import.meta.glob('../assets/project_5/*.jpg', { eager: true, import: 'default' }),
}

for (const key of Object.keys(projectGlobs)) {
  projectsImgs.push(Object.values(projectGlobs[Number(key)]))
}

const projects = [
  {
    name: 'Rent an Art...',
    shortDescription:
      'Rent an Art is a conceptual web application developed for my graduation project.',
    description:
      'Rent an Art is a fictional web application developed as a university diploma project. The main goal was to design an intuitive and visually appealing frontend for an art rental platform, built entirely with frontend technologies (HTML, CSS, JS) without the use of backend frameworks. The application leverages Local Storage to store user data such as the shopping cart and preferences, allowing the state to be preserved between sessions. This project is part of my frontend portfolio.',
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
      'This is my personal front-end developer portfolio website, designed to showcase my skills, experience, and projects in a clear and engaging way. The application is built with Vue 3 (Composition API) and leverages modern tools and best practices, including TypeScript and Vite for fast development and optimized builds. It makes use of ref and computed properties to handle state and logic efficiently, and integrates Vue Router to provide smooth navigation between sections. To enhance accessibility and user experience, the website includes a language toggle (PL/EN), allowing visitors to easily switch between English and Polish. The design is enriched with CSS animations, giving the portfolio a modern, interactive feel while keeping performance in mind. This project reflects not only my technical skills as a front-end developer, but also my focus on clean design, responsive layout, and intuitive user experience.',
    techs: ' HTML5 | CSS3 | Bootstrap | Vue.js | TypeScript | Vue Router | Vite',
    page: ' wgalik.github.io/Business-Card-Website/',
    page_link: 'https://wgalik.github.io/Business-Card-Website/',
    repo: ' github.com/wgalik/Business-Card-Website/tree/dev',
    repo_link: 'https://github.com/wgalik/Business-Card-Website/tree/dev',
  },
  {
    name: 'Memory Game',
    shortDescription: 'A multi-level memory card game built with React and Webpack.',
    description:
      'A multi-level memory card game built with React and Webpack. This project challenges players to test and improve their memory by flipping cards, matching pairs, and progressing through increasingly difficult levels. The game features a scoring system, smooth animated transitions, and dynamic difficulty scaling to keep players engaged. Under the hood, it demonstrates strong use of React Router for navigation between levels, React Context API for managing global state (score, progress, settings), and React Transition Group for fluid animations. Styling is handled with SCSS, while Webpack provides a fully customized build setup. The project highlights my ability to combine game logic, state management, and UI transitions into an interactive, responsive, and fun web application.',
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
      'A simple and elegant web application built with Vue 3 and Vite. This project connects to a REST API to fetch and display random inspirational quotes in a clean and minimalistic interface. With a single click, users can instantly generate a new quote, making the app both engaging and refreshing. The application is styled with SCSS and Bootstrap, ensuring a modern and responsive design that looks great on any device. It demonstrates practical use of Vue 3 Options API, API integration, and state reactivity, all bundled in a lightweight, performant setup powered by Vite. This project highlights my ability to build API-driven applications, focus on user experience, and deliver a polished front-end with clear code structure and maintainable styling.',
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
      'A simple and responsive web application built with React and styled using SCSS. This project fetches real-time weather data from a public REST API, allowing users to quickly check current weather conditions in any city. The interface is clean, intuitive, and fully responsive, ensuring a seamless experience across desktop and mobile devices. The app demonstrates effective use of React state and props for dynamic data rendering, proper API integration, and a modular component structure. It showcases my ability to build functional, interactive, and visually appealing applications that are both performant and user-friendly.',
    techs: '  React | SCSS | JavaScript | CRA | REST API',
    page: ' wgalik.github.io/weather-app---react/',
    page_link: 'https://wgalik.github.io/weather-app---react/',
    repo: ' github.com/wgalik/weather-app---react/tree/dev',
    repo_link: 'https://github.com/wgalik/weather-app---react/tree/dev',
  },
  {
    name: 'ToDo App',
    shortDescription: 'A simple and modern ToDo application built with Vue 3 Composition API.',
    description:
      'A simple and modern ToDo application built with Vue 3 Composition API. It allows users to add, mark, and delete tasks, set deadlines, and mark tasks as important. The app features a minimal design with glassmorphism UI, smooth shadows, and esponsive form inputs. This project demonstrates component-based architecture, state management with reactivity, and user-friendly form handling. It is designed as a portfolio project to showcase my front-end development skills with Vue.',
    techs: ' HTML5 | SCSS | Vue.js | Vite',
    page: ' wgalik.github.io/ToDo-App/',
    page_link: 'https://wgalik.github.io/ToDo-App/',
    repo: ' https://github.com/wgalik/ToDo-App/tree/main',
    repo_link: 'https://github.com/wgalik/ToDo-App/tree/main',
  },

  {
    name: 'Expense Tracker',
    shortDescription: 'A simple and interactive Expense Tracker application built with React.',
    description:
      'A modern and user-friendly Expense Tracker built with React. This application allows users to easily manage their personal finances by adding income and expenses, categorizing transactions, and instantly visualizing spending habits with interactive charts. With a clean and responsive design, it provides a clear overview of the current balance, detailed transaction history, and expense distribution across categories. The project demonstrates practical use of React hooks, form validation, state management, and data visualization (Chart.js). It is designed as a lightweight but powerful tool that can be further extended with features like editing, deleting, or saving transactions in local storage. Perfect for anyone looking to improve budgeting and track financial activity in a simple yet effective way.',
    techs: '  React | Bootstrap | Chart.js | JavaScript (ES6+) | Vite',
    page: ' wgalik.github.io/expence-tracker/',
    page_link: 'https://wgalik.github.io/expence-tracker/',
    repo: ' github.com/wgalik/expence-tracker',
    repo_link: 'https://github.com/wgalik/expence-tracker',
  },
  {
    name: 'Landing Page',
    shortDescription:
      'A responsive and modern portfolio website for photographers, built with HTML5, SCSS, jQuery, and responsive design techniques.',
    description:
      'A responsive and modern portfolio website for photographers, built with HTML5, SCSS (Sass), JavaScript (jQuery), and responsive design techniques. This project is designed for photographers who want to showcase their work in an elegant, user-friendly format.',
    techs: '  HTML5 | SCSS | Flexbox | CSS Grid | jQuery',
    page: ' wgalik.github.io/landing-page/',
    page_link: 'https://wgalik.github.io/landing-page/',
    repo: ' github.com/wgalik/landing-page',
    repo_link: 'https://github.com/wgalik/landing-page',
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
    name: 'Guitar Tuner',
    shortDescription: 'Simple guitar tuner built with HTML, CSS, and Vanilla JavaScript',
    description:
      'A simple guitar tuner built with HTML, CSS, and Vanilla JavaScript, using Tone.js for sound synthesis. This project was created as a portfolio piece to practice frontend development skills.',
    techs: '  HTML5 | CSS3 | JavaScript (ES6+) | Tone.js',
    page: ' wgalik.github.io/guitar-tuner/',
    page_link: 'https://wgalik.github.io/guitar-tuner/',
    repo: ' github.com/wgalik/guitar-tuner',
    repo_link: 'https://github.com/wgalik/guitar-tuner',
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
