import Link from "next/link";
import { FC } from "react";

interface ButtonProps {
  label: string;
  children: React.ReactNode;
  href: string;
  active?: boolean;
}

const Button: FC<ButtonProps> = ({ label, href, active, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`flex items-center justify-center gap-2 border border-white px-2 py-1 duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-md sm:px-4 sm:py-2 ${
        active && "text-dark bg-white"
      }`}
    >
      {children}
      {label}
    </Link>
  );
};

export default Button;
