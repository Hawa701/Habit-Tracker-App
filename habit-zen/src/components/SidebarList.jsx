import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useMediaQuery,
} from "@mui/material";

const styledItemText = {
  display: {
    xs: "block",
    sm: "none",
    md: "block",
  },
};

const SidebarList = ({ listIcon, listText }) => {
  const isMediumScreen = useMediaQuery(
    "@media (max-width: 960px) and (min-width: 600px)"
  );

  return (
    <ListItem disablePadding>
      {isMediumScreen ? (
        <Tooltip title={listText} arrow>
          <ListItemButton>
            <ListItemIcon>{listIcon}</ListItemIcon>
            <ListItemText primary={listText} sx={styledItemText} />
          </ListItemButton>
        </Tooltip>
      ) : (
        <ListItemButton>
          <ListItemIcon>{listIcon}</ListItemIcon>
          <ListItemText primary={listText} sx={styledItemText} />
        </ListItemButton>
      )}
    </ListItem>
  );
};

export default SidebarList;
