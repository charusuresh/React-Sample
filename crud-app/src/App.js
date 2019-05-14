import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 
  state = {  
    inputText: '',
    itemList:[],
    updatedIndex: ''
  }

  textChangeHandler = (event) =>{
    this.setState({ inputText: event.target.value })
  }
  submitHandler = () =>{
    console.log("inuptText",this.state.inputText);
    let tempItemList= [...this.state.itemList,this.state.inputText]
    this.setState({ itemList:tempItemList });   
  }

  valueHandler = (value,ind) => {
    let updatedInputText = value;
    this.setState({ 
      inputText: updatedInputText,
      updatedIndex: ind
    });
  }

  updateHandler = () =>{
    const value = this.state.inputText;
    const id = this.state.updatedIndex
    const updatedItem = this.state.itemList.map( (item,index) =>{
        return (index == id? value:item)      
    })
    console.log("item updates", updatedItem, [...updatedItem]);
    this.setState({ itemList: [...updatedItem]})

  }

  deleteHandler = (ind) => {
    let updatedItemList = this.state.itemList.filter((item,index) => index !== ind );
    this.setState({ itemList: updatedItemList });
  }

  render(){    

    const style = {
      'listStyleType': "none",
      'display':'inline-block'
    }
    const btnStyle = {
      'display':'inline-block'
    }
    console.log("itemList",this.state.itemList);
    
    let items = null;
    if(this.state.itemList){
      items = this.state.itemList.map( (data,index) =>{
        return (
          <div key={index}>
            <ul style={style}><li onClick={() => this.valueHandler(data,index)}>{data}</li></ul>       
            <button style={btnStyle} onClick={() => this.deleteHandler(index)}>Delete</button>     
          </div>
        )
      })
    }

    return (
      <div>
        <div>
          <input type="text" onChange={this.textChangeHandler} value={this.state.inputText} />
          <button onClick={this.submitHandler}> Submit </button>
          <button onClick={this.updateHandler}> Update </button> 
        </div>       
        <div>    
          {items}              
        </div>
      </div>
    )
  }
}

export default App;
