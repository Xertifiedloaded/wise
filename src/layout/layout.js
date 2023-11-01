import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/UI/header/header";
import Footer from "../component/UI/footer/footer";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
