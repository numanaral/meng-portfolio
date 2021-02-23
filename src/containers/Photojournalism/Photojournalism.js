import React from "react";
import Gallery from "components/Gallery";
import IMAGES from "assets/images.json";
import PictureStory from "./PictureStory";

const { Home, ..._images } = IMAGES;

const Photojournalism = () => {
  return (
    <>
      <Gallery images={_images} withSections />
      <PictureStory />
    </>
  );
};

export default Photojournalism;
