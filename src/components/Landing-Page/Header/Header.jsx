import { NavLink } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [platforms, setPlatforms] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePlatform = () => {
    const pane = document.querySelector(".pane");
    setPlatforms(!platforms);
    if (!platforms) {
      pane.style.opacity = 1;
    } else {
      pane.style.opacity = 0;
    }
  };

  return (
    <>
      {/* Normal Header */}
      <header className="header">
        <section className="option-section">
          <NavLink to={"/"} className="logo">
            Logo
          </NavLink>
          <div className="features">
            <p>Features</p>
            <img src="src/assets/Drop_Down_Arrow.svg" />
          </div>
          <div className="platforms" onMouseEnter={handlePlatform}>
            <p>Platforms</p>
            <img src="src/assets/Drop_Down_Arrow.svg" />
            <div className="pane">{/* Add Pane Items */}</div>
          </div>
          <p id="about">About</p>
        </section>
        <section className="login-section">
          <NavLink to={"/"} className="signin-btn">
            Sign-in
          </NavLink>
          <button className="get-started-btn">GET STARTED</button>
        </section>
      </header>

      {/* Sticky Navbar that appears on scroll */}
      {isScrolled && (
        <div className="sticky-navbar">
          <section className="option-section">
            <NavLink to={"/"} className="logo">
              Logo
            </NavLink>
            <div className="features">
              <p>Features</p>
              <img src="src/assets/Drop_Down_Arrow.svg" />
            </div>
            <div className="platforms" onMouseEnter={handlePlatform}>
              <p>Platforms</p>
              <img src="src/assets/Drop_Down_Arrow.svg" />
              <div className="pane">{/* Add Pane Items */}</div>
            </div>
            <p id="about">About</p>
          </section>
          <section className="login-section">
            <NavLink to={"/"} className="signin-btn">
              Sign-in
            </NavLink>
            <button className="get-started-btn">GET STARTED</button>
          </section>
        </div>
      )}
    </>
  );
};

export default Header;
