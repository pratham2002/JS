import { Route } from "react-router-dom";
import HomePage from "../Pages/Homepage";

function Routes() {
  return (
    <>
      <Route exact path="/Homepage">
        <HomePage />
      </Route>
      <Route exact path="/search">
        <h1>Search</h1>
      </Route>
    </>
  );
}

export default Routes;
