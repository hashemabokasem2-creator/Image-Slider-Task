import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import "./Navbar.css";

function MyNavbar({ theme, setTheme, accentColor, setAccentColor }) {
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
          borderBottom: `2px solid ${accentColor}`,
        }}
      >
        <Container fluid className="d-flex align-items-center p-0 h-100">
          <div className="avatar" style={{ backgroundColor: accentColor }}>
            SP
          </div>
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
              style={{ backgroundColor: accentColor, borderColor: accentColor }}
            >
              {theme === "light" ? "Switch to Dark" : "Switch to Light"}
            </Button>

            <input
              type="color"
              className="colorPicker"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
            />
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
