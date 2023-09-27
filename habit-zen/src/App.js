import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Stack, ThemeProvider, CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import AddHabitPage from "./pages/AddHabitPage";
import ManageHabitPage from "./pages/ManageHabitPage";
import SettingPage from "./pages/SettingPage";
import MissingPage from "./pages/MissingPage";
import Footer from "./components/Footer";
import HabitContext from "./context/HabitContext";

function App() {
  const { user, theme } = useContext(HabitContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {user ? (
        <Stack direction="row">
          <Sidebar />
          <Stack flexGrow={1}>
            <Header />
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/add" element={<AddHabitPage />} />
              <Route path="/manage/:id" element={<ManageHabitPage />} />
              <Route path="/settings" element={<SettingPage />} />
              <Route path="*" element={<MissingPage />} />
            </Routes>
          </Stack>
        </Stack>
      ) : (
        <Stack flexGrow={1}>
          <Header />
          <LandingPage />
          <Footer />
        </Stack>
      )}
    </ThemeProvider>
  );
}

export default App;
