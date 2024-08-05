import React, {FC, useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {userActions} from "./redux/slices/userSlice";

const App: FC = () => {
  let {userSlice: {users, isLoaded}}= useAppSelector(state => state);

  let dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.loadUsers());
  }, []);

  return (
    <>
      {!isLoaded && <div> Loading in process...</div>}

      {users.map(user => <div>{user.id} {user.name}</div>)}
    </>
  );
}

export default App;
