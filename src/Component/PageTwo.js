import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PageTwo = () => {
  return (
    <Container>
      <Row>
        <div className="ourclienttxt">
          <h2 className="mt-5">Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <Col xs={2} sm={2} md={2} lg={2}>
          <img
            src="/Images/Logo (1).png"
            alt="img"
            id="logo"
            className="img-fluid"
          />
          {/* <span>
            <img
              src="/Images/Logo (2).png"
              alt="img"
              id="logo"
              className="img-fluid"
            />
          </span> */}
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <img
            src="/Images/Logo (3).png"
            alt="img"
            id="logo"
            className="img-fluid"
          />
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <img
            src="/Images/Logo (4).png"
            alt="img"
            id="logo"
            className="img-fluid"
          />
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <img
            src="/Images/Logo (5).png"
            alt="img"
            id="logo"
            className="img-fluid"
          />
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <img
            src="/Images/Logo (6).png"
            alt="img"
            id="logo"
            className="img-fluid"
          />
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <img
            src="/Images/Logo (7).png"
            alt="img"
            id="logo"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row>
        <div className="nextcenttxt mt-5">
          <h2>
            Manage your entire community <br />
            in a single system
          </h2>
          <p>Who is Nextcent suitable for?</p>
        </div>
        <Col id="coltext" xs={4} sm={4} md={4}>
          <img
            src="/Images/Icon1.png"
            alt="img"
            id="logo-"
            className="img-fluid mt-3"
          />
          <h4 className="mt-3">
            Membership <br /> Organisations
          </h4>
          <p>
            Our membership management <br />
            software provides full automation of <br />
            membership renewal and payments
          </p>
        </Col>
        <Col id="coltext" xs={4} sm={4} md={4}>
          <img
            src="/Images/Icon2.png"
            alt="img"
            id="logo"
            className="img-fluid"
          />
          <h4 className="mt-3">
            National <br /> Associations
          </h4>
          <p>
            Our membership management <br />
            software provides full automation of <br />
            membership renewal and payments
          </p>
        </Col>
        <Col id="coltext" xs={4} sm={4} md={4}>
          <img
            src="/Images/Icon3.png"
            alt="img"
            id="logo-"
            className="img-fluid mt-3"
          />
          <h4 className="mt-3">
            Clubs And <br />
            Groups
          </h4>
          <p>
            Our membership management <br />
            software provides full automation of <br />
            membership renewal and payments
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <img
            src="/Images/Frame35.png"
            alt="img"
            id="logo_"
            className="img-fluid"
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <h2>
            The unseen of spending three <br /> years at Pixelgrade
          </h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button type="button" className="btn mt-3" id="learnmore">
            Learn more
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default PageTwo;
