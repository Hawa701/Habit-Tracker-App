import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Brightness4, Circle, FormatColorReset } from "@mui/icons-material";
import HabitContext from "../context/HabitContext";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "4rem",
};

const Appearance = () => {
  const { primaryColor, setPrimaryColor, mode, setMode } =
    useContext(HabitContext);
  const [selectedValue, setSelectedValue] = useState(primaryColor);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setPrimaryColor(event.target.value);
  };

  const handleModeChange = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  const resetTheme = () => {
    setSelectedValue("#FFBF00");
    setPrimaryColor("#FFBF00");
    setMode("light");
  };

  return (
    <Box sx={{ width: "100%" }} pl={3} pr={3}>
      <Box sx={boxStyle}>
        <Circle sx={{ color: selectedValue, marginRight: "10px" }} />
        <Select
          value={selectedValue}
          fullWidth
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="#FFBF00">Amber</MenuItem>
          <MenuItem value="#059862">Green</MenuItem>
          <MenuItem value="#2986CC">Blue</MenuItem>
          <MenuItem value="#A20000">Red</MenuItem>
          <MenuItem value="#C90076">Pink</MenuItem>
          <MenuItem value="#6A329F">Purple</MenuItem>
        </Select>
      </Box>

      <Box sx={boxStyle} mb={1}>
        <Brightness4 />
        <Typography flexGrow={1} ml="10px">
          Dark Mode
        </Typography>
        <Checkbox
          color="secondary"
          onChange={handleModeChange}
          checked={mode === "dark" ? true : false}
        />
      </Box>

      <Divider />

      <Box sx={boxStyle} mb={2} mt={1}>
        <FormatColorReset />
        <Typography flexGrow={1} ml="10px">
          Reset Theme
        </Typography>
        <Button color="secondary" variant="contained" onClick={resetTheme}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Appearance;
