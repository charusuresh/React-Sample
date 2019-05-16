import React, { Component } from 'react';
import '../App.css';

/*class User extends Component {

    render(){
        console.log("abc",this.props.users)
        return(
            <div>
            {   this.props.users.map((user)=>{
            return(
                <div key={user.id}>
                    <div>{user.name}</div>
                    <div>{user.Area}</div>
                    <div>{user.Phone}</div>
                    <button>Edit</button>
                    <button onClick={ () => this.props.clicked(user.id)}>Delete</button>
                </div>
                )
            })
            
            }  
            </div>        
        )
    }
}*/

const User = (props) =>{
    return(
        <div>
        {   props.users.map((user,index)=>{
        return(
            <div key={user.id} className="user-container">
                <div>{user.name}</div>
                <div>{user.Area}</div>
                <div>{user.Phone}</div>
                <button onClick={ () => props.editUser(user.id,index)}>Edit</button>
                <button onClick={ () => props.deleteUser(user.id)}>Delete</button>
            </div>
            )
        })
        
        }  
        </div>        
    )
}

export default User;