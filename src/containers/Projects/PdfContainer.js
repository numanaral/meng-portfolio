import React from "react";
import Row from "reactstrap/lib/Row";
import PdfImageButton from "./PdfImageButton";

const PdfContainer = ({ documents, sectionName }) => (
  <div className="section px-5 py-0 text-left" style={{ height: "auto" }}>
    <h3 className="mb-3"> {sectionName} </h3>
    <Row>
      {documents.map((documentProps) => (
        <PdfImageButton key={documentProps.fileName} {...documentProps} />
      ))}
    </Row>
  </div>
);

export default PdfContainer;
