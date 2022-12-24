import React, {useState} from 'react'
import { Input, Button } from 'antd';

export const Login = () => {
    debugger;
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    console.log("Entered Inside")
    return(
        <div>
            <Input placeholder="user name" onChange={(e) => setUserName(e.target.value)} />
            <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={() => console.log(userName, password)}>Login</Button>
        </div>
    )
}
