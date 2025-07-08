import "./mainpage.css";
import "../PageComponents/Sidebar";
import { Outlet } from "react-router-dom";
const MainPage = () => {
  return (
    <main>
      <Sidebar />
      <OptionBar />
      <Outlet />
    </main>
  );
};

export default MainPage;
