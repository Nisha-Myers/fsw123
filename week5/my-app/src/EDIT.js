const EDIT = (props) => {

    return (
        <button className= 'editButton' id= {props.props.id} onClick= { () => props.props.onClick(props.props.elementId)}> {props.children}</button>
    )

};




export default EDIT;