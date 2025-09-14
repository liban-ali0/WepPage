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
            <a href="#landing">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Our Services</a>
            <a href="#advantages">Our Advantages</a>
            <a href="#team">Our Team</a>
            <a href="#roadmap">Roadmap</a>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-[var(--color-text)] mb-3">Contact</h4>
          <nav className="footer-links">
            <a href="mailto:hello@boostlink.sa">hello@boostlink.sa</a>
            <a href="#contact">Start a Project</a>
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


