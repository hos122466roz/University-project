import React from "react";
import NavTop from "./navTop/NavTop";
import "./header.scss";
import NavMain from "./navMain/NavMain";
const Header = () => {
  return (
    <>
      <header>
        <NavTop />
        <NavMain/>
      </header>
    </>
  );
};

export default Header;
