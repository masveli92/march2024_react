import {baseURL} from "../configs/urls";
import axios from 'axios';

const axiosService = axios.create({
    baseURL:baseURL,
    headers: {}
});

export default (axiosService)