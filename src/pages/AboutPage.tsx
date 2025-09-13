// src/pages/AboutPage.tsx
import { useRef } from "react";
import "./about_page.css"; // new CSS just for AboutPage
import { useSectionReveal } from "../hooks/useSectionReveal";
import { about as aboutData } from "../content/boostlink";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const visionRef = useRef<HTMLElement | null>(null);
  const missionRef = useRef<HTMLElement | null>(null);

  useSectionReveal(heroRef as React.RefObject<HTMLElement>, {
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
      {/* Landing / Overview (full screen) */}
      <section id="about-landing" ref={heroRef} className="ap-section ap-hero">
        <div className="container grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div
              className="reveal inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-2"
              style={{ ["--d" as any]: "40ms" }}
            >
              <span className="inline-block px-2 py-0.5 rounded-[var(--radius-pill)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                Established {aboutData.founded}
              </span>
            </div>

            <h1
              className="reveal font-heading text-4xl md:text-5xl mb-4"
              style={{ ["--d" as any]: "80ms" }}
            >
              {aboutData.hero}
            </h1>

            {aboutData.intro.map((p, i) => (
              <p
                key={i}
                className="reveal text-[var(--color-text-muted)] leading-relaxed mb-4 max-w-prose"
                style={{ ["--d" as any]: `${120 + i * 60}ms` }}
              >
                {p}
              </p>
            ))}

            <Link
              to={{ pathname: "/", hash: "#services" }}
              className="reveal inline-flex px-5 py-3 rounded-[var(--radius-button)] bg-[var(--color-primary)] text-white font-semibold shadow-md hover:shadow-lg transition"
              style={{ ["--d" as any]: "220ms" }}
            >
              Explore Services
            </Link>
          </div>

          <div className="grid gap-4">
            <article
              className="reveal ap-card"
              style={{ ["--d" as any]: "160ms" }}
            >
              <h3 className="font-semibold mb-1">Who we are</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                End-to-end event and operations solutions across Production,
                Safety, Coordination, Operations, Logistics, Transportation, and
                Staffing.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Vision (full screen) */}
      <section
        id="about-vision"
        ref={visionRef}
        className="ap-section ap-vision"
        aria-labelledby="vision-heading"
      >
        <div className="container">
          <header className="reveal mb-6" style={{ ["--d" as any]: "0ms" }}>
            <h2 id="vision-heading" className="font-heading text-3xl md:text-4xl">
              Vision
            </h2>
          </header>

          <article
            className="reveal ap-card"
            style={{ ["--d" as any]: "100ms" }}
          >
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              {aboutData.vision}
            </p>
          </article>
        </div>
      </section>

      {/* Mission (full screen) */}
      <section
        id="about-mission"
        ref={missionRef}
        className="ap-section ap-mission"
        aria-labelledby="mission-heading"
      >
        <div className="container">
          <header className="reveal mb-6" style={{ ["--d" as any]: "0ms" }}>
            <h2 id="mission-heading" className="font-heading text-3xl md:text-4xl">
              Mission
            </h2>
          </header>

          <article
            className="reveal ap-card"
            style={{ ["--d" as any]: "100ms" }}
          >
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              {aboutData.mission}
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
