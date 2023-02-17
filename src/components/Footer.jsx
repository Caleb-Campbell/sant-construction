import React from "react";
import { Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Stack gap={4} className="bg-dark p-5">
        <Stack
          className="justify-content-around p-3 pt-0"
          direction="horizontal"
        >
          <NavLink className="text-light">Home</NavLink>
          <NavLink className="text-light">Services</NavLink>
          <NavLink className="text-light">Custom Shops and Homes</NavLink>
          <NavLink className="text-light">About</NavLink>
          <NavLink className="text-light">Contact</NavLink>
        </Stack>
        <Stack className="justify-content-around mt-5" direction="horizontal">
          <h2 className="text-light">Sant Construction LLC</h2>
          <a>
            <img
              style={{ width: "2em" }}
              src="https://elitecnd.com/wp-content/themes/custom-theme/assets/images/facebook-logo.svg"
            />
          </a>
          <a>
            <img
              style={{ width: "2em" }}
              src="https://elitecnd.com/wp-content/themes/custom-theme/assets/images/twitter-logo.svg"
            />
          </a>
          <a>
            <img
              style={{ width: "2em" }}
              src="https://elitecnd.com/wp-content/themes/custom-theme/assets/images/instagram-logo.svg"
            />
          </a>
          <a>
            <img
              style={{ width: "2em" }}
              src="https://elitecnd.com/wp-content/themes/custom-theme/assets/images/linkedin-logo.svg"
            />
          </a>
          <a>
            <img
              style={{ width: "2em" }}
              src="https://elitecnd.com/wp-content/themes/custom-theme/assets/images/youtube-logo.svg"
            />
          </a>
        </Stack>
        <p className="fs-6 text-center mt-5 mb-0 text-light">
          Copyright © 2023 — Sant Construction LLC, All Rights Reserved
        </p>
      </Stack>
    </>
  );
}
