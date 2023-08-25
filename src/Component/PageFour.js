import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const PageFour = () => {
  return (
    <Container>
      <Row className="mt-5" id="page4txt">
        <div className="">
          <h2>Caring is the new marketing</h2>
          <p>
            The Nexcent blog is the best place to read about the latest
            membership insights, <br /> trends and more. See who's joining the
            community, read about how our community <br /> are increasing their
            membership income and lot's more.​
          </p>
        </div>
        <Col xs={4} sm={4} md={4} lg={4} className=" mt-3" id="colimg1">
          <img src="/Images/col1.png" alt="img" className="img-fluid" />
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className="mt-3" id="page4">
          <img src="/Images/col2.png" alt="img" className="img-fluid" />
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className=" mt-3" id="page4">
          <img src="/Images/col3.png" alt="img" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default PageFour;
