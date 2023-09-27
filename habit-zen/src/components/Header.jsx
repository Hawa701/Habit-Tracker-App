import React, { useContext } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LeftSideBar from "../components/LeftSidebar";
import AuthModal from "../components/AuthModal";
import HabitContext from "../context/HabitContext";
import { SelfImprovement } from "@mui/icons-material";

const styledLogo = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  height: "4rem",
  gap: "8px",
};

const Header = () => {
  const { user } = useContext(HabitContext);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box>
      <AppBar
        position="static"
        // sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Toolbar>
          {/* Menu Icon */}
          {user && isSmallScreen ? <LeftSideBar /> : null}

          {/* Message */}
          <Typography flexGrow={1}>
            {!user ? (
              <Typography variant="h1" fontSize="1.8rem" sx={styledLogo}>
                HabitZen
                <SelfImprovement fontSize="large" />
              </Typography>
            ) : (
              ""
            )}
          </Typography>

          {/* Button */}
          {!user ? <AuthModal /> : <Avatar />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
