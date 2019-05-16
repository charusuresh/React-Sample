import React from 'react';
import '../App.css';

const CreateUser = (props) => {  
    console.log("create user component", props.updatedUser); 
    return(
        <div>
            <form>
                <label>Name</label>
                <input type="text" name="name" onChange={props.inputChange} value={props.updatedUser?props.updatedUser[0].name:EventTarget.value}/>
                <label>Area</label>
                <input type="text" name="Area" onChange={props.inputChange} value={props.updatedUser?props.updatedUser[0].Area:EventTarget.value}/>
                <label>Phone</label>
                <input type="text" name="Phone" onChange={props.inputChange} value={props.updatedUser?props.updatedUser[0].Phone:EventTarget.value}/>
                <div>
                    <button onClick={props.submit}>Save</button>
                    <button onClick={(event) =>props.cancel(event)}>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default CreateUser