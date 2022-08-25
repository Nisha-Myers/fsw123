import React from 'react';

import todo from './Store';
import Tasks from './todoList'
import './App.css';



class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      aryTodos: todo.map((item, index) =>
        ({
          key: index,
          id: item.id,
          text: item.text,
          isCompleted: item.isCompleted
        })
      )
  }
}


 completeTodo = (e) =>{
  if (e) {
    let aryUpdatedTodos = [...this.state.aryTodos]
    let index = aryUpdatedTodos.findIndex (item => item.id ===e);
    let updatedTodo = {...aryUpdatedTodos[index]}
    if(updatedTodo.isCompleted) {
      updatedTodo.isCompleted = false
    } else{
      updatedTodo.isCompleted = true
    }
    aryUpdatedTodos[index] = updatedTodo
    this.setState({
      aryTodos: aryUpdatedTodos
    });
  }
}


deleteTodo = (e) => {
  if (e) {
    let aryDeletedTodos = [...this.state.aryTodos]
    let index = aryDeletedTodos.findIndex( item => item.id === e);
    aryDeletedTodos.splice(index, 1)
    this.setState({
      aryTodos: aryDeletedTodos
    });
  }  
}

render() {
  const todoLists = this.state.aryTodos.map((item, index) => {
    return (
      <Tasks
      key = {item.key}
      id = {item.id}
      text = {item.text}
      isCompleted = {item.isCompleted}
      completeTodo = {this.completeTodo}
      deleteTodo = {this.deleteTodo}
      />
    )
  }
  );



  return (
    <div className= 'doS'>
      <div className= "doS">To Do List</div>
      {todoLists}
    </div>
    );
  }
}




export default TodoApp;