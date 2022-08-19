import { useState } from "react";




const TodoForm = ({addToDo})=>{
    const [emptyInput, setEmptyInput]=useState(false);
    const [toDoInput, setToDoInput]=useState("");
    const inputChangeHandler=(event)=>{
        setToDoInput(event.target.value);
    };
    const setFalseHandler=()=>{
        setEmptyInput(false);
    };
    const setTrueHandler=()=>{
        setEmptyInput(true);
    };
    const sendToDo=(event)=>{
        event.preventDefault();
        if(event.target.children[0].value==="") 
        {
            setTrueHandler();
        }
        else
        {
            addToDo(toDoInput);
            setFalseHandler();
        }
    };

    
    return(
        <>
            <form onSubmit={sendToDo}>
                <input type="text" value={toDoInput} onChange={inputChangeHandler}/>
                <button>ADD</button>
            </form>
            {
                emptyInput && <h3 style={{color:"red"}}>To Do is currently VACANT</h3>
            }
        </>
    )
};



export default TodoForm;