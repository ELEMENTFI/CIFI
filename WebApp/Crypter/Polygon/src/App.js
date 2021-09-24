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
//import web3 from '../src/screens/UploadDetails/web3';
import  { useEffect,useState } from "react";
import React from 'react';
//import toaster from 'toasted-notes';
//import 'toasted-notes/src/styles.css';
//import FolowStepsd from "./FolowStepsd";
//import Modald from "../../components/ModalD";
//ConnectWallet.module.sass";
//import {NotificationContainer, NotificationManager} from 'react-notifications';
//import { ToastProvider, useToasts } from 'react-toast-notifications';

//../UploadDetails/web3
//import Logins from "./components/Login";
//import Profiles from "./components/Profiledisplay";


//const FormWithToasts = () => {
  

//   const onSubmit = async value => {
//     const { error } = await dataPersistenceLayer(value);

//     if (error) {
//       addToast(error.message, { appearance: 'error' });
//     } else {
//       addToast('Saved Successfully', { appearance: 'success' });
//     }
//   };

//   return <form onSubmit={onSubmit}>...</form>;
// };

// const MyCustomToast = ({ appearance, children }) => (
//   <div style={{ background: appearance === 'error' ? 'red' : 'green' }}>
//     {children}
//   </div>
// );

function App() {
  //const [visibleMeta, setVisibleMeta] = useState(false);

  //const { addToast } = useToasts();
  //const [visible, setVisible] = useState(false);
  // useEffect(() => {
  //   async function listenMMAccount() {
  //     //window.ethereum.on("accountsChanged", async function() {
  //       // Time to reload your interface with accounts[0]!
  //       let accounts = await web3.eth.getAccounts();
  //       // accounts = await web3.eth.getAccounts();
  //       console.log("appjsjs",accounts);
  //     //});
  //   }
  //   listenMMAccount();
  // }, []);
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

//const NotificationContainer = window.ReactNotifications.NotificationContainer;
//const NotificationManager = window.ReactNotifications.NotificationManager;
//NotificationManager.info('Info message');

if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
  //toaster.notify('With a simple string')
  //setVisibleMeta(true)
}
else{
  
}


  return (    
    <>
   
   {/* <Modald visible={visibleMeta} onClose={() => setVisibleMeta(false)}>
        <FolowStepsd className={styles.steps} />
      </Modald> */}

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
</>     
  );
}

export default App;
