import {IUser} from "../models/IUser";
import {FC} from "react";

interface IProps{
    user: IUser
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <h3> USER: {user.firstName} {user.lastName}</h3>
            <ul>
                <li>ID: {user.id}</li>
                <li>GENDER: {user.gender} </li>
                <li>AGE: {user.age} </li>
                <li>USERNAME: {user.username} </li>
                <li>EMAIL: {user.email} </li>
                <li>PHONE: {user.phone} </li>
            </ul>

        </div>
    );
};

export default UserComponent;