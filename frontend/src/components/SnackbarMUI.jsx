import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

//Material UI
import Slide from "@mui/material/Slide";

const SnackbarMUI = ({ errMessage = "Rellene los campos", setErrMessage }) => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <Snackbar
      open={showMessage}
      TransitionComponent={Slide}
      autoHideDuration={2500}
      anchorOrigin={{
        vertical: "bottom", // Posición vertical: 'top', 'bottom'
        horizontal: "center", // Posición horizontal: 'left', 'center', 'right'
      }}
      onClose={() => {
        setShowMessage(false)
        setTimeout(() => {
          setErrMessage(false);
        }, 200);
      }}
    >
      <Alert severity="error" variant="filled" >{errMessage}</Alert>
    </Snackbar>
  );
};

export default SnackbarMUI;
