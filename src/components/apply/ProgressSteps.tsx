type Props = {
    current: number;          // 1-based index
    labels: string[];         // step labels
  };
  
  export default function ProgressSteps({ current, labels }: Props) {
    const total = labels.length;
    const pct = Math.max(0, Math.min(100, ((current - 1) / (total - 1)) * 100 || 0));
  
    return (
      <div className="rounded-2xl border border-[var(--color-border)] p-4 bg-white/60 dark:bg-white/5">
        <div className="flex items-center justify-between mb-2">
          {labels.map((label, i) => {
            const stepNum = i + 1;
            const active = stepNum <= current;
            return (
              <div key={label} className="flex items-center gap-2">
                <span className={`h-6 w-6 rounded-full text-xs grid place-items-center
                  ${active ? "bg-[var(--color-primary)] text-white" : "border border-[var(--color-border)]"}`}>
                  {stepNum}
                </span>
                <span className={`text-sm ${active ? "text-[var(--color-text)]" : "text-[var(--color-text-muted)]"}`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
  
        <div className="h-2 w-full rounded-full bg-[color-mix(in_srgb,var(--color-primary-light)_25%,transparent)] overflow-hidden">
          <div
            className="h-2 bg-[var(--color-primary)] rounded-full transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    );
  }
  