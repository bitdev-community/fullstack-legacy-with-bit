[![Bit Org Learnbit](https://img.shields.io/badge/Bit-@learnbit-2C00C3)](https://bit.cloud/learnbit)
[![Scope Hello World](https://img.shields.io/badge/Scope-Bit--Pioneers_(2)-820596)](bit-pioneers)
    
# Fullstack Legacy App to Bit
This repository contains a fullstack application that is transformed into Bit components. The application is developed using React for the frontend `(/web)` and Express.js for the backend API `(/api)`. 

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

# Getting Started
Let's get started using the application code.

## Cloning the Repository

Clone the repository using the below command.

```
git clone https://github.com/bitdev-community/fullstack-legacy-with-bit
```

Then switch to the branch:

```
git checkout pre-bit
```

## Running Locally

Running both Frontend and Backend in Parallel.

```
npm run start
```

Starting the Frontend Dev Server Only.

```
npm run start:web
```

Starting the Backend Dev Server Only.

```
npm run start:api
```

## Deploying the Application
The frontend application is deployed to Netlify and the backend to a virtual machine using ssh. To deploy the application to Netlify, you can configure the build using Netlify UI. You can find the following Netlify configuration files.

```
_redirects
netlify.toml
```

The backend deployment is configured using GitHub actions. You can find the deployment configuration in:

```
.github/workflows/main.yml
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

## Running Locally

Running the Bit Development Server

```
bit start
```

## Deploying the App Components

Build and Tag the React App Component to Deploy it to Netlify, and Express App Component to a Virtual Machine
**Prerequisite:** Update the Netlify Credentials in React App Component and SSH Confiugration in the Express App Component

```
bit tag -m "tagging components"
```

