import {FC, PropsWithChildren, useEffect, useState} from "react";
import {postService} from "../services/post.service";
import {IPost} from "../models/IPost";
import PostComponent from "./PostComponent";


interface IProps extends PropsWithChildren{
   trigger:boolean
}

const PostsComponent:FC<IProps> = ({trigger}) => {

    const [posts, setPosts] = useState<IPost[]>([]);


        useEffect(() => {
        postService.getAll().then(({data})=> setPosts(data))
    }, [trigger]);



    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;