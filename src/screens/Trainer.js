import React, { useState } from "react";
import Page from "../page";
import ImageGrid from "./../component/ImageGrid";
import shuffle from "shuffle-array";

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
  const [lastIndex, updateIndex] = useState(0);
  const imagesToUse = (index) => [images[index], images[index + 1]];
  return (
    <Page>
      <ImageGrid images={imagesToUse(lastIndex)} />
    </Page>
  );
}
