import React from "react";
import logo from "../../logo.svg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.AppHeader}>
      <img src={logo} className={classes.AppLogo} alt="logo" />
      <h3 className={classes.title}>Connect Four Game</h3>
    </header>
  );
};

export default Header;
