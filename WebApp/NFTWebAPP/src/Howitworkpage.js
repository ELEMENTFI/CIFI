import React,{useState} from "react";
import history from "./utils/history";
import ReactPlayer from "react-player";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Router, Route, Switch } from "react-router-dom";

import Myitem from "./Myitem";
import Nft from "./Nft";
//import firebase from "./firebase";
import fireDb from "./firebase";
import Followingpage from "./Followingpage";
import Activitypage from "./Activitypage";
//import Howitworkpage from "./Howitworkpage";
import Communitypage from "./Communitypage";
import Mypurchasepage from './Mypurchasepage'


function Howitworkpage() {

    const handle = useFullScreenHandle();
  const [name,setName] = useState("ramachandran");


  const callBtn = () =>{

    setName("Pragadesh");

    alert(name);

    
    }


  return (
    <div>


<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Allcontractpage");
                }}>
                Explore
              </button>


<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Salepagecopy");
                }}>
                My items
              </button>
              
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Followingpage");
                }}
              >
                Following
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Activitypage");
                }}>
                Activity
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Howitworkpage");
                }}
              >
                How it work
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Communitypage");
                }}
              >
                Community
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                     history.push("/Nft");
                }}
              >
              Create
              </button>

              <button
              id="bu"
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Mypurchasepage");
                }}>
               Mypurchase
              </button>





              <br></br>
<br></br>


<br></br>
<br></br>



                    
                    

            <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              
            </Route>
            
            <Route path="/Myitem">
              <Myitem />
            </Route>
            
            <Route path="/Activitypage">
              <Activitypage />
            </Route>
            <Route path="/Communitypage">
              <Communitypage />
            </Route>
            <Route path="/Followingpage">
              <Followingpage />
            </Route>
            <Route path="/Nft">
              <Nft />
            </Route>

            <Route path="/Mypurchasepage">
              <Mypurchasepage />
            </Route>
            
            
          </Switch>
        </Router>








<center>

      <ReactPlayer
        url="https://www.youtube.com/watch?v=dA1lXZhWPoQ"
        
/>

<FullScreen handle={handle}>
        Any fullscreen content here
      </FullScreen>

</center>
      </div>
  )
}

export default Howitworkpage;
