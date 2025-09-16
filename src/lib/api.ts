import type { ApplicationFormData, ApiSuccess, ApiError } from "../types/application";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

export async function submitApplication(form: ApplicationFormData): Promise<ApiSuccess | ApiError> {
  const fd = new FormData();
  fd.append("first_name", form.first_name.trim());
  fd.append("second_name", (form.second_name || "").trim());
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
  fd.append("other_language", (form.other_language || "").trim());
  (form.roles || []).forEach(r => fd.append("roles", r));
  fd.append("education_level", String(form.education_level));
  fd.append("about", (form.about || "").trim());
  if (form.personal_photo) fd.append("personal_photo", form.personal_photo);
  if (form.cv_resume) fd.append("cv_resume", form.cv_resume);

  try {
    const res = await fetch(`${API_BASE}/apply`, { method: "POST", body: fd });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, status: res.status, message: text || `HTTP ${res.status}` };
    }
    const data = (await res.json()) as ApiSuccess;
    return data;
  } catch (err: any) {
    return { ok: false, status: 0, message: err?.message || "Network error" };
  }
}
