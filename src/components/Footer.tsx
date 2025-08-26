import React from "react";

const Footer = () => (
  <footer className="Footer mt-auto flex h-16 w-full items-center justify-center text-lg font-medium text-dark dark:text-light">
    <h1>{new Date().getFullYear()} &copy; Andy Luu. All Rights Reserved.</h1>
  </footer>
);

export default Footer;
