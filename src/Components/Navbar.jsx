import React, { useState, useEffect } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
// import { IoMoonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const [isMobile, setMobile] = useState(false);

  const handleToggle = () => {
    setMobile(!isMobile);
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <nav className="navbar">
        <div className="logo">Devagya Rattan</div>
        <div className={`nav-links ${isMobile ? "mobile" : ""}`}>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Skills">Skills</a>
          <a href="#Contact">Contact</a>
          <div style={{ fontSize: "20px" }}>
            <MdOutlineWbSunny onClick={toggleTheme} />
          </div>
        </div>
        <div className="menu-icon" onClick={handleToggle}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
