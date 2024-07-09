// const baseUrl = 'https://jsonplaceholder.typicode.com'
//
// const getAllUsers = async ()=> {
//     return await fetch(baseUrl + '/users')
//         .then(value => value.json())
// }
// const getPostsOfUserById = async (id:number)=> {
//     return await fetch(baseUrl + '/users/' + id + '/posts')
//         .then(value => value.json())
// }
//
// export {getAllUsers, getPostsOfUserById}

import axios from 'axios';

let axiosInstance =  axios.create({
baseURL: 'https://jsonplaceholder.typicode.com',
})

axiosInstance.interceptors.request.use(request => {
    request.headers.set('Content-Type', 'application/json');
    request.headers.set('asdwcwcecds', 'efrtrytthgf');
    return request
})

const getAllUsers = async ()=> {
   return await axiosInstance.get('/users').then((responce)=>{
       console.log(responce);
       return responce.data;
   })
}
const getPostsOfUserById = async (id:number)=> {
    return await axiosInstance.get ('/users/' + id + '/posts').then((response)=>response.data)
}

export {getAllUsers, getPostsOfUserById}