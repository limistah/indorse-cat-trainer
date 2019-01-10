import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Image from "./Image";
import Rating from "./Rating";

function ImageGrid({ images, rateImage }) {
  return (
    <Grid container justify="center">
      {images.map((value) => (
        <Grid key={value.img} item xs>
          <Image src={value.img} />
          <Rating setRating={(rating) => rateImage(value.pos, rating)} />
        </Grid>
      ))}
    </Grid>
  );
}

ImageGrid.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageGrid;
