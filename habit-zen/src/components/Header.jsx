import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import LeftSideBar from "../components/LeftSidebar";
import AuthModal from "../components/AuthModal";

const Header = () => {
  // const theme = createTheme();

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box>
      <AppBar
        position="static"
        // sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Toolbar>
          {/* Menu Icon */}
          {isSmallScreen ? <LeftSideBar /> : null}

          {/* Message */}
          <Typography flexGrow={1}>
            {isSmallScreen ? "" : "Welcome Hawariaw!"}
          </Typography>

          {/* Button */}
          <AuthModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
