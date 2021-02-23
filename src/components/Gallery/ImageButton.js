import LazyImage from "components/LazyImage";
import React from "react";
import "./ImageButton.scss";

const ImageButton = ({ src, lqip, altText, onClick, ...rest }) => {
  return (
    <button className="image-button" onClick={onClick} {...rest}>
      <LazyImage
        height="100%"
        placeholderSrc={lqip}
        wrapperClassName="image-button-placeholder"
        removeClassOrStyleOnLoad
        src={src}
        alt={altText}
      />
    </button>
  );
};

export default ImageButton;
