import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Activitypage from "./Activitypage";
import Howitworkpage from "./Howitworkpage";
import Communitypage from "./Communitypage";
import Mypurchasepage from './Mypurchasepage'
import Createandpurchasepage from './Createandpurchasepage'
import Receivedpage from './Receivedpage';
import Explore from './Explore';
//import Popup from './src/Popup';
import Salepagecopy from "./Salepagecopy";
import Nft from "./Nft";
import App from "./App";
import DisplayData from "./DisplayData";
import Followingpage from "./Followingpage";
import Register from "./Login/Register";
import History from "./History";
import AdminRoute from "./AdminRoute";
//import historys from "./History";


const Routes=()=>{

    return(

        <Router>
        

        <Switch>
        <Route path="/" exact component={App} />
            <AdminRoute path="/register" exact component={Register} />
            <AdminRoute path="/explore" exact component={Explore} />
            <AdminRoute path="/explore/:key/:oaddress" component={DisplayData} />
            <AdminRoute path="/salepagecopy" exact component={Salepagecopy} />
              {/* <Route path="/salepagecopy/:address" component={DisplayData} /> */}
              <AdminRoute path="/communitypage"  component={Communitypage} />
              <AdminRoute path="/activitypage" component={Activitypage} />
              <AdminRoute path="/howitworkpage"  component={Howitworkpage} />
              <AdminRoute path="/followingpage"  component={Followingpage} />
              <AdminRoute path="/receivedpage" component={Receivedpage} />
              <AdminRoute path="/nft" component={Nft} />
              
              
        </Switch>

        </Router>

    );

}
export default Routes;