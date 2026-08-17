import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./Taxtcard.css";

function Taxtcard({ accentColor, theme }) {
  const [user, setUser] = useState({
    email: "alaa@example.com",
    age: 25,
  });
  const [displayName, setDisplayName] = useState("Alaa");

  const toggleName = () => {
    setDisplayName((prev) => (prev === "Alaa" ? "Guest" : "Alaa"));
  };

  const increaseAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };
  return (
    <>
      <Container className="my-4">
        <Card className="profileSectionCard" style={{
              backgroundColor: theme === "light" ? "#ffffff" : "#080d1d",
            }}>
          <h3 className="sectionTitle" style={{color: theme === "light" ? "#0d0e0f" : "#edeaea"}}>
            Profile Card (String, Boolean, Object)
          </h3>
          <div
            className="innerProfileBox"
            style={{ border: `1px solid ${accentColor}` }}
          >
            <div className="d-flex align-items-center gap-3 mb-3">
              <div
                className="avatarBox"
                style={{ backgroundColor: accentColor }}
              >
                A
              </div>
              <div>
                <h4 className="userName" style={{color: theme === "light" ? "#0d0e0f" : "#edeaea"}}>ALAA</h4>
                <p className="userMeta" style={{color: theme === "light" ? "#0d0e0f" : "#edeaea"}}>
                  {user.email} • Age {user.age} • Theme:
                  {theme === "light" ? "Light" : "Dark"}
                </p>
              </div>
            </div>
            <p className="descriptionText mb-3" style={{color: theme === "light" ? "#0d0e0f" : "#edeaea"}}>
              Hello <strong>{displayName}</strong>! This card reads from an
              <em>object state</em> (user) and a <em>string state</em> (name).
              Theme toggle is a <em>boolean state</em>.
            </p>
            <div className="d-flex align-items-center gap-2">
              <Button
                className="actionBtnPrimary"
                style={{ backgroundColor: accentColor }}
                onClick={toggleName}
              >
                Toggle Display Name
              </Button>
              <Button
                className="actionBtnOutline"
                style={{
                  borderColor: accentColor,
                  color: accentColor,
                }}
                onClick={increaseAge}
              >
                Happy Birthday (+1 Age)
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default Taxtcard;
