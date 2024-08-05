import axiosService from "./axios.service";
import {urls} from "../configs/urls";
import {IUser} from "../models/IUser";


const userService = {
    getAll:async () => {
       const response = await axiosService.get<IUser[]>(urls.users.base);
       return response.data
    },

}
export {userService}