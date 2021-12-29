// import {  } from "react-router-dom";
import { Route, Router } from "react-router-dom";
import Checkout from "../Pages/Checkout";
import Home from "../Pages/Home";

function Routes(){
    return(
        <>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/checkout">
            <Checkout/>
        </Route>
        </>
    )
}

export default Routes;