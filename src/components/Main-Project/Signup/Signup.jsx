import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signup-main">
      <div className="container">
        <p id="upper-text">Think it. Make it.</p>
        <p id="sub-text">Create new Account</p>
        <form className="form-box">
          <label className="label-text">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input-box"
          />
          <label className="label-text">Email</label>
          <input
            type="mail"
            placeholder="Enter your Email"
            className="input-box"
          />
          <label className="label-text">Phone</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="input-box"
          />
          <label className="label-text">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
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
