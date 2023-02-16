import React from "react";
import { Carousel, Stack, Image, Button } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Stack style={{ width: "100vw" }}>
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
        <Button className="w-25 m-1 mx-auto">Take a look at our stuff</Button>
      </Stack>
    </>
  );
}
