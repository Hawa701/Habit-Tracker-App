import React, { createContext, useState } from "react";
import { createTheme } from "@mui/material";
import { lighten } from "polished";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [mode, setMode] = useState("light");
  const [primaryColor, setPrimaryColor] = useState("#FFBF00");

  const hoverColor = lighten(0.2, primaryColor);

  let theme = "";
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: "#000000",
      },
      background: {
        default: "#f9f9f9",
        main: "#ffffff",
      },
      shadow: {
        default: "#d9d9d9",
      },
      action: {
        hover: hoverColor,
      },
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: "#ffffff",
      },
      background: {
        default: "#252526",
        main: "#1e1e1e",
      },
      shadow: {
        default: "#1e1e1e",
      },
      action: {
        hover: hoverColor,
      },
    },
  });

  {
    mode === "light" ? (theme = lightTheme) : (theme = darkTheme);
  }

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
