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


const Routes=()=>{

    return(

        <Router>
        

        <Switch>
              <Route path="/" exact component={App} />
              <Route path="/explore" exact component={Explore} />
              <Route path="/explore/:key/:oaddress" component={DisplayData} />
              <Route path="/salepagecopy"  component={Salepagecopy} />
              {/* <Route path="/salepagecopy/:address" component={DisplayData} /> */}
              <Route path="/communitypage"  component={Communitypage} />
              <Route path="/activitypage" component={Activitypage} />
              <Route path="/howitworkpage"  component={Howitworkpage} />
              <Route path="/followingpage"  component={Followingpage} />
              <Route path="/receivedpage" component={Receivedpage} />
              <Route path="/nft" component={Nft} />
              
              
        </Switch>

        </Router>

    );

}
export default Routes;