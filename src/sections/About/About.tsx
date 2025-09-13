import { useEffect, useRef } from "react";
import "./about.css";

export default function About() {
    const rootRef = useRef<HTMLElement | null>(null);

    // Simple reveal-on-scroll (staggered) — section-scoped
    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const items = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
        // Respect reduced-motion automatically: if media query matches, just set in
        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReduced) {
            items.forEach((el) => el.classList.add("in"));
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        (e.target as HTMLElement).classList.add("in");
                        io.unobserve(e.target);
                    }
                });
            },
            { rootMargin: "0px 0px -15% 0px", threshold: 0.08 }
        );

        items.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={rootRef}
            className="about hero-screen snap-section relative bg-[var(--color-bg-dim)]"
        >
            <div className="container grid gap-12 md:grid-cols-2 items-center">
                {/* Left: text */}
                <div>
                    <span
                        className="reveal inline-block px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-primary-light)]/10 text-[var(--color-primary)] text-xs font-bold mb-4"
                        style={{ ["--d" as any]: "0ms" }}
                    >
                        About Us
                    </span>

                    <h2
                        className="reveal font-heading text-4xl md:text-5xl mb-4"
                        style={{ ["--d" as any]: "80ms" }}
                    >
                        We connect brands with people
                    </h2>

                    <p
                        className="reveal text-[var(--color-text-muted)] leading-relaxed mb-6 max-w-prose"
                        style={{ ["--d" as any]: "140ms" }}
                    >
                        Placeholder text — this will later be replaced with real content.
                        Use this area to briefly introduce BoostLink, explain the mission,
                        and highlight what makes the company unique.
                    </p>

                    <a
                        href="#services"
                        className="reveal inline-flex px-5 py-3 rounded-[var(--radius-button)] bg-[var(--color-primary)] text-white font-semibold shadow-md hover:shadow-lg transition"
                        style={{ ["--d" as any]: "200ms" }}
                    >
                        Explore Services
                    </a>
                </div>

                {/* Right: visual placeholder */}
                <div
                    className="reveal h-64 md:h-80 rounded-[var(--radius-card)] border border-dashed border-[var(--color-border)] grid place-items-center text-[var(--color-text-muted)]"
                    style={{ ["--d" as any]: "120ms" }}
                >
                    Visual / image placeholder
                </div>
            </div>
        </section>
    );
}
