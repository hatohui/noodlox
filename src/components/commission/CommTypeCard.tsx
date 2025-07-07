import { cn } from "@/lib/utils";
import React from "react";

export interface CommTypeCardProps {
  className?: string;
  label: string;
}
const CommTypeCard = ({ label, className }: CommTypeCardProps) => {
  return <div className={cn("comm-type-card", className)}>{label}</div>;
};

export default CommTypeCard;
