import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PageOne = () => {
  return (
    <Container fluid>
      <Row className="page1">
        <Col id="lansicol" className="" xs={12} sm={12} md={12} lg={6}>
          <div>
            <h1 className="landi">Lessons and insights </h1>
            <h1 className="years">from 8 years</h1>
            <p className="pp">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="register">Register</button>
            {/* <img
              src="/Images/Dot.png"
              alt="img"
              className="img-fluid"
              id="dot"
            /> */}
          </div>
        </Col>
        <Col id="illustrationcol" className="" xs={12} sm={12} md={12} lg={6}>
          <div>
            <img
              id="illustration"
              className="img-fluid"
              src="/Images/Illustration.png"
              alt="img"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PageOne;
