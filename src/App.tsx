import React, {FC, useState} from 'react';
import './App.css';
import PostsComponent from "./components/PostsComponent";
import PostFormComponent from "./components/PostFormComponent";


const App = () => {

    const [trigger, setTrigger] = useState<boolean>(false)

  return (
    <>
        <PostFormComponent setTrigger={setTrigger}/>
        <hr/>
        <PostsComponent trigger = {trigger}/>
    </>
  );
}

export default App;
