import {SubmitHandler, useForm} from "react-hook-form"
import {IPost} from "../models/IPost";
import {FC, PropsWithChildren} from "react";
import {postService} from "../services/post.service";
import {ISetState} from "../types/resType";

interface IProps extends PropsWithChildren{
    setTrigger:ISetState<boolean>
}

const PostFormComponent: FC<IProps> = ({setTrigger} ) => {
    const {register,handleSubmit,reset,formState: {isValid}} = useForm<IPost>({
        mode: "all"
    })

    const postSender: SubmitHandler<IPost> = async (post) => {
       await postService.create(post)
        setTrigger(prevState => !prevState)
        reset()
    };

    return (
        <div>
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