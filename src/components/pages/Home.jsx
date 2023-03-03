import React from "react";
import {
  Carousel,
  Stack,
  Image,
  Button,
  Container,
  Col,
  Row,
} from "react-bootstrap";
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

        <Container fluid className=" text-center mt-3 p-3 ">
          <Row className="" style={{ paddingInline: "7%" }}>
            <Col md={12} className="bg-light">
              <div className="p-5">
                <p>About Us</p>
                <h2>1A Passion + Purpose</h2>
                <p className="responsive">
                  {" "}
                  1B Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ullam, quisquam nemo perspiciatis obcaecati tenetur illum
                  eligendi minus quibusdam nulla accusantium. Accusamus magnam
                  culpa alias ullam error, veniam explicabo perferendis rerum.{" "}
                </p>
                <Button>1C Learn About Us</Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="bg-light mt-3 p-3" direction="horizontal">
          <Row>
            <Col md={6}>
              <div className="p-5">
                <h2>2A Government Construction</h2>
                <p>
                  2B Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet saepe eligendi ut eius neque dolorem, tenetur iure a
                  sapiente quas est, explicabo obcaecati iusto inventore nulla
                  aspernatur! Quidem, voluptatibus adipisci?
                </p>
                <NavLink>
                  {"<"} 2C Learn more about government construction{" "}
                </NavLink>
              </div>
            </Col>
            <Col md={6}>
              <img className="home-image" src="https://picsum.photos/500/500" />
            </Col>
          </Row>
        </Container>
        <Container className="bg-light mt-3 p-3" direction="horizontal">
          <Row>
            <Col md={6}>
              <div className="p-5">
                <h2>3A Government Construction</h2>
                <p>
                  3B Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Non, tenetur et. Temporibus eligendi beatae quaerat ipsa nam
                  sit magni voluptatem sequi quidem similique dolor, quia
                  consequuntur itaque nihil. Ratione, expedita.
                </p>
                <NavLink>
                  3C Learn more about government construction {">"}
                </NavLink>
              </div>
            </Col>
            <Col md={6}>
              <img className="home-image" src="https://picsum.photos/500/500" />
            </Col>
          </Row>
        </Container>
      </Stack>
    </>
  );
}
