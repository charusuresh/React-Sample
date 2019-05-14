import React from 'react';

const Character = (props) =>{

    
    return(
        <div onClick={props.delete}>{props.text}</div>
    )
     
}

export default Character;