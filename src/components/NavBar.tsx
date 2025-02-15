"use client";

import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import NavBarExpander from "./NavBarExpander";
import {
  FaHouseChimney,
} from "react-icons/fa6";
import NavBarLink from "./NavBarLink";

const iconSize = 24;

const navBarLinks = [
  {
    keyProp: "home",
    label: "Home",
    link: "/",
    icon: <FaHouseChimney size={iconSize} className="my-auto" />,
  },
];

const NavBar = ({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: Function;
}) => {
  return (
    <div
      className={`NavBar flex min-h-screen flex-col gap-2 bg-primary p-2 md:w-72 ${expanded ? "absolute w-2/3" : "w-16"}`}>
      <ThemeSwitcher expanded={expanded} />

      {navBarLinks.map((navBarLink) => {
        return (
            <NavBarLink
              key={navBarLink.keyProp}
              label={navBarLink.label}
              link={navBarLink.link}
              icon={navBarLink.icon}
              expanded={expanded}
            />
        );
      })}

      <NavBarExpander expanded={expanded} setExpanded={setExpanded} />
    </div>
  );
};

export default NavBar;
