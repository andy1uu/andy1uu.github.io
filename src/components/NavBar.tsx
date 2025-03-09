"use client";

import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import {
  FaHouseChimney,
  FaGraduationCap,
  FaSuitcase
} from "react-icons/fa6";
import NavBarLink from "./NavBarLink";

const iconSize = 32;

const navBarLinks = [
  {
    keyProp: "home",
    label: "Home",
    link: "/",
    icon: <FaHouseChimney size={iconSize} className="my-auto" />,
  },
  {
    keyProp: "education",
    label: "Education",
    link: "/education",
    icon: <FaGraduationCap size={iconSize} className="my-auto" />,
  },
  {
    keyProp: "experience",
    label: "Experience",
    link: "/experience",
    icon: <FaSuitcase size={iconSize} className="my-auto" />,
  },
  // {
  //   keyProp: "projects",
  //   label: "Projects",
  //   link: "/projects",
  //   icon: <FaCode size={iconSize} className="my-auto" />,
  // },
  // {
  //   keyProp: "contact",
  //   label: "Contact",
  //   link: "/contact",
  //   icon: <FaEnvelope size={24} className="my-auto" />,
  // },
];

const NavBar = () => {
  return (
    <div
      className={`NavBar fixed flex min-h-screen flex-col gap-2 bg-primary p-2`}>
      <ThemeSwitcher />

      {navBarLinks.map((navBarLink) => {
        return (
            <NavBarLink
              key={navBarLink.keyProp}
              label={navBarLink.label}
              link={navBarLink.link}
              icon={navBarLink.icon}
            />
        );
      })}
    </div>
  );
};

export default NavBar;
