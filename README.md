[![Bit Org Learnbit](https://img.shields.io/badge/Bit-@learnbit-2C00C3)](https://bit.cloud/learnbit)
[![Scope Hello World](https://img.shields.io/badge/Scope-Bit--Pioneers_(2)-820596)](bit-pioneers)
    
# Fullstack Legacy App to Bit
This repository contains a fullstack application that is transformed into Bit components. The application is developed using React for the frontend `(/web)` and Express.js for the API `(/api)`. 

# Fullstack Application
You can find the initial application code in [pre-bit](https://github.com/bitdev-community/fullstack-legacy-with-bit/tree/pre-bit) branch.

```
- web (React)
   - ..
- api (Express.js)
   - ..
- .github
   - workflows
      main.yml
- package.json
- netlify.toml
- _redirects
```

## Running Locally

Running both Frontend and Backend in Parallel

```
npm run start
```

Starting the Frontend Dev Server Only

```
npm run start:web
```

Starting the Backend Dev Server Only

```
npm run start:api
```

# Transition into Bit Components
You can find the application code with Bit compnents in [post-bit](https://github.com/bitdev-community/fullstack-legacy-with-bit/tree/post-bit) branch.

```
- web (React)
   - .
   - ..
- api (Express.js)
   - .
   - ..
   
- components
   - envs
   - routes
      - goodbye
   - ui
      - loader
- .github
   - workflows
      main.yml
- package.json
- netlify.toml
- _redirects
```
