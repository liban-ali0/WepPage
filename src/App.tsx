import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/SerivcesPage";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
