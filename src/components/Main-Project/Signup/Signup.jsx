import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-main">
      <div className="container">
        <p id="upper-text">Think it. Make it.</p>
        <p id="sub-text">Create new Account</p>
        <form className="form-box" onSubmit={handleSubmit}>
          <label className="label-text">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-box"
          />
          <label className="label-text">Email</label>
          <input
            type="mail"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-box"
          />
          <label className="label-text">Phone</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-box"
          />
          <label className="label-text">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-box"
          />
          <button className="signup-btn">Signup</button>
          <p id="redirect-text">
            If you already have an account. Please{" "}
            <Link id="redirect-link" to={"/login"}>
              login
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

export default Signup;
