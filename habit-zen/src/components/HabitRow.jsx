import { Delete, Edit } from "@mui/icons-material";
import { Box, Chip, Typography, IconButton, Tooltip } from "@mui/material";
import React, { useContext } from "react";
import HabitContext from "../context/HabitContext";

const boxStyle = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row", md: "row" },
  alignItems: { xs: "start", sm: "center", md: "center" },
  justifyContent: "center",
  width: "100%",
  padding: ".5rem",
  borderRadius: "5px",
};

const HabitRow = ({ habit, description }) => {
  const { theme } = useContext(HabitContext);

  return (
    <Box
      sx={boxStyle}
      style={{
        backgroundColor: theme.palette.background.main,
        boxShadow: `0px 3px 10px 0px ${theme.palette.shadow.default}`,
      }}
    >
      <Box flexGrow={1} ml={1}>
        <Typography variant="body1">{habit}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: { xs: "100%", sm: "21rem", md: "21rem" },
          marginTop: { xs: "10px", sm: "0", md: "0" },
        }}
      >
        <Box>
          <Chip label="M" color="primary" />
          <Chip label="T" color="primary" />
          <Chip label="W" color="primary" />
          <Chip label="T" color="primary" />
          <Chip label="F" color="primary" />
          <Chip label="S" color="primary" />
          <Chip label="S" color="primary" />
        </Box>

        <Box ml={1}>
          <Tooltip title="Edit" arrow>
            <IconButton>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" arrow>
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default HabitRow;
