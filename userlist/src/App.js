import React, {Component} from 'react';
import './App.css';

import users from './data/userlist';
import User from './User/User';
import CreateUser from './CreateUser/CreateUser';

class App extends Component{
  
  state = {
    users: users,
    formData: '',
    updatedUser: '',
    userIndex: ''
  };  

  deleteHandler = (userid) =>{
    console.log("Delete Handler",userid);
    let updatedUsers = this.state.users.filter(user =>{
      return (user.id !== userid);
    })
    this.setState({
      users: updatedUsers
    })
  }

  // changeInputHandler = (e) => {
  //   const key = e.target.name;
  //   const value = e.target.value;
  //     let id = this.state.users.length + 1;
  //     let object = {...this.state.formData,"id":id,[key]: value}
  //     console.log("data in change",key,value,id,object);
  //  // }
  //   this.setState({
  //     formData: object
  //   })
  //   console.log("Input Change Handler",this.state.formData);
  // }

  changeInputHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    let object,uObject;
    if(this.state.userIndex){
      //let tempObj = {...this.state.updatedUser[0]};
      let tempObj = {...this.state.updatedUser[0],[key]: value}
      this.setState({
        updatedUser: [tempObj]
      })
      object = [...this.state.users]
      object[this.state.userIndex] = tempObj;
    }
    else{
      let id = this.state.users.length + 1;
      object = {...this.state.formData,"id":id,[key]: value}
      console.log("Object in add ",object)
    }
    // else{
    //   console.log("formdata",this.state.formData)
    //   let id = this.state.users.length + 1;
    //   object = {...object,"id":id,[key]: value};
    //   // object = [...this.state.users, tempObj]
    //   // console.log("new",tempObj);
    // }
    this.setState({
      formData: object,
    })
  }  

  saveUserHandler = (e) => {
    e.preventDefault();
    if(this.state.userIndex){
      this.setState({
        users: this.state.formData
      })
    }else{
      this.setState({
        users: [...this.state.users,this.state.formData]
      })
    }
  }

  editUserHandler = (userid,index) =>{
    const editUser = this.state.users.filter(user =>{
      return (userid === user.id)
    })
    this.setState({
      updatedUser: editUser,//this.state.users[index]
      userIndex: index
    })
  }

  cancelHandler = (e) =>{
    e.preventDefault();
    this.setState({
      updatedUser: '',
      userIndex:''
    })
  }
  
  render(){
    console.log("state",this.state)
    return(
      <div>
        <CreateUser submit={this.saveUserHandler} cancel={this.cancelHandler} updatedUser={this.state.updatedUser} inputChange={this.changeInputHandler}/>
        <User users={this.state.users} editUser={this.editUserHandler} deleteUser={this.deleteHandler}/>
      </div>
    )
  }
}

export default App;

/*{  props.users.map( user =>{
  <ul>
      <li className="d-ib">{user.name}</li>
      <li className="d-ib">{user.Area}</li>
      <li className="d-ib">{user.Phone}</li>
      <li><button>Edit</button></li>
      <li><button onClick={props.clicked}>Delete</button></li>
  </ul>
   editUserHandler = (userid) =>{
    const editUser = this.state.users.filter(user =>{
      return (userid === user.id)
    })
    this.setState({
      updatedUser: editUser//this.state.users[index]
    })
  }

})


} -*/

   /* 
   changeInputHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
      let id = this.state.users.length + 1;
      let object = {...this.state.formData,"id":id,[key]: value}
   // }
    this.setState({
      formData: object
    })
    console.log("Input Change Handler",this.state.formData);
  }

  saveUserHandler = (e) => {
    e.preventDefault();
    this.setState({
      users: [...this.state.users,this.state.formData]
    })
  }


   let object;
   
                <button onClick={ () => props.editUser(user.id)}>Edit</button>
   if(userid){
      let temp = this.state.users.filter(user =>{
        return (userid === user.id)
      })
      
      console.log("fnjsdfjd",temp)
      temp.map(res =>{
        res[key] = value;
        console.log("dvnkv",res)
        return 0
      })
      console.log("fnjsdfjd",temp)
    }
    else{*/
