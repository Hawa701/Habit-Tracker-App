import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import HabitContext from "../context/HabitContext";

const footerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "4rem",
  width: "100%",
};

const Footer = () => {
  const { primaryColor } = useContext(HabitContext);
  const date = new Date();
  return (
    <Box sx={footerStyle} style={{ backgroundColor: primaryColor }}>
      <Typography variant="p">
        Copyrights&copy;{date.getFullYear()} Hawariaw Paulos
      </Typography>
    </Box>
  );
};

export default Footer;
