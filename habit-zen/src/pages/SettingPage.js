import React, { useContext, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import HabitContext from "../context/HabitContext";
import Account from "../components/Account";
import Appearance from "../components/Appearance";
import { AccountCircle, Palette } from "@mui/icons-material";

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
  gap: "20px",
  borderRadius: "4px",
  boxShadow: "0px 6px 15px 0px #d9d9d9",
};
const tabStyle = {
  width: { xs: "350px", sm: "400px", md: "450px" },
  // border: "2px dashed red",
};

const SettingPage = () => {
  const [value, setValue] = useState(0);
  const { theme } = useContext(HabitContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={boxStyle}>
      <Box
        sx={box2Style}
        style={{ backgroundColor: theme.palette.background.main }}
      >
        <Tabs
          sx={tabStyle}
          value={value}
          variant="fullWidth"
          onChange={handleChange}
        >
          <Tab
            label={
              <>
                <AccountCircle />
                <Typography mt={1}>Account</Typography>
              </>
            }
          />
          <Tab
            label={
              <>
                <Palette />
                <Typography mt={1}>Appearance</Typography>
              </>
            }
          />
        </Tabs>
        {value === 0 && <Account />}
        {value === 1 && <Appearance />}
      </Box>
    </Box>
  );
};

export default SettingPage;
