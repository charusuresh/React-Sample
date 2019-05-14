import React, { Component } from 'react';
import Person from './Person/Person';
//import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Character from './Character/Character';
import './App.css';

class App extends Component {

  state={   
    inputText: '',
    inputLength : ''
  }
  
  changeListener = (event) =>{
    this.setState({ 
      inputText: event.target.value,
      inputLength: event.target.value.length
    })
  }

  deleteCharacter = (index) =>{
    const text = this.state.inputText.split('');
    text.splice(index,1);
    const changedText = text.join('');
    this.setState({
      inputText: changedText
    })
}

  render(){
    const charList = this.state.inputText.split('').map((char,index) =>{
      return <Character text={char} delete={() =>this.deleteCharacter(index)} key={index}></Character>
    });
    return(
      <div>
        <input type="text" onChange={(event) =>this.changeListener(event)} value={this.state.inputText}/>
        <Validation length = {this.state.inputLength} />
        {charList}
      </div>
    )
  }
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
  /*state = {
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
        <button onClick={(event) => this.changeHobbyState(event)} > Change Hobby</button>
        <UserOutput name= {this.state.username[0].name} hobby={this.state.username[0].hobby}/>
        <UserOutput name= {this.state.username[1].name} hobby={this.state.username[1].hobby}/>
      </div>
    )
  }*/
}

export default App;
