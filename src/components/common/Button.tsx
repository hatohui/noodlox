import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
}

const Button = ({ className, onClick }: ButtonProps) => {
  return (
    <button className={cn(className, "button")} onClick={onClick}>
      Button
    </button>
  );
};

export default Button;
