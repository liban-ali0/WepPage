export default function Footer() {
    return (
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-dim)] mt-16">
        <div className="container grid gap-8 py-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl mb-2">BoostLink</h3>
            <p className="text-[var(--color-text-muted)]">
              Staffing Agency & Event Solutions. We connect people, experiences, and results.
            </p>
          </div>
  
          {/* Quick links */}
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-[var(--color-text-muted)]">
              <a href="#about" className="hover:text-[var(--color-text)]">About Us</a>
              <a href="#services" className="hover:text-[var(--color-text)]">Our Services</a>
              <a href="#advantages" className="hover:text-[var(--color-text)]">Our Advantages</a>
              <a href="#team" className="hover:text-[var(--color-text)]">Our Team</a>
              <a href="#roadmap" className="hover:text-[var(--color-text)]">Roadmap</a>
            </nav>
          </div>
  
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <nav className="flex flex-col gap-2 text-[var(--color-text-muted)]">
              <a href="mailto:hello@boostlink.com" className="hover:text-[var(--color-text)]">
                hello@boostlink.com
              </a>
              <a href="#contact" className="hover:text-[var(--color-text)]">
                Start a Project
              </a>
            </nav>
          </div>
        </div>
  
        <div className="border-t border-[var(--color-border)] py-4 text-sm text-[var(--color-text-muted)]">
          <div className="container flex flex-col md:flex-row justify-between items-center gap-2">
            <span>
              © {new Date().getFullYear()} BoostLink. All rights reserved.
            </span>
            <span>Built with ❤️ using BoostLink design tokens.</span>
          </div>
        </div>
      </footer>
    );
  }
  