import { cn } from "@/lib/utils";
import React from "react";

const SideBar = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, "h-full w-full bg-blue-400")}>
      <div className="p-2">Hi</div>
    </div>
  );
};

export default SideBar;
