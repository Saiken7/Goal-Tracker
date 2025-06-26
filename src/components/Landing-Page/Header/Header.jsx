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
          </div>
          <div className="platforms" onMouseEnter={handlePlatform}>
            <p>Platforms</p>
            <img src="src/assets/Drop_Down_Arrow.svg" />
            <div className="pane">
              {/* Add Pane Items */}
              {/* Windows */}
              <div className="pane-items">
                <img src="src\assets\windows.svg" alt="" />
                <div className="pane-title">
                  <p>Windows</p>
                  <p className="p-text">Coming Soon..</p>
                </div>
              </div>

              {/* Web */}
              <div className="pane-items">
                <img src="src\assets\web.svg" />
                <div className="pane-title">
                  <p>Web Application</p>
                  <p className="p-text">Currently Using</p>
                </div>
              </div>

              {/* Android */}
              <div className="pane-items">
                <img src="src\assets\android.svg" alt="" />
                <div className="pane-title">
                  <p>Android</p>
                  <p className="p-text">Coming Soon..</p>
                </div>
              </div>

              {/* iOS */}
              <div className="pane-items">
                <img src="src\assets\ios.svg" />
                <div className="pane-title">
                  <p>Apple App</p>
                  <p className="p-text">Coming Soon</p>
                </div>
              </div>
            </div>
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
