import React from "react";
import Welcome from "./Welcome";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function index() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
