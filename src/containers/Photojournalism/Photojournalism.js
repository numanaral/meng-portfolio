import React from "react";
import Gallery from "components/Gallery";
import IMAGES from "assets/images.json";
import PictureStory from "./PictureStory";

const SECTIONS = ["Feature", "News", "Sports"];
const _images = SECTIONS.reduce(
  (acc, sectionName) => ({ ...acc, [sectionName]: IMAGES[sectionName] }),
  {}
);

const Photojournalism = () => {
  return (
    <>
      <Gallery images={_images} withSections />
      <PictureStory />
    </>
  );
};

export default Photojournalism;
