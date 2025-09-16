import type { ApplicationFormData, EducationLevel } from "../types/application";

export const IMAGE_MIME = new Set(["image/jpeg", "image/png"]);
export const DOC_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export const EDUCATION_LEVELS: EducationLevel[] = [
  "High school",
  "Diploma",
  "Bachelor's",
  "Master",
  "Other",
];

export function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function validateStep1(f: ApplicationFormData): string[] {
  const missing: string[] = [];
  if (!f.first_name.trim()) missing.push("first_name");
  if (!f.last_name.trim()) missing.push("last_name");
  if (!isEmail(f.email)) missing.push("email");
  if (String(f.age).trim() === "") missing.push("age");
  if (!f.gender) missing.push("gender");
  if (!f.city_of_residence.trim()) missing.push("city_of_residence");
  if (!f.nationality.trim()) missing.push("nationality");
  if (!f.phone_number.trim()) missing.push("phone_number");
  if (!f.id_number.trim()) missing.push("id_number");
  return missing;
}

export function validateStep2(f: ApplicationFormData): string[] {
  const missing: string[] = [];
  if (!f.arabic_level.trim()) missing.push("arabic_level");
  if (!f.english_level.trim()) missing.push("english_level");
  if (!f.roles || f.roles.length === 0) missing.push("roles");
  return missing;
}

export function validateStep3(f: ApplicationFormData): string[] {
  const missing: string[] = [];
  if (!f.education_level) missing.push("education_level");
  if (!f.personal_photo) missing.push("personal_photo");
  if (!f.cv_resume) missing.push("cv_resume");
  return missing;
}

export function validateImageFile(file: File, maxMB = 5): string | null {
  if (!IMAGE_MIME.has(file.type)) return "Personal photo must be JPG or PNG.";
  if (file.size > maxMB * 1024 * 1024) return `Personal photo must be ≤ ${maxMB}MB.`;
  return null;
}

export function validateDocFile(file: File, maxMB = 10): string | null {
  if (!DOC_MIME.has(file.type)) return "CV/Resume must be PDF/DOC/DOCX.";
  if (file.size > maxMB * 1024 * 1024) return `CV/Resume must be ≤ ${maxMB}MB.`;
  return null;
}
