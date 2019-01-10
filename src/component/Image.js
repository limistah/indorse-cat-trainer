import React from "react";
import PropTypes from "prop-types";

const styles = {
  height: "400px",
  width: "95%",
  marginTop: "20px",
  border: "2px solid grey",
  textAlign: "center",
  margin: "20px 2.5%"
};
const Image = ({ src }) => (
  <div style={styles}>
    <img
      src={src}
      style={{
        height: "100%",
        width: "100%"
      }}
    />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired
};

export default Image;
