// src/sections/Services/Services.tsx
import { useRef } from "react";
import "./services.css";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import { services } from "../../content/boostlink";
import "../../assets/styles/utilities.css";
// swap these with your real images
const serviceImages = [
  { src: "/img/services/staffing.jpg", alt: "Professional staffing team on-site" },
  { src: "/img/services/production.png", alt: "Event production and stage setup" },
  { src: "/img/services/logistics.jpg", alt: "Logistics, safety, and coordination in action" },
];

export default function Services() {
  const rootRef = useRef<HTMLElement | null>(null);
  useSectionReveal(rootRef as React.RefObject<HTMLElement>, {
    threshold: 0.2,
    rootMargin: "0px 0px -12% 0px",
  });

  return (
    <section
      ref={rootRef}
      id="services"
      className="services fullscreen-section  hp-services"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <div className="reveal text-center mb-10" style={{ ["--d" as any]: "0ms" }}>
          <h2 id="services-heading" className="font-heading text-4xl md:text-5xl mt-4">
            Our Services
          </h2>
          <p className="text-[var(--color-text-muted)] mt-3 max-w-2xl mx-auto">
            Tailor-made, end-to-end solutions in staffing, production, logistics, safety, accreditation, and coordination.
          </p>
        </div>

        <div className="svc-rows">
          {services.map((s, i) => {
            const flip = i % 2 === 1 ? " flip" : "";
            const img = serviceImages[i];
            return (
              <article
                key={s.title}
                className={`reveal svc-row${flip}`}
                style={{ ["--d" as any]: `${100 * (i + 1)}ms` }}
              >
                <div className="svc-media">
                  {img ? (
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      width={1280}
                      height={720}
                    />
                  ) : (
                    <div className="svc-media-fallback" aria-hidden="true" />
                  )}
                  <div className="svc-media-overlay" />
                </div>

                <div className="svc-content">
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.summary}</p>

                  <a
                    href="#contact"
                    className="svc-btn"
                  >
                    Start a project
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
