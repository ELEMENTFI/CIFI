import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./screens/ConnectWallet";
import Ass from "./App";


const Routes=()=>{

    return(

        <Router>
        

        <Switch>
        
        <Route path="/" exact component={App} />
        <Route path="/Ass" exact component={Ass} />
        </Switch>

        </Router>

    );

}
export default Routes;