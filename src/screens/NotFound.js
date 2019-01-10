import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "160px 0" }}>
      <Typography
        align="center"
        style={{ padding: "0px 90px", margin: "30px 0" }}
        variant="h6"
        color="inherit"
      >
        UH HO! Page Not Found.
      </Typography>

      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        <Button variant="contained" size="large" color="primary">
          Go Home
        </Button>
      </Link>
    </div>
  );
}
