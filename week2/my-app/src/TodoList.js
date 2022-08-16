import {todo} from "./store";


function Task({tasks}) {

    const list = todo.map((task, index) =>{
        return(
            <div key= {index} >
                <label> {task.text} </label>
                <input name="item1" type="checkbox" id={index}></input>
            </div>
        )
    });

    return(
        <> {list} </>
    )
};



export default Task