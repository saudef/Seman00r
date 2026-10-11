import type { ComponentProps, ReactNode } from "react";
import { Link } from "wouter";
import { ArrowUpLeft, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/** Directional arrow that flips with the writing direction. */
export function Arrow({
  size = 18,
  diagonal = true,
}: {
  size?: number;
  diagonal?: boolean;
}) {
  const { isRTL } = useLanguage();
  const Icon = diagonal
    ? isRTL
      ? ArrowUpLeft
      : ArrowUpRight
    : isRTL
      ? ArrowLeft
      : ArrowRight;
  return <Icon size={size} aria-hidden="true" />;
}

type ButtonProps = {
  variant?: "primary" | "ghost" | "dark";
  size?: "md" | "sm";
  block?: boolean;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  block,
  arrow = true,
  children,
  className = "",
  internal,
  ...rest
}: ButtonProps & { href: string; internal?: boolean } & Omit<
    ComponentProps<"a">,
    "href"
  >) {
  const cls = `btn btn--${variant} ${size === "sm" ? "btn--sm" : ""} ${block ? "btn--block" : ""} ${className}`;
  if (internal)
    return (
      <Link href={href} className={cls}>
        {children}
        {arrow && <Arrow size={size === "sm" ? 16 : 18} />}
      </Link>
    );
  return (
    <a href={href} className={cls} {...rest}>
      {children}
      {arrow && <Arrow size={size === "sm" ? 16 : 18} />}
    </a>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  block,
  arrow = false,
  children,
  className = "",
  ...rest
}: ButtonProps & ComponentProps<"button">) {
  return (
    <button
      className={`btn btn--${variant} ${size === "sm" ? "btn--sm" : ""} ${block ? "btn--block" : ""} ${className}`}
      {...rest}
    >
      {children}
      {arrow && <Arrow size={size === "sm" ? 16 : 18} />}
    </button>
  );
}

export function TextLink({
  href,
  children,
  internal,
  muted,
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  internal?: boolean;
  muted?: boolean;
  className?: string;
} & Omit<ComponentProps<"a">, "href">) {
  const cls = `link ${muted ? "link--muted" : ""} ${className}`;
  if (internal)
    return (
      <Link href={href} className={cls}>
        {children}
        <Arrow size={16} />
      </Link>
    );
  return (
    <a href={href} className={cls} {...rest}>
      {children}
      <Arrow size={16} />
    </a>
  );
}

export function Kicker({
  children,
  dot,
}: {
  children: ReactNode;
  dot?: boolean;
}) {
  return (
    <div className="kicker-row">
      <p className="label">
        {dot && <span className="label__dot" aria-hidden="true" />}
        {children}
      </p>
    </div>
  );
}

export function Mono({ children }: { children: ReactNode }) {
  return <span className="mono">{children}</span>;
}

export function SectionHead({
  kicker,
  title,
  lead,
  center,
  id,
}: {
  kicker?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  id?: string;
}) {
  return (
    <div className={`section-head ${center ? "section-head--center" : ""}`}>
      <div>
        {kicker && <Kicker>{kicker}</Kicker>}
        <h2 className="display-2" id={id}>
          {title}
        </h2>
      </div>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

/** Renders "line one\nline two" with a <br>, keeping copy editable as plain text. */
export function Lines({ text }: { text: string }) {
  const parts = text.split("\n");
  return (
    <>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}
