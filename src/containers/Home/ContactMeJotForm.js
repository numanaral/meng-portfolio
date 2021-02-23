import React from "react";
import "./contactMeJotFormSetup.js";

const ContactMeJotForm = () => (
  <>
    {/* <script
      type="text/javascript"
      src="https://form.jotform.com/jsform/210533010656241"
    /> */}
    <iframe
      id="JotFormIFrame-210533010656241"
      title="Contact Me"
      //   onLoad="window.parent.scrollTo(0,0)"
      //   onLoad="window.parent.removeAd()"
      allowtransparency="true"
      allowFullScreen
      allow="geolocation; microphone; camera"
      src="https://form.jotform.com/210533010656241"
      frameBorder="0"
      style={{
        minWidth: "100%",
        height: 700,
        border: "none",
      }}
      scrolling="no"
    />
  </>
);

export default ContactMeJotForm;
