import { useState } from "react";
import {v4 as uuidV4} from "uuid";

import {toDoArray} from './Store.js';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./App.css";




const App = () => {
  const [todos, setTodos] = useState(toDoArray);
  
  const addTodo = (text) => {
    const toDoObject = {
      id: uuidV4(),
      text: text,
      isCompleted: false,
    };

    setTodos((oldTodos) => {
      return [...oldTodos, toDoObject];
    });
  };
   
  const completeTodo = (id) => {
    let temporaryToDosArray = [...todos];
    let toDoIndex = temporaryToDosArray.findIndex(element => element.id  === id);
    temporaryToDosArray[toDoIndex].isCompleted = !temporaryToDosArray[toDoIndex].isCompleted;
    setTodos(temporaryToDosArray);
  };

  const deleteTodo = (id) => {
    let temporaryToDosArray = [...todos];
    let deleteToDoArray = temporaryToDosArray.filter(element => element.id !== id);
    setTodos(deleteToDoArray);

  };

  const editTodo = (id) => {
    let temporaryToDosArray = [...todos];
    let editTodoItem = temporaryToDosArray.findIndex(element => element.id === id);
    temporaryToDosArray[editTodoItem].editState = !temporaryToDosArray[editTodoItem].editState;
    setTodos(temporaryToDosArray);
 

  };

  const submitEdit = (text, id) => {
    let temporaryToDosArray = [...todos];
    let editTodoItem = temporaryToDosArray.findIndex(element => element.id === id);
    temporaryToDosArray[editTodoItem].text = text;
    temporaryToDosArray[editTodoItem].editState = !temporaryToDosArray[editTodoItem].editState;
    Object.assign(temporaryToDosArray[editTodoItem], temporaryToDosArray[editTodoItem]);
    setTodos(temporaryToDosArray);

  };


  return (
    <>
    <h1>To Do List</h1>
      <h2>Add a NEW To Do:</h2>
      <TodoForm addTodo={addTodo}/>
      <TodoList addTodo={addTodo} 
        data={todos} 
        completeTodo={completeTodo} 
        deleteTodo={deleteTodo} 
        editTodo={editTodo} 
        submitEdit={submitEdit}/>
      
    </>

  );
}




export default App;