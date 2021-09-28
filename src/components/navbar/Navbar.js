import React from "react";
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
  const backToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={backToTop}>
        Eduardo Ruiz
      </div>
    </nav>
  );
};

export default Navbar;
