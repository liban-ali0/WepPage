export type Gender = "Male" | "Female" | "Prefer not to say";
export type EducationLevel = "High school" | "Diploma" | "Bachelor's" | "Master" | "Other";

export type ApplicationFormData = {
  first_name: string;
  second_name?: string;
  last_name: string;
  email: string;
  age: number | string;
  gender: Gender | "";
  city_of_residence: string;
  nationality: string;
  phone_number: string;
  id_number: string;
  arabic_level: string;
  english_level: string;
  other_language?: string;
  roles: string[];                 // repeated field in FormData
  education_level: EducationLevel | "";
  about?: string;
  personal_photo: File | null;     // multipart
  cv_resume: File | null;          // multipart
};

export type ApiSuccess = {
  ok: true;
  message: string;
  refId?: string;
  files?: { photo?: string; cv?: string };
};

export type ApiError = {
  ok: false;
  status: number;
  message: string;
};
