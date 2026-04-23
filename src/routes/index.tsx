import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Home from "../pages/Home";
import { About } from "../pages/about/About";
import { useEffect } from "react";

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
      </Routes>
      <ScroolTop />
    </BrowserRouter>
  );
}
