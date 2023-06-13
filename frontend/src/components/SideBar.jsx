import React from "react";
import porksGrillLogo from "../../public/porksGrillLogo.png";
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

const SideBar = ({ whereIm, isAdmin }) => {
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

        {localStorage.getItem("rol") === "admin" && (
          <Options
            title="Admin"
            icon={faUnlockKeyhole}
            imInThisPage={whereIm == "Admin" ? true : false}
          />
        )}
      </div>

      <Options
        title="Log Out"
        icon={faRightFromBracket}
        imInThisPage={whereIm == "logout" ? true : false}
      />
    </>
  );
};

export default SideBar;
