import React from "react";
import Heart from "./Heart";

const Footer = () => (
  <footer
    className="footer bg-dark"
    style={{
      zIndex: 9999,
      height: 60,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    }}
  >
    <span className="copyright text-white mr-3">
      Created with <Heart />
      by <a href="https://numanaral.github.io/?ref=mengwei.ca">Numan Aral</a>
    </span>
  </footer>
);

export default Footer;
