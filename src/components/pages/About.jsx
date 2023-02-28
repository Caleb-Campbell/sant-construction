import React from "react";
import { Stack, NavLink, Carousel } from "react-bootstrap";
import "../../../src/aboutCSS.css";

export default function About() {
  return (
    <>
      <Stack className="about-border  mt-5 mb-5" direction="horizontal">
        <img src="https://picsum.photos/500/500" />
        <div className="p-5">
          <h2><strong>Sant Contruction</strong></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <NavLink>Learn more about this {">"}</NavLink>
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
      {/* //////////////////////////////////LEADERSHIP INFO////////////////////////////////// */}
      <Stack className="mt-5 mb-5 about-border" direction="horizontal">
        <img src="https://picsum.photos/350/350" className="leaderImg"/>
        <div className="p-5 leadership">
          <h2>Leadership</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <NavLink>Learn more about our leadership {">"}</NavLink>
        </div>
      </Stack>
      <div className="staff-wrap">
        <div className="staff-row">
        <span><img src='https://picsum.photos/200/200' className="staff-member"/><h3 className="staff-caption-head">Member Name</h3><p>Member Info</p></span>
        <span><img src='https://picsum.photos/200/200' className="staff-member"/><h3 className="staff-caption-head">Member Name</h3><p>Member Info</p></span>
        <span><img src='https://picsum.photos/200/200' className="staff-member"/><h3 className="staff-caption-head">Member Name</h3><p>Member Info</p></span>
        <span><img src='https://picsum.photos/200/200' className="staff-member"/><h3 className="staff-caption-head">Member Name</h3><p>Member Info</p></span>
        </div>
        <div className="staff-row">
        <span><img src='https://picsum.photos/200/200' className="staff-member"/><h3 className="staff-caption-head">Member Name</h3><p>Member Info</p></span>
        <span><img src='https://picsum.photos/200/200' className="staff-member"/><h3 className="staff-caption-head">Member Name</h3><p>Member Info</p></span>
        <span><img src='https://picsum.photos/200/200' className="staff-member"/><h3 className="staff-caption-head">Member Name</h3><p>Member Info</p></span>
        <span><img src='https://picsum.photos/200/200' className="staff-member"/><h3 className="staff-caption-head">Member Name</h3><p>Member Info</p></span>
        </div>

      </div>
    </>
  );
}
