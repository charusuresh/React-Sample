import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';
import users from './proxy/user';
import * as actiontype from './store/action';

import CreateUser from './UserCreate/UserCreate';
import UserList from './UserList/UserList';
import UserDesc from './UserDesc/UserDesc';

class App extends Component {
  constructor(props){
    super(props);
    this.updatedUser = {};
  }

  componentDidMount(){
    this.props.onUserLoad()
  }

  inputChangeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    if(this.props.editUser){ 
      this.updatedUser[key] = value;       
      let tempObj = {...this.props.editUser,...this.updatedUser}
      this.props.onClickEditUser(tempObj);
    }
    else{
      let id = this.props.users.length + 1;
      this.updatedUser.id = id;
      this.updatedUser[key] = value;
      console.log("user",this.updatedUser);
    }
  }

  submitHandler = (e) =>{
    e.preventDefault();      
    if(this.props.editUser){
      let obj = this.props.users;
      obj[this.props.editUser.id-1] = this.props.editUser;
      this.props.onUpdateUser([...obj]);
    }else{
      this.props.onAddUser([...this.props.users,this.updatedUser]);      
      this.updatedUser = {};
    }
    e.target.reset();
    console.log("event",e.target);
  }  


  render(){
    return (
    <div>
      <div className="row">
        <div className="col-5">
          <CreateUser submit={this.submitHandler} inputChange={this.inputChangeHandler} user={this.props.editUser} clearData={this.props.onClearData}/>
        </div>
        <div className="col-6">
          <UserList userdata={this.props.users} clickUser={this.props.onClickUser} editUser={this.props.onClickEditUser} deleteUser={this.props.onDeleteUser}/>
        </div>
      </div>
      {this.props.user &&
          <UserDesc user={this.props.user}/>}
    </div>
    );
  }
}


  // submitHandler = (event) =>{
  //   event.preventDefault();
  //   let data = new FormData(event.target);
  //   console.log(this.props.users.length);
  //   data.append("id","this.props.users.length+1")
  //   console.log(data);
  //   let updatedUsers = [...this.props.users,data.FormData];
  //   this.props.onAddUser(updatedUsers);
  // }

const mapStateToProps = (state) =>{
  console.log("Users",state)
  return{
    users: state.users,
    user: state.user,
    editUser: state.editUser
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onUserLoad: () =>dispatch({type:actiontype.DISPLAYLIST,payload: users}),
    onClickUser: (user) => dispatch({type:actiontype.USER, payload:user}),
    onAddUser: (updatedUsers) =>dispatch({type: actiontype.NEWUSER, payload: updatedUsers}),
    onClickEditUser: (user) => dispatch({type:actiontype.EDITUSER, payload:user}),
    onUpdateUser: (usersObj) => dispatch({type:actiontype.UPDATEUSER, payload:usersObj}),
    onDeleteUser: (userid) =>dispatch({type: actiontype.DELETEUSER, payload: userid}),
    onClearData: () => dispatch({type: actiontype.CLEARDATA })
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
