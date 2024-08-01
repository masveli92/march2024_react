import UsersComponent from "../components/UsersComponent";
import {useEffect, useState} from "react";
import {IUser} from "../models/IUser";
import {Outlet} from "react-router-dom";

const UsersPage = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
                .then(value => value.json())
                .then(value => {
                    setUsers(value.users)
                });
    }, []);

    return (
        <div>
            <Outlet/>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;