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
              <Nav.Link>
                <NavLink className="text-light text-decoration-none" to="/">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  className="text-light text-decoration-none"
                  to="/services"
                >
                  Services
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className="text-light text-decoration-none"
                  to="/custom-homes-and-shops"
                >
                  Customize your Build
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  className="text-light text-decoration-none"
                  to="/about"
                >
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  className="text-light text-decoration-none"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </Nav.Link>

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
