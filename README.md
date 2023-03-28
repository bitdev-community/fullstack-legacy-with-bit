# Hello World Example
Hello world example that show case a fullstack application at various stages 

## Creating a Simple React App

1. Create a folder named `web` and inside that execute the following command

`npx create-react-app hello-world --template typescript`

2. Run the following command to start the API

`npm run start`


## Creating an Express API
1. Create a folder named `api` and inside that execute the following command

```
npm init -y
npm install express typescript @types/express @types/node nodemon ts-node -D
```

2. Create a tsconfig.json file at the root of your project with the following configuration:

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "lib": ["es6"],
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "strict": true,
    "moduleResolution": "node",
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "exclude": ["node_modules", "dist"]
}
```

3. Create a src folder and a index.ts file inside it with the following code

```
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
```

4. Update the scripts section of your package.json file to include the following:

```
"scripts": {
  "start": "nodemon --exec ts-node src/index.ts",
  "build": "tsc"
}
```

5. Run the following command to start the API

`npm run start`

## Common

1. Create a `.gitignore` file and add the following at the project root

```
# Ignore node_modules directories
web/node_modules/
api/node_modules/
```