import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import RolesChecklist, { ALL_ROLES } from "../components/apply/RolesChecklist";
import FileInput from "../components/apply/FileInput";
import ProgressSteps from "../components/apply/ProgressSteps";
import { type Gender, type EducationLevel as Edu } from "../types/application";
import "../assets/styles/apply.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

const REQUIRED = [
  "first_name",
  "last_name",
  "email",
  "age",
  "gender",
  "city_of_residence",
  "nationality",
  "phone_number",
  "id_number",
  "arabic_level",
  "english_level",
  "roles",
  "education_level",
  "personal_photo",
  "cv_resume",
] as const;
type RequiredField = typeof REQUIRED[number];

export default function Apply() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1..3
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successRefId, setSuccessRefId] = useState<string | null>(null);

  // form state
  const [form, setForm] = useState({
    first_name: "",
    second_name: "",
    last_name: "",
    email: "",
    age: "" as string | number,
    gender: "" as "" | Gender,
    city_of_residence: "",
    nationality: "",
    phone_number: "",
    id_number: "",
    arabic_level: "",
    english_level: "",
    other_language: "",
    roles: [] as string[],
    education_level: "" as "" | Edu,
    about: "",
    personal_photo: null as File | null,
    cv_resume: null as File | null,
  });

  const stepLabels = useMemo(
    () => ["Personal", "Languages & Roles", "Education & Files"],
    []
  );

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validateForStep(s: number): string[] {
    const missing: string[] = [];
    const add = (k: RequiredField, cond: boolean) => {
      if (cond) missing.push(k);
    };

    if (s >= 1) {
      add("first_name", !form.first_name.trim());
      add("last_name", !form.last_name.trim());
      add("email", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email));
      add("age", !String(form.age).trim());
      add("gender", !form.gender);
      add("city_of_residence", !form.city_of_residence.trim());
      add("nationality", !form.nationality.trim());
      add("phone_number", !form.phone_number.trim());
      add("id_number", !form.id_number.trim());
    }
    if (s >= 2) {
      add("arabic_level", !form.arabic_level.trim());
      add("english_level", !form.english_level.trim());
      add("roles", form.roles.length === 0);
    }
    if (s >= 3) {
      add("education_level", !form.education_level);
      add("personal_photo", !form.personal_photo);
      add("cv_resume", !form.cv_resume);
    }
    return missing;
  }

  function next() {
    const missing = validateForStep(step);
    if (missing.length) {
      setError("Please complete the required fields.");
      return;
    }
    setError(null);
    setStep((s) => Math.min(3, s + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setError(null);
    setStep((s) => Math.max(1, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const missing = validateForStep(3);
    if (missing.length) {
      setError("Please complete the required fields.");
      return;
    }
    setSubmitting(true);
    setError(null);

    try {
      const fd = new FormData();
      fd.append("first_name", form.first_name.trim());
      fd.append("second_name", form.second_name.trim());
      fd.append("last_name", form.last_name.trim());
      fd.append("email", form.email.trim());
      fd.append("age", String(form.age));
      fd.append("gender", String(form.gender));
      fd.append("city_of_residence", form.city_of_residence.trim());
      fd.append("nationality", form.nationality.trim());
      fd.append("phone_number", form.phone_number.trim());
      fd.append("id_number", form.id_number.trim());
      fd.append("arabic_level", form.arabic_level.trim());
      fd.append("english_level", form.english_level.trim());
      fd.append("other_language", form.other_language.trim());
      form.roles.forEach((r) => fd.append("roles", r));
      fd.append("education_level", String(form.education_level));
      fd.append("about", form.about.trim());
      if (form.personal_photo) fd.append("personal_photo", form.personal_photo);
      if (form.cv_resume) fd.append("cv_resume", form.cv_resume);

      const res = await fetch(`${API_BASE}/apply`, { method: "POST", body: fd });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || `Request failed: ${res.status}`);
      }
      const data = await res.json();
      setSuccessRefId(data?.refId || null);
      setStep(4); // success
    } catch (err: any) {
      setError(err?.message || "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if (step === 4) {
    return (
      <section className="container py-16">
        <div className="max-w-2xl mx-auto rounded-2xl border border-[var(--color-border)] bg-white/70 dark:bg-white/5 shadow-xl p-8 text-center">
          <h1 className="font-heading text-3xl mb-3">Application received 🎉</h1>
          <p className="text-[var(--color-text-muted)]">
            Thank you for applying. We’ll review your information and reach out if there’s a fit.
          </p>
          {successRefId && (
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              Reference ID: <span className="font-mono">{successRefId}</span>
            </p>
          )}
          <div className="mt-8 flex gap-3 justify-center">
            <button
              onClick={() => navigate("/")}
              className="px-5 py-2 rounded-xl bg-[var(--color-primary)] text-white hover:opacity-90"
            >
              Back to Home
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2 rounded-xl border border-[var(--color-border)]"
            >
              Submit Another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="container py-10">
      <div className="max-w-3xl mx-auto">
        <header className="mb-6 text-center">
          <h1 className="font-heading text-4xl">Application Form</h1>
          <p className="text-[var(--color-text-muted)] mt-2">Fields marked with * are required.</p>
        </header>

        <ProgressSteps current={step} labels={stepLabels} />

        {error && (
          <div
            role="alert"
            aria-live="polite"
            className="mt-4 rounded-xl border border-red-300/70 bg-red-50/70 p-3 text-red-800"
          >
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-6 space-y-8">
          {/* STEP 1 */}
          {step === 1 && (
            <section className="grid gap-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-medium">First Name *</label>
                  <input
                    className="input"
                    value={form.first_name}
                    onChange={(e) => update("first_name", e.target.value)}
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label className="block font-medium">Second Name</label>
                  <input
                    className="input"
                    value={form.second_name}
                    onChange={(e) => update("second_name", e.target.value)}
                    autoComplete="additional-name"
                  />
                </div>
                <div>
                  <label className="block font-medium">Last Name *</label>
                  <input
                    className="input"
                    value={form.last_name}
                    onChange={(e) => update("last_name", e.target.value)}
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-medium">Email *</label>
                  <input
                    type="email"
                    className="input"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className="block font-medium">Age *</label>
                  <input
                    type="number"
                    min={0}
                    max={120}
                    className="input"
                    value={form.age}
                    onChange={(e) => update("age", Number(e.target.value))}
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium">Gender *</label>
                  <select
                    className="input"
                    value={form.gender}
                    onChange={(e) => update("gender", e.target.value as Gender)}
                    required
                  >
                    <option value="">Select…</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to say</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-medium">City of Residence *</label>
                  <input
                    className="input"
                    value={form.city_of_residence}
                    onChange={(e) => update("city_of_residence", e.target.value)}
                    required
                    autoComplete="address-level2"
                  />
                </div>
                <div>
                  <label className="block font-medium">Nationality *</label>
                  <input
                    className="input"
                    value={form.nationality}
                    onChange={(e) => update("nationality", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium">Phone Number *</label>
                  <input
                    className="input"
                    value={form.phone_number}
                    onChange={(e) => update("phone_number", e.target.value)}
                    required
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium">ID Number *</label>
                  <input
                    className="input"
                    value={form.id_number}
                    onChange={(e) => update("id_number", e.target.value)}
                    required
                  />
                </div>
              </div>
            </section>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <section className="grid gap-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-medium">Arabic level *</label>
                  <select
                    className="input"
                    value={form.arabic_level}
                    onChange={(e) => update("arabic_level", e.target.value)}
                    required
                  >
                    <option value="">Select…</option>
                    <option>A1</option>
                    <option>A2</option>
                    <option>B1</option>
                    <option>B2</option>
                    <option>C1</option>
                    <option>C2</option>
                    <option>Native</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium">English level *</label>
                  <select
                    className="input"
                    value={form.english_level}
                    onChange={(e) => update("english_level", e.target.value)}
                    required
                  >
                    <option value="">Select…</option>
                    <option>A1</option>
                    <option>A2</option>
                    <option>B1</option>
                    <option>B2</option>
                    <option>C1</option>
                    <option>C2</option>
                    <option>Native</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium">Other Language</label>
                  <input
                    className="input"
                    value={form.other_language}
                    onChange={(e) => update("other_language", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2">Roles *</label>
                <RolesChecklist
                  selected={form.roles}
                  onChange={(roles) => update("roles", roles)}
                  options={ALL_ROLES}
                />
              </div>
            </section>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <section className="grid gap-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block font-medium">Education level *</label>
                  <select
                    className="input"
                    value={form.education_level}
                    onChange={(e) => update("education_level", e.target.value as Edu)}
                    required
                  >
                    <option value="">Select…</option>
                    <option>High school</option>
                    <option>Diploma</option>
                    <option>Bachelor's</option>
                    <option>Master</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FileInput
                  label="Personal Photo *"
                  accept="image/png,image/jpeg"
                  maxSizeMB={5}
                  value={form.personal_photo}
                  onChange={(f) => update("personal_photo", f)}
                  preview
                />
                <FileInput
                  label="Your CV or Resume *"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  maxSizeMB={10}
                  value={form.cv_resume}
                  onChange={(f) => update("cv_resume", f)}
                />
              </div>

              <div>
                <label className="block font-medium">Tell us about yourself</label>
                <textarea
                  className="input min-h-[120px]"
                  value={form.about}
                  onChange={(e) => update("about", e.target.value)}
                />
              </div>
            </section>
          )}

          {/* Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={back}
              disabled={step === 1 || submitting}
              className="px-4 py-2 rounded-xl border border-[var(--color-border)] disabled:opacity-50"
            >
              Back
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={next}
                className="px-5 py-2 rounded-xl bg-[var(--color-primary)] text-white hover:opacity-90"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-2 rounded-xl bg-[var(--color-primary)] text-white hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? "Submitting…" : "Submit Application"}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
