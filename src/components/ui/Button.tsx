import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "light" | "dark";
}

const variants = {
  light: "bg-white text-black hover:bg-slate-100",
  dark: "bg-black text-white hover:bg-gray-800",
};

export default function Button({ variant = "dark", type = "button", className = "", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded py-2.5 text-sm font-bold transition duration-300 hover:scale-105 print:hidden ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
