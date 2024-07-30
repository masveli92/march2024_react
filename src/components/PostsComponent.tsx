import {useEffect, useState} from "react";
import {postService} from "../services/post.service";
import {IPost} from "../models/IPost";
import PostComponent from "./PostComponent";
import PostFormComponent from "./PostFormComponent";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);


        useEffect(() => {
        postService.getAll()
            .then(value => value.data)
            .then(value => setPosts(value))
    }, [posts]);



    return (
        <div>
            <PostFormComponent/>
            <hr/>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;