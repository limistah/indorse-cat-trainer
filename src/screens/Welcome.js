import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function Welcome() {
  return (
    <div style={{ textAlign: "center", padding: "160px 0" }}>
      <Typography align="center" variant="h2" color="inherit">
        Indorse Cat Trainer (Evaluation)
      </Typography>
      <Typography
        align="center"
        style={{ padding: "0px 90px", margin: "30px 0" }}
        variant="h6"
        color="inherit"
      >
        We are seeking your assistance in training our ML dataset by choosing
        correctly image of cat from one of 20 to 30 images that you will be
        provided. Some of these images will be actual cat photos and others need
        to be of random objects. You are to click on actual cat images and then
        rate those images accurately if you are convinced if their are cat
        images or not on a scale of 1-5. In the end you will see the images
        displayed with their ratings.
      </Typography>
      <Button variant="contained" size="large" color="primary">
        Start Here
      </Button>
    </div>
  );
}
