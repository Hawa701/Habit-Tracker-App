import * as React from "react";
import { Modal, Button, Box, Tabs, Tab } from "@mui/material";
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleButton from "react-google-button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
};

const bxStyle = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: 2,
  p: 3,
  paddingTop: 0,
  fontSize: 20,
};

export default function AuthModal() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button
        // sx={{ backgroundColor: theme.palette.secondary.main }}
        variant="contained"
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ borderColor: "divider" }}>
            <Tabs value={value} variant="fullWidth" onChange={handleChange}>
              <Tab label="Login" />
              <Tab label="Sign Up" />
            </Tabs>
            {value === 0 && <Login handleClose={handleClose} />}
            {value === 1 && <SignUp handleClose={handleClose} />}
          </Box>
          {/* OR and google button */}
          <Box sx={bxStyle}>
            <span>or</span>
            <GoogleButton
              style={{ outline: "none", width: "100%", borderRadius: 5 }}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
