import React from "react";

const Wakalet = () => (
  <>
    <iframe
      title="wakalet"
      className="wakeletEmbed"
      width="100%"
      height="500px"
      src="https://embed.wakelet.com/wakes/lGu0kfEXADl4yNmLtXRFM/list"
      style={{ border: "none" }}
      allow="autoplay"
    />
    {/* <!-- Please only call https://embed-assets.wakelet.com/wakelet-embed once per page --> */}
    <script
      src="https://embed-assets.wakelet.com/wakelet-embed"
      charset="UTF-8"
    />
  </>
);

export default Wakalet;
