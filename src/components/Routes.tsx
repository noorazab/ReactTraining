import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact strict component={Home} />
        <Route path="/signin" exact strict component={SignIn} />
        <Route path="/signup" exact strict component={SignUp} />
        <Route path="/" exact strict />
        <Route path="/" exact strict />
      </Switch>
    </Router>
  );
};
export default Routes;
