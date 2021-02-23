import React from "react";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";

const PictureStory = () => (
  <div className="section pt-o p-5">
    <Row>
      <Col md={5}>
        <h1 style={{ margin: 0 }}>A Picture Story</h1>
      </Col>
      <Col md={7}>
        <script
          id="asp-embed-script"
          data-zindex="1000000"
          type="text/javascript"
          charSet="utf-8"
          src="https://spark.adobe.com/page-embed.js"
        />
        <a
          className="asp-embed-link"
          href="https://spark.adobe.com/page/QspeJNt4ZG3St/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://spark.adobe.com/page/QspeJNt4ZG3St/embed.jpg?buster=1614057427492"
            alt="Supplying for the Pandemic"
            style={{ width: "100%" }}
            border="0"
          />
        </a>
      </Col>
    </Row>
  </div>
);

export default PictureStory;
