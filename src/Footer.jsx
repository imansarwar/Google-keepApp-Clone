import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <p className="footer"> Copyright © Iman {year} </p>
      </footer>
    </>
  );
};

export default Footer;
