import { useState } from "react";
import { Redirect } from "react-router-dom";

function Login(){
    const username = "admin",password ="admin";
    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")
   return( <>
        <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder="Username" />
        <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="password" />
        <input type="submit" onClick={()=>{
            if(user==username && pass == password){
                localStorage.setItem("auth",true)
                window.location.replace("/dashboard/admin")
            }
        }}/>
    </>)
}

export default Login