<template>
  <div class="container text-light" id="projects">
    <p class="mb-5 lead lh-lg">
      {{
        isEN
          ? 'This site displays 12 selected projects, and the full set of 20+ additional repositories is available on my '
          : 'Ta strona prezentuje 12 wybranych projektów, a pełny zestaw ponad 20 dodatkowych repozytoriów jest dostępny na moim '
      }}
      <a
        class="link-light link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        href="https://github.com/wgalik"
        target="_blank"
        rel="noopener noreferrer"
        >{{ isEN ? 'GitHub profile.' : 'profilu GitHub.' }}
      </a>
    </p>

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
const { isEN } = defineProps(['isEN'])
const projectsImgs: unknown[] = []

const projects = [
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
    img_folder: 'project_2',
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
    img_folder: 'project_7',
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
    img_folder: 'project_6',
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
    img_folder: 'project_10',
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
    img_folder: 'project_11',
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
    img_folder: 'project_3',
  },
  {
    name: 'E-commerce Product Page',
    shortDescription:
      'This project recreates a fully responsive product page for a fictional sneaker company.',
    description:
      'A solution for the Frontend Mentor – E-commerce product page challenge. This project recreates a fully responsive product page for a fictional sneaker company. It includes an image gallery with a lightbox, a shopping cart with full interactivity, a mobile navigation menu, and quantity controls—all built with accessibility and clean UI/UX in mind using HTML, TypeScript, and a custom Tailwind CSS configuration with components defined in @layer components.',
    techs: '  HTML5 | Tailwind CSS | TypeScript  | Vite',
    page: ' wgalik.github.io/ecommerce-product-page-main_TailwindCSS_TypeScript/',
    page_link: 'https://wgalik.github.io/ecommerce-product-page-main_TailwindCSS_TypeScript/',
    repo: ' github.com/wgalik/ecommerce-product-page-main_TailwindCSS_TypeScript',
    repo_link: 'https://github.com/wgalik/ecommerce-product-page-main_TailwindCSS_TypeScript',
    img_folder: 'project_15',
  },
  {
    name: 'Tip Calculator App',
    shortDescription:
      'A responsive Tip Calculator built with HTML, SCSS (with PostCSS), and TypeScript.',
    description:
      'A responsive Tip Calculator built with HTML, SCSS (with PostCSS), and TypeScript, designed as part of a Frontend Mentor challenge. This app allows users to calculate the tip amount per person and the total cost per person based on the bill, selected tip percentage, and number of people.',
    techs: '  HTML5 | SCSS | PostCSS  | TypeScript',
    page: ' wgalik.github.io/tip-calculator-app-main_TypeScript/',
    page_link: 'https://wgalik.github.io/tip-calculator-app-main_TypeScript/',
    repo: ' github.com/wgalik/tip-calculator-app-main_TypeScript',
    repo_link: 'https://github.com/wgalik/tip-calculator-app-main_TypeScript',
    img_folder: 'project_13',
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
    img_folder: 'project_8',
  },
  {
    name: 'Contact Form',
    shortDescription: 'The project focuses on building an accessible, responsive form.',
    description:
      'This is my solution for the Contact Form challenge from Frontend Mentor. The project focuses on building an accessible, responsive form using HTML, Tailwind CSS, and TypeScript, with custom validation and ARIA support.',
    techs: '  HTML5 | Tailwind CSS | TypeScript',
    page: ' wgalik.github.io/contact-form-main-TailwindCSS-TypeScript/',
    page_link: 'https://wgalik.github.io/contact-form-main-TailwindCSS-TypeScript/',
    repo: ' github.com/wgalik/contact-form-main-TailwindCSS-TypeScript',
    repo_link: 'https://github.com/wgalik/contact-form-main-TailwindCSS-TypeScript',
    img_folder: 'project_14',
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
    img_folder: 'project_9',
  },
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
    img_folder: 'project_1',
  },
]
const projectGlobs: Record<number, Record<string, unknown>> = {
  0: import.meta.glob('../assets/project_2/*.jpg', { eager: true, import: 'default' }),
  1: import.meta.glob('../assets/project_7/*.jpg', { eager: true, import: 'default' }),
  2: import.meta.glob('../assets/project_6/*.jpg', { eager: true, import: 'default' }),
  3: import.meta.glob('../assets/project_10/*.jpg', { eager: true, import: 'default' }),
  4: import.meta.glob('../assets/project_11/*.jpg', { eager: true, import: 'default' }),
  5: import.meta.glob('../assets/project_3/*.jpg', { eager: true, import: 'default' }),
  6: import.meta.glob('../assets/project_15/*.jpg', { eager: true, import: 'default' }),
  7: import.meta.glob('../assets/project_13/*.jpg', { eager: true, import: 'default' }),
  8: import.meta.glob('../assets/project_8/*.jpg', { eager: true, import: 'default' }),
  9: import.meta.glob('../assets/project_14/*.jpg', { eager: true, import: 'default' }),
  10: import.meta.glob('../assets/project_9/*.jpg', { eager: true, import: 'default' }),
  11: import.meta.glob(`../assets/project_1/*.jpg`, { eager: true, import: `default` }),
}

for (const key of Object.keys(projectGlobs)) {
  projectsImgs.push(Object.values(projectGlobs[Number(key)]))
}
</script>

<style></style>
