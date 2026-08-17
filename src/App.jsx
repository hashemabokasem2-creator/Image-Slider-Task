import React, { useState, useEffect } from "react";
import MyNavbar from "./Navbar.jsx";
import Imageslider from "./Imageslider.jsx";
import Taxtcard from "./Taxtcard.jsx";
import Hobbies from "./Hobbies.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  const [accentColor, setAccentColor] = useState("#e00000");

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "#ffffff" : "#121212";
  }, [theme]);
  return (
    <>
      <MyNavbar
        theme={theme}
        setTheme={setTheme}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      />
      <Imageslider accentColor={accentColor} theme={theme} />
      <Taxtcard accentColor={accentColor} theme={theme} />
      <Hobbies accentColor={accentColor} theme={theme} />
    </>
  );
}

export default App;
