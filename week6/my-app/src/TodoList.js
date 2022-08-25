import Todo from './Todo';


const TodoList = ({data, completeTodo, deleteTodo, editTodo, submitEdit}) => {
    

    return (
        <>
        {
            data.length > 0 ?
        
            <Todo data={data} completeTodoProp={completeTodo} deleteTodoProp={deleteTodo} editTodo={editTodo} submitEdit={submitEdit}/>
            :
            <h3 className='empty-list__header'>To Do List Empty</h3>
        }
        </>
    )
};

export default TodoList;