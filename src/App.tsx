import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/SerivcesPage";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      {/* ensures scroll resets when navigating */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/apply" element={<Apply />} />
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
