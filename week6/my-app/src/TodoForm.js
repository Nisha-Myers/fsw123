import { useState } from "react";




const TodoForm = ({addTodo}) => {


    const [isInputEmpty, SetIsInputEmpty] = useState(false);
    const [toDoInput, setTodoInput] = useState("");

    const inputChangeHandler = (event) => {
        setTodoInput(event.target.value);
    };

    const setInputToFalseHandler = () => {
        SetIsInputEmpty(false);
    };
    
    const setInputToTrueHandler = () => {
        SetIsInputEmpty(true);

    };

    const sendTodo = (event) => {
        event.preventDefault();
        if(event.target.children[0].value === "")
        {
            setInputToTrueHandler();
        }
        else
        {
            addTodo(toDoInput);
            setInputToFalseHandler();
        }
    };

    return (
        <>
            <form onSubmit={sendTodo}>
                <input type="text" value={toDoInput} onChange={inputChangeHandler}/>
                <button>Add a To Do to the list</button>
            </form>
            {
                isInputEmpty && <h1 style={{color: "purple"}}>this To Do is currently EMPTY</h1>      
            }
          
        </>
        )
};




export default TodoForm;