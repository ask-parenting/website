import { AnchorHTMLAttributes } from "react";

interface CtaButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

export default function CtaButton({
  href,
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...rest
}: CtaButtonProps) {
  const classes = [
    "dji-btn",
    variant === "primary" ? "dji-btn-primary" : "dji-btn-secondary",
    fullWidth ? "dji-btn-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classes} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  );
}
