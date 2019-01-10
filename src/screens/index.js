import React from "react";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function index() {
  return (
    <Router>
      <Route exact path="/" component={Welcome} />
    </Router>
  );
}
