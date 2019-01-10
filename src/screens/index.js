import React from "react";
import Welcome from "./Welcome";
import NotFound from "./NotFound";
import Trainer from "./Trainer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function index() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/trainer" component={Trainer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
