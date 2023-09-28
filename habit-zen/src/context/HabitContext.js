import { createTheme } from "@mui/material";
import React, { createContext, useState } from "react";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [user, setUser] = useState(true);
  const [primaryColor, setPrimaryColor] = useState("#FFBF00");

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        // main: "#F8BD7F",
        main: primaryColor,
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
        mode,
        setMode,
        primaryColor,
        setPrimaryColor,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export default HabitContext;
