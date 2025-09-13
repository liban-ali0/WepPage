// src/components/layout/Header.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-[var(--color-border)]">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-extrabold" onClick={close}>
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)] grid place-items-center text-white font-bold shadow-md">
            B
          </span>
          <span>BoostLink</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-[var(--color-text-muted)] font-semibold">
          <Link to="/about" className="hover:text-[var(--color-text)]">About</Link>
          <Link to={{ pathname: "/", hash: "#services" }} className="hover:text-[var(--color-text)]">Services</Link>
          <Link to={{ pathname: "/", hash: "#advantages" }} className="hover:text-[var(--color-text)]">Advantages</Link>
          <Link to={{ pathname: "/", hash: "#team" }} className="hover:text-[var(--color-text)]">Team</Link>
          <Link to={{ pathname: "/", hash: "#roadmap" }} className="hover:text-[var(--color-text)]">Roadmap</Link>
          <Link to={{ pathname: "/", hash: "#contact" }} className="hover:text-[var(--color-text)]">Contact</Link>
        </nav>

        <Link
          to={{ pathname: "/", hash: "#contact" }}
          className="hidden md:inline-flex items-center px-4 py-2 rounded-[var(--radius-button)] bg-[var(--color-primary)] text-white font-bold shadow-md hover:shadow-lg transition"
          onClick={close}
        >
          Contact Us
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border px-3 py-2 rounded-lg"
          aria-expanded={menuOpen}
          aria-controls="mobileNav"
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <div id="mobileNav" className="md:hidden glass border-t p-4 flex flex-col gap-3 text-[var(--color-text-muted)] font-semibold">
          <Link to="/about" onClick={close}>About</Link>
          <Link to={{ pathname: "/", hash: "#services" }} onClick={close}>Services</Link>
          <Link to={{ pathname: "/", hash: "#advantages" }} onClick={close}>Advantages</Link>
          <Link to={{ pathname: "/", hash: "#team" }} onClick={close}>Team</Link>
          <Link to={{ pathname: "/", hash: "#roadmap" }} onClick={close}>Roadmap</Link>
          <Link to={{ pathname: "/", hash: "#contact" }} onClick={close}>Contact</Link>
        </div>
      )}
    </header>
  );
}
