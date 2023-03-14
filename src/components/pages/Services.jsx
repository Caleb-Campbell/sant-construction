import React from "react";
import "../../styles/service.css";
import Service from "../Service";

export default function Services() {
  const services = [
    "digging",
    "building",
    "digging",
    "building",
    "digging",
    "building",
    "digging",
    "building",
    "digging",
    "building",
  ];

  return (
    <div className="service-wrap p-5 bg-dark">
      <h2 className="text-light service-title">Services</h2>
      <Service
        serviceList={services}
        title={"Stuff"}
        text={"stuff stuff"}
        img={
          "https://images.pexels.com/photos/1579356/pexels-photo-1579356.jpeg"
        }
      />
    </div>
  );
}
