import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SidebarList from "./SidebarList";
import { Divider, List, Stack, Typography, useMediaQuery } from "@mui/material";
import {
  Add,
  Dashboard,
  ExitToApp,
  FormatListBulleted,
  SelfImprovement,
  Settings,
} from "@mui/icons-material";
import HabitContext from "../context/HabitContext";

const styledStack = {
  width: {
    sm: 60,
    md: 200,
  },
  height: "100vh",
  display: {
    xs: "none",
    sm: "block",
    md: "block",
  },
  borderRight: "1px solid lightgray",
};

const styledLogo = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "4rem",
  padding: "16px",
};

const Sidebar = () => {
  const { theme } = useContext(HabitContext);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Stack direction="column" sx={styledStack}>
      {/* Logo */}
      {isSmallScreen ? (
        <Typography variant="h5" sx={styledLogo}>
          <SelfImprovement fontSize="large" />
        </Typography>
      ) : (
        <Typography
          variant="h1"
          fontSize="1.8rem"
          gap={1}
          sx={styledLogo}
          color={theme.palette.primary.main}
        >
          HabitZen
          <SelfImprovement fontSize="large" />
        </Typography>
      )}
      <Divider />

      {/* List 1 */}
      <nav>
        <List>
          <Link to="/dashboard">
            <SidebarList listIcon={<Dashboard />} listText="Dashboard" />
          </Link>
          <Link to="/add">
            <SidebarList listIcon={<Add />} listText="Add" />
          </Link>
          <Link to="/manage/1">
            <SidebarList
              listIcon={<FormatListBulleted />}
              listText="Manage Habits"
            />
          </Link>
        </List>
      </nav>
      <Divider />

      {/* List 2 */}
      <nav>
        <List>
          <Link to="/settings">
            <SidebarList listIcon={<Settings />} listText="Settings" />
          </Link>
          <SidebarList listIcon={<ExitToApp />} listText="Logout" />
        </List>
      </nav>
    </Stack>
  );
};

export default Sidebar;
