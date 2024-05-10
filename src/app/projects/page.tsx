import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "This is a base site for Andy to create his websites.",
};
const Projects = () => {
  return (
    <section className="About flex min-h-screen w-full items-center justify-center bg-light dark:bg-dark">
      <h1 className="Homepage-text text-8xl text-center font-bold text-dark dark:text-light">
        Projects Page
      </h1>
    </section>
  );
};

export default Projects;
