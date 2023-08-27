import * as React from "react";

const Header = () => (
  <div className="Header text-text flex justify-between p-2">
    <img
      className="h-12 w-12"
      src="/images/Andy_Luu_Logo_192x192.png"
      alt="Andy Luu Logo"
    />
    <a
      className="Header-ResumeButton flex rounded-full bg-primary px-8 py-3 text-lightText"
      href="https://drive.google.com/file/d/14jQkMz4zJ9IJBpXst4hy9C43MgZiOn7r/view?usp=sharing"
      target="_blank"
      rel="noreferrer">
      Resume
    </a>
  </div>
);

export default Header;
