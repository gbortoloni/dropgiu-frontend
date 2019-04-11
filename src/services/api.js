import axions from 'axios';

const api = axions.create({
    baseURL: 'https://dropgiu-backend.herokuapp.com/'
});

export default api;