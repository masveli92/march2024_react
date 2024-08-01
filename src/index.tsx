import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CustomErrorLayout from "./layouts/CustomErrorLayout";
import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import TodoPage from "./pages/TodoPage";
import UserPage from "./pages/UserPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {path:'/',
        element: <MainLayout/>,
        errorElement: <CustomErrorLayout/>,
        children: [
            {index:true, element: <HomePage/>},
            {path:'users', element: <UsersPage/>,
            //     children:[
            //         {path:':id', element: <UserPage/>}]
            },
            {path:'users/:id', element: <UserPage/>},
            {path:'posts', element: <PostsPage/>},
            {path:'todos', element: <TodosPage/>, children:[
                    {path:':id', element: <TodoPage/>}
                ]},
        ]},


]);

root.render(
    <RouterProvider router={router}/>
);
