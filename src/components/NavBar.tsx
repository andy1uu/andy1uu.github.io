"use client";

import React from "react";
import {
  MdHome,
  MdOutlineSchool,
  MdWorkHistory,
  MdCode,
  MdEmail,
  MdCardGiftcard,
  MdCatchingPokemon,
} from "react-icons/md";
import NavBarLink from "./NavBarLink";

const iconSize = 28;

const navBarLinks = [
  {
    keyProp: "home",
    label: "Home",
    link: "/",
    icon: <MdHome size={iconSize} className="my-auto" />,
  },
  {
    keyProp: "education",
    label: "Education",
    link: "/education",
    icon: <MdOutlineSchool size={iconSize} className="my-auto" />,
  },
  {
    keyProp: "experience",
    label: "Experience",
    link: "/experience",
    icon: <MdWorkHistory size={iconSize} className="my-auto" />,
  },
  {
    keyProp: "projects",
    label: "Projects",
    link: "/projects",
    icon: <MdCode size={iconSize} className="my-auto" />,
  },
  {
    keyProp: "shinies",
    label: "Shiny Pokemon",
    link: "/shinies",
    icon: <MdCatchingPokemon size={iconSize} className="my-auto" />,
  },
  {
    keyProp: "referrals",
    label: "Referral Codes",
    link: "/referrals",
    icon: <MdCardGiftcard size={iconSize} className="my-auto" />,
  },
  {
    keyProp: "contact",
    label: "Contact Me!",
    link: "/contact",
    icon: <MdEmail size={iconSize} className="my-auto" />,
  },
];

const NavBar = () => (
  <div className="NavBar fixed flex bg-primary top-1/2 -translate-y-1/2 rounded-full left-1">
    <div className="flex flex-col gap-2 p-2 my-auto">
      {navBarLinks.map((navBarLink) => (
        <NavBarLink
          key={navBarLink.keyProp}
          label={navBarLink.label}
          link={navBarLink.link}
          icon={navBarLink.icon}
        />
      ))}
    </div>
  </div>
);

export default NavBar;
