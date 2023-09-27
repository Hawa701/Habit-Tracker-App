import { createTheme } from "@mui/material";
import React, { createContext, useState } from "react";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const [user, setUser] = useState(false);

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#F8BD7F",
      },
    },
  });

  return (
    <HabitContext.Provider
      value={{
        theme,
        user,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export default HabitContext;
