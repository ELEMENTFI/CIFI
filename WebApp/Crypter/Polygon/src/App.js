import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import UploadVariants from "./screens/UploadVariants";
import UploadDetails from "./screens/UploadDetails";
import ConnectWallet from "./screens/ConnectWallet";
import Faq from "./screens/Faq";
import Activity from "./screens/Activity";
import Search01 from "./screens/Search01";
import Search02 from "./screens/Search02";
import Profile from "./screens/Profile";
import ProfileEdit from "./screens/ProfileEdit";
import Item from "./screens/Item";
import PageList from "./screens/PageList";
import Search01Copy from "./screens/Search01Copy";
import ProfileCopy from "./screens/ProfileCopy";
//import React, { useState } from "react";
//import Logins from "./components/Login";
//import Profiles from "./components/Profiledisplay";

function App() {
  //const [addressaddshow,setaddressaddshow] = useState(false);
  //window.addEventListener("beforeunload", () => localStorage.removeItem('wallet'));
  //window.onbeforeunload = () => {
    //localStorage.removeItem('wallet');
  //}
//   function clearStorage() {

//     let session = sessionStorage.getItem('wallet');

//     if (session == null) {

//         localStorage.removeItem('wallet');

//     }
//     sessionStorage.setItem('wallet', 1);
// }
// window.addEventListener('wallet', clearStorage);
//let acc =web3.eth.accounts.getAccounts();



  return (    
    // <>
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path="/upload-variants"
          render={() => (
            <Page>
              <UploadVariants />
            </Page>
          )}
        />
        <Route
          exact
          path="/upload-details"
          render={() => (
            <Page>
              <UploadDetails />
            </Page>
          )}
        />
        <Route
          exact
          path="/connect-wallet"
          render={() => (
            <Page>
              <ConnectWallet />
            </Page>
          )}
        />
        
        <Route
          exact
          path="/faq"
          render={() => (
            <Page>
              <Faq />
            </Page>
          )}
        />
        <Route
          exact
          path="/activity"
          render={() => (
            <Page>
              <Activity />
            </Page>
          )}
        />
        <Route
          exact
          path="/search01"
          render={() => (
            <Page>
              <Search01 />
            </Page>
          )}
        />

<Route
          exact
          path="/search01copy"
          render={() => (
            <Page>
              <Search01Copy />
            </Page>
          )}
        />

        <Route
          exact
          path="/search02"
          render={() => (
            <Page>
              <Search02 />
            </Page>
          )}
        />
        <Route
          exact
          path="/profile"
          render={() => (
            <Page>
              <Profile />
            </Page>
          )}
        />

<Route
          exact
          path="/profilecopy"
          render={() => (
            <Page>
              <ProfileCopy />
            </Page>
          )}
        />

        <Route
          exact
          path="/profile-edit"
          render={() => (
            <Page>
              <ProfileEdit />
            </Page>
          )}
        />
        <Route
          exact
          path="/item"
          render={() => (
            <Page>
              <Item />
            </Page>
          )}
        />
        <Route
          exact
          path="/pagelist"
          render={() => (
            <Page>
              <PageList />
            </Page>
          )}
        />
      </Switch>
    </Router>
//     {/* {addressaddshow ? (
// <Profiles />
//     ) : (
// <Logins />
//     )}
//     </> */}
  );
}

export default App;
