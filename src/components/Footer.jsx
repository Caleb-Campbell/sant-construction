import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Stack gap={4} className="bg-dark p-5">
        <h2 className="text-light text-center">Sant Construction LLC</h2>
        <Container fluid="xs" className=" text-center w-100">
          <Row className="justify-content-md-center">
            <Col md="auto">
              <NavLink className="text-light text-center">Home</NavLink>
            </Col>
            <Col md="auto">
              <NavLink className="text-light text-center">Services</NavLink>
            </Col>
            <Col md="auto">
              <NavLink className="text-light text-center">
                Customize your Build
              </NavLink>
            </Col>
            <Col md="auto">
              <NavLink className="text-light text-center">About</NavLink>
            </Col>
            <Col md="auto">
              <NavLink className="text-light text-center">Contact</NavLink>
            </Col>
          </Row>
        </Container>
        <Container className="text-center">
          <Row>
            <Col>
              <a>
                <img
                  style={{ width: "2em" }}
                  src="https://elitecnd.com/wp-content/themes/custom-theme/assets/images/facebook-logo.svg"
                />
              </a>
            </Col>
            <Col>
              <a>
                <img
                  style={{ width: "2em" }}
                  src="https://elitecnd.com/wp-content/themes/custom-theme/assets/images/twitter-logo.svg"
                />
              </a>
            </Col>
            <Col>
              <a>
                <img
                  style={{ width: "2em" }}
                  src="https://elitecnd.com/wp-content/themes/custom-theme/assets/images/instagram-logo.svg"
                />
              </a>
            </Col>
            <Col>
              <a>
                <img
                  style={{ width: "2em" }}
                  src="https://elitecnd.com/wp-content/themes/custom-theme/assets/images/linkedin-logo.svg"
                />
              </a>
            </Col>
            <Col>
              <a>
                <img
                  style={{ width: "2em" }}
                  src="https://elitecnd.com/wp-content/themes/custom-theme/assets/images/youtube-logo.svg"
                />
              </a>
            </Col>
          </Row>
        </Container>
        <p className="fs-6 text-center mt-5 mb-0 text-light">
          Copyright © 2023 — Sant Construction LLC, All Rights Reserved
        </p>
      </Stack>
    </>
  );
}
