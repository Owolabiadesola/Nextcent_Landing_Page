import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="mt-4 pt-5" id="div4">
          <h1 className="header4">
            Pellentesque suscipit <br /> fringilla libero eu.
          </h1>
          {/* <br />
            <button type="button" className="btn my-3" id="btnp4">
              Get a Demo
            </button> */}
        </Col>
      </Row>
      <Row className="pt-4 mb-4 text-light" id="footer">
        <Col xs={4} sm={4} md={4} lg={4} className="px-5">
          <img src="/Images/logo10.png" alt="img" className="img-fluid" />
          <h5 className="logotxt">Nexcent</h5>
          <br />
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} className="ft2">
          <h6>Company</h6>
          <p className="pf">About us</p>
          <p p className="pf">
            Blog
          </p>
          <p p className="pf">
            Contact us
          </p>
          <p p className="pf">
            Pricing
          </p>
          <p p className="pf">
            Testimonials
          </p>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <h6> Support</h6>
          <p p className="pf">
            Help center
          </p>
          <p p className="pf">
            Terms of service
          </p>
          <p p className="pf">
            Legal
          </p>
          <p p className="pf">
            Privacy policy
          </p>
          <p p className="pf">
            Status
          </p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          <h6>Stay up to date</h6>
          <br />
          <input className="input" placeholder="Your email address" />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
