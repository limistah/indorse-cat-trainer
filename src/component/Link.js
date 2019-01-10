import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function LinkComp({ to, children }) {
  return (
    <Link to={to} style={{ color: "#fff", textDecoration: "none" }}>
      <Button variant="contained" size="large" color="primary">
        {children}
      </Button>
    </Link>
  );
}

LinkComp.propTypes = {
  to: PropTypes.any.isRequired
};

export default LinkComp;
