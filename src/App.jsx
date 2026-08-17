import React, { useState, useEffect } from "react";
import MyNavbar from "./Navbar.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "#ffffff" : "#121212";
  }, [theme]);
  return (
    <>
      <MyNavbar theme={theme} setTheme={setTheme} />
    </>
  );
}

export default App;
