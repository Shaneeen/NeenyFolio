import clsx from "clsx";
import Link from "next/link";

export function PageHeader({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <header className="mb-10">
      <div className="page-eyebrow">{eyebrow}</div>
      <h1 className="page-title">{title}</h1>
      {subtitle ? <p className="page-sub">{subtitle}</p> : null}
    </header>
  );
}

export function GlassCard({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={clsx("glass-panel", className)}>{children}</div>;
}

export function SectionHead({ title }: { title: string }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <div className="section-line" />
    </div>
  );
}

export function PrimaryLink({
  href,
  children,
  tone = "primary"
}: {
  href: string;
  children: React.ReactNode;
  tone?: "primary" | "ghost";
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition",
        tone === "primary"
          ? "bg-rust text-white hover:bg-ink"
          : "border border-ink/10 bg-white/70 text-ink hover:bg-white"
      )}
    >
      {children}
    </Link>
  );
}

export function Tag({
  children,
  tone = "default"
}: {
  children: React.ReactNode;
  tone?: "default" | "sage" | "rose" | "oak";
}) {
  const tones: Record<string, string> = {
    default: "border-ink/10 bg-ink/5 text-muted",
    sage: "border-sage/20 bg-sage/10 text-sage",
    rose: "border-dusty/30 bg-dusty/20 text-rust",
    oak: "border-oak/25 bg-oak/10 text-oak"
  };

  return <span className={clsx("pill", tones[tone])}>{children}</span>;
}
