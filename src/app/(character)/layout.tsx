import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex py-5 flex-col items-center justify-between bg-background min-h-screen">
      <nav className="min-w-md h-12 border border-primary max-w-lg">
        Nav Bar
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default layout;
