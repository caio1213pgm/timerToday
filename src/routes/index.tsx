import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { About } from "../pages/about/About";
import History from "../pages/history/History";
import Home from "../pages/Home";
import SettingsPage from "../pages/Settings";

function ScroolTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);
  return null;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <ScroolTop />
    </BrowserRouter>
  );
}
