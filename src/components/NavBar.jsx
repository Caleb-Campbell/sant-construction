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
      <Navbar className="p-0 w-100" bg="dark" variant="dark" expand="lg">
        <Container>
          <Col>
            <Navbar.Brand href="#home">
              <img className="logo" src={svg} />
              Sant Construction
            </Navbar.Brand>
          </Col>
          <Col>
            <Navbar.Toggle className="w-10" aria-controls="basic-navbar-nav" />
          </Col>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-between me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
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
