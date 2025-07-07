import { useNavigate } from "react-router-dom";
import "./herosection.css";
import {} from "../../../utils/scrollUtils.js";
const HeroSection = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    window.open("https://github.com/Saiken7/Goal-Tracker", "_blank");
  };
  return (
    <main className="hero-main">
      <section className="hero-section">
        <div className="text-section">
          <p className="hero-text">
            Plan <strong>Smarter</strong>, Achieve <strong>Faster</strong>
          </p>
          <p className="hero-text">
            Take <strong>Control</strong> of Your <strong>Goals</strong>
          </p>
          <p className="hero-text">
            and <strong>Time</strong>.
          </p>
          <p className="subtext">
            Track goals, schedule your day, and stay in control of your
            progress.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/signup")}>
              GET STARTED
            </button>
            <button className="secondary-btn" onClick={handleRedirect}>
              VISIT GITHUB
            </button>
          </div>
        </div>
        <div className="image-section">
          <img src="src/assets/Hero.jpg" alt="Hero Illustration" />
        </div>
      </section>
      {/* about section */}
      <section id="about-scroll" className="about">
        <div className="about-card">
          <h2
            style={{ textAlign: "center", padding: "10px", marginTop: "10px" }}
          >
            About
          </h2>
          <div className="card-text">
            <div id="text">
              <p styles={{ marginTop: "20px" }}>
                <b>SmartLife Hub</b> is your personal productivity companion —
                designed to help you stay organized, focused, and in control of
                your goals and time. Whether you're aiming to build better
                habits, complete long-term projects, or simply make your days
                more intentional, SmartLife Hub brings everything together in
                one clean, intuitive space.
              </p>
            </div>
            <img src="src\assets\About.jpg" alt="" />
          </div>
        </div>
      </section>
      {/* Tools and Features section */}
      <section id="features-scroll" className="display-features">
        <div className="two-features">
          <div className="box">1</div>
          <div className="box">2</div>
        </div>
        <div className="wide-box">1</div>
      </section>

      {/* Tagline */}
      <section id="tagline">
        <p>Everything you need to stay focused, in one dashboard</p>
      </section>
    </main>
  );
};

export default HeroSection;
