"use client";

import React, { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import NavBarExpander from "./NavBarExpander";
import {
  FaHouseChimney,
  FaAddressCard,
  FaGraduationCap,
  FaSuitcase,
  FaCode,
  FaEnvelope,
} from "react-icons/fa6";
import NavBarLink from "./NavBarLink";

const navBarLinks = [
  {
    keyProp: "home",
    label: "Home",
    link: "/",
    icon: <FaHouseChimney size={24} />,
  },
  {
    keyProp: "about",
    label: "About",
    link: "/about",
    icon: <FaAddressCard size={24} />,
  },
  {
    keyProp: "education",
    label: "Education",
    link: "/education",
    icon: <FaGraduationCap size={24} />,
  },
  {
    keyProp: "experience",
    label: "Experience",
    link: "/experience",
    icon: <FaSuitcase size={24} />,
  },
  {
    keyProp: "projects",
    label: "Projects",
    link: "/projects",
    icon: <FaCode size={24} />,
  },
  {
    keyProp: "contact",
    label: "Contact",
    link: "/contact",
    icon: <FaEnvelope size={24} />,
  },
];

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`NavBar flex h-screen bg-primary md:static md:w-72 ${expanded && "absolute w-full"}`}>
      <div
        className={`NavBar flex flex-col justify-center gap-2 p-2 w-full`}>
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
      </div>
      <NavBarExpander expanded={expanded} setExpanded={setExpanded} />
    </div>
  );
};

export default NavBar;
