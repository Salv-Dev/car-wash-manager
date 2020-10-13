import axios from 'axios';

const api = axios.create({
    baseURL: 'https://slimy-bear-15.loca.lt/api/v1/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default api;