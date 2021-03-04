import LazyImage from "components/LazyImage";
import React from "react";
import Col from "reactstrap/lib/Col";
import IMAGES from "assets/images.json";
import "./ImageLinkButton.scss";

const SHORTHAND_DOMAIN = "https://saitjournalism.shorthandstories.com/";

const ShorthandImageButton = ({ fileName, title }) => {
  const img = IMAGES.Shorthand[`${fileName}.jpeg`];

  return (
    <Col
      tag="a"
      md={12}
      className="image-link-button shorthand mb-4"
      href={SHORTHAND_DOMAIN + fileName}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LazyImage placeholderSrc={img.lqip} src={img.src} />
      <h5>{title}</h5>
    </Col>
  );
};

export default ShorthandImageButton;
