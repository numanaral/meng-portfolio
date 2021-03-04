import React from "react";
import LazyImage from "components/LazyImage";
import Col from "reactstrap/lib/Col";
import IMAGES from "assets/images.json";
import "./ImageLinkButton.scss";

const PUBLIC_PATH = process.env.PUBLIC_URL;
const DOCUMENT_PATH = `${PUBLIC_PATH}/documents/`;

const PdfImageButton = ({ title, fileName }) => {
  const img = IMAGES.Icons[`${fileName}.png`];

  return (
    <Col
      tag="a"
      xs={12}
      md={3}
      lg={2}
      className="image-link-button pdf mb-4"
      href={`${DOCUMENT_PATH + fileName}.pdf`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LazyImage
        placeholderSrc={img.lqip}
        src={img.src}
        // wrapperProps={{
        //   style: {
        //     backgroundImage: `url(${img.lqip})`,
        //     backgroundSize: "100% 100%",
        //     display: "inline-block",
        //     width: "100%",
        //     padding: 10,
        //   },
        // }}
        // removeClassOrStyleOnLoad
      />
      <h5>{title}</h5>
    </Col>
  );
};

export default PdfImageButton;
