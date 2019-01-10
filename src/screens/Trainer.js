import React, { useState } from "react";
import Page from "../page";
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
    url: `assets/images/${type}-${pos++}`,
    pos: pos++,
    rating: 0
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
  return (
    <Page>
      <div>Trainer</div>
    </Page>
  );
}
