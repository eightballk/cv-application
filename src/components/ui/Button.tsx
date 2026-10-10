import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "md" | "icon" | "icon-sm";
}

const variants = {
  primary: "bg-primary text-background hover:bg-primary-hover",
  secondary: "border border-line/10 bg-line/5 text-fg hover:bg-line/10",
  danger: "text-fg-muted hover:bg-danger/10 hover:text-danger",
ghost: "text-fg-muted hover:bg-line/10 hover:text-fg",
};

const sizes = {
  md: "h-9 px-4",
  icon: "size-9",
  "icon-sm": "size-8",
};

export default function Button({
  variant = "secondary",
  size = "md",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none print:hidden ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
