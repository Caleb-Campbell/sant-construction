import React from "react";
import { Stack, Container, Col, Row, NavLink, Carousel } from "react-bootstrap";
import "../../../src/aboutCSS.css";

export default function About() {
  return (
    <>
      <Container className="about-border  mt-5 mb-5" direction="horizontal">
        <Row>
          <Col md={6}>
            <img className="w-100" src="https://picsum.photos/500/500" />
          </Col>
          <Col md={6}>
            <div className="p-5">
              <h2>
                <strong>4A Sant Contruction</strong>
              </h2>
              <p>
                4B Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum
              </p>
              <NavLink>4C Learn more about this {">"}</NavLink>
            </div>
          </Col>
        </Row>
      </Container>

      {/* //////////////////////////////////ABOUT CAROUSEL////////////////////////////////// */}

      <Carousel className="mb-0" style={{ width: "100vw" }}>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            src="https://picsum.photos/3840/1440"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            src="https://picsum.photos/3840/1440"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            src="https://picsum.photos/3840/1440"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            src="https://picsum.photos/3840/1440"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            src="https://picsum.photos/3840/1440"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            src="https://picsum.photos/3840/1440"
          />
        </Carousel.Item>
      </Carousel>
      {/* //////////////////////////////////INFO CARD////////////////////////////////// */}
      <div className="about-info-card">
        <h2>5A More Info</h2>
        <p>
          5B Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>

        <p>
          5C Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p>
          5D Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      {/* //////////////////////////////////LEADERSHIP INFO////////////////////////////////// */}
      <Container
        className="mt-5 mb-5 about-border text-center"
        direction="horizontal"
      >
        <img
          src="https://picsum.photos/350/350"
          className="leaderImg text-center"
        />
        <div className="p-5 leadership">
          <h2>6A Leadership</h2>
          <p>
            6B Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <NavLink>6C Learn more about our leadership {">"}</NavLink>
        </div>
      </Container>
      <Container className="staff-wrap">
        <Row>
          <Col className="text-center">
            <img src="https://picsum.photos/200/200" className="staff-member" />
            <h3 className="staff-caption-head">Member Name</h3>
            <p>Member Info</p>
          </Col>
          <Col className="text-center">
            <img src="https://picsum.photos/200/200" className="staff-member" />
            <h3 className="staff-caption-head">Member Name</h3>
            <p>Member Info</p>
          </Col>
          <Col className="text-center">
            <img src="https://picsum.photos/200/200" className="staff-member" />
            <h3 className="staff-caption-head">Member Name</h3>
            <p>Member Info</p>
          </Col>
          <Col className="text-center">
            <img src="https://picsum.photos/200/200" className="staff-member" />
            <h3 className="staff-caption-head">Member Name</h3>
            <p>Member Info</p>
          </Col>
        </Row>
        <Row className="staff-row">
          <Col className="text-center">
            <img src="https://picsum.photos/200/200" className="staff-member" />
            <h3 className="staff-caption-head">Member Name</h3>
            <p>Member Info</p>
          </Col>
          <Col className="text-center">
            <img src="https://picsum.photos/200/200" className="staff-member" />
            <h3 className="staff-caption-head">Member Name</h3>
            <p>Member Info</p>
          </Col>
          <Col className="text-center">
            <img src="https://picsum.photos/200/200" className="staff-member" />
            <h3 className="staff-caption-head">Member Name</h3>
            <p>Member Info</p>
          </Col>
          <Col className="text-center">
            <img src="https://picsum.photos/200/200" className="staff-member" />
            <h3 className="staff-caption-head">Member Name</h3>
            <p>Member Info</p>
          </Col>
        </Row>
      </Container>
      <p className="text-center">
        Interested in joining our team? Send your resume to
        santconstructionllc@gmail.com
      </p>
    </>
  );
}
