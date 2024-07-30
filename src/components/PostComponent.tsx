import {IPost} from "../models/IPost";
import {FC} from "react";

interface IProps {
    post: IPost
}

const PostComponent:FC<IProps>  = ({post}) => {


    return (
        <div>
           <div>ID: {post.id}</div>
           <div>TITLE: {post.title}</div>
           <div>BODY: {post.body}</div>
           <div>USER_ID: {post.userId}</div>
            <hr/>
        </div>
    );
};

export default PostComponent;