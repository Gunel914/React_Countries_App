import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: 24, textAlign: "center", color: "#666" }}>
      © {new Date().getFullYear()} Countries App
    </footer>
  );
};

export default Footer;