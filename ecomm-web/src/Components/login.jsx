import React, {useState} from 'react'
import { Input, Button } from 'antd';
import { connect } from "react-redux";
import userLogin from '../Redux/action/authAction';


const Login = ({loginRequest}) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    console.log("Entered Inside")
    return(
        <div>
            <Input placeholder="user name" onChange={(e) => setUserName(e.target.value)} />
            <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={() => loginRequest({userName, password})}>Login</Button>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    loginRequest: (payload) => dispatch(userLogin(payload))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
