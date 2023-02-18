import React from "react";
import { Carousel, Stack, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../app.css";

export default function Home() {
  return (
    <>
      <Stack className="bg-dark" style={{ width: "100vw" }}>
        <Carousel className="mb-0" style={{ width: "100vw" }}>
          <Carousel.Item>
            <img
              style={{ width: "100%" }}
              src="https://picsum.photos/3840/2160"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "100%" }}
              src="https://picsum.photos/3840/2160"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "100%" }}
              src="https://picsum.photos/3840/2160"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "100%" }}
              src="https://picsum.photos/3840/2160"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "100%" }}
              src="https://picsum.photos/3840/2160"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "100%" }}
              src="https://picsum.photos/3840/2160"
            />
          </Carousel.Item>
        </Carousel>
        <h1 className="title text-light text-center">Sant Construction</h1>
        <Button
          style={{ position: "relative", top: "-500px", margin: "0px" }}
          className="w-25 mx-auto"
        >
          Take a look at our stuff
        </Button>
        <div
          className="background"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Stack
            gap={3}
            className="mx-5 align-items-center bg-light h-50 my-auto p-5"
          >
            <p>About Us</p>
            <h2>Passion + Purpose</h2>
            <p className="w-50 text-center">
              {" "}
              We put our clients, team members, and communities at the center of
              all we do. Our “whys” drive our passion, purpose, and growth. We
              want to make the world cleaner, safer, and a better place to live.
              We strive to create opportunities, inspire and lift the
              underserved, and ultimately, create lasting legacies.{" "}
            </p>
            <Button>Learn About Us</Button>
          </Stack>
        </div>
        <Stack className="bg-light" direction="horizontal">
          <div className="p-5">
            <h2>Government Construction</h2>
            <p>
              As part of our Mentor-Protégé partnership with Washington River
              Protection Solutions (WRPS), we support the U.S. Department of
              Energy (DOE) in the substantial undertaking of hazardous waste
              clean-up and environmental remediation in and around the Hanford
              area.
            </p>
            <NavLink>{"<"} Learn more about government construction </NavLink>
          </div>
          <img src="https://picsum.photos/500/500" />
        </Stack>
        <Stack className="bg-light m-0" direction="horizontal">
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
      </Stack>
    </>
  );
}
