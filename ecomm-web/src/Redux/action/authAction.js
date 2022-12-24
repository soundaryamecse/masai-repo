import axios from "axios";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE,LOGOUT } from "../actionTypes";


export const userLoginRequest = () => ({
    type: USER_LOGIN_REQUEST
  });
  
  export const userLoginSuccess = (payload) => ({
    type: USER_LOGIN_SUCCESS,
    payload
  });
  
  export const userLoginFailure = (payload) => ({
    type: USER_LOGIN_FAILURE,
    payload
  }); 
  
  export const logout = () => ({
      type: LOGOUT
  })

const userLogin = (payload) => (dispatch) => { 
    console.log("Entered in dispatch userLogin")  
    dispatch(userLoginRequest())
    return  axios.get("https://reqres.in/api/login",{
      params:{
       email : payload.email,
       password :payload.password
      }
    })
    // .then(res=>console.log(res.data))
      .then(res=>dispatch(userLoginSuccess(res.data)))
      .catch(err =>dispatch(userLoginFailure(err)))
  }

  export default userLogin