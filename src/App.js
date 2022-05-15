import './App.css';
import Header from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";
import { AddTodo } from "./myComponents/AddTodo";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("component is delete", todo)
    // Deleting this way is not working
    // let index = todos.indexOf(todo);
    // todo.splice(index, 1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.getItem("todos");
  }
  const addTodo = (title, desc) => {
    console.log("I am add title and desc", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);



  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <>
      <Router>
        <Header title="MyTodosList" searchBar={false} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
