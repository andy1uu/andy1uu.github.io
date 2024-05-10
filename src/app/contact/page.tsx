import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "This is a base site for Andy to create his websites.",
};
const Contact = () => {
  return (
    <section className="About flex min-h-screen w-full items-center justify-center bg-light dark:bg-dark">
      <h1 className="Homepage-text text-center text-8xl font-bold text-dark dark:text-light">
        Contact Page
      </h1>
    </section>
  );
};

export default Contact;
