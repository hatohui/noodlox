import React from "react";

const layout = ({
  children,
  dashboard,
  status,
}: {
  children: React.ReactNode;
  dashboard: React.ReactNode;
  status: React.ReactNode;
}) => {
  return (
    <div className="min-w-xl max-w-3xl flex flex-col gap-4 justify-center items-center h-full">
      <section className="comm-section">{dashboard}</section>
      <section className="min-w-xl">{status}</section>
      <section className="comm-section">{children}</section>
    </div>
  );
};

export default layout;
