import React from "react";
import { Row, Container } from "reactstrap";
import Heart from "./Heart";

const Footer = () => (
  <footer
    className="footer bg-dark"
    style={{
      zIndex: 99999999,
      height: 60,
      display: "flex",
      alignItems: "center",
    }}
  >
    <Container>
      <Row>
        {/* <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>
              
            </ul>
          </nav> */}
        <div className="ml-auto">
          <span className="copyright text-white">
            Created with <Heart />
            by{" "}
            <a href="https://numanaral.github.io/?ref=mengwei.ca">Numan Aral</a>
          </span>
        </div>
      </Row>
    </Container>
  </footer>
);

export default Footer;
