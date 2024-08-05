import {IUser} from "../../models/IUser";
import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {loadUsers} from "../reducers/users/user.extra.reducers";


type UserSliceType = {
    users: IUser[],
    isLoaded: boolean
}

const userInitState:UserSliceType = {
    users: [],
    isLoaded: false
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers:{
        xxx:(state)=>{
            state.isLoaded = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isLoaded = true;
            })
            .addMatcher( isFulfilled(loadUsers), (state, action) =>{
                // state.isLoaded = true;
            });
    }

})

export const userActions = {
    ...userSlice.actions,
    loadUsers
}