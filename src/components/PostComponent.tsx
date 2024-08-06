import {IPost} from "../models/IPost";
import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren{
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