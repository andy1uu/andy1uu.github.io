"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const NavBarLink = ({
  label,
  link,
  icon,
}: {
  label: string;
  link: string;
  icon: ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <a
      href={link}
      aria-label={label}
      color="default"
      className={`flex relative group justify-start gap-2 shadow-md hover:rounded-md p-3 bg-light dark:bg-dark hover:text-secondary dark:hover:text-tertiary transition-all rounded-full ${pathname === link && "bg-light dark:bg-dark text-secondary dark:text-tertiary"}`}>
      {icon}

      <p className="absolute group-hover:scale-100 w-auto p-2 min-w-max left-16 rounded-md shadow-md bg-light dark:bg-dark origin-left duration-100 transition-all scale-0">{label}</p>
    </a>
  );
};

export default NavBarLink;
