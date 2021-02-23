import React from "react";
import "./jotFormSetup.js";

const ContactMeJotForm = () => (
  <>
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
        height: 700,
        border: "none",
        // Hide ad under the footer
        marginBottom: -60,
      }}
      scrolling="no"
    />
  </>
);

export default ContactMeJotForm;
