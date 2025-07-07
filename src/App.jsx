import Header from "./components/Landing-Page/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeroSection from "./components/Landing-Page/Hero-Section/HeroSection";
import SignupLoginHeader from "./components/Landing-Page/Header/SignupLoginHeader";
import Signup from "./components/Main-Project/Signup/Signup";
import Login from "./components/Main-Project/Login/Login";

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
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
