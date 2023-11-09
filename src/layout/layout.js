import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/UI/header/header";
import Footer from "../component/UI/footer/footer";
import Context from "../contextApi/context";
import ContextApi from "../contextApi/context";

const Layout = () => {
  return (
    <>
      <div>
        <ContextApi>
          <Header />
          <Outlet />
          <Footer />
        </ContextApi>
      </div>
    </>
  );
};

export default Layout;
