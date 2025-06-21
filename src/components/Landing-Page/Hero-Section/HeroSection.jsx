import "./herosection.css";

const HeroSection = () => {
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
            <button className="primary-btn">GET STARTED</button>
            <button className="secondary-btn">VISIT GITHUB</button>
          </div>
        </div>
        <div className="image-section">
          <img src="src/assets/Hero.jpg" alt="Hero Illustration" />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
