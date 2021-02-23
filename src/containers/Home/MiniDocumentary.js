import React from "react";

const MiniDocumentary = () => {
  return (
    <>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          title="Mini Documentary: Art Open-ended: Milton Lim's whitepages"
          src="https://player.vimeo.com/video/502453181?autoplay=1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      <script src="https://player.vimeo.com/api/player.js" />
      <p>
        <a href="https://vimeo.com/502453181">
          Art Open-ended: Milton Lim&#039;s whitepages
        </a>{" "}
        from <a href="https://vimeo.com/user131632503">Meng Wei</a> on{" "}
        <a href="https://vimeo.com">Vimeo</a>.
      </p>
      <p>
        A mini-documentary about Milton&#039;s recent project - whitepages -
        exhibited in The New Gallery in November to December, 2020 in Calgary.
      </p>
    </>
  );
};

export default MiniDocumentary;
