import type { ReactNode } from "react";
import { CheckIcon, ShieldIcon, SparkIcon } from "./icons";

/* Components available inside writeup MDX files (see src/mdx-components.tsx). */

export type Severity = "critical" | "high" | "medium" | "low";

const SEVERITY_STYLES: Record<Severity, { badge: string; border: string }> = {
  critical: { badge: "bg-red-600 text-white", border: "border-l-red-600" },
  high: { badge: "bg-orange-500 text-white", border: "border-l-orange-500" },
  medium: { badge: "bg-amber-400 text-amber-950", border: "border-l-amber-400" },
  low: { badge: "bg-sky-500 text-white", border: "border-l-sky-500" },
};

export function SeverityBadge({ level }: { level: Severity }) {
  return (
    <span
      className={`not-prose inline-flex items-center rounded-full px-2.5 py-0.5 align-middle font-mono text-[11px] font-semibold uppercase tracking-wider ${SEVERITY_STYLES[level].badge}`}
    >
      {level}
    </span>
  );
}

/** A single vulnerability: title, severity and what fixed it. */
export function Finding({
  title,
  severity,
  fix,
  children,
}: {
  title: string;
  severity: Severity;
  fix?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      className={`not-prose my-8 overflow-hidden rounded-2xl border border-l-4 border-line bg-surface ${SEVERITY_STYLES[severity].border}`}
    >
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <SeverityBadge level={severity} />
          <h4 className="font-display text-lg font-bold">{title}</h4>
        </div>
        <div className="mt-3 space-y-3 text-[16px] leading-7 text-muted [&_code]:rounded [&_code]:bg-subtle [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.875em] [&_code]:text-foreground">
          {children}
        </div>
      </div>
      {fix && (
        <div className="flex gap-3 border-t border-line bg-green-500/[0.06] px-5 py-4 text-[15px] leading-7 sm:px-6 [&_code]:rounded [&_code]:bg-subtle [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.875em]">
          <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-green-600 text-white">
            <CheckIcon size={12} strokeWidth={3} />
          </span>
          <div>
            <span className="font-semibold text-green-700 dark:text-green-400">Fix: </span>
            {fix}
          </div>
        </div>
      )}
    </div>
  );
}

const CALLOUT_STYLES = {
  info: { icon: SparkIcon, box: "border-accent/30 bg-accent/[0.06]", iconBox: "bg-accent/15 text-accent" },
  warning: { icon: ShieldIcon, box: "border-amber-500/40 bg-amber-500/[0.08]", iconBox: "bg-amber-500/20 text-amber-600 dark:text-amber-400" },
  success: { icon: CheckIcon, box: "border-green-500/30 bg-green-500/[0.07]", iconBox: "bg-green-500/15 text-green-600 dark:text-green-400" },
} as const;

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: keyof typeof CALLOUT_STYLES;
  title?: string;
  children: ReactNode;
}) {
  const style = CALLOUT_STYLES[type];
  const Icon = style.icon;
  return (
    <div className={`not-prose my-8 flex gap-4 rounded-2xl border p-5 ${style.box}`}>
      <span className={`grid size-9 shrink-0 place-items-center rounded-xl ${style.iconBox}`}>
        <Icon size={18} />
      </span>
      <div className="text-[16px] leading-7 [&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_code]:rounded [&_code]:bg-subtle [&_code]:px-1.5 [&_code]:font-mono [&_code]:text-[0.875em]">
        {title && <p className="font-display font-bold">{title}</p>}
        <div className="text-muted [&>p+p]:mt-3">{children}</div>
      </div>
    </div>
  );
}

/** Row of headline numbers, e.g. <StatGrid><Stat value="14" label="Vulnerabilities" /></StatGrid> */
export function StatGrid({ children }: { children: ReactNode }) {
  return <div className="not-prose my-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{children}</div>;
}

export function Stat({ value, label, tone }: { value: string; label: string; tone?: Severity }) {
  const color = tone
    ? { critical: "text-red-600", high: "text-orange-500", medium: "text-amber-500", low: "text-sky-500" }[tone]
    : "text-gradient";
  return (
    <div className="rounded-2xl border border-line bg-surface p-4">
      <p className={`font-display text-3xl font-bold ${color}`}>{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
