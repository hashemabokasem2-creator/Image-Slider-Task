import React, { useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import "./Profile.css";

function Profile({ accentColor, theme, setAccentColor }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      age: "",
      email: "",
    });
  };
  return (
    <>
      <Container className="my-4">
        <Card
          className="editProfileCard"
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#080d1d",
          }}
        >
          <h3
            className="editProfileTitle"
            style={{ color: theme === "light" ? "#0d0e0f" : "#edeaea" }}
          >
            Edit Profile (Form Event Handling)
          </h3>

          <Form onSubmit={(e) => e.preventDefault()}>
            <Row className="g-3 mb-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label
                    className="fieldLabel"
                    style={{ color: theme === "light" ? "#0d0e0f" : "#edeaea" }}
                  >
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="profileCustomInput"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#ffffff" : "#080d1d",
                      color: theme === "light" ? "#0d0e0f" : "#edeaea",
                      border: `1px solid ${accentColor}`,
                    }}
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group>
                  <Form.Label
                    className="fieldLabel"
                    style={{ color: theme === "light" ? "#0d0e0f" : "#edeaea" }}
                  >
                    Age
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="profileCustomInput"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#ffffff" : "#080d1d",
                      color: theme === "light" ? "#0d0e0f" : "#edeaea",
                      border: `1px solid ${accentColor}`,
                    }}
                  />
                </Form.Group>
              </Col>

              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    className="fieldLabel"
                    style={{ color: theme === "light" ? "#0d0e0f" : "#edeaea" }}
                  >
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="profileCustomInput"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#ffffff" : "#080d1d",
                      color: theme === "light" ? "#0d0e0f" : "#edeaea",
                      border: `1px solid ${accentColor}`,
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-4">
              <Form.Label className="fieldLabel">Accent Color</Form.Label>
              <div>
                <input
                  type="color"
                  className="colorPicker wideColorPicker"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                />
              </div>
            </Form.Group>
            <div className="d-flex gap-2">
              <Button
                type="button"
                className="saveChangesBtn"
                style={{
                  backgroundColor: accentColor,
                  borderColor: accentColor,
                }}
              >
                Save Changes
              </Button>
              <Button
                type="button"
                className="resetFormBtn"
                onClick={handleReset}
                style={{ color: accentColor, borderColor: accentColor }}
              >
                Reset Form
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default Profile;
