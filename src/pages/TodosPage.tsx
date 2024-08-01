import {useEffect, useState} from "react";
import {ITodo} from "../models/ITodo";
import {Outlet} from "react-router-dom";
import TodoComponent from "../components/todo.Component/TodoComponent";

const TodosPage = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then(value => value.json())
            .then(value => {
                setTodos(value.todos)
            } );
    }, []);

    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <TodoComponent todos={todos}/>
        </div>
    );
};

export default TodosPage;