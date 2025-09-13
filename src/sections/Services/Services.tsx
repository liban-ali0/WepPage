import {  useRef } from "react";
import "./services.css";
import { useSectionReveal } from "../../hooks/useSectionReveal";

export default function Services() {
  const rootRef = useRef<HTMLElement | null>(null);
  useSectionReveal(rootRef, { threshold: 0.2, rootMargin: "0px 0px -12% 0px" });

  return (
    <section ref={rootRef} id="services" className="services fullscreen-section snap-section relative bg-[var(--color-bg)]">
      <div className="container">
        <div className="reveal text-center mb-8" style={{ ["--d" as any]: "0ms" }}>
          <span className="inline-block px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-primary-light)]/10 text-[var(--color-primary)] text-xs font-bold">
            Our Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl mt-4">
            What we do (placeholder)
          </h2>
          <p className="text-[var(--color-text-muted)] mt-3 max-w-2xl mx-auto">
            Placeholder copy — quick summary of key service offerings. We’ll replace with real bullets and icons later.
          </p>
        </div>

        {/* Card placeholders */}
        <div className="grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="reveal card" style={{ ["--d" as any]: `${80 * i}ms` }}>
              <div className="h-12 w-12 rounded-xl bg-[var(--color-primary)]/12 grid place-items-center font-bold text-[var(--color-primary)]">
                {i}
              </div>
              <h3 className="font-semibold mt-4">Service {i} (placeholder)</h3>
              <p className="text-[var(--color-text-muted)] text-sm mt-2">
                Short placeholder description for this service. We’ll swap with real content.
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a href="#contact" className="inline-flex px-5 py-3 rounded-[var(--radius-button)] bg-[var(--color-primary)] text-white font-semibold shadow-md hover:shadow-lg transition">
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
