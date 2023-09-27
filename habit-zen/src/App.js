import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Stack, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import AddHabitPage from "./pages/AddHabitPage";
import ManageHabitPage from "./pages/ManageHabitPage";
import SettingPage from "./pages/SettingPage";
import MissingPage from "./pages/MissingPage";

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction="row">
        <Sidebar />
        <Stack flexGrow={1}>
          <Header />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/add" element={<AddHabitPage />} />
            <Route path="/manage/:id" element={<ManageHabitPage />} />
            <Route path="/settings" element={<SettingPage />} />
            <Route path="*" element={<MissingPage />} />
          </Routes>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
