import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Options = ({ icon, title, imInThisPage }) => {
  return (
    <>
      <div className={imInThisPage ? "listOptions imHere" : "listOptions"}>
        <Link to={title === "Log Out" ? "/signin" : `/${title}` }>
          <FontAwesomeIcon className="icon" icon={icon} />
          <h2 className="navTitle">{title}</h2>
        </Link>
      </div>
    </>
  );
};

export default Options;
