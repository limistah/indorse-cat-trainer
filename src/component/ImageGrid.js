import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Image from "./Image";

function ImageGrid({ images }) {
  return (
    <Grid container justify="center">
      {images.map((value) => (
        <Grid key={value.img} item xs>
          <Image src={value.img} />
          {/* <div style={{ width: "100%" }}>1</div> */}
        </Grid>
      ))}
    </Grid>
  );
}

ImageGrid.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageGrid;
