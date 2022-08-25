import { useState } from "react";

import EDIT from "./EDIT";
import DELETE from "./DELETE";



const Todo = ({data, completeTodoProp, deleteTodoProp, editTodo, submitEdit}) => {
    const [inputValue, setInputValue] = useState("");
    const [disable, setDisable] = useState(false);
    const completeElementHandler = (id) => {
        completeTodoProp(id);
    };

    const deleteElementHandler = (id) => {
        deleteTodoProp(id);
    };

    const editTodoHandler  = ( elementId) => {
        console.log(elementId);    
        editTodo(elementId);
    };

    const submitEditHandler = (text, id) => {
        if(text.length <= 0)
        {
            return;
        }
        submitEdit(text, id);
        setInputValue("");
    };

    const setInputValueHandler = (event) => {
        setInputValue(event.target.value);
    };


    const disableHandler = (event) => {
        if(event.target.id === event.target.nextElementSibling.nextElementSibling.id)
        {
            setDisable(!disable);
            event.target.nextElementSibling.nextElementSibling.disabled = !disable; 
        }
        else
        {
            return
        }
    };



    return (
        <ul>
        {
            data.map( (element, index) => {
                
                return (
                    <>
                    {
                       !element.editState ?
                        <li key= {element.id} style= {{textDecoration : 
                            element.isCompleted === true ? 
                            "line-through" : ""}}>
                            <input key= {element.id} type= "chkbox"
                                id = {element.id}
                                checked =  {element.isCompleted} 
                                onChange = {(event) => {completeElementHandler(element.id); 
                                disableHandler(event)}}
                                />
                                {element.text}
                                <DELETE props = {{onClick: deleteElementHandler, elementId: element.id}}> X</DELETE>
                                <EDIT props = {{id:element.id, onClick: editTodoHandler, elementId: element.id}}> EDIT</EDIT>
                        </li>
                        :
                        <li key= {element.id} style= {{textDecoration : 
                            element.isCompleted === true ? 
                            "line-through" : ""} }>
                            <input type= {element.editState ? "text" : "chkbox"} 
                                checked = {element.isCompleted} 
                                value= {element.editState ? inputValue : element.text}
                                onChange= {(event) => {!element.editState ? completeElementHandler(element.id): setInputValueHandler(event);}}
                                 placeholder= {element.text}
                                 />
                                {
                                    element.editState ? "" : element.text
                                }




                            <button  id={element.id} disabled={inputValue.length > 0 ? false : true} 
                                     onClick={ () => {element.editState ? submitEditHandler(inputValue, element.id)
                                     :deleteElementHandler(element.id)}}>{element.editState ? "SUBMIT EDIT" : "DELETE"  }
                            </button>

                            <button  onClick={() => {element.editState ?  
                                    editTodoHandler(element.id) : console.log("Test")}}>
                                    {element.editState ? "CANCEL" : "EDIT"}
                            </button>
                        </li>
                    }
                    </>
                    )
            })
        }
    </ul>
    )

};

export default Todo;