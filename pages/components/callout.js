import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Callout = ({ detail, header, bgColor, color }) => {
  return (
    <Row className="InfoSectionRow">
      <Col className="InfoSectionCallout" style={{ backgroundColor: bgColor, color }}>
        <div className="InfoSectionCalloutText">
          <h3>{header}</h3>
        </div>
      </Col>
      <Col className="InfoSectionCallout">
        <div className="InfoSectionDetailText">
          <p>{detail}</p>
        </div>
      </Col>
    </Row>
  );
};

export default Callout;
