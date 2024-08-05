import {createAsyncThunk} from "@reduxjs/toolkit";
import {postService} from "../../../services/post.service";
import {AxiosError} from "axios";

export const postLoader = createAsyncThunk(
    'postSlice/postLoader',
    async (_,thunkApi)=>{
        try {
            let response = await postService.getAll();
            return thunkApi.fulfillWithValue(response)
        } catch (e) {
            let err = e as AxiosError;
            return thunkApi.rejectWithValue(err);
        }
    }
)