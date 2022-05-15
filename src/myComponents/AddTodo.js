import React, { useState } from 'react';
export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc ){
            alert("title or Description cannot be blank")
        }
        else{
        props.addTodo(title,desc);
       setTitle("");
       setDesc("");
        }
    }

    return (
        <div className="container my-4">
            <h3>
                Add a todo
            </h3>
            <form onSubmit = {submit}>
                <div className="mb-3">
                    <label htmlFor="exampleTitle1" className="form-label">TodoTitle</label>
                    <input type="text"  value = {title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="Title" aria-describedby="Tilte" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampledesc1" className="form-label">Todo Dscription</label>
                    <input type="text" value = {desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
            <hr />
        </div>
    )
}
