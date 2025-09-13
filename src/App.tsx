import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
