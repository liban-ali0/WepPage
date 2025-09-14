import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = useCallback(() => setOpen(false), []);
  const toggle = () => setOpen(v => !v);

  // Close on route/hash change
  useEffect(() => { setOpen(false); }, [location.pathname, location.hash]);

  // ESC to close + page scroll lock while menu open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);

    const root = document.documentElement;
    if (open) root.style.overflow = "hidden";
    else root.style.overflow = "";

    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <header
        className="sticky top-0 z-[60] glass border-b border-[var(--color-border)] backdrop-saturate-150 hp-landing"
        role="banner"
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 font-extrabold"
            onClick={close}
            aria-label="BoostLink — Home"
          >
            <span className="w-10 h-10 grid place-items-center">
              <img src={`${import.meta.env.BASE_URL}img/logo.png`} alt="BoostLink" loading="lazy" className="block h-8 w-auto" />
            </span>
            <span className="brand-wordmark text-gradient">BoostLink</span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8 font-semibold text-[var(--color-text-muted)]"
            aria-label="Primary"
          >
            <NavLink to="/about#" className={({ isActive }) =>isActive ? "text-[var(--color-text)]" : "hover:text-[var(--color-text)]"}> About</NavLink>
            <Link to="/services" className="hover:text-[var(--color-text)]">Services</Link>
            <Link to={{ pathname: "/", hash: "#advantages" }} className="hover:text-[var(--color-text)]">Advantages</Link>
            <Link to={{ pathname: "/", hash: "#roadmap" }} className="hover:text-[var(--color-text)]">Roadmap</Link>
            <Link to={{ pathname: "/", hash: "#team" }} className="hover:text-[var(--color-text)]">Team</Link>
            <Link to={{ pathname: "/", hash: "#contact" }} className="hover:text-[var(--color-text)]">Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <Link
            to={{ pathname: "/", hash: "#contact" }}
            className="hidden md:inline-flex items-center px-4 py-2 rounded-[var(--radius-button)] bg-[var(--color-primary)] text-white font-bold shadow-md hover:shadow-lg transition focus-visible:outline-ring"
          >
            Contact Us
          </Link>

          {/* Mobile hamburger (icon only, animated to X) */}
          <button
            type="button"
            onClick={toggle}
            className="md:hidden relative inline-flex items-center justify-center w-11 h-11 rounded-lg border focus-visible:outline-ring"
            aria-expanded={open}
            aria-controls="mobileMenu"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className={`hamburger ${open ? "is-open" : ""}`} aria-hidden="true">
              <span className="line top"></span>
              <span className="line mid"></span>
              <span className="line bot"></span>
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu overlay (rendered in a portal to avoid clipping) */}
      {open &&
        createPortal(
          <div id="mobileMenu" role="dialog" aria-modal="true" className="fixed inset-0 z-[100] md:hidden">
            {/* Floating close button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close navigation"
              className="
                fixed
                z-[110]
                top-[calc(env(safe-area-inset-top)+12px)]
                right-[calc(env(safe-area-inset-right)+12px)]
                w-11 h-11
                rounded-lg border
                text-white
                bg-[rgba(16,16,22,0.65)] backdrop-blur-md
                shadow-md
                focus-visible:outline-ring
              "
            >
              <span className="hamburger is-open" aria-hidden="true">
                <span className="line top"></span>
                <span className="line mid"></span>
                <span className="line bot"></span>
              </span>
              <span className="sr-only">Close menu</span>
            </button>

            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/65 backdrop-blur-[4px] animate-fade-in" onClick={close} />

            {/* Full-height panel; pad-top equals header height (h-16). Scrollable content inside. */}
            <div className="absolute inset-0 pt-16 md:pt-20">
              <div
                className="
                  h-full w-full
                  glass border-b border-[var(--color-border)]
                  bg-[rgba(16,16,22,0.82)] backdrop-blur-xl
                  rounded-b-2xl animate-drop-in overflow-y-auto
                "
              >
                <div className="container py-8">
                  <nav className="flex flex-col gap-2 text-lg font-semibold text-white" aria-label="Mobile">
                    <NavLink to="/about" onClick={close} className="py-3 px-2 rounded-lg hover:bg-white/5 focus-visible:outline-ring">About</NavLink>
                    <Link to="/services" onClick={close} className="py-3 px-2 rounded-lg hover:bg-white/5 focus-visible:outline-ring">Services</Link>
                    <Link to={{ pathname: "/", hash: "#advantages" }} onClick={close} className="py-3 px-2 rounded-lg hover:bg-white/5 focus-visible:outline-ring">Advantages</Link>
                    <Link to={{ pathname: "/", hash: "#roadmap" }} onClick={close} className="py-3 px-2 rounded-lg hover:bg-white/5 focus-visible:outline-ring">Roadmap</Link>
                    <Link to={{ pathname: "/", hash: "#team" }} onClick={close} className="py-3 px-2 rounded-lg hover:bg-white/5 focus-visible:outline-ring">Team</Link>
                    <Link to={{ pathname: "/", hash: "#contact" }} onClick={close} className="py-3 px-2 rounded-lg hover:bg-white/5 focus-visible:outline-ring">Contact</Link>
                  </nav>

                  <div className="mt-6">
                    <Link
                      to={{ pathname: "/", hash: "#contact" }}
                      onClick={close}
                      className="inline-flex w-full items-center justify-center px-4 py-3 rounded-[var(--radius-button)] bg-[var(--color-primary)] text-white font-bold shadow-md hover:shadow-lg transition focus-visible:outline-ring"
                    >
                      Start a Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
