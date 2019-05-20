import React from 'react'

const UserList = (props) =>{
    return (
        <div>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Phone</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.userdata&&props.userdata.map(user=>{
                    return(<tr key={user.id}>
                        <td>{user.id}</td>
                        <td onClick={()=>props.clickUser(user)} className="username">{user.name}</td>
                        <td>{user.Area}</td>
                        <td>{user.Phone}</td>
                        <td><button className="btn btn-info" onClick={()=>props.editUser(user)}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={()=>props.deleteUser(user.id)}>Delete</button></td>
                    </tr>)
                })}
            </tbody>
            </table>
        </div>
    )
}

export default UserList