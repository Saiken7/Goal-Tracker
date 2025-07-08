import "./mainpage.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../PageComponents/Sidebar";
import OptionBar from "../PageComponents/OptionBar";
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
