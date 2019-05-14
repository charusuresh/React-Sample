import React, { Component } from 'react';
//import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {

  /*render(){
    const title ="Welcome to react";
    return (
      <div className="App">
        Hi, {title}
      <Person name="Madhu" age="28"/>
      <Person name="Tamil" age="27"> and my hobby is skiing </Person>
      </div>
    );
  }*/
  state = {
    username : [
      {
        name:'Madhu',
        hobby:'Cricket'
      },
      {
        name:'Tamil',
        hobby:'Chess'
      }
    ]
  }

  changeHobbyState = (event) =>{
    console.log(event);
    this.setState({
        username : [
          {
            name:'Madhu',
            hobby: event.target.value
          },
          {
            name:'Tamil',
            hobby:'Chess'
          }
        ]
      }
    )
  }

  render(){
    return(
      <div>
        <UserInput click={this.changeHobbyState} name= {this.state.username[0].hobby}/>
        <UserOutput name= {this.state.username[0].name} hobby={this.state.username[0].hobby}/>
        <UserOutput name= {this.state.username[1].name} hobby={this.state.username[1].hobby}/>
      </div>
    )
  }
}

export default App;
