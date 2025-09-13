import { useRef, useState } from "react";
import "./contact.css";
import { useSectionReveal } from "../../hooks/useSectionReveal";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const rootRef = useRef<HTMLElement | null>(null);
  useSectionReveal(rootRef as React.RefObject<HTMLElement>, {
    threshold: 0.2,
    rootMargin: "0px 0px -12% 0px",
  });

  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if ((data.get("company") as string)?.trim()) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      return;
    }

    try {
      // TODO: replace with your Google Apps Script Web App URL
      const APPS_SCRIPT_URL = ""; // e.g. "https://script.google.com/macros/s/XXXX/exec"
      if (!APPS_SCRIPT_URL) {
        // Dev placeholder: simulate success without network
        await new Promise((r) => setTimeout(r, 700));
        setStatus("success");
        setMessage("Thanks! We’ll get back to you shortly.");
        form.reset();
        return;
      }

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors", // GAS often requires no-cors for simple form posts
      });

      // With no-cors we can't read status; assume success
      setStatus("success");
      setMessage("Thanks! We’ll get back to you shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Couldn’t send right now. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      ref={rootRef}
      className="contact fullscreen-section relative bg-[var(--color-bg)]"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        {/* Heading */}
        <div className="reveal text-center mb-8" style={{ ["--d" as any]: "0ms" }}>
          <h2 id="contact-heading" className="font-heading text-4xl md:text-5xl mt-4">
            Start a project with BoostLink
          </h2>
          <p className="text-[var(--color-text-muted)] mt-3 max-w-2xl mx-auto">
            Tell us a bit about your needs. We’ll reply within 1–2 business days.
          </p>
        </div>

        {/* Form + Details */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Form */}
          <form className="reveal contact-card" style={{ ["--d" as any]: "120ms" }} onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone (optional)</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required />
              </div>

              <div className="field">
                <label htmlFor="message">Project details</label>
                <textarea id="message" name="message" rows={5} required />
              </div>

              {/* Honeypot (hidden from users) */}
              <input type="text" name="company" className="hp" tabIndex={-1} autoComplete="off" />

              <button
                className="btn-primary"
                disabled={status === "submitting"}
                aria-busy={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>

              {status !== "idle" && message && (
                <div
                  className={`status ${status === "success" ? "ok" : status === "error" ? "err" : ""}`}
                  role={status === "error" ? "alert" : "status"}
                >
                  {message}
                </div>
              )}
            </div>
          </form>

          {/* Details / Alternate contact */}
          <aside className="reveal contact-card" style={{ ["--d" as any]: "200ms" }}>
            <h3 className="font-semibold mb-2">Prefer email?</h3>
            <p className="text-[var(--color-text-muted)] mb-4">
              Email us at <a href="mailto:hello@boostlink.com" className="link">hello@boostlink.com</a>.
            </p>

            <h4 className="font-semibold mb-2">What to include</h4>
            <ul className="bullets">
              <li>What you need help with (brief)</li>
              <li>Expected timeline</li>
              <li>Location(s)</li>
              <li>Any constraints (budget, staffing, etc.)</li>
            </ul>

            <div className="note">
              We respect your time and privacy. Your info goes straight to our team.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
