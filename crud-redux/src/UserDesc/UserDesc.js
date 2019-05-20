import React from 'react';

const UserDesc = (props) =>{
    console.log("props",props);
    return(
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.user.Area}</h6>
                    <p className="card-text">{props.user.Phone}</p>
                   
                </div>
            </div>
        </div>
    )
}

export default UserDesc