import LoadingIndicator from "components/LoadingIndicator";
import React, { useState } from "react";

const IFrame = ({ title, src, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && <LoadingIndicator />}
      <iframe
        title={title}
        src={process.env.PUBLIC_URL + src}
        width="90%"
        height="500px"
        onLoad={() => setIsLoading(false)}
        {...rest}
      />
    </>
  );
};

export default IFrame;
