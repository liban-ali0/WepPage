import { useRef } from "react";
import "./advantages.css";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import { advantages } from "../../content/boostlink";

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z" fill="currentColor" />
      <path d="M16 9l-5 5-3-3" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor"/>
    </svg>
  );
}
function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 16l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconHandshake() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 12l4-4 5 5a3 3 0 004 0l5-5 0 7-5 5a4 4 0 01-6 0l-2-2-2 2-3-3v-5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const icons = [IconShield, IconBolt, IconLayers, IconHandshake];

export default function Advantages() {
  const rootRef = useRef<HTMLElement | null>(null);
  useSectionReveal(rootRef as React.RefObject<HTMLElement>, {
    threshold: 0.2,
    rootMargin: "0px 0px -12% 0px",
  });

  return (
    <section
      ref={rootRef}
      id="advantages"
      className="advantages fullscreen-section hp-advantages"
      aria-labelledby="advantages-heading"
    >
      <div className="container">
        <div className="reveal text-center mb-12" style={{ ["--d" as any]: "0ms" }}>
          <h2 id="advantages-heading" className="font-heading text-4xl md:text-5xl">Our Advantages</h2>
          <p className="text-[var(--color-text-muted)] mt-3 max-w-2xl mx-auto">What makes BoostLink different.</p>
        </div>

        <div className="adv-grid">
          {advantages.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article
                key={a.title}
                className="reveal adv-card"
                style={{ ["--d" as any]: `${80 * (i + 1)}ms` }}
              >
                <div className="adv-icon" aria-hidden="true">
                  <Icon />
                </div>

                <div className="adv-body">
                  <h3 className="adv-title">{a.title}</h3>
                  <p className="adv-desc">{a.desc}</p>

                  <a href="#contact" className="adv-link" aria-label={`Learn more about ${a.title}`}>
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
