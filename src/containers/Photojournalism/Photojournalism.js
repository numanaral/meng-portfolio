import React from "react";
import Gallery from "components/Gallery";
import { images } from "./constants";

const Photojournalism = () => {
  return (
    <>
      <Gallery images={images} withSections />
    </>
  );
};

export default Photojournalism;
