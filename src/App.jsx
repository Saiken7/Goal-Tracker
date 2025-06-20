import React from "react";
import Header from "./components/Landing-Page/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
