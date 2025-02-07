<!--
Hey, thanks for using the awesome-readme-template template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="center">

  <img src="assets/logo.png" alt="logo" width="200" height="auto" />
  <h1>Code Black Agency Site</h1>
  
  <p>
    Enjoy React/TS components from my agency site.
  </p>
  
  
<!-- Badges -->
<p>
  <a href="https://github.com/Louis3797/awesome-readme-template/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/Louis3797/awesome-readme-template" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/Louis3797/awesome-readme-template" alt="last update" />
  </a>
  <a href="https://github.com/Louis3797/awesome-readme-template/network/members">
    <img src="https://img.shields.io/github/forks/Louis3797/awesome-readme-template" alt="forks" />
  </a>
  <a href="https://github.com/Louis3797/awesome-readme-template/stargazers">
    <img src="https://img.shields.io/github/stars/Louis3797/awesome-readme-template" alt="stars" />
  </a>
  <a href="https://github.com/Louis3797/awesome-readme-template/issues/">
    <img src="https://img.shields.io/github/issues/Louis3797/awesome-readme-template" alt="open issues" />
  </a>
  <a href="https://github.com/Louis3797/awesome-readme-template/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/Louis3797/awesome-readme-template.svg" alt="license" />
  </a>
</p>
   
<h4>
    <a href="https://github.com/Louis3797/awesome-readme-template/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Installation](#gear-installation)
  * [Running Tests](#test_tube-running-tests)
  * [Run Locally](#running-run-locally)
  * [Deployment](#triangular_flag_on_post-deployment)
- [Usage](#eyes-usage)
- [Roadmap](#compass-roadmap)
- [Contributing](#wave-contributing)
  * [Code of Conduct](#scroll-code-of-conduct)
- [License](#warning-license)
- [Acknowledgements](#gem-acknowledgements)

  
<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
  <img src="/assets/component.png" alt="screenshot" />
</div>


<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">Bootstrap</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <p>N/A</p>
</details>

<details>
  <summary>Database</summary>
  <p>N/A</p>
</details>

<details>
<summary>DevOps</summary>
  <p>N/A</p>
</details>

<!-- Features -->
### :dart: Features

- Hero video with transparent background, hover effect
- Animated text
- Magic cursor
- Accordion FAQ using bootstrap
- Panel Pricing using Tab Indicator and bootstrap
- Hover effects using useHoverEffect
- Notch Scroll menu option
- Panning testimonials and partners

<!-- Color Reference -->
### :art: Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| Secondary Color | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| Accent Color | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| Text Color | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites

This site uses React + TypeScript + Vite

A minimal setup to get React working in Vite with HMR and some ESLint rules and Yarn as package manager:

1. Install Node and npm
2. Install Yarn
```bash
  npm install --global yarn
```

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
<!-- Installation -->
### :gear: Installation

1. Clone the project

```bash
  git clone https://github.com/Louis3797/awesome-readme-template.git
```

2. Go to the project directory

```bash
  cd my-project
```
3. Install packages: yarn install 

4. Add one of two plugin options for Fast Refresh

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
```bash
  npm i -D @vitejs/plugin-react
```
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```bash
  npm i -D @vitejs/plugin-react-swc
```

<!-- Running Tests -->
### :test_tube: Running Tests

To run tests, run the following command

```bash
  yarn test test
```

<!-- Run Locally -->
### :running: Run Locally

1. Start project locally with npm run dev or yarn dev
2. Make changes
3. Build app for production: npm run build or yarn build



<!-- Deployment -->
### :triangular_flag_on_post: Deployment

To deploy this project run

```bash
  yarn dev
```


<!-- Usage -->
### :eyes: Usage

Project Structure: 
root/
  ├─ .gitignore
  ├─ .eslint.config.js
  ├─ index.html
  ├─ package.json
  ├─ README.md
  ├─ tsconfig.app.json
  ├─ tsconfig.json
  ├─ tsconfig.node.json
  ├─ vercel.json
  ├─ vite.config.ts
  ├─ yarn.lock

public/
  ├─ assets

src/
  ├─ components
  ├─ css
  ├─ fonts
  ├─ hooks
  ├─ jsonData
  ├─ pages/
  ├─ App.tsx
  ├─ main.tsx
  ├─ Routers.tsx
  ├─ vite-env.d.ts

  Components: All components have a basic structure and config so that you can easily copy a component with its styles to your project.

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

<!-- Roadmap -->
## :compass: Roadmap

* [x] Change nav menu pop out
* [ ] Change service page
* [ ] Proofread copy

<!-- License -->
## :warning: License

Distributed under the MIT License. See LICENSE.txt for more information.

<!-- Acknowledgments -->
## :gem: Acknowledgements

Here are useful resources and libraries used in this project.

 - [Shields.io](https://shields.io/)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#travel--places)
 - [Readme Template](https://github.com/othneildrew/Best-README-Template)
 - [Aixor Template](https://themeforest.net/user/validthemes/portfolio)
  - [Unsplash Photos](https://unsplash.com)

