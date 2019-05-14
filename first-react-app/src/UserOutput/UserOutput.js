import React, { Component } from 'react';

class UserOutput extends Component {
    render(){
        return(
            <div>
                <p>My name is {this.props.name}</p>
                <p>Hobby is {this.props.hobby}</p>
            </div>
        )
    }
}

export default UserOutput;