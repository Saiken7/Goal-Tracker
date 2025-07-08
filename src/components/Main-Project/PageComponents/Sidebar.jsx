import "./sidebar.css";
const Sidebar = () => {
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
        <div className="options">
          <img src="src\assets\workspaces.svg" alt="Your Workspaces" />
          <p>Workspaces</p>
          <div className="drop-down">
            <img src="src\assets\Drop_Down_Arrow.svg" alt="Show Workspaces" />
          </div>
        </div>
        {/* Work Pending on Drop Down Menu for Workspaces, Settings and Footer */}
      </div>
    </section>
  );
};

export default Sidebar;
