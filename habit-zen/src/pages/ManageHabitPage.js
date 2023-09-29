import { Box } from "@mui/material";
import React from "react";
import HabitRow from "../components/HabitRow";

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  gap: "10px",
  height: "calc(100vh - 4rem)",
  padding: ".5rem",
  overflowY: "scroll",
};

const ManageHabitPage = () => {
  return (
    <Box sx={boxStyle}>
      <HabitRow habit="Habit 1" description="Description 1" />
      <HabitRow habit="Habit 2" description="Description 2" />
      <HabitRow habit="Habit 3" description="Description 3" />
    </Box>
  );
};

export default ManageHabitPage;
