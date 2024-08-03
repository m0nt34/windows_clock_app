import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
const Layout = () => {
  return (
    <div className="h-full">
      <Sidebar />
      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
