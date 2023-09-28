import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HabitContext from "../context/HabitContext";

const boxStyle = {
  // border: "2px dashed red",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100vh - 8rem)",
};

const MissingPage = () => {
  const { user, theme } = useContext(HabitContext);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={boxStyle}
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <dotlottie-player
        src="https://lottie.host/75e8a840-7599-484e-b574-6c0606951b59/3lhv780MUv.json"
        background="transparent"
        speed="1"
        style={{
          width: isSmallScreen ? 200 : 300,
          height: isSmallScreen ? 200 : 300,
        }}
        loop
        autoplay
      ></dotlottie-player>

      <Typography
        variant={isSmallScreen ? "h4" : "h3"}
        fontWeight="bold"
        mb={3}
      >
        Page Not Found!
      </Typography>
      {user ? (
        <Link to="/dashboard" color={theme.palette.primary.main}>
          <Button>Go back to Dashboard page</Button>
        </Link>
      ) : (
        <Link to="/">
          <Button variant="text">Go back to Landing page</Button>
        </Link>
      )}
    </Box>
  );
};

export default MissingPage;
