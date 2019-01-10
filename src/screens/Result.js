import React from "react";
import Page from "../page";
import ResultGrid from "./../component/ResultGrid";

function Result({ location }) {
  const { images } = location;
  return (
    <Page>
      <ResultGrid images={images} />
    </Page>
  );
}

export default Result;
