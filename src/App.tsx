import React, {FC, useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {userActions} from "./redux/slices/userSlice";
import {postActions} from "./redux/slices/postSlice";

const App: FC = () => {
  let {userSlice: {users, isLoaded}, postSlice: {posts}} = useAppSelector(state => state);


  let dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.loadUsers());
    dispatch(postActions.postLoader())
  }, []);


  return (
    <>
      {!isLoaded && <div> Loading in process...</div>}

      {users.map(user => <div>{user.id} {user.name}</div>)}
        <hr/>
      {posts.map(post => <div> {post.id} {post.title}</div>)}
    </>
  );
}

export default App;
