import React from "react";
import { Nav, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Nav className="justify-content-between p-3 bg-dark">
        <Nav.Item className="text-light"> Logo {/* logo here */}</Nav.Item>
        <Stack gap={3} direction="horizontal">
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
              Custom Homes and Shops
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
