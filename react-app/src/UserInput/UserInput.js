import React from 'react';

function UserInput (props){
    return(
        <div>
            <input type="text" onChange={props.click} value={props.name}/>
        </div>
    )
}

export default UserInput;