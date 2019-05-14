import React from 'react';
const person  = "Hello";

function Person(props){
    return (
        <div>
            <p>Hi my name is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default Person;
