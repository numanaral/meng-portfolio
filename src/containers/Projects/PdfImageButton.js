import React from "react";
import LazyImage from "components/LazyImage";
import Col from "reactstrap/lib/Col";
import IMAGES from "assets/images.json";
import "./PdfImageButton.scss";

const PUBLIC_PATH = process.env.PUBLIC_URL;
const DOCUMENT_PATH = `${PUBLIC_PATH}/documents/`;

const PdfImageButton = ({ title, fileName }) => {
  const img = IMAGES.Icons[`${fileName}.png`];
  return (
    <Col key={fileName} md={2} className="pdf-image-button">
      <a
        href={`${DOCUMENT_PATH + fileName}.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LazyImage
          height="100px"
          width="100px"
          placeholderSrc={img.lqip}
          src={img.src}
        />
        <br />
        <h5>{title}</h5>
      </a>
    </Col>
  );
};

export default PdfImageButton;
