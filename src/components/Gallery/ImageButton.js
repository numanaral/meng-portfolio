import React from "react";
import "./ImageButton.css";

const ImageButton = ({ src, altText, onClick, ...rest }) => {
  return (
    <button className="image-button" onClick={onClick} {...rest}>
      <img height="100%" src={src} alt={altText} />
    </button>
  );
};

export default ImageButton;
