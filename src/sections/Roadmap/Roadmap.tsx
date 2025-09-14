import { useRef } from "react";
import "./roadmap.css";
import { useSectionReveal } from "../../hooks/useSectionReveal";

type Step = { title: string; desc: string };

export default function Roadmap() {
  const rootRef = useRef<HTMLElement | null>(null);
  useSectionReveal(rootRef as React.RefObject<HTMLElement>, {
    threshold: 0.2,
    rootMargin: "0px 0px -12% 0px",
  });

  const steps: Step[] = [
    {
      title: "Expansion of Services",
      desc:
        "Broaden our portfolio with more advanced solutions in production, logistics, and staffing, reaching wider industries and markets.",
    },
    {
      title: "Technology & Innovation",
      desc:
        "Invest in digital tools and smart systems to enhance efficiency, safety, and coordination across all operations.",
    },
    {
      title: "Strategic Partnerships",
      desc:
        "Build strong collaborations with regional and international partners to scale our impact and drive sustainable growth.",
    },
  ];

  return (
    <section
      id="roadmap"
      ref={rootRef}
      className="roadmap fullscreen-section relative hp-roadmap "
      aria-labelledby="roadmap-heading"
    >
      <div className="container">
        {/* Heading */}
        <div className="reveal text-center mb-10" style={{ ["--d" as any]: "0ms" }}>
          <h2 id="roadmap-heading" className="font-heading text-4xl md:text-5xl mt-4">
            The path we’re taking
          </h2>
          <p className="text-[var(--color-text-muted)] mt-3 max-w-2xl mx-auto">
            Three milestones guiding BoostLink’s growth.
          </p>
        </div>

        {/* Timeline */}
        <ol className="rm-zigzag">
          {steps.map((s, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            return (
              <li
                key={s.title}
                className={`reveal rm-item ${side}`}
                style={{ ["--d" as any]: `${120 + i * 120}ms` }}
              >
                {/* Dot + number on the rail */}
                <div className="rm-node" aria-hidden="true">
                  <span className="rm-num">{i + 1}</span>
                </div>

                {/* Curved connector (SVG) */}
                <svg
                  className="rm-curve"
                  viewBox="0 0 200 120"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {side === "left" ? (
                    <path d="M200,10 C110,30 100,90 20,110" />
                  ) : (
                    <path d="M0,10 C90,30 100,90 180,110" />
                  )}
                </svg>

                {/* Card */}
                <article className="rm-card">
                  <h3 className="rm-title">{s.title}</h3>
                  <p className="rm-desc">{s.desc}</p>
                </article>
              </li>
            );
          })}
        </ol>

        {/* CTA */}
        <div className="reveal text-center mt-8" style={{ ["--d" as any]: "500ms" }}>
          <a
            href="#contact"
            className="inline-flex px-5 py-3 rounded-[var(--radius-button)] bg-[var(--color-primary)] text-white font-semibold shadow-md hover:shadow-lg transition"
          >
            Discuss timelines
          </a>
        </div>
      </div>
    </section>
  );
}
