import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/HomePage';
import Landing from './components/Landing';


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
