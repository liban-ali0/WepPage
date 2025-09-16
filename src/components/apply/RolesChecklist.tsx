export const ALL_ROLES = [
    "Usher",
    "Security",
    "Protocol",
    "Host/Hostess",
    "Guest Liaison",
    "Ticketing",
    "Traffic Marshal",
    "Supervisor",
    "Safety",
    "Administrator",
    "Accreditation",
    "Translator",
    "Promoter",
    "Merchandiser",
    "Model",
    "Actor",
    "Event Operations",
    "Event Coordinator",
  ] as const;
  
  type Props = {
    options?: readonly string[];
    selected: string[];
    onChange: (roles: string[]) => void;
  };
  
  export default function RolesChecklist({ options = ALL_ROLES, selected, onChange }: Props) {
    function toggle(role: string) {
      if (selected.includes(role)) onChange(selected.filter(r => r !== role));
      else onChange([...selected, role]);
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((role) => {
          const checked = selected.includes(role);
          const id = `role_${role.replace(/\s+/g, "_")}`;
          return (
            <label
              key={role}
              htmlFor={id}
              className={`flex items-center gap-2 rounded-xl border p-2 cursor-pointer transition
                ${checked ? "border-[var(--color-primary)] bg-[color-mix(in_srgb,var(--color-primary-light)_18%,transparent)]"
                          : "border-[var(--color-border)]"}`
              }
            >
              <input
                id={id}
                type="checkbox"
                className="sr-only"
                checked={checked}
                onChange={() => toggle(role)}
              />
              <span className={`h-5 w-5 rounded-md border flex items-center justify-center
                ${checked ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]" : "border-[var(--color-border)]"}`}>
                {checked ? "✓" : ""}
              </span>
              <span>{role}</span>
            </label>
          );
        })}
      </div>
    );
  }
  