import { useState } from "react";
import "../Signup/signup.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-main">
      <div className="container">
        <p id="upper-text">Think it. Make it.</p>
        <p id="sub-text">Login to your account</p>
        <form className="form-box" onSubmit={handleLoginSubmit}>
          <label className="label-text">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            className="input-box"
          />
          <label className="label-text">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
            className="input-box"
          />
          <button className="signup-btn">Login</button>
          <p id="redirect-text">
            New on the platform? Please{" "}
            <Link id="redirect-link" to="/signup">
              Signup
            </Link>{" "}
            here
          </p>
        </form>
      </div>
      <p id="footer-text">
        Everything you need to stay focused, in one dashboard
      </p>
    </div>
  );
};

export default Login;
