import "./sidebar.css";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <section className="sidebar-main">
      {/* Profile */}
      <div className="profile-pane">
        <div className="img-pane">img</div>
        <div className="name-pane">Name</div>
      </div>
      {/* Sidebar Options */}
      <div className="sidebar-options">
        <div className="options">
          <img src="src\assets\home.svg" alt="Go to Dashboard" />
          <p>Dashboard</p>
        </div>
        <div className="options" onClick={handleToggle}>
          <img src="src\assets\workspaces.svg" alt="Your Workspaces" />
          <p>Workspaces</p>
          {toggle ? (
            <MdOutlineArrowDropUp className="drop-down" />
          ) : (
            <MdArrowDropDown className="drop-down" />
          )}
        </div>
        {/* Work Pending on Drop Down Menu for Workspaces, Settings and Footer */}
      </div>
    </section>
  );
};

export default Sidebar;
