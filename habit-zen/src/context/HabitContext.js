import { createTheme } from "@mui/material";
import React, { createContext, useState } from "react";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [user, setUser] = useState(true);

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        // main: "#F8BD7F",
        main: "#059862",
      },
      secondary: {
        main: "#000000",
      },
      background: {
        default: "#f9f9f9",
        main: "#ffffff",
      },
      action: {
        hover: "#58BA96",
      },
    },
  });

  return (
    <HabitContext.Provider
      value={{
        theme,
        user,
        setUser,
        setMode,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export default HabitContext;
