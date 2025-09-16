import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  label: string;
  accept?: string;
  maxSizeMB?: number;
  value: File | null;
  onChange: (file: File | null) => void;
  preview?: boolean; // show image preview if image
};

export default function FileInput({ label, accept, maxSizeMB = 10, value, onChange, preview }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const isImage = useMemo(() => Boolean(value && value.type.startsWith("image/")), [value]);

  useEffect(() => {
    setErr(null);
  }, [value]);

  function pick() {
    inputRef.current?.click();
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] || null;
    if (!f) {
      onChange(null);
      return;
    }
    const okSize = f.size <= maxSizeMB * 1024 * 1024;
    if (!okSize) {
      setErr(`Max size is ${maxSizeMB}MB`);
      onChange(null);
      return;
    }
    if (accept) {
      const list = accept.split(",").map(s => s.trim()).filter(Boolean);
      const extOk = list.some(a => f.type === a || (a.startsWith(".") && f.name.toLowerCase().endsWith(a.toLowerCase())));
      if (!extOk) {
        setErr("Invalid file type");
        onChange(null);
        return;
      }
    }
    onChange(f);
  }

  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>

      <div className="rounded-xl border border-[var(--color-border)] p-3 bg-white/60 dark:bg-white/5">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm text-[var(--color-text-muted)] truncate">
            {value ? value.name : "No file chosen"}
          </div>
          <div className="flex gap-2">
            {value && (
              <button type="button" className="px-3 py-1 rounded-lg border" onClick={() => onChange(null)}>
                Remove
              </button>
            )}
            <button type="button" className="px-3 py-1 rounded-lg bg-[var(--color-primary)] text-white" onClick={pick}>
              Choose File
            </button>
          </div>
        </div>

        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept={accept}
          onChange={onFileChange}
        />

        {preview && isImage && value && (
          <div className="mt-3">
            <img
              src={URL.createObjectURL(value)}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg border border-[var(--color-border)]"
              onLoad={(e) => URL.revokeObjectURL((e.target as HTMLImageElement).src)}
            />
          </div>
        )}

        {err && <p className="text-red-700 text-sm mt-2">{err}</p>}
      </div>
    </div>
  );
}
