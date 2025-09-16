import { useRef } from "react";
import "./about_page.css";
import { useSectionReveal } from "../hooks/useSectionReveal";
import { about as aboutData } from "../content/boostlink";

import ScrollToTop from "../components/ScrollToTop";

export default function AboutPage() {
  const whoRef = useRef<HTMLElement | null>(null);
  const visionRef = useRef<HTMLElement | null>(null);
  const missionRef = useRef<HTMLElement | null>(null);

  // Fade/slide reveals (use the same site hook)
  useSectionReveal(whoRef as React.RefObject<HTMLElement>, {
    threshold: 0.2,
    rootMargin: "0px 0px -12% 0px",
  });
  useSectionReveal(visionRef as React.RefObject<HTMLElement>, {
    threshold: 0.2,
    rootMargin: "0px 0px -12% 0px",
  });
  useSectionReveal(missionRef as React.RefObject<HTMLElement>, {
    threshold: 0.2,
    rootMargin: "0px 0px -12% 0px",
  });

  return (
    <main id="content">
      <ScrollToTop />
      {/* ===== Who we are ===== */}
      <section id="who" ref={whoRef} className="cp-section cp-who">
        <div className="container">
          <div className="cp-who-panel">   {/* <-- move glass here */}
            <h1 className="reveal cp-h1" style={{ ["--d" as any]: "0ms" }}>
              Who we are
            </h1>

            <div className="reveal cp-who-body" style={{ ["--d" as any]: "100ms" }}>
              <p className="cp-lede">{aboutData.intro[0]}</p>
              <p className="cp-lede">{aboutData.intro[1]}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="vision-mission" ref={visionRef} className="cp-section cp-vm cp-vm-a">
        <div className="container cp-vm-grid">
          {/* Row 1: Vision (slides from left) */}
          <article className="reveal slide-in left cp-vm-card" style={{ ["--d" as any]: "0ms" }}>
            <header className="cp-vm-head">
              <h2 id="vision-heading" className="cp-title">Vision</h2>
            </header>
            <p className="cp-copy">{aboutData.vision}</p>
          </article>

          {/* Row 2: Mission (slides from right) */}
          <article className="reveal slide-in right cp-vm-card alt" style={{ ["--d" as any]: "80ms" }}>
            <header className="cp-vm-head">
              <h2 id="mission-heading" className="cp-title">Mission</h2>
            </header>
            <p className="cp-copy">{aboutData.mission}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
