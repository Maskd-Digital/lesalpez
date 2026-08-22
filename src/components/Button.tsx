import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-ink focus-visible:outline-ink",
  outline:
    "border-[1.5px] border-white bg-transparent text-white hover:bg-white/15 focus-visible:outline-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] px-8 py-3 text-[0.9375rem] font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
