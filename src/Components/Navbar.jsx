import React, { useState, useEffect } from "react";
import { IoSunnySharp } from "react-icons/io5";

import { BsMoonStarsFill } from "react-icons/bs";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [ham, setham] = useState(false);
  const [light, setLight] = useState(false);
  const changeIcon = () => {
    setham(true);
    setLight(true);
    if (ham === true) {
      setham(false);
    }
    if (light === true) {
      setLight(false);
    }
  };
  const changeLightIcon = () => {
    setLight(true);
    if (light === true) {
      setLight(false);
    }
  };
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
          <div
            style={{ fontSize: "24px", cursor: "pointer", color: " #008b8b" }}
          >
            <div onClick={changeLightIcon}>
              {light ? (
                <IoSunnySharp onClick={toggleTheme} />
              ) : (
                <BsMoonStarsFill onClick={toggleTheme} />
              )}
            </div>
          </div>
        </div>
        <div className="menu-icon" onClick={handleToggle}>
          <div onClick={changeIcon} style={{ cursor: "pointer" }}>
            {ham ? (
              <IoMdClose style={{ color: " #008b8b" }} />
            ) : (
              <GiHamburgerMenu style={{ color: " #008b8b" }} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
