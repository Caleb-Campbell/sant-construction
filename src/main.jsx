import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootswatch/dist/lux/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xs"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
