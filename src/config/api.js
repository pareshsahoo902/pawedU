import axios from 'axios';

const instance = axios.create({
    baseURL:'https://pawedu-backend.herokuapp.com'
})

export default instance;