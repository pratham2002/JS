import { Route } from "react-router-dom";
import Add from "../Pages/Add";
import Admin from "../Pages/Admin";
import List_all from "../Pages/List_all";
import Login from "../Pages/Login";

function Routes(){
    return(
        <>
        <Route exact path="/">
            HomePage<br/>
            Click on the Above Navbar to navigate
        </Route>
        <Route exact path="/reimbersment/add">
            <h2>Add</h2>
            <Add/>
        </Route>
        <Route exact path="/dashboard/users">
            <List_all/>
        </Route>
        <Route exact path="/dashboard/admin">
            <h4>Admin</h4>
            <Admin/>
        </Route>
        <Route exact path="/dashboard/admin/login">
            <h4>Login</h4>
            <Login/>
        </Route>

        
        </>
    )
}

export default Routes