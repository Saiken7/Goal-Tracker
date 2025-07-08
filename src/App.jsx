import Header from "./components/Landing-Page/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeroSection from "./components/Landing-Page/Hero-Section/HeroSection";
import SignupLoginHeader from "./components/Landing-Page/Header/SignupLoginHeader";
import Signup from "./components/Main-Project/Signup/Signup";
import Login from "./components/Main-Project/Login/Login";
import MainPage from "./components/Main-Project/MainPage/MainPage";
import Dashboard from "../src/components/Main-Project/PageComponents/Dashboard";
import Workspace from "../src/components/Main-Project/PageComponents/Workspace";
import Settings from "../src/components/Main-Project/PageComponents/Settings";
import Badges from "./components/Main-Project/PageComponents/Badges";
import Calender from "./components/Main-Project/PageComponents/Calender";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HeroSection />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <SignupLoginHeader />
        <Signup />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <SignupLoginHeader />
        <Login />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <MainPage />
      </>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        index: "workspace",
        element: <Workspace />,
      },
      {
        index: "settings",
        element: <Settings />,
      },
      {
        index: "badges",
        element: <Badges />,
      },
      {
        index: "calendar",
        element: <Calender />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
