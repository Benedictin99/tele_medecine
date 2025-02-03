import React from "react";
import Sidebar from "../composants/Sidebar";
import Header from "../composants/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="ml-16 md:ml-56">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
