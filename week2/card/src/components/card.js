import React from 'react';



function Card(props) {
    const divStyle = {
        backgroundColor: props.bgColor,
        width: props.width,
      };

      
  return (
    <div>
        <card style={divStyle}>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        <hr />
        <h6>{props.info}</h6>
        </card>        
    </div>
  );
}



export default Card;