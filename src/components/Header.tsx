import React from "react";

const Header = () => {
  return (
    <header className="Header flex h-16 w-full items-center justify-between  bg-light px-4 py-2 dark:bg-dark">
      <h1 className="text-3xl font-bold text-primary">Andy Luu</h1>
      <a
        className="Header-ResumeButton flex rounded-full bg-primary px-6 py-2 text-lg font-bold text-dark dark:text-light"
        href="https://drive.google.com/file/d/14jQkMz4zJ9IJBpXst4hy9C43MgZiOn7r/view?usp=sharing"
        target="_blank"
        rel="noreferrer">
        Resume
      </a>
    </header>
  );
};

export default Header;
