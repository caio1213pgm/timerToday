import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Home from "../pages/Home";
import SettingsPage from "../pages/Settings";
import { About } from "../pages/about/About";

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
      </Routes>
      <ScroolTop />
    </BrowserRouter>
  );
}
