import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '9b6c5f73a29c4b64a79f3fcab6409e39',
  },
});
