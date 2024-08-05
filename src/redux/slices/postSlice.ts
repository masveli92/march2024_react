import {IPost} from "../../models/IPost";
import {createSlice} from "@reduxjs/toolkit";
import {postLoader} from "../reducers/posts/post.extra.reducer";

type PostSliceType = {
    posts: IPost[],
    // isLoaded: boolean
}

const postInitState: PostSliceType = {
    posts: [],
    // isLoaded: false
}

export const postSlice = createSlice({
    name: "postSlice",
    initialState: postInitState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(postLoader.fulfilled, (state, action) =>{
                state.posts = action.payload;
            })
    }
})

export const postActions = {
    ...postSlice.actions,
    postLoader
}