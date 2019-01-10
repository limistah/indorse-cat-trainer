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
    pos: pos++,
    rating: 0,
    title: { author: pos, title: type }
  });
  // Create cats array
  const cats = fillArr(15, modifier("cat"));
  // Creates not cat array
  const notCats = fillArr(11, modifier("not"));

  // Combine both of them and shuffle the concatenated array
  return shuffle(cats.concat(notCats));
};

export default function Trainer() {
  const [images, updateImages] = useState(loadImagesToMemory());
  const [lastIndex, updateLastIndex] = useState(0);
  const imageLength = images.length;
  const latestIndex = lastIndex + 2;
  const imagesToUse = (index) => [images[index], images[index + 1]];
  // Displays the right button based on the index of the images
  const Btn = () => {
    const loadNextImages = () => updateLastIndex(latestIndex);
    return imageLength > latestIndex ? (
      <Button variant="contained" onClick={loadNextImages}>
        Next Images ({latestIndex} of {imageLength})
      </Button>
    ) : (
      <Link to="result">See Result</Link>
    );
  };
  const handleRateImage = (index, rate) => {
    console.log({ index, rate });
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
