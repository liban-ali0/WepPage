// src/pages/Home.tsx
import Services from "../sections/Services/Services";
import Team from "../sections/Team/Team";
import Roadmap from "../sections/Roadmap/Roadmap";
import Contact from "../sections/Contact/Contact";
import Advantages from "../sections/Advantages/Advantages";
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
            <Landing />
            <Services />
            <Advantages />
            <Team />
            <Roadmap />
            <Contact />
        </main>
    );
}
