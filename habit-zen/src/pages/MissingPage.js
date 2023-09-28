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
      <script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
      ></script>

      <dotlottie-player
        src="https://lottie.host/796301e2-1ded-405c-8517-cbf20c5bbdd4/mqXKsEt9Pr.json"
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
