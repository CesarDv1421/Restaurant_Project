import React from "react";
import porksGrillLogo from "../../public/porksGrillLogo.png";
import {
  faHouse,
  faListUl,
  faClock,
  faFileInvoice,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Options from "./Options";

const SideBar = ({ whereIm }) => {
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
      </div>
    </>
  );
};

export default SideBar;
