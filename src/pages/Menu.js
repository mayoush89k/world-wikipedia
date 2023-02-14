import "../App.css";
import "./Menu.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu(params) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
      
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/world-wikipedia" className="navbar-logo" onClick={closeMobileMenu}>
            Homepage <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/FlagsList"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Flags List
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/CitiesList"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Cities List
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/CapitalsList"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Capitals List
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ContinentsList"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Continents List
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
