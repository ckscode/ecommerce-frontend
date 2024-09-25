import React from "react";
import Navbar from "../Navbar/Navbar";


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div className="mt-3 position-relative">{children}</div>
    </div>
  );
};

export default Layout;
