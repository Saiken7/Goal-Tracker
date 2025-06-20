import Header from "./components/Landing-Page/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeroSection from "./components/Landing-Page/Hero-Section/HeroSection";

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
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
