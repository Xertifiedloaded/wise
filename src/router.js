import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./layout/layout";
import Landing from "./pages/landing/Landing";

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
      ],
    },
  ]);
};

export default RouterComponent;
