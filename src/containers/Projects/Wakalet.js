import useIframeLoading from "hooks/useIframeLoad";
import React from "react";

const Wakalet = () => {
  const { loader, height, onLoad } = useIframeLoading("Wakalet", "98%");
  return (
    <>
      {loader}
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
