import SideBar from "@/components/SideBar";
import React from "react";

const layout = ({
  children,
  dashboard,
  queue,
}: {
  children: React.ReactNode;
  dashboard: React.ReactNode;
  queue: React.ReactNode;
}) => {
  return (
    <main className="grid grid-cols-1 gap-3 lg:grid-rows-[2fr_1fr] lg:grid-cols-[3rem_1fr_2fr] min-h-screen">
      <SideBar className="row-span-2" />
      <section className="flex items-center justify-center row-span-2">
        {queue}
      </section>
      <section className="">{children}</section>
      <section>{dashboard}</section>
    </main>
  );
};

export default layout;
