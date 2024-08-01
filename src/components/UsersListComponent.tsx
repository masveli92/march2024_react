import {IUser} from "../models/IUser";
import {FC} from "react";
import {Link} from "react-router-dom";

interface IProps{
    user: IUser
}

const UsersListComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <Link to={user.id.toString()} state={user}>{user.id} {user.lastName} {user.firstName}</Link>
        </div>
    );
};

export default UsersListComponent;
