import axiosService from "./axios.service";
import {urls} from "../configs/urls";
import {IRes} from "../types/resType";
import {IPost} from "../models/IPost";


const postService = {
    getAll:():IRes<IPost[]> => axiosService.get(urls.posts),
    create:(data:IPost):IRes<IPost> => axiosService.post(urls.posts, data)
}
export {postService}