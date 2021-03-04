import React from "react";
import Row from "reactstrap/lib/Row";
import ShorthandImageButton from "./ShorthandImageButton";

const ShorthandContainer = ({ shorthands, sectionName }) => {
  return (
    <>
      <div className="text-left px-5">
        <h3 className="mb-3"> {sectionName} </h3>
        <Row>
          {shorthands.map((shorthandProps) => (
            <ShorthandImageButton
              key={shorthandProps.title}
              {...shorthandProps}
            />
          ))}
        </Row>
      </div>
    </>
  );
};

export default ShorthandContainer;
