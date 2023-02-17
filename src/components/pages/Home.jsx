import React from "react";
import { Carousel, Stack, Image, Button } from "react-bootstrap";
import "../../app.css";

export default function Home() {
  return (
    <>
      <Stack className="bg-dark" style={{ width: "100vw" }}>
        <Carousel style={{ width: "100vw" }}>
          <Carousel.Item>
            <img src="https://picsum.photos/2000/1000" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://picsum.photos/2000/1000" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://picsum.photos/2000/1000" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://picsum.photos/2000/1000" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://picsum.photos/2000/1000" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://picsum.photos/2000/1000" />
          </Carousel.Item>
        </Carousel>
        <Button
          style={{ position: "relative", top: "-100px", margin: "0px" }}
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
      </Stack>
    </>
  );
}
