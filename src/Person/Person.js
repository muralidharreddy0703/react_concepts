import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Person">
          <p>i am the {props.name} and  i am {props.age} years old</p>  
           <h2>{props.children}</h2>
           <input type="text" onChange={props.changed} value={props.name}  />
        </div>
    
    )
};

export default person;