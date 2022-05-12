import React from "react";
import { Link } from "react-router-dom";
import classes from './Navbar.module.css'
import logo from './Brnyr-logos.jpeg';
export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.nav_center}>
      <Link to="/"> <img className={classes.logo} src={logo} alt="brnyrlogo" /> </Link>
        <ul className={classes.nav_links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
