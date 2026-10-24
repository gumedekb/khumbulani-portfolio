import type { CSSProperties, ReactNode } from "react";

/* Shared layout primitives and class strings used across pages. */

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60";
export const buttonPrimary = `${buttonBase} bg-linear-to-r from-brand to-brand-2 text-white shadow-lg shadow-brand/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/35`;
export const buttonSecondary = `${buttonBase} border border-line bg-surface/70 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent`;

export const cardClass =
  "rounded-3xl border border-line bg-surface/80 shadow-sm shadow-black/[0.03] backdrop-blur-sm";
export const cardHover =
  "transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10";

export const chipClass =
  "rounded-full border border-accent/20 bg-accent/[0.07] px-3 py-1 text-[13px] font-medium text-accent";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Small uppercase label with a gradient dot, used above headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
      <span className="size-1.5 rounded-full bg-linear-to-r from-accent to-accent-2" />
      {children}
    </p>
  );
}

/** Large page title block used at the top of every top-level page. */
export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <header className="pb-12 pt-14 sm:pb-16 sm:pt-20">
      <div className="animate-in">
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h1
        className="animate-in mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
        style={{ animationDelay: "80ms" }}
      >
        {title}
      </h1>
      {children && (
        <div
          className="animate-in mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9"
          style={{ animationDelay: "160ms" }}
        >
          {children}
        </div>
      )}
    </header>
  );
}

/** Section heading: eyebrow, title, optional description and trailing action. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="reveal mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 max-w-2xl text-lg leading-8 text-muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}

/** Link-style "view all" action used next to section headings. */
export const viewAllClass =
  "group inline-flex shrink-0 items-center gap-1.5 text-[15px] font-medium text-accent transition-colors hover:text-foreground";

export function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}
