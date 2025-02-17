import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/RouterComponents/Navbar";

const AppLayout = () => {
  return (
    <div className="app-container">
      <div className="w-1/5 border-x-2 overflow-y-scroll">
        <Navbar />
      </div>
      <div className="flex justify-center items-baseline w-4/5 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
