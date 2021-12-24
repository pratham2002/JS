import { Route } from "react-router-dom";
import Random from "../Random";
import Search from "../Search";

function FoodRoutes(){
    return(
        <>
        <Route exact path="/">
            <Search/>
        </Route>
        <Route exact path="/random">
            <Random/>
        </Route>
        </>
    )
}

export default FoodRoutes;