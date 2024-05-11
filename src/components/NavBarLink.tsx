"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { Link, Button } from "@nextui-org/react";

const NavBarLink = ({
  label,
  link,
  icon,
  expanded,
}: {
  label: string;
  link: string;
  icon: ReactNode;
  expanded: boolean;
}) => {
  const pathname = usePathname();

  return (
    <a
      href={link}
      aria-label={label}
      color="default"
      className={`flex justify-start gap-2 rounded-lg p-3 hover:bg-light dark:hover:bg-dark md:w-full ${expanded ? "w-full" : "w-12"} ${pathname === link && "bg-light dark:bg-dark"}`}>
      {icon}
      {
        <div
          className={`my-auto text-xl font-semibold md:block ${expanded ? "block" : "hidden"}`}>
          {label}
        </div>
      }
    </a>
  );
};

export default NavBarLink;
