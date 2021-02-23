import React, { Fragment } from "react";
import ImageButton from "./ImageButton";

const Thumbnails = ({ images, onClick, withSections }) => {
  if (withSections) {
    let i = 0;
    return Object.keys(images).map((sectionName) => {
      const section = images[sectionName];
      const img = Object.keys(section).map((fileName) => {
        const index = i++;
        const { caption, ...imageProps } = section[fileName];
        return (
          <ImageButton
            key={fileName}
            onClick={() => onClick(index)}
            altText={caption}
            {...imageProps}
          />
        );
      });
      return (
        <Fragment key={sectionName}>
          <h3 style={{ margin: 0 }}>{sectionName}</h3>
          {img}
        </Fragment>
      );
    });
  }

  return images.map((imageProps, ind) => (
    <ImageButton
      key={imageProps.src}
      {...imageProps}
      onClick={() => onClick(ind)}
    />
  ));
};

export default Thumbnails;
