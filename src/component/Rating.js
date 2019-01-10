import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

function Rating({ setRating }) {
  const [rating, updateRating] = useState(0);
  const pushUpRating = (rating) => {
    updateRating(rating);
    setRating(rating);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Typography style={{ marginBottom: "20px" }}>
        Rate the ease of identifying this is image as cat or not
      </Typography>
      {[1, 2, 3, 4, 5].map((value) => (
        <Button
          key={value}
          style={{ marginRight: "30px" }}
          color={rating === value ? "primary" : "default"}
          variant="contained"
          onClick={() => pushUpRating(value)}
        >
          {value}
        </Button>
      ))}
    </div>
  );
}

Rating.propTypes = {
  setRating: PropTypes.func.isRequired
};

export default Rating;
