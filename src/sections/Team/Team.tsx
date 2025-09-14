import { useRef } from "react";
import "./team.css";
import { useSectionReveal } from "../../hooks/useSectionReveal";

const taghreedImg = `${import.meta.env.BASE_URL}img/taghreed_al_ajlan.jpg`;
const abdullahImg = `${import.meta.env.BASE_URL}/img/abdullah_wagih.jpg`;
const malekImg = `${import.meta.env.BASE_URL}img/malek_fayyad.jpg`;
const mohamedImg = `${import.meta.env.BASE_URL}img/mohamed_ameer.jpg`;
const abdulrahmanImg = `${import.meta.env.BASE_URL}img/abdulrahman_bilani.jpg`;
const mutazImg = `${import.meta.env.BASE_URL}img/mutaz_haleem.jpg`;

type Member = {
  name: string;
  role: string;
  img: string;
  featured?: boolean;
};

export default function Team() {
  const rootRef = useRef<HTMLElement | null>(null);
  useSectionReveal(rootRef as React.RefObject<HTMLElement>, { threshold: 0.2, rootMargin: "0px 0px -12% 0px" });

  // Replace img with real URLs when ready
  const members: Member[] = [
    { name: "Taghreed Al-Ajlan", role: "Founder & CEO", img: taghreedImg, featured: true },
    { name: "Abdullah Wagih", role: "Co-Founder & COO", img: abdullahImg, featured: true },
    { name: "Malek Fayyad", role: "Operation Manager", img: malekImg },
    { name: "Mohamed Ameer", role: "Logistics Manager", img: mohamedImg },
    { name: "Abdulrahman Bilani", role: "Digital Manager", img: abdulrahmanImg },
    { name: "Mutaz Haleem", role: "Accredited Manager", img: mutazImg },
  ];

  const featured = members.filter(m => m.featured);
  const rest = members.filter(m => !m.featured);

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

        {/* Founders spotlight */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {featured.map((m, idx) => (
            <article
              key={m.name}
              className="reveal featured-card"
              style={{ ["--d" as any]: `${80 + idx * 60}ms` }}
            >
              <img src={m.img} alt={m.name} className="featured-photo" loading="lazy" />
              <div className="featured-info">
                <h3 className="name">{m.name}</h3>
                <p className="role">{m.role}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Rest of team */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {rest.map((m, idx) => (
            <article
              key={m.name}
              className="reveal member-card"
              style={{ ["--d" as any]: `${120 + idx * 40}ms` }}
            >
              <img src={m.img} alt={m.name} className="member-photo" loading="lazy" />
              <h3 className="name mt-3">{m.name}</h3>
              <p className="role">{m.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
