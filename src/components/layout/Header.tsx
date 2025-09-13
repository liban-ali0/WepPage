import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-[var(--color-border)]">
      <div className="container flex items-center justify-between h-16">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 font-extrabold">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)] grid place-items-center text-white font-bold shadow-md">
            B
          </span>
          <span>BoostLink</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-[var(--color-text-muted)] font-semibold">
          <a href="#about" className="hover:text-[var(--color-text)]">About</a>
          <a href="#services" className="hover:text-[var(--color-text)]">Services</a>
          <a href="#advantages" className="hover:text-[var(--color-text)]">Advantages</a>
          <a href="#team" className="hover:text-[var(--color-text)]">Team</a>
          <a href="#roadmap" className="hover:text-[var(--color-text)]">Roadmap</a>
          <a href="#contact" className="hover:text-[var(--color-text)]">Contact</a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-[var(--radius-button)] bg-[var(--color-primary)] text-white font-bold shadow-md hover:shadow-lg transition"
        >
          Contact Us
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border px-3 py-2 rounded-lg"
          aria-expanded={menuOpen}
          aria-controls="mobileNav"
        >
          Menu
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div id="mobileNav" className="md:hidden glass border-t p-4 flex flex-col gap-3 text-[var(--color-text-muted)] font-semibold">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#advantages">Advantages</a>
          <a href="#team">Team</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
}
