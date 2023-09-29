import { Box } from "@mui/material";
import React from "react";
import Chart from "../components/Chart";
import Performance from "../components/Performance";
import Calendar from "../components/Calendar";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  gap: "10px",
  height: "calc(100vh - 4rem)",
  padding: ".5rem",
  overflowY: { xs: "scroll", sm: "scroll", md: "none" },
  // border: "2px dashed red",
};
const upBoxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  border: "2px dashed red",
};
const downBoxStyle = {
  width: "100%",
  border: "2px dashed green",
};

const DashboardPage = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={upBoxStyle}>
        <Chart />
        <Performance />
        <Calendar />
      </Box>
      <Box sx={downBoxStyle}>List</Box>
    </Box>
  );
};

export default DashboardPage;
