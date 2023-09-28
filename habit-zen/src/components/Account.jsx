import { DeleteForever } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const containerStyle = {
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  width: "100%",
  height: "225px",
  padding: "5px 15px",
};
const boxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

const Account = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={boxStyle}>
        <DeleteForever />
        <Box flexGrow={1} marginLeft="10px">
          <Typography variant="body1">Delete Account</Typography>
          <Typography variant="subtitle2">
            Account can't be recovered
          </Typography>
        </Box>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default Account;
