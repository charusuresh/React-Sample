import React from 'react';

function Validation (props) {
    if(props.length <= 5){
        return(
            <div>
                <p>Text too Short</p>
            </div>
        )
    }else{
        return (
            <div>
                <p>Text long enough</p>
            </div>
        )
    }
}

export default Validation;