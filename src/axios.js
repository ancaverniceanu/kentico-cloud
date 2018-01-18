import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://deliver.kenticocloud.com/3f2492c9-1690-47bb-98b7-e1a049e615ed'
});

export default instance;