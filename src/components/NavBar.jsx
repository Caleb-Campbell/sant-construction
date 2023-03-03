import React from "react";
import {
  Nav,
  Navbar,
  Stack,
  Button,
  NavDropdown,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import svg from "../assets/simple.svg";

export default function TopNav({ toggle }) {
  return (
    <>
      <Navbar
        className=" w-100 justify-content-between"
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Container>
          <Col className="justify-content-between">
            <Navbar.Brand href="#home">
              <img className="logo " src={svg} style={{ scale: "1.2" }} />
              <span className="fs-5">Sant Construction</span>
            </Navbar.Brand>
          </Col>
          <Col>
            <Navbar.Toggle className="w-10" aria-controls="basic-navbar-nav" />
          </Col>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-between ">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/custom-homes-and-shops">
                Customize Your Build
              </Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>

              <Button onClick={toggle} className="float-right">
                Get a Bid
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
  // );
}
