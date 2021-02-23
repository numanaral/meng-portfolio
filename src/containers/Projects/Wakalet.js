import LoadingIndicator from "components/LoadingIndicator";
import React, { useState } from "react";

const Wakalet = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [height, setHeight] = useState("0%");
  const onLoad = () => {
    setIsLoading(false);
    setHeight("100%");
  };
  return (
    <>
      {isLoading && (
        <>
          <b>Wakalet is loading...</b> <br /> <LoadingIndicator />
        </>
      )}
      <iframe
        title="Wakalet"
        className="wakeletEmbed"
        width="100%"
        height={height}
        src="https://embed.wakelet.com/wakes/lGu0kfEXADl4yNmLtXRFM/list"
        style={{ border: "none", transition: "height 0.5s ease" }}
        allow="autoplay"
        onLoad={onLoad}
      />
      {/* <!-- Please only call https://embed-assets.wakelet.com/wakelet-embed once per page --> */}
      <script
        src="https://embed-assets.wakelet.com/wakelet-embed"
        charSet="UTF-8"
      />
    </>
  );
};

export default Wakalet;
