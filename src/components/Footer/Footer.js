import React from "react";
import { Row, Container } from "reactstrap";

const Footerr = () => (
  <footer className="footer footer-black footer-white">
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
        <div className="credits ml-auto">
          <span className="copyright">
            © {new Date().getFullYear()}, Template by{" "}
            <a href="https://www.creative-tim.com/"> Creative Tim </a> & site
            created by <a href="https://numanaral.github.io"> Numan </a> with{" "}
            <i className="fa fa-heart heart" />
          </span>
        </div>
      </Row>
    </Container>
  </footer>
);

export default Footerr;
