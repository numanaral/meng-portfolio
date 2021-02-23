import IFrame from "components/IFrame";
import React from "react";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";

const Communications = () => (
  <div className="section px-3 py-0" style={{ height: "100%" }}>
    <Row style={{ height: "100%" }}>
      <Col md={6}>
        <IFrame
          title="Backscene magazine April to September 2020"
          src="/documents/backscene-magazine-april-to-september-2020.pdf"
          height="100%"
        />
      </Col>
      <Col md={6}>
        <IFrame
          title="Backgrounder media kit"
          src="/documents/backgrounder-media-kit.pdf"
          height="100%"
        />
      </Col>
    </Row>
  </div>
);

export default Communications;
