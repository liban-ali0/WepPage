// src/pages/Home.tsx
import Team from "../sections/Team/Team";
import About from "../sections/About/About";
import Roadmap from "../sections/Roadmap/Roadmap";
import Contact from "../sections/Contact/Contact";
import Advantages from "../sections/Advantages/Advantages";
import ScrollToTop from "../components/ScrollToTop";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Landing from "../sections/Landing/Landing";

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/") return;

        const id = location.hash?.replace("#", "");
        if (!id) return;

        const el = document.getElementById(id);
        if (el) {
            // slight delay to ensure layout is painted before scrolling
            requestAnimationFrame(() => {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        }
    }, [location.pathname, location.hash]);

    return (
        <main id="content" className="snap-container">
            <ScrollToTop />
            <Landing />
            <About />
            <Advantages />
            <Roadmap />
            <Team />
            <Contact />
        </main>
    );
}
