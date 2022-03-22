import { Typography } from "@mui/material";
import React from "react";

const Content = ({ children }) => {
 return (
  <div>
   <Typography
    sx={{
     fontSize: "18px",
     lineHeight: "145%",
     color: "#435770",
    }}
   >
    {children}
   </Typography>
  </div>
 );
};

export default Content;
