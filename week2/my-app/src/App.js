import Task from './TodoList';
import {todo} from './store';
import './App.css';



function App() {
  return (

    <div>
    <h1>To do List</h1>
   
    <h4>
      <ul>
      <Task tasks = {todo} />
      </ul>
    </h4>
    </div>
  );
}



export default App;