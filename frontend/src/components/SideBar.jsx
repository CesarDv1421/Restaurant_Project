import React, { useContext } from "react";
import porksGrillLogo from "/porksGrillLogo.png";
import {
  faHouse,
  faListUl,
  faClock,
  faFileInvoice,
  faGear,
  faUnlockKeyhole,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Options from "./Menu/Options";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const SideBar = ({ whereIm, isAdmin }) => {
  const { logout, userToken } = useContext(AuthContext);

  return (
    <>
      <img src={porksGrillLogo} className="porkgrillLogo" />

      <div className="listOptionsContainer">
        <Options
          title="Menu"
          icon={faHouse}
          imInThisPage={whereIm == "menu" ? true : false}
        />
        <Options
          title="OrderList"
          icon={faListUl}
          imInThisPage={whereIm == "orderlist" ? true : false}
        />
        <Options
          title="History"
          icon={faClock}
          imInThisPage={whereIm == "history" ? true : false}
        />
        <Options
          title="Bills"
          icon={faFileInvoice}
          imInThisPage={whereIm == "bills" ? true : false}
        />
        <Options
          title="Settings"
          icon={faGear}
          imInThisPage={whereIm == "settings" ? true : false}
        />

        { userToken.rol == "admin" && (
          <Options
            title="Admin"
            icon={faUnlockKeyhole}
            imInThisPage={whereIm == "Admin" ? true : false}
          />
        )}
      </div>

      <div className="listOptions">
        <Link to="/signin" onClick={() => logout()}>
          <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
          <h2 className="navTitle">Log Out</h2>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
