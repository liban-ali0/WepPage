import { useRef } from "react";
import "./about.css";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import { about as aboutData } from "../../content/boostlink";

export default function About() {
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
      {/* ===== Who we are ===== */}
      <section id="who1" ref={whoRef} className="cp1-section cp1-who hp-about">
        <div className="container">
          <div className="cp1-who-panel">   {/* <-- move glass here */}
            <h1 className="reveal cp1-h1" style={{ ["--d" as any]: "0ms" }}>
              Who we are
            </h1>

            <div className="reveal cp1-who-body" style={{ ["--d" as any]: "100ms" }}>
              <p className="cp1-lede">{aboutData.intro[0]}</p>
              <p className="cp1-lede">{aboutData.intro[1]}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
