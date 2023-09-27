import { Box, Typography } from "@mui/material";
import React from "react";

const footerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "4rem",
  width: "100%",
  backgroundColor: "#F8BD7F",
};

const Footer = () => {
  const date = new Date();
  return (
    <Box sx={footerStyle}>
      <Typography variant="p">
        Copyrights&copy;{date.getFullYear()} Hawariaw Paulos
      </Typography>
    </Box>
  );
};

export default Footer;
