import axios from 'axios';

export const BASE_URL = 'https://www.reddit.com';

const pokemonApi = axios.create({
  baseURL: BASE_URL,
});

export default pokemonApi;
