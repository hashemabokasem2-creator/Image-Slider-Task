import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import "./Hobbies.css";

function Hobbies({ accentColor, theme }) {
  const [hobbies, setHobbies] = useState([]);
  const [hobbyInput, setHobbyInput] = useState("");
  const [deletingIndex, setDeletingIndex] = useState(null);
  const handleAddHobby = (e) => {
    e.preventDefault();
    if (!hobbyInput.trim()) return;
    setHobbies((prev) => [...prev, hobbyInput.trim()]);
    setHobbyInput("");
  };

  const handleRemoveHobby = (indexToRemove) => {
    setDeletingIndex(indexToRemove);

    setTimeout(() => {
      setHobbies((prev) => prev.filter((_, index) => index !== indexToRemove));
      setDeletingIndex(null);
    }, 300);
  };
  return (
    <>
      <Container className="my-4">
        <Card
          className="hobbiesSectionCard"
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#080d1d",
          }}
        >
          <h3
            className="hobbiesSectionTitle"
            style={{ color: theme === "light" ? "#0d0e0f" : "#edeaea" }}
          >
            Hobbies (Array State)
          </h3>
          <Form onSubmit={handleAddHobby} className="mb-3">
            <Form.Control
              type="text"
              placeholder="Add a hobby..."
              style={{
                backgroundColor: theme === "light" ? "#ffffff" : "#080d1d",
                color: theme === "light" ? "#0d0e0f" : "#edeaea",
                border: `1px solid ${accentColor}`,
              }}
              value={hobbyInput}
              onChange={(e) => setHobbyInput(e.target.value)}
              className="hobbyCustomInput mb-3"
            />
            <Button
              type="submit"
              className="addHobbyBtn"
              style={{ backgroundColor: accentColor, borderColor: accentColor }}
            >
              Add Hobby
            </Button>
          </Form>

          {hobbies.length === 0 ? (
            <p className="noHobbiesText">No hobbies yet.</p>
          ) : (
            <div
              className="hobbiesGridContainer"
              style={{
                backgroundColor: theme === "light" ? "#ffffff" : "#080d1d",
              }}
            >
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className={`hobbyCardItem ${deletingIndex === index ? "hobbyCardDeleting" : ""}`}
                  style={{
                    borderColor: accentColor,
                    backgroundColor: theme === "light" ? "#ffffff" : "#080d1d",
                  }}
                >
                  <span
                    className="hobbyItemText"
                    style={{ color: theme === "light" ? "#080d1d" : "#ffffff" }}
                  >
                    {hobby}
                  </span>
                  <Button
                    className="removeHobbyBtn"
                    style={{ color: accentColor, borderColor: accentColor }}
                    onClick={() => handleRemoveHobby(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Card>
      </Container>
    </>
  );
}

export default Hobbies;
