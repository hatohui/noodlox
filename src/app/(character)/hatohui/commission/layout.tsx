import React from "react";

const layout = ({
  children,
  details,
  queue,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
  queue: React.ReactNode;
}) => {
  return (
    <main>
      <section>{children}</section>
      <section>{details}</section>
      <section>{queue}</section>
    </main>
  );
};

export default layout;
