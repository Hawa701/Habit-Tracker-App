import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button variant="contained" size="large" onClick={handleClose}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
