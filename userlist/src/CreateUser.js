import React from 'react';

const CreateUser = (props) => {    

    return(
        <div>
            <form>
            <label>Name</label>
            <input type="text" name="name" onChange={props.inputChange}/>
            <label>Area</label>
            <input type="text" name="Area" onChange={props.inputChange}/>
            <label>Phone</label>
            <input type="text" name="Phone" onChange={props.inputChange}/>

            <button onClick={props.submit}>Save</button>
            </form>
        </div>
    )
}

export default CreateUser