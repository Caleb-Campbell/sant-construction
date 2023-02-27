import React from "react";
import { Stack, NavLink, Carousel } from "react-bootstrap";
import "../../../src/aboutCSS.css";

export default function About() {
  return (
    <>
      <Stack className="bg-light mt-5 mb-5" direction="horizontal">
        <img src="https://picsum.photos/500/500" />
        <div className="p-5">
          <h2>Government Construction</h2>
          <p>
            As part of our Mentor-Protégé partnership with Washington River
            Protection Solutions (WRPS), we support the U.S. Department of
            Energy (DOE) in the substantial undertaking of hazardous waste
            clean-up and environmental remediation in and around the Hanford
            area.
          </p>
          <NavLink>Learn more about government construction {">"}</NavLink>
        </div>
      </Stack>

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
        <h2>More Info</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      
    </>
  );
}
