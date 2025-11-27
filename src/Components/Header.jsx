import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: 18, textAlign: "center" }}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1 style={{ margin: 0, fontSize: 32 , color: "dark-green" }}>Countries App</h1>
      </Link>
    </header>
  );
};

export default Header;