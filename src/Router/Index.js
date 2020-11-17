import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Signup from "../Pages/Signup/index.js";
import Login from "../Pages/Login/index.js";
import Deshboard from "../Pages/dashboard/index.js";
function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Signup/>

                </Route>
                <Route path="/login" exact>
                    <Login/>

                </Route>
                <Route path="/dashboard" exact>
                    <Deshboard/>
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes;