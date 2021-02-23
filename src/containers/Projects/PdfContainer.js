import React from "react";
import Row from "reactstrap/lib/Row";
import PdfImageButton from "./PdfImageButton";

const PdfContainer = ({ documents }) => (
  <div className="section px-5 py-0" style={{ height: "100%" }}>
    <Row style={{ height: "100%" }}>
      {documents.map((documentProps) => (
        <PdfImageButton {...documentProps} />
      ))}
    </Row>
  </div>
);

export default PdfContainer;
