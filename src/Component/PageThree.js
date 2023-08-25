import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PageThree = () => {
  return (
    <Container fluid>
      <Row className="mt-5" id="page3">
        <Col xs={4} sm={4} md={4} lg={4}>
          <div>
            <h2 className="landi">Helping a local</h2>
            <h2 className="years">business reinvent itself</h2>
            <p className="ppp">
              We reached here with our hard work and dedication
            </p>
          </div>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          <img
            src="/Images/Icon8.png"
            alt="img"
            id="icon8"
            className="img-fluid"
          />
          <h5>2,245,341</h5>
          <p>Members</p>

          <img
            src="/Images/Icon10.png"
            alt="img"
            id="icon8"
            className="img-fluid"
          />
          <h5>828,867</h5>
          <p>Event Bookings</p>
        </Col>
        <Col>
          <img
            src="/Images/Icon9.png"
            alt="img"
            id="icon8"
            className="img-fluid"
          />
          <h5>46,328</h5>
          <p>Clubs</p>
          <img
            src="/Images/Icon11.png"
            alt="img"
            id="icon8"
            className="img-fluid"
          />
          <h5>1,926,436</h5>
          <p>Payments</p>
        </Col>
      </Row>
      <Row className="mt-5" id="ipod1">
        <Col xs={12} sm={12} md={12} lg={6} className="">
          <img src="/Images/Frame35.png" alt="img" className="img-fluid" />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} className="">
          <div>
            <h2>How to design your site footer like we did</h2>
            <p className="mt-3">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button type="button" className="btn mt-3" id="learnmore">
              Learn more
            </button>
          </div>
        </Col>
      </Row>
      <Row className="ipod">
        <Col xs={12} sm={12} md={12} lg={6} className="">
          <img src="/Images/image9.png" alt="img" className="img-fluid mt-5" />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} className="">
          <div className="mt-5">
            <h2>How to design your site footer like we did</h2>
            <p className="mt-3">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h5>Tim Smith</h5>
            <p>British Dragon Boat Racing Association</p>
            <img src="/Images/Frame14.png" alt="img" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PageThree;
