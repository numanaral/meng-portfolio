import React from "react";
import Spinner from "reactstrap/lib/Spinner";

const LoadingIndicator = ({ w = 100, h = 100 }) => {
  return (
    <Spinner type="grow" color="primary" style={{ width: w, height: h }} />
  );
};

export default LoadingIndicator;
