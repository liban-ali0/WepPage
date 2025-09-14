import { useRef } from "react";
import "./landing.css";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import "../../assets/styles/utilities.css";

export default function Landing() {
  const rootRef = useRef<HTMLElement | null>(null);
  useSectionReveal(rootRef as React.RefObject<HTMLElement>, {
    threshold: 0.2,
    rootMargin: "0px 0px -12% 0px",
  });

  return (
    <section
      id="landing"
      ref={rootRef}
      className="landing fullscreen-section hero-screen hp-landing"
      aria-labelledby="landing-title"
    >
      {/* Background image */}
      <div className="landing-bg" aria-hidden="true" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/portfolio_group1.jpg)` }}/>

      {/* Gradient + subtle blur only under text */}
      <div className="landing-veil" aria-hidden="true" />

      <div className="container">
        <div className="reveal landing-copy" style={{ ["--d" as any]: "80ms" }}>
          {/* Brand lockup (text-only) */}
<div className="mb-3 flex items-center gap-3 select-none">

  <h2
    className="text-gradient brand-title">
    BoostLink
  </h2>
</div>

          
          <h1 id="landing-title" className="landing-title mt-4 mb-3">
            Your Partner in Events & Staffing Excellence
          </h1>

          <p className="landing-sub mb-6">
            With accredited expertise and agile teams, BoostLink handles every detail—production,
            operations, logistics, and staffing—so you can focus on impact.
          </p>

          <a href="/services" className="btn btn-primary">Explore Services</a>
        </div>
      </div>
    </section>
  );
}
