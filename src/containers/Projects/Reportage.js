import React from "react";
import PdfContainer from "./PdfContainer";
import ShorthandContainer from "./ShorthandContainer";

const Reportage = ({ documents, shorthands }) => (
  <>
    <PdfContainer documents={documents} sectionName="Research & Layout" />
    <ShorthandContainer shorthands={shorthands} sectionName="Stories" />
  </>
);

export default Reportage;
