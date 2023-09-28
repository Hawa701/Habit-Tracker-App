import * as React from "react";
import { Link } from "react-router-dom";
import SidebarList from "./SidebarList";
import {
  Box,
  Drawer,
  List,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Add,
  Dashboard,
  ExitToApp,
  FormatListBulleted,
  Menu,
  SelfImprovement,
  Settings,
} from "@mui/icons-material";
import HabitContext from "../context/HabitContext";

const styledLogo = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "4rem",
  padding: "16px",
};

export default function TemporaryDrawer() {
  const { theme } = React.useContext(HabitContext);
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <List>
          <Typography
            variant="h1"
            fontSize="1.8rem"
            gap={1}
            mb={2}
            sx={styledLogo}
            color={theme.palette.primary.main}
          >
            HabitZen
            <SelfImprovement fontSize="large" />
          </Typography>
          <Divider />

          <Link to="/dashboard">
            <SidebarList listIcon={<Dashboard />} listText="Dashboard" />
          </Link>
          <Link to="/add">
            <SidebarList listIcon={<Add />} listText="Add Habit" />
          </Link>
          <Link to="/manage/1">
            <SidebarList
              listIcon={<FormatListBulleted />}
              listText="Manage Habits"
            />
          </Link>
        </List>
      </List>
      <Divider />
      <List>
        <Link to="/settings">
          <SidebarList listIcon={<Settings />} listText="Settings" />
        </Link>
        <SidebarList listIcon={<ExitToApp />} listText="Logout" />
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{
              mr: 2,
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <Menu />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
