import axios from 'axios';

const api = axios.create({
    baseURL: '',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default api;