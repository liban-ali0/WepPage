// src/sections/Team.tsx
import { useRef } from "react";
import "./team.css";
import { useSectionReveal } from "../../hooks/useSectionReveal";

/* --- Image paths (unchanged) --- */
const taghreedImg = `${import.meta.env.BASE_URL}img/taghreed_al_ajlan.jpg`;
const abdullahImg = `${import.meta.env.BASE_URL}img/abdullah_wagih.jpg`;
const malekImg = `${import.meta.env.BASE_URL}img/malek_fayyad.jpg`;
const mohamedImg = `${import.meta.env.BASE_URL}img/mohamed_ameer.jpg`;
const abdulrahmanImg = `${import.meta.env.BASE_URL}img/abdulrahman_bilani.jpg`;
const mutazImg = `${import.meta.env.BASE_URL}img/mutaz_haleem.jpg`;

/* --- Inline SVG icons (no extra deps) --- */
const IconLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM14.5 9c-2.21 0-3.5 1.204-3.5 2.847V21h-4V9h4v1.62C11.63 9.79 12.9 9 14.9 9c3.08 0 5.1 1.94 5.1 5.504V21h-4v-5.73c0-1.64-.59-2.77-2.1-2.77-1.15 0-1.83.78-2.1 1.53-.11.27-.14.64-.14 1.02V21h-4v-8.65c0-2.69 1.79-4.35 4.3-4.35 2 0 3.04.97 3.54 1.77H19c-.06-.09-.12-.18-.19-.27C18.03 9.6 16.47 9 14.5 9z"/>
  </svg>
);

const IconX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.146 2H21l-6.99 7.987L22 22h-6.955l-4.864-6.09L4.5 22H2l7.5-8.566L2 2h7l4.52 5.698L18.146 2Zm-2.44 18h2.192L8.383 4H6.07l9.635 16Z"/>
  </svg>
);

const IconInstagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11.001 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7.001 3.5 3.5 0 0 0 0-7ZM18 6.75a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2Z"/>
  </svg>
);

/* --- Data model extended with socials --- */
type Member = {
  name: string;
  role: string;
  img: string;
  featured?: boolean;
  linkedin?: string;
  x?: string;           // Twitter/X
  instagram?: string;
};

export default function Team() {
  const rootRef = useRef<HTMLElement | null>(null);
  useSectionReveal(rootRef as React.RefObject<HTMLElement>, { threshold: 0.2, rootMargin: "0px 0px -12% 0px" });

  /* Replace '#' with real URLs when you have them */
  const members: Member[] = [
    { name: "Taghreed Al-Ajlan", role: "Founder & CEO", img: taghreedImg, featured: true, linkedin: "#", x: "#", instagram: "#" },
    { name: "Abdullah Wagih", role: "Co-Founder & COO", img: abdullahImg, featured: true, linkedin: "#", x: "#", instagram: "#" },
    { name: "Malek Fayyad", role: "Operation Manager", img: malekImg, linkedin: "#", x: "#", instagram: "#" },
    { name: "Mohamed Ameer", role: "Logistics Manager", img: mohamedImg, linkedin: "#", x: "#", instagram: "#" },
    { name: "Abdulrahman Bilani", role: "Digital Manager", img: abdulrahmanImg, linkedin: "#", x: "#", instagram: "#" },
    { name: "Mutaz Haleem", role: "Accredited Manager", img: mutazImg, linkedin: "#", x: "#", instagram: "#" },
  ];

  const featured = members.filter(m => m.featured);
  const rest = members.filter(m => !m.featured);

  /* Helper: render a single icon link if present */
  const SocialLink = ({ href, brand, label }: { href?: string; brand: "linkedin" | "x" | "instagram"; label: string }) => {
    if (!href) return null;
    return (
      <a
        className="icon-btn"
        data-brand={brand}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {brand === "linkedin" && <IconLinkedIn />}
        {brand === "x" && <IconX />}
        {brand === "instagram" && <IconInstagram />}
      </a>
    );
  };

  return (
    <section
      id="team"
      ref={rootRef}
      className="team fullscreen-section relative hp-team "
    >
      <div className="container">
        {/* Heading */}
        <div className="reveal text-center mb-10" style={{ ["--d" as any]: "0ms" }}>
          <h2 className="font-heading text-4xl md:text-5xl mt-4">Meet the people behind BoostLink</h2>
          <p className="text-[var(--color-text-muted)] mt-3 max-w-2xl mx-auto">
            Founders highlighted first, followed by the core team. Real bios and links coming later.
          </p>
        </div>

        {/* Founders (2-up from md) */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {featured.map((m, idx) => (
            <article
              key={m.name}
              className="reveal featured-card group"
              style={{ ["--d" as any]: `${80 + idx * 60}ms` }}
            >
              {/* Media with overlay */}
              <div className="card-media"   tabIndex={0}
  role="group"
  aria-label={`${m.name} social actions`}>
                <img src={m.img} alt={m.name} className="featured-photo" loading="lazy" />
                <div className="card-overlay">
                  <div className="socials" role="group" aria-label={`${m.name} social profiles`}>
                    <SocialLink href={m.linkedin} brand="linkedin" label={`Open ${m.name}'s LinkedIn`} />
                    <SocialLink href={m.x}        brand="x"        label={`Open ${m.name}'s X profile`} />
                    <SocialLink href={m.instagram} brand="instagram" label={`Open ${m.name}'s Instagram`} />
                  </div>
                </div>
              </div>

              {/* Text block (always visible) */}
              <div className="featured-info" >
                <h3 className="name">{m.name}</h3>
                <p className="role">{m.role}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Rest of team: 1 → 2 (md) → 4 (xl) */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {rest.map((m, idx) => (
            <article
              key={m.name}
              className="reveal member-card group"
              style={{ ["--d" as any]: `${120 + idx * 32}ms` }}
            >
              <div className="card-media" tabIndex={0}
  role="group"
  aria-label={`${m.name} social actions`}>
                <img src={m.img} alt={m.name} className="member-photo" loading="lazy" />
                <div className="card-overlay">
                  <div className="socials" role="group" aria-label={`${m.name} social profiles`}>
                    <SocialLink href={m.linkedin} brand="linkedin" label={`Open ${m.name}'s LinkedIn`} />
                    <SocialLink href={m.x}        brand="x"        label={`Open ${m.name}'s X profile`} />
                    <SocialLink href={m.instagram} brand="instagram" label={`Open ${m.name}'s Instagram`} />
                  </div>
                </div>
              </div>

              <h3 className="name mt-3">{m.name}</h3>
              <p className="role">{m.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
