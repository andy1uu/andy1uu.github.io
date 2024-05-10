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
    <Button
      as={Link}
      isIconOnly={true}
      disableRipple={true}
      disableAnimation={true}
      href={link}
      aria-label={label}
      color="default"
      className={`flex justify-start rounded-lg p-3 hover:bg-light dark:hover:bg-dark md:w-full ${expanded ? "w-full" : "w-12"} ${pathname === link && "bg-light dark:bg-dark"}`}>
      {icon}
      {
        <div
          className={`text-2xl font-semibold md:block ${expanded ? "block" : "hidden"}`}>
          {label}
        </div>
      }
    </Button>
  );
};

export default NavBarLink;
