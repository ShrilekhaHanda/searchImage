import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0c5e188dac6f92fa3d2c711e22f00d3c03ebe5f9b6eacf3c234eec5f2c03e466'
    }
});