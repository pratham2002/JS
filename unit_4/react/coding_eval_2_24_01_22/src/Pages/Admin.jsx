import { Redirect } from "react-router-dom"

function Admin(){
    const auth = localStorage.getItem("auth")
    
    if(!auth){
        return <Redirect to="/dashboard/admin/login"/>
    }    
    else{
        return (
            <>
            <button onClick={function click(){
                localStorage.clear("auth")
                window.location.replace("/")
                }}>Logout</button>
            Admin View
        </>
        )
    }
}

export default Admin