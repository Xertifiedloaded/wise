import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./layout/layout";
import Landing from "./pages/landing/Landing";
import Register from "./pages/Register/Register";

const RouterComponent = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/register",
          element: <Register/>,
        },
      ],
    },
  ]);
};

export default RouterComponent;
