import React from "react";
import Gallery from "components/Gallery";
import IMAGES from "assets/images.json";

const { Home, ..._images } = IMAGES;

const Photojournalism = () => {
  return (
    <>
      <Gallery images={_images} withSections />
    </>
  );
};

export default Photojournalism;
