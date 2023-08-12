# Pokédex Challenge

## What's it?

This project aims to solve the following challenge:

Using the free [PokeAPI API](https://pokeapi.co), develop a dashboard composed of two distinct sections/screens.

**Home screen:**

On this screen, the user will be able to enter the name of the desired Pokémon. After insertion, the following data will be displayed:

Pokemon photo (sprite);
Pokémon moves;

**Second Section/Screen:**

This section will be dedicated to listing all Pokémon available in the API. Only the name and photo (sprite) of each Pokémon will be presented,
Navigation performed through pagination.

*Note: It is imperative that the dashboard design is clear and intuitive,
providing the user with a friendly experience during its use. In addition
In addition, ensure that all information is accurate and comes from
directly from PokeAPI.*

## Tecnologies

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- 🎨 [Chakra-UI](https://chakra-ui.com/) - Create accessible React apps with speed
- ⚡ [React-Query](https://tanstack.com/query/latest/) - Hooks for fetching, caching and updating asynchronous data in React
- 💎 [TypeScript](https://www.typescriptlang.org/) - Why not?!
- 🔨 [EsLint](https://eslint.org/) - Pluggable JavaScript linter
- 🌀 [Prettier](https://prettier.io) - Opinionated Code Formatter
- 🐺 [Husky](https://github.com/typicode/husky) - Native Git hooks
- ⚙️ [Jest](https://jestjs.io/) - Testing libraries
- ⌨️ Absolute Imports
- 📑 [Commitlint](https://commitlint.js.org/) - Linting your commits based on commit convention

### Run Project

#### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)

```bash
# Clone project
$ git clone https://github.com/arimariojesus/cyberlabs-challenge.git

# Access project folder
$ cd cyberlabs-challenge

# Install the dependencies
$ yarn install

# Start dev server
$ yarn dev
```

Your server will be online on host http://localhost:5173

## Available commands

<p>In this project, you can run the following scripts:</p>

| Script        | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| yarn dev      | Runs the app in the development mode.                                       |
| yarn build    | Builds the app for production to the `dist` folder.                         |
| yarn preview  | Builds the app for production to the `dist` folder, and run locally server. |
| yarn lint     | Runs the Eslint and show code problems                                      |
| yarn lint:fix | Runs the Eslint and fix the code problems                                   |
| yarn format   | Runs the Prettier and fix code style                                        |
| yarn compile  | Runs the TS Compiling                                                       |
| yarn test     | Run the app tests.                                                          |
| yarn commit   | Open the CZ CLI to create a message to your commit.                         |

## Features

- [x] Search Pokémon
- [x] List Pokémons
- [x] Pokémon details page
- [x] Paginate list of Pokémons
- [x] Paginate list of moves
- [x] Copy Pokémon number
- [x] Responsiveness

## Deploy

https://cyberlabs-pokedex-challenge.vercel.app/

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

<p align="center">
  Made with 💜 by <a href="https://www.linkedin.com/in/arimariojesus">Ari Jesus</a>
</p>
