import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBarLinks = [{ key: "about", label: "About", link: "/about" }];

const NavBar = () => {
  return (
    <div className="NavBar flex w-16 flex-col gap-2 bg-primary p-2">
      <ThemeSwitcher />
    </div>
  );
};

export default NavBar;
