import axiosService from "./axios.service";
import {urls} from "../configs/urls";
import {IFormProps} from "../components/PostFormComponent";
import {IPost} from "../models/IPost";

const postService = {
    getAll:() => axiosService.get(urls.posts),
    create:(post:IFormProps) => axiosService.post(urls.posts, post)
}
export {postService}