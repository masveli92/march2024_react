import {IUser} from "../models/IUser";
import {FC} from "react";
import UsersListComponent from "./UsersListComponent";


interface IProps{
    users: IUser[]
}

const UsersComponent: FC<IProps> = ({users}) => {


    return (
        <div>
            {
                users.map(user => (<UsersListComponent key={user.id}  user={user}/>))
            }
        </div>
    );
};

export default UsersComponent;