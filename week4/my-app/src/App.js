import { useState } from 'react';
import {v4 as uuidv4} from "uuid";

import { toDoArray } from './components/Store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';





function App() {
  const [toDo, setToDo]=useState(toDoArray)
  const addToDo=(text) => {
    const toDoObject = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
    };

    setToDo((oldToDos) => {
      return[...oldToDos, toDoObject];
    });
  };


  const completeToDo=(id) => {
    let tempToDoArray=[...toDo];
    let toDoIndex=tempToDoArray.findIndex(element => element.id===id);
    tempToDoArray[toDoIndex].isCompleted=!tempToDoArray[toDoIndex].isCompleted;
    setToDo(tempToDoArray);
  };

  const deleteToDo=(id) => {
    let tempToDoArray=[...toDo];
    let deleteToDoArray=tempToDoArray.filter(element=>element.id!==id);
    setToDo(deleteToDoArray);
  }


  return (
    <div className="App">
      <h1>To Do List</h1>
      <h2>Add new To Do:</h2>
      <TodoForm addToDo={addToDo}/>
      <TodoList data={toDo} completeToDo={completeToDo} deleteToDo={deleteToDo}/>
    </div>
  );
}



export default App;