import React from "react";
import "../App.css";

const Navbar = () => {
  let p = window.location.pathname;

  return (
    <nav id="nav">
      <div
        className="nav-wrapper"
        style={{
          maxWidth: "1000px",
          margin: "auto",
          paddingLeft: "20px",
          paddingRight: "20px"
        }}
      >
        <a href="/" className="brand-logo activeSection">
          Andrew
        </a>
        <a href="#!" data-target="mobileMenu" className="sidenav-trigger">
          <i className="material-icons" style={{ color: "black" }}>
            menu
          </i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className={p === "/" ? "activeSection" : "figurativeNothing"}>
            <a href="/">About Me</a>
          </li>
          <li
            className={
              p === "/portfolio" ? "activeSection" : "figurativeNothing"
            }
          >
            <a href="/portfolio">Portfolio</a>
          </li>
          <li
            className={p === "/contact" ? "activeSection" : "figurativeNothing"}
          >
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <ul
        className="sidenav"
        id="mobileMenu"
        style={{ backgroundColor: "#fff" }}
      >
        <li style={{ paddingTop: "40px" }}>
          <a href="/">About Me</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
