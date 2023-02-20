import React from "react";
import { Nav, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Nav className="justify-content-around p-3 bg-dark">
        <Nav.Item>
          <h2>Logo</h2>
        </Nav.Item>
        <Stack gap={5} direction="horizontal">
          <Nav.Item>
            <NavLink className="text-light text-decoration-none" to="/">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="text-light text-decoration-none" to="/services">
              Services
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="text-light text-decoration-none"
              to="/custom-homes-and-shops"
            >
              Customize your Build
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="text-light text-decoration-none" to="/about">
              About
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="text-light text-decoration-none" to="/contact">
              Contact
            </NavLink>
          </Nav.Item>
        </Stack>
      </Nav>
    </>
  );
}
