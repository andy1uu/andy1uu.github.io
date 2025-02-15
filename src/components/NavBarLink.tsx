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
      className={`flex justify-start gap-2 rounded-lg p-3 hover:bg-light dark:hover:bg-dark hover:text-secondary dark:hover:text-tertiary ${pathname === link && "bg-light dark:bg-dark text-secondary dark:text-tertiary"}`}>
      {icon}
    </a>
  );
};

export default NavBarLink;
