import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import "./Navbar.css";

function MyNavbar({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Navbar
        fixed="top"
        className="px-3 customNav"
        style={{
          backgroundColor:
            theme === "light"
              ? "rgba(255, 255, 255, 0.4)"
              : "rgba(18, 18, 18, 0.4)",
        }}
      >
        <Container fluid className="d-flex align-items-center p-0 h-100">
          <div className="avatar">SP</div>
          <div className="flex-grow-1 d-none d-md-flex flex-column align-items-start ms-3">
            <h1
              className="title"
              style={{ color: theme === "light" ? "#0b132a" : "#ffffff" }}
            >
              ALAA ELDIN ALHALLAK Smart Profile Dashboard
            </h1>
            <p
              className="subtitle"
              style={{ color: theme === "light" ? "#6c757d" : "#cccccc" }}
            >
              React Advanced — Hooks, State, Events, Forms, Color Picker &
              Carousel
            </p>
          </div>

          <div className="d-flex align-items-center gap-2 ms-auto">
            <Button
              variant="danger"
              className="switchBtn"
              onClick={toggleTheme}
            >
              {theme === "light" ? "Switch to Dark" : "Switch to Light"}
            </Button>

            <input type="color" className="colorPicker" />
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
