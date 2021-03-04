import useIframeLoading from "hooks/useIframeLoad.js";
import React from "react";
import "./jotFormSetup.js";

const ContactMeJotForm = () => {
  const { loader, Wrapper, height, onLoad } = useIframeLoading("JotForm", 688);
  console.log(loader, height);
  return (
    <Wrapper>
      {loader}
      <iframe
        id="JotFormIFrame-210532357957056"
        title="Reach me here"
        allowtransparency="true"
        allowFullScreen
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/210532357957056"
        frameBorder="0"
        style={{
          minWidth: "100%",
          height,
          border: "none",
          // Hide ad under the footer
          marginTop: -35,
          marginBottom: -60,
          transition: "height 0.5s ease",
        }}
        // scrolling="no"
        onLoad={onLoad}
      />
    </Wrapper>
  );
};

export default ContactMeJotForm;
