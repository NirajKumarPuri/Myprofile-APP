import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Signup from "../Pages/Signup/index.js";
import Login from "../Pages/Login/index.js";
import Deshboard from "../Pages/dashboard/index.js";
function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Signup}/>
            
                <Route path="/login" exact component={Login}/>
    
                <Route path="/dashboard" exact component={Deshboard}/>
        
            </Switch>
        </Router>
    )
}
export default Routes;