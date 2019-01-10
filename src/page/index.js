import React from "react";
import NavBar from "./NavBar";

export default function Page({ children }) {
  return (
    <React.Fragment>
      <NavBar />
      {children}
    </React.Fragment>
  );
}
