import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ children, onClick, fontSize }) => {
 const Styles = {
  loginButton: {
   fontSize: { xs: ".8rem", md: fontSize || "1rem" },
   borderRadius: "11.21px",
   backgroundColor: "#EA2E10",

   height: "67.25px",
   "&:hover": {
    backgroundColor: "red",
   },
   padding: "1em 3em",
  },
 };
 return (
  <div>
   <Button onClick={onClick} variant="contained" sx={Styles.loginButton}>
    {children}
   </Button>
  </div>
 );
};

export default PrimaryButton;
