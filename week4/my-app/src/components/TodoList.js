import Todo from "./Todo";




const TodoList = ({data, completeToDo, deleteToDo}) => {
    return(
        <Todo data={data} completeToDoProp={completeToDo} deleteToDoProp={deleteToDo}/>
    )
};

export default TodoList; 