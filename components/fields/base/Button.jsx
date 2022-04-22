import React from "react";
import { Button } from "@mui/material";

const CustomButton = (props) => {
  return (
    <Button
      {...props}
      onClick={props.handleClick}
      size="small"
      fullWidth
      variant="contained"
      sx={{ mt: 2, mb: 2 }}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
