import React from "react"



class Tasks extends React.Component{
    constructor(props) {
        super(props)
}

    deleteTodo() {
        this.props.deleteTodo(this.props.deleteTodo(this.props.id));
    }
    completeTodo() {
        this.props.completeTodo(this.props.completeTodo(this.props.id));
    }

    
    render() {
        let styleComplete = {textDecorationLine: 'none'}
        if (this.props.isCompleted){
            styleComplete = {textDecorationLine: 'line-through'}
        }

        return (
            <div className ="toDiv">
                <div>
                    <input type="chkbox"className= "chkbox2" id={this.props.id} onClick={() => {this.completeTodo()}} checked={this.props.isCompleted}/>
                </div>
                <div>
                    <label style={styleComplete} for={this.props.id}> {this.props.text} </label>
                </div>
                <div>
                    <button className="btn" onClick={()=>{this.deleteTodo()}}>x</button>
                </div>

            </div>
        );
    }
}



export default Tasks