import LazyImage from "components/LazyImage";
import React from "react";
import Col from "reactstrap/lib/Col";
import "./PdfImageButton.scss";

const PUBLIC_PATH = process.env.PUBLIC_URL;
const DOCUMENT_PATH = `${PUBLIC_PATH}/documents/`;
const ICON_PATH = `${PUBLIC_PATH}/images/icons/`;

const PdfImageButton = ({ title, fileName }) => {
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
          src={`${ICON_PATH + fileName}.png`}
        />
        <br />
        <h5>{title}</h5>
      </a>
    </Col>
  );
};

export default PdfImageButton;
