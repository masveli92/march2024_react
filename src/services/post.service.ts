import axiosService from "./axios.service";
import {urls} from "../configs/urls";
import {IPost} from "../models/IPost";


const postService = {
    getAll:async () => {
       const response = await axiosService.get<IPost[]>(urls.posts.base);
       return response.data
    },

}
export {postService}