import React from "react";
import logo1 from "./Images/logo1.PNG";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo1} alt="logo" />
        <h1 className="main_heading"> IMAN KEEP APP </h1>
      </div>
    </>
  );
};

export default Header;
