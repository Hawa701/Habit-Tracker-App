import { Box } from "@mui/material";
import React from "react";

const boxStyle = {
  display: "flex",
  alignItems: "start",
  justifyContent: "start",
  height: "calc(100vh - 4rem)",
  padding: ".5rem",
  overflowY: "scroll",
  border: "2px dashed red",
};

const ManageHabitPage = () => {
  return <Box sx={boxStyle}></Box>;
};

export default ManageHabitPage;
