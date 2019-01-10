import React, { useState } from "react";
import Page from "../page";
import ImageGrid from "./../component/ImageGrid";
import Link from "./../component/Link";
import shuffle from "shuffle-array";
import Button from "@material-ui/core/Button";

const loadImagesToMemory = () => {
  // Creates an array of the specified length with the callback as the value to be pushed into the elements of the array
  const fillArr = (len, cb) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(cb(i));
    }
    return arr;
  };

  // Returns object holding a url and position of file
  const modifier = (type) => (pos) => ({
    img: `assets/images/${type}-${pos + 1}.jpeg`,
    rating: 0
  });
  // Create cats array
  const cats = fillArr(3, modifier("cat"));
  // Creates not cat array
  const notCats = fillArr(3, modifier("not"));

  // Combine both of them and shuffle the concatenated array
  return shuffle(cats.concat(notCats)).map((val, i) => ({ ...val, pos: i }));
};

export default function Trainer() {
  // Holds the images and update their rating
  const [images, updateImages] = useState(loadImagesToMemory());
  // Holds last index of the viewed image and updates it
  const [lastIndex, updateLastIndex] = useState(0);
  const imageLength = images.length;
  // Latest index is current index + 2, we are displaying 2 images
  const latestIndex = lastIndex + 2;
  // Picks 2 images based on the passed index
  const imagesToUse = (index) => [images[index], images[index + 1]];
  // Determines if both images currently on display have been rated
  const imagesRated = imagesToUse(lastIndex).every((i) => i.rating);
  // Displays the right button based on the index of the images
  const Btn = () => {
    // We don't want the user to leave these images unrated
    const loadNextImages = () =>
      imagesRated ? updateLastIndex(latestIndex) : null;
    // Displays Next button or result page link based on the length of the image
    return imageLength > latestIndex ? (
      <Button
        variant="contained"
        color={imagesRated ? "secondary" : "default"}
        onClick={loadNextImages}
      >
        Next Images ({latestIndex} of {imageLength})
      </Button>
    ) : (
      imagesRated && <Link to="result">See Result</Link>
    );
  };
  // Updates the image in the state
  const handleRateImage = (index, rate) => {
    images[index].rating = rate;
    updateImages(images);
    localStorage.setItem("images", JSON.stringify(images));
  };
  return (
    <Page>
      <ImageGrid images={imagesToUse(lastIndex)} rateImage={handleRateImage} />
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <Btn />
      </div>
    </Page>
  );
}
