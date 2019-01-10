import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const gridItemStyles = {
  margin: "10px auto",
  width: "500px"
};

const ResultImage = ({ src }) => {
  return (
    <div
      style={{
        height: "200px",
        width: "70%",
        border: "2px solid grey",
        display: "inline-block"
      }}
    >
      <img src={src} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

const ratingStyles = {
  display: "inline-block",
  fontSize: "5em",
  fontWeight: "700",
  lineHeight: "2px",
  color: "lightgrey"
};
const ResultRating = ({ rating }) => (
  <Typography style={ratingStyles}> {rating}</Typography>
);

const GridItem = ({ img, rating }) => {
  return (
    <Grid container>
      <Grid item style={gridItemStyles}>
        <ResultImage src={img} />
        <ResultRating rating={rating} />
      </Grid>
    </Grid>
  );
};

function ResultGrid({ images }) {
  return (
    <Grid container justify="center">
      {images.map((img) => (
        <GridItem key={img.img} {...img} />
      ))}
    </Grid>
  );
}

ResultGrid.propTypes = {
  images: PropTypes.array.isRequired
};

export default ResultGrid;
