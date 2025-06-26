import { NavLink } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [platformsVisible, setPlatformsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePaneVisibility = () => {
    setPlatformsVisible(!platformsVisible);
  };

  const Pane = () => (
    <div
      className="pane"
      style={{
        opacity: platformsVisible ? 1 : 0,
        pointerEvents: platformsVisible ? "auto" : "none",
      }}
    >
      <div className="pane-items">
        <img src="src/assets/windows.svg" alt="" />
        <div className="pane-title">
          <p>Windows</p>
          <p className="p-text">Coming Soon..</p>
        </div>
      </div>
      <div className="pane-items">
        <img src="src/assets/web.svg" alt="" />
        <div className="pane-title">
          <p>Web Application</p>
          <p className="p-text">Currently Using</p>
        </div>
      </div>
      <div className="pane-items">
        <img src="src/assets/android.svg" alt="" />
        <div className="pane-title">
          <p>Android</p>
          <p className="p-text">Coming Soon..</p>
        </div>
      </div>
      <div className="pane-items">
        <img src="src/assets/ios.svg" alt="" />
        <div className="pane-title">
          <p>Apple App</p>
          <p className="p-text">Coming Soon</p>
        </div>
      </div>
    </div>
  );

  const NavbarContent = () => (
    <>
      <section className="option-section">
        <NavLink to="/" className="logo">
          Logo
        </NavLink>
        <div className="features">
          <p>Features</p>
        </div>
        <div
          className="platforms"
          onMouseEnter={togglePaneVisibility}
          onMouseLeave={togglePaneVisibility}
        >
          <p>Platforms</p>
          <img src="src/assets/Drop_Down_Arrow.svg" alt="Dropdown" />
          <Pane />
        </div>
        <p id="about">About</p>
      </section>
      <section className="login-section">
        <NavLink to="/" className="signin-btn">
          Sign-in
        </NavLink>
        <button className="get-started-btn">GET STARTED</button>
      </section>
    </>
  );

  return (
    <>
      <header className="header">
        <NavbarContent />
      </header>

      {isScrolled && (
        <div className="sticky-navbar">
          <NavbarContent />
        </div>
      )}
    </>
  );
};

export default Header;
