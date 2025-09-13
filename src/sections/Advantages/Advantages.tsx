import { useRef, type JSX } from "react";
import "./advantages.css";
import { useSectionReveal } from "../../hooks/useSectionReveal";

type Advantage = {
  title: string;
  desc: string;
  // Minimal inline SVG (keeps payload tiny, no icon CDN roundtrips)
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

// Tiny SVG icon set
const ShieldCheck = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M12 3l7 3v5c0 4.5-2.9 8.6-7 10-4.1-1.4-7-5.5-7-10V6l7-3z" fill="currentColor" opacity=".14"/>
    <path d="M9.5 12.5l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Cog = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M3 12h2m14 0h2M12 3v2m0 14v2M5.6 5.6l1.4 1.4m10 10l1.4 1.4m0-12.8l-1.4 1.4m-10 10L5.6 18.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const Layers = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M12 3l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 16l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
);
const Handshake = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M21 8l-3-3-5 5-2-2-5 5 3 3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 16l-2 2M14 14l-2 2M12 12l-2 2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export default function Advantages() {
  const rootRef = useRef<HTMLElement | null>(null);
  useSectionReveal(rootRef as React.RefObject<HTMLElement>, {
    threshold: 0.2,
    rootMargin: "0px 0px -12% 0px",
  });

  const items: Advantage[] = [
    {
      title: "Accredited & Trusted",
      desc:
        "Recognized standards and compliance give our clients confidence in every project.",
      Icon: ShieldCheck,
    },
    {
      title: "Agility & Innovation",
      desc:
        "We adapt quickly to challenges and design creative solutions that deliver real, measurable results.",
      Icon: Cog,
    },
    {
      title: "End-to-End Expertise",
      desc:
        "From Production to Logistics, Safety, and Staffing, we provide integrated solutions under one roof.",
      Icon: Layers,
    },
    {
      title: "Partnership Approach",
      desc:
        "We act as long-term partners, working side-by-side with clients to achieve sustainable growth.",
      Icon: Handshake,
    },
  ];

  return (
    <section
      id="advantages"
      ref={rootRef}
      className="advantages fullscreen-section relative bg-[var(--color-bg-dim)]"
      aria-labelledby="advantages-heading"
    >
      <div className="container">
        <div className="reveal text-center mb-8" style={{ ["--d" as any]: "0ms" }}>
          <h2 id="advantages-heading" className="font-heading text-4xl md:text-5xl">
            Our Advantages
          </h2>
          <p className="text-[var(--color-text-muted)] mt-3 max-w-2xl mx-auto">
            What makes BoostLink different.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it, idx) => (
            <article
              key={it.title}
              className="reveal adv-card"
              style={{ ["--d" as any]: `${100 + idx * 80}ms` }}
            >
              <div className="adv-icon">
                <it.Icon className="icon" />
              </div>
              <div className="adv-body">
                <h3 className="adv-title">{it.title}</h3>
                <p className="adv-desc">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
