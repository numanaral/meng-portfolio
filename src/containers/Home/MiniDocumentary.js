import React from "react";

const MiniDocumentary = () => {
  return (
    <>
      <iframe
        title="mini documentary"
        src="https://player.vimeo.com/video/502453181"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
      <p>
        <a href="https://vimeo.com/502453181">
          Art Open-ended: Milton Lim&#039;s whitepages
        </a>{" "}
        from <a href="https://vimeo.com/user131632503">Meng Wei</a> on{" "}
        <a href="https://vimeo.com">Vimeo</a>.
      </p>
    </>
  );
};

export default MiniDocumentary;
