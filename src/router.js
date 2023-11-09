import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./layout/layout";
import Landing from "./pages/landing/Landing";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

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
        {
          path: "/login",
          element: <Login/>,
        },
      ],
    },
  ]);
};

export default RouterComponent;
