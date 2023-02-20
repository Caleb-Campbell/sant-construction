import React from "react";
import { Nav, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import simple from "/simple.svg";

export default function NavBar() {
  return (
    <>
      <Nav className="justify-content-between p-3 bg-dark">
        <Nav.Item className="">
          <img src={simple} alt="Sant Construction Logo" />
        </Nav.Item>
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
