import React from "react";
import NavBar from "../Components/NavBar/NavBar";
const NavAndFooterLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <p>Footer</p>
    </div>
  );
};

export default NavAndFooterLayout;
