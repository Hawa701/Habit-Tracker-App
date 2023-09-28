import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CheckBoxes from "../components/CheckBoxes";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100vh - 4rem)",
};
const box2Style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: { xs: "350px", sm: "400px", md: "450px" },
  padding: "2rem 1rem",
  gap: "20px",
  borderRadius: "4px",
  boxShadow: "0px 6px 15px 0px #d9d9d9",
};
const box3Style = {
  flexWrap: "nowrap",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: "0",
};

const AddHabitPage = () => {
  const [habit, setHabit] = useState("");
  const [description, setDescription] = useState("");

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Box sx={boxStyle}>
      <Box sx={box2Style}>
        <Typography variant="h5" mb={2}>
          Create new habit
        </Typography>
        <TextField
          label="Enter Habit"
          variant="outlined"
          type="text"
          mb={2}
          fullWidth
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
        />
        <TextField
          label="Description"
          multiline
          maxRows={4}
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Typography alignSelf="start" ml={1} variant="subtitle1">
          Frequency
        </Typography>
        <Box sx={box3Style}>
          {days.map((day) => {
            return <CheckBoxes label={day} />;
          })}
        </Box>
        <Button variant="contained">Create Habit</Button>
      </Box>
    </Box>
  );
};

export default AddHabitPage;
