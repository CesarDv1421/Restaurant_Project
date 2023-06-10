import React from "react";
import { Link } from "react-router-dom";
import porksgrill from "../../public/porksGrillLogo.png";

const NavBar = ({className, navUl}) => {
  return (
    <div className={className}>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
        }}
      >
        <ul className={navUl}>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/rollcachapa">Roll de Cachapa</Link>
          </li>
          <li className="containerPorksGrillLogo">
            <img
              src={porksgrill}
              className="porksGrillLogo"
              alt="Logo de PorksGrill"
            />
          </li>
          <li>
            <Link to="/signin" >Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
