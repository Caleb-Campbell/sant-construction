import React from "react";
import { Nav, Stack, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import svg from "../assets/simple.svg";

export default function NavBar({ toggle }) {
  return (
    <>
      <Nav className="justify-content-around align-items-center p-3 bg-dark">
        <Nav.Item>{/* <img src={svg} /> */}</Nav.Item>
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
        <Nav.Item>
          <Button onClick={toggle}>Free Bid</Button>
        </Nav.Item>
      </Nav>
    </>
  );
}
