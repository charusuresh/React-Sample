
import * as actiontype from './action';

const initialState = {
    users: '',
    user:'',
    editUser:''
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case actiontype.DISPLAYLIST:
            return{
                ...state,users: action.payload
            }
        case actiontype.USER:
            return{
                ...state,user: action.payload
            }
        case actiontype.NEWUSER:
            return{
                ...state, users: action.payload
            }
        case actiontype.DELETEUSER:
            let updatedUsers = state.users.filter(user=>(user.id !== action.payload ))
            return{
                ...state, users: updatedUsers
            }        
        case actiontype.EDITUSER:
            return{
                ...state,...{editUser: action.payload}
            }        
        case actiontype.UPDATEUSER:
            return{
                ...state,users: action.payload
            }        
        case actiontype.CLEARDATA:
            return{
                ...state,editUser: ''
            }
        default:        
            return state;
    }
}

export default reducer