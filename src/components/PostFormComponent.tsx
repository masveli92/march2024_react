import {useForm} from "react-hook-form"
import {IPost} from "../models/IPost";
import {FC, useState} from "react";
import {postService} from "../services/post.service";

export interface IFormProps {
    title: string,
    body: string,
    userId: number
}

const PostFormComponent: FC = ( ) => {
    let {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: "all"
    })

    const[post, setPost] = useState<IPost|null>(null)

    const postSender = (post:IFormProps) => {
        postService.create(post)
            .then(value => setPost(value.data))
    };

    return (
        <div>
            {post && <h2> saved post: <br/> ID: {post.id} <br/> TITLE: {post.title} </h2>}
            <form onSubmit={handleSubmit(postSender)}>
                <input type="text" placeholder={'title'} {...register('title')}/>
                <br/>
                <input type="text" placeholder={'body'} {...register('body',)}/>
                <br/>
                <input type="number" placeholder={'userId'} {...register('userId',)}/>
                <br/>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default PostFormComponent;