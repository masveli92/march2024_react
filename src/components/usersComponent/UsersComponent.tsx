import React, {useEffect, useState} from "react";
import UserComponent from "../userComponent/UserComponent";
import {IUser} from "../../models/IUser";
import {getAllUsers, getPostsOfUserById} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import PostsComponent from "../postsComponent/PostsComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]> ([])

    useEffect(() => {
        getAllUsers().then(value => {setUsers([...value]);
            });

    }, []);

    const getPosts = (id:number) =>{

        getPostsOfUserById(id).then(posts => setPosts([...posts]));
    }

    return (
        <div>
            <div>
            {
                users.map((user, id) => <UserComponent
                    key = {user.id}
                    user = {user}
                    getPosts={getPosts}
                /> )
            }
            </div>
            <hr/>
            <div>
                <PostsComponent posts={posts}/>
            </div>
        </div>
    );
};

export default UsersComponent;