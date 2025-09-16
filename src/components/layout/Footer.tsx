import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="hp-footer relative mt-16">
      {/* Top glow divider */}
      <div className="footer-top-glow" aria-hidden="true" />

      <div className="container grid gap-8 py-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-xl mb-2">
            <span className="brand-wordmark text-gradient">BoostLink</span>
          </h3>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Staffing Agency &amp; Event Solutions. We connect people, experiences, and results.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold text-[var(--color-text)] mb-3">Quick Links</h4>
          <nav className="footer-links">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to={{ pathname: "/", hash: "#advantages" }}>Our Advantages</Link>
            <Link to={{ pathname: "/", hash: "#team" }}>Our Team</Link>
            <Link to={{ pathname: "/", hash: "#roadmap" }}>Roadmap</Link>
            <Link to="/apply">Apply</Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-[var(--color-text)] mb-3">Contact</h4>
          <nav className="footer-links">
            <a href="mailto:info@boostlink.sa">info@boostlink.sa</a>
            <Link to="/apply">Join Our Team</Link>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} BoostLink. All rights reserved.</span>
          <span>
            Built with <span aria-hidden="true"></span> using BoostLink design tokens.
          </span>
        </div>
      </div>
    </footer>
  );
}


