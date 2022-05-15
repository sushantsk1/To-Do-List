import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className ="container">
            <hr />
            <h3 className="text-center my-1">Todos List!</h3>
            {props.todos.length===0?"no todo to display":
            props.todos.map((todo)=>{
                return <TodoItem todo ={todo} key = {todo.sno} onDelete ={props.onDelete}/>
            })
            }
        </div>
    )
}
