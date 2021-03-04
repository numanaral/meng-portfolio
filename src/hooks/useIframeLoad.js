import React, { useState } from "react";
import LoadingIndicator from "components/LoadingIndicator";
import { NAVBAR_HEIGHT } from "components/Navbar";
import { FOOTER_HEIGHT } from "components/Footer/constants";

const useIframeLoading = (
  label,
  onLoadHeight = "100%",
  defaultHeight = "0%"
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [height, setHeight] = useState(defaultHeight);
  const onLoad = () => {
    setIsLoading(false);
    setHeight(onLoadHeight);
  };

  return {
    loader: isLoading && (
      <div className="text-center pt-5">
        <b>{label} is loading...</b> <br /> <LoadingIndicator />
      </div>
    ),
    Wrapper: ({ children }) => (
      <div
        style={{
          overflow: "hidden",
          height: "100%",
          maxHeight: `calc(100% - ${NAVBAR_HEIGHT + FOOTER_HEIGHT}px)`,
        }}
      >
        {children}
      </div>
    ),
    isLoading,
    height,
    onLoad,
  };
};

export default useIframeLoading;
