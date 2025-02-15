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

const iconSize = 24;

const navBarLinks = [
  {
    keyProp: "home",
    label: "Home",
    link: "/",
    icon: <FaHouseChimney size={iconSize} className="my-auto" />,
  },
  {
    keyProp: "about",
    label: "About",
    link: "/about",
    icon: <FaAddressCard size={iconSize} className="my-auto" />,
  },
  // {
  //   keyProp: "education",
  //   label: "Education",
  //   link: "/education",
  //   icon: <FaGraduationCap size={iconSize} className="my-auto" />,
  // },
  // {
  //   keyProp: "experience",
  //   label: "Experience",
  //   link: "/experience",
  //   icon: <FaSuitcase size={iconSize} className="my-auto" />,
  // },
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
